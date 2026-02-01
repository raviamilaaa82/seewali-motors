const clients = [
  "AutoZone", "Michelin", "Goodyear", "Bridgestone", "Continental",
  "Firestone", "BFGoodrich", "Pirelli", "Yokohama", "Hankook",
];

const TrustedClients = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-muted-foreground text-sm uppercase tracking-wider">
            Trusted By Leading Brands
          </span>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10" />

          {/* Marquee Container */}
          <div className="flex gap-12 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-card border border-border rounded-lg"
              >
                <span className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
