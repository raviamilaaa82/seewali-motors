"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    // https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80
    image: "/hero_slider_bg_1.png",
    subtitle: "WELCOME TO SEEWALI MOTORS",
    title: "VEHICLE REPAIR &",
    titleHighlight: "AUTO SERVICES",
    description: "We provide quality auto repair and maintenance services. Our certified technicians are committed to excellence.",
  },
  {
    // https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80
    image: "/hero_slider_bg_2.png",
    subtitle: "PROFESSIONAL SERVICE",
    title: "EXPERT CAR",
    titleHighlight: "MAINTENANCE",
    description: "Trust our team of experienced mechanics to keep your vehicle running smoothly and safely on the road.",
  },
  {
    // https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80
    image: "/hero_slider_bg_1.png",
    subtitle: "QUALITY GUARANTEED",
    title: "RELIABLE AUTO",
    titleHighlight: "SOLUTIONS",
    description: "From routine maintenance to complex repairs, we handle it all with precision and care.",
  },

   {

    // https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80 මෝටර් රථ අලුත්වැඩියා සහ සේවා
    image: "/hero_slider_bg_2.png",
    subtitle: "WELCOME TO SEEWALI MOTORS",
    title: <span className="text-2xl md:text-3xl lg:text-4xl">24/7 Emergency Vehicle Service |  ආපදා රථ සේවය  </span>,
    titleHighlight: "",
    description: "වේලාව හා දිනය නොතකා ඔබගේ අවශ්‍යතාවයට",
    // We provide quality auto repair and maintenance services. Our certified technicians are committed to excellence.
  },
  {
    // https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80
    image: "/hero_slider_bg_1.png",
    subtitle: "PROFESSIONAL SERVICE",
    title: "EXPERT CAR",
    titleHighlight: "MAINTENANCE",
    description: "Trust our team of experienced mechanics to keep your vehicle running smoothly and safely on the road.",
  },
  {
    // https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80
    image: "/hero_slider_bg_2.png",
    subtitle: "QUALITY GUARANTEED",
    title: "RELIABLE AUTO",
    titleHighlight: "SOLUTIONS",
    description: "From routine maintenance to complex repairs, we handle it all with precision and care.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden [--tw-gradient-via-position:0%]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r  to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl pt-20">
          <span className="section-label animate-fade-in">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 mb-6">
            <span className="block animate-slide-up">{slides[currentSlide].title}</span>
            <span className="block text-primary animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {slides[currentSlide].titleHighlight}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Book Appointment
            </Button> */}
            {/* <Button size="lg" variant="outline" className="border-foreground/30 hover:bg-foreground/10 px-8 py-6 text-lg">
              Learn More
            </Button> */}
          </div>
        </div>
      </div>

      {/* Social Links Sidebar */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-colors group"
          >
            <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
          </a>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-4 md:right-8 bottom-1/2 translate-y-1/2 flex flex-col gap-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-colors group"
        >
          <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-colors group"
        >
          <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
