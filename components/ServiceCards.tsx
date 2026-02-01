import { Gauge, Wrench, Truck } from "lucide-react";

const services = [
  {
    icon: Gauge,
    number: "01",
    title: "Performance Check",
    description: "Complete diagnostics and performance analysis to ensure your vehicle runs at peak efficiency.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Auto Repair",
    description: "Expert repair services for all makes and models, from minor fixes to major overhauls.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Fleet Services",
    description: "Comprehensive fleet maintenance programs to keep your business vehicles road-ready.",
  },
];

const ServiceCards = () => {
  return (
    <section className="relative z-10 mt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 card-hover group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
