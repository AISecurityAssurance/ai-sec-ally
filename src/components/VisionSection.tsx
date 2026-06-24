// Created: 2026-06-23
// Vision-first homepage section: expands the mission into the problem we see and the
// world we're building toward. Sells the vision, not the product or methodology.
const VisionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
            The systems we depend on are getting harder to trust.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              The systems our world runs on—defense platforms, critical infrastructure, the software
              behind every critical mission—are no longer built as single machines. They're assembled
              from many parts, made by many hands, and they evolve constantly. Each part can work
              perfectly, and the system can still fail.
            </p>
            <p>
              The hardest risks to security and safety don't live in any one component. They emerge from
              the way components interact—conditions no one specified and no one checked. Finding them
              today is slow, manual work that only a handful of experts can do, and it rarely keeps pace
              with how fast systems are built.
            </p>
            <p className="text-foreground font-medium">
              We're building automated tools to change that—so that proving a system is trustworthy becomes
              as fast, and as fundamental, as building it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
