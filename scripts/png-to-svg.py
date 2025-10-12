#!/usr/bin/env python3

"""
PNG to SVG Converter

Converts PNG images to clean SVG with minimal artifacts using potrace.

Usage:
    python scripts/png-to-svg.py <input.png> [output.svg] [options]

Options:
    --threshold <0-255>     Black/white threshold (default: 128)
    --turdsize <number>     Suppress speckles of up to this size (default: 2)
    --alphamax <number>     Corner threshold, higher = smoother (default: 1.0)
    --opttolerance <number> Curve optimization tolerance (default: 0.2)
    --turnpolicy <policy>   Turn policy: black, white, left, right, minority, majority (default: minority)
    --color <hex>           Fill color for single color mode (default: auto-detect)
    --colors <number>       Number of colors to extract for multi-color tracing (default: auto)
    --monochrome            Force single color output (default: auto-detect)

Requirements:
    - System: potrace (install with: sudo apt install potrace)
    - Python: pip install Pillow
"""

import sys
import os
import re
import argparse
import subprocess
import tempfile
from pathlib import Path

try:
    from PIL import Image, ImageFilter, ImageEnhance
except ImportError:
    print("Error: Missing required package: Pillow")
    print("\nPlease install required packages:")
    print("  pip install Pillow")
    sys.exit(1)


# Check if potrace is installed
def check_potrace():
    """Check if potrace is installed on the system."""
    try:
        result = subprocess.run(
            ["potrace", "--version"], capture_output=True, text=True
        )
        if result.returncode == 0:
            return True
    except FileNotFoundError:
        pass

    print("Error: potrace is not installed on your system")
    print("\nPlease install potrace:")
    print("  Ubuntu/Debian: sudo apt install potrace")
    print("  Fedora/RHEL:   sudo dnf install potrace")
    print("  Arch:          sudo pacman -S potrace")
    print("  macOS:         brew install potrace")
    sys.exit(1)


check_potrace()


def get_dominant_colors(img, num_colors=8):
    """
    Extract dominant colors from an image using color quantization.

    Args:
        img: PIL Image object
        num_colors: Maximum number of colors to extract

    Returns:
        List of (R, G, B) tuples for dominant colors
    """
    # Convert to RGB if needed
    if img.mode == "RGBA":
        # Create white background
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    # Reduce to palette to find dominant colors
    img_small = img.resize((150, 150), Image.Resampling.LANCZOS)
    paletted = img_small.convert("P", palette=Image.Palette.ADAPTIVE, colors=num_colors)

    # Get the palette
    palette = paletted.getpalette()
    colors = []

    # Extract unique colors from palette
    color_counts = paletted.getcolors()
    if color_counts:
        # Sort by frequency
        color_counts.sort(reverse=True, key=lambda x: x[0])

        for count, index in color_counts:
            r = palette[index * 3]
            g = palette[index * 3 + 1]
            b = palette[index * 3 + 2]

            # Skip near-white colors (likely background)
            if r > 240 and g > 240 and b > 240:
                continue

            colors.append((r, g, b))

    return colors[:num_colors]


def rgb_to_hex(rgb):
    """Convert RGB tuple to hex color string."""
    return "#{:02x}{:02x}{:02x}".format(rgb[0], rgb[1], rgb[2])


def extract_color_layer(img, target_color, tolerance=40):
    """
    Extract a single color layer from an image.

    Args:
        img: PIL Image object
        target_color: (R, G, B) tuple of color to extract
        tolerance: Color matching tolerance (0-255)

    Returns:
        PIL Image in mode '1' (bitmap) with the color layer
    """
    # Convert to RGB if needed
    if img.mode == "RGBA":
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    # Create bitmap for this color
    width, height = img.size
    bitmap = Image.new("1", (width, height), 1)  # 1 = white (background)

    pixels = img.load()
    bitmap_pixels = bitmap.load()

    # Mark pixels that match the target color
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            # Calculate color distance
            dr = abs(r - target_color[0])
            dg = abs(g - target_color[1])
            db = abs(b - target_color[2])

            # If color is close enough, mark it as black (0) in bitmap
            if dr <= tolerance and dg <= tolerance and db <= tolerance:
                bitmap_pixels[x, y] = 0

    return bitmap


def preprocess_image(input_path, output_path, threshold=128):
    """
    Preprocess the image for better tracing results.

    Args:
        input_path: Path to input PNG file
        output_path: Path to save preprocessed BMP file
        threshold: Threshold value for binarization (0-255)

    Returns:
        Path to preprocessed bitmap file
    """
    print(f"Preprocessing image: {input_path}")

    # Open and convert to RGB if needed
    img = Image.open(input_path)

    # Convert RGBA to RGB with white background if needed
    if img.mode == "RGBA":
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    # Convert to grayscale
    img = img.convert("L")

    # Enhance contrast
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.5)

    # Apply slight blur to reduce noise and artifacts
    img = img.filter(ImageFilter.GaussianBlur(radius=0.5))

    # Convert to binary (1-bit) bitmap
    # Potrace requires a bitmap, not grayscale
    img = img.point(lambda x: 0 if x < threshold else 255, "1")

    # Save as BMP (potrace's preferred input format)
    img.save(output_path, "BMP")

    return output_path


def run_potrace(
    bitmap_path,
    output_path,
    turdsize=2,
    alphamax=1.0,
    opttolerance=0.2,
    turnpolicy="minority",
    color="#000000",
):
    """
    Run potrace command to convert bitmap to SVG.

    Args:
        bitmap_path: Path to input bitmap file
        output_path: Path to output SVG file
        turdsize: Suppress speckles of up to this size
        alphamax: Corner threshold parameter (higher = smoother curves)
        opttolerance: Curve optimization tolerance
        turnpolicy: Policy for resolving ambiguities
        color: Fill color for paths

    Returns:
        Path to output SVG file
    """
    print(f"Tracing bitmap with settings:")
    print(f"  turdsize={turdsize}, alphamax={alphamax}, opttolerance={opttolerance}")
    print(f"  turnpolicy={turnpolicy}, color={color}")

    # Build potrace command
    cmd = [
        "potrace",
        "--svg",  # Output SVG format
        "--backend",
        "svg",
        "--turdsize",
        str(turdsize),  # Suppress speckles
        "--alphamax",
        str(alphamax),  # Corner threshold
        "--opttolerance",
        str(opttolerance),  # Curve optimization
        "--turnpolicy",
        turnpolicy,  # Turn policy
        "--color",
        color,  # Fill color
        "--output",
        output_path,  # Output file
        bitmap_path,  # Input file
    ]

    # Run potrace
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        if result.stderr:
            print(f"Potrace output: {result.stderr}")
        return output_path
    except subprocess.CalledProcessError as e:
        print(f"Error running potrace: {e.stderr}")
        raise


def combine_svg_layers(layers, width, height, output_path):
    """
    Combine multiple SVG path layers into a single SVG file.

    Args:
        layers: List of (color, svg_path) tuples
        width: Image width in pixels
        height: Image height in pixels
        output_path: Path to write combined SVG
    """
    # Potrace uses 10x scaling, so viewBox needs to match
    viewbox_width = width * 10
    viewbox_height = height * 10

    svg_parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {viewbox_width} {viewbox_height}">',
        f'  <g transform="scale(1,-1) translate(0,-{viewbox_height})">',
    ]

    # Extract path elements from each layer
    for color, svg_file in layers:
        with open(svg_file, "r") as f:
            content = f.read()

            # Extract path elements and update their fill color
            paths = re.findall(r'<path[^>]*d="([^"]*)"[^>]*/>', content)

            for path_data in paths:
                svg_parts.append(f'    <path fill="{color}" d="{path_data}"/>')

    svg_parts.append("  </g>")
    svg_parts.append("</svg>")

    # Write combined SVG
    with open(output_path, "w") as f:
        f.write("\n".join(svg_parts))


def convert_png_to_svg(input_path, output_path=None, **kwargs):
    """
    Convert a PNG file to SVG.

    Args:
        input_path: Path to input PNG file
        output_path: Path to output SVG file (optional)
        **kwargs: Additional parameters for processing
    """
    # Validate input file
    if not os.path.exists(input_path):
        print(f"Error: Input file not found: {input_path}")
        sys.exit(1)

    # Set default output path if not provided
    if output_path is None:
        input_file = Path(input_path)
        output_path = input_file.parent / f"{input_file.stem}.svg"

    print(f"\nConverting {input_path} to {output_path}...")

    # Get parameters
    threshold = kwargs.get("threshold", 128)
    turdsize = kwargs.get("turdsize", 2)
    alphamax = kwargs.get("alphamax", 1.0)
    opttolerance = kwargs.get("opttolerance", 0.2)
    turnpolicy = kwargs.get("turnpolicy", "minority")
    color = kwargs.get("color", None)
    num_colors = kwargs.get("colors", None)
    monochrome = kwargs.get("monochrome", False)

    # Load image to detect colors
    img = Image.open(input_path)
    width, height = img.size

    # Decide whether to use multi-color mode
    use_multicolor = not monochrome and (num_colors or color is None)

    if use_multicolor:
        # Multi-color mode: extract and trace each color separately
        print("Detecting colors in image...")

        # Auto-detect number of colors if not specified
        if num_colors is None:
            num_colors = 8

        colors = get_dominant_colors(img, num_colors)

        if not colors:
            print("No colors detected, falling back to monochrome mode")
            use_multicolor = False
        else:
            print(f"Found {len(colors)} colors: {[rgb_to_hex(c) for c in colors]}")

    if use_multicolor:
        # Create temporary files for each layer
        temp_files = []
        layers = []

        try:
            for i, color_rgb in enumerate(colors):
                color_hex = rgb_to_hex(color_rgb)
                print(f"\nProcessing color layer {i+1}/{len(colors)}: {color_hex}")

                # Extract color layer
                bitmap = extract_color_layer(img, color_rgb, tolerance=40)

                # Check if layer has any content
                if bitmap.getcolors() and len(bitmap.getcolors()) > 1:
                    # Save bitmap to temp file
                    tmp_bitmap = tempfile.NamedTemporaryFile(
                        suffix=".bmp", delete=False
                    )
                    tmp_bitmap_path = tmp_bitmap.name
                    tmp_bitmap.close()
                    bitmap.save(tmp_bitmap_path, "BMP")

                    # Create temp SVG file
                    tmp_svg = tempfile.NamedTemporaryFile(suffix=".svg", delete=False)
                    tmp_svg_path = tmp_svg.name
                    tmp_svg.close()

                    # Trace this layer
                    run_potrace(
                        tmp_bitmap_path,
                        tmp_svg_path,
                        turdsize=turdsize,
                        alphamax=alphamax,
                        opttolerance=opttolerance,
                        turnpolicy=turnpolicy,
                        color=color_hex,
                    )

                    layers.append((color_hex, tmp_svg_path))
                    temp_files.append(tmp_bitmap_path)
                    temp_files.append(tmp_svg_path)
                else:
                    print(f"  Skipping empty layer")

            # Combine all layers
            print(f"\nCombining {len(layers)} layers...")
            combine_svg_layers(layers, width, height, str(output_path))

        finally:
            # Clean up temp files
            for tmp_file in temp_files:
                if os.path.exists(tmp_file):
                    os.unlink(tmp_file)

    else:
        # Monochrome mode: use original preprocessing
        if color is None:
            color = "#000000"

        with tempfile.NamedTemporaryFile(suffix=".bmp", delete=False) as tmp:
            tmp_bitmap_path = tmp.name

        try:
            # Preprocess image to temporary bitmap
            preprocess_image(input_path, tmp_bitmap_path, threshold)

            # Run potrace to convert bitmap to SVG
            run_potrace(
                tmp_bitmap_path,
                str(output_path),
                turdsize=turdsize,
                alphamax=alphamax,
                opttolerance=opttolerance,
                turnpolicy=turnpolicy,
                color=color,
            )

        finally:
            # Clean up temporary file
            if os.path.exists(tmp_bitmap_path):
                os.unlink(tmp_bitmap_path)

    # Show results
    input_size = os.path.getsize(input_path)
    output_size = os.path.getsize(output_path)

    # Count paths in output
    with open(output_path, "r") as f:
        svg_content = f.read()
        path_count = svg_content.count("<path")

    print(f"\n✓ Conversion complete!")
    print(f"  Input:  {input_size / 1024:.2f} KB")
    print(f"  Output: {output_size / 1024:.2f} KB")
    print(f"  Paths in SVG: {path_count}")
    print(f"  Saved to: {output_path}")


def main():
    parser = argparse.ArgumentParser(
        description="Convert PNG images to clean SVG with minimal artifacts",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Basic conversion
  python scripts/png-to-svg.py input.png output.svg

  # With custom settings for smoother curves
  python scripts/png-to-svg.py input.png output.svg --alphamax 1.5 --opttolerance 0.3

  # For logos with fine details
  python scripts/png-to-svg.py logo.png logo.svg --turdsize 5 --threshold 130
        """,
    )

    parser.add_argument("input", help="Input PNG file")
    parser.add_argument("output", nargs="?", help="Output SVG file (optional)")
    parser.add_argument(
        "--threshold",
        type=int,
        default=128,
        help="Black/white threshold (0-255, default: 128)",
    )
    parser.add_argument(
        "--turdsize",
        type=int,
        default=2,
        help="Suppress speckles of this size or smaller (default: 2)",
    )
    parser.add_argument(
        "--alphamax",
        type=float,
        default=1.0,
        help="Corner threshold, higher = smoother curves (default: 1.0)",
    )
    parser.add_argument(
        "--opttolerance",
        type=float,
        default=0.2,
        help="Curve optimization tolerance (default: 0.2)",
    )
    parser.add_argument(
        "--turnpolicy",
        choices=["black", "white", "left", "right", "minority", "majority"],
        default="minority",
        help="Turn policy (default: minority)",
    )
    parser.add_argument(
        "--color",
        default=None,
        help="Fill color for monochrome mode (default: auto-detect colors)",
    )
    parser.add_argument(
        "--colors",
        type=int,
        default=None,
        help="Number of colors to extract for multi-color mode (default: 8)",
    )
    parser.add_argument(
        "--monochrome", action="store_true", help="Force single color output"
    )

    args = parser.parse_args()

    convert_png_to_svg(
        args.input,
        args.output,
        threshold=args.threshold,
        turdsize=args.turdsize,
        alphamax=args.alphamax,
        opttolerance=args.opttolerance,
        turnpolicy=args.turnpolicy,
        color=args.color,
        colors=args.colors,
        monochrome=args.monochrome,
    )


if __name__ == "__main__":
    main()
