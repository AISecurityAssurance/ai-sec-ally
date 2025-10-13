interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className = "h-10 w-10" }: AnimatedLogoProps) => {
  return (
    <object
      data="/ai_storm_logo_transparent.svg"
      type="image/svg+xml"
      className={className}
      aria-label="AI-Storm Logo"
    >
      {/* Fallback for browsers that don't support object tag */}
      <img
        src="/ai_storm_logo_transparent.svg"
        alt="AI-Storm Logo"
        className={className}
      />
    </object>
  );
};

export default AnimatedLogo;
