interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className = "h-10 w-10" }: AnimatedLogoProps) => {
  // RCA Test #1: Using static PNG instead of animated SVG to test Brave performance
  // The SVG has complex filter animations (electricGlow, electricCrackle) running
  // indefinitely at 1-second cycles which may cause performance issues in Brave
  return (
    <img
      src="/ai_storm_logo_transparent.png"
      alt="AI-Storm Logo"
      className={className}
    />
  );
};

export default AnimatedLogo;
