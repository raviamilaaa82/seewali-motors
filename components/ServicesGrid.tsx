import { ArrowRight } from "lucide-react";

const services = [
  { 

    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
    title: "Engine Tune Up /EFI/SCANNING - එන්ජින් කාර්යක්ෂමතාව වැඩිදියුණු කිරීම",
     description: "Complete engine diagnostics, repair, and rebuilding services.",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Brake Lining Installation බ්‍රේක් ලයිනර් සවිකිරීම",
    description: "Professional Brake Lining Installation Services",
  },
  {
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    title: "Clutch Plate Replacement ක්ලච් පද්ධතිය සම්පූර්ණ අලුත්වැඩියා",
    description: "Complete clutch system service including professional plate replacement.",
  },
  {
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    title: "Body Repair (light/heavy) මුහුණු  තැබීම (සැහැ ල් ලු /බ ර )",
    description: "Expert auto body repair services covering minor to major damages. සුළු සිට බරපතල හානි දක්වා විශේෂඥ වාහන අලුත්වැඩියා සේවා",
  },
  {
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    title: "Machine-Assisted Spring Shaping යන්ත්‍රානුසාරයෙන් දුනු හැඩ ගැසීම",
    description: "Precision Spring Shaping Using Modern Machinery-යන්ත්‍ර උපකරණ භාවිතයෙන් දුනු (springs) නිවැරදි හැඩයට හැඩ ගැස්වීම ",
  },
  {
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80",
    title: "Wheel Balancing & Wheel Alignment රෝද සමතුලිත හා රෝද පෙළගැස්ම",
    description: "Complete wheel care services including precision balancing and accurate alignment.",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer card-hover"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
