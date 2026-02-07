import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Engine Repair",
    "Brake Service",
    "Oil Change",
    "Transmission",
    "AC & Heating",
    "Tire Services",
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div> */}
                <div className="relative w-10 h-10">
                                <Image
                                  src="/smn-logo.png" // or "/logo.svg"
                                  alt="Company Logo"
                                  
                                  width={340}
                                  height={340}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              {/* <span className="text-2xl font-bold text-foreground">
                Seewali Motors <span className="text-primary"></span>
              </span> */}
              <br/>
              <span className="text-2xl font-bold text-foreground">
                සීවලී  මෝටර්ස් <span className="text-primary"></span>
              </span>
                              {/* <span className="text-primary-foreground font-bold text-xl">SM</span> */}
                            
              {/* <span className="text-2xl font-bold text-foreground">
                
                Cras<span className="text-primary">.</span>
              </span> */}
            </div>
            <p className="text-muted-foreground mb-6">
              We are a trusted auto repair shop providing quality service for over 25 years. Your satisfaction is our priority.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Seewali Motors, Colombo Road, Wariyagod,Alawwa.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+94-372278496" className="text-muted-foreground hover:text-primary transition-colors">
                  +94-372278496
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@cras.com" className="text-muted-foreground hover:text-primary transition-colors">
                  {/* info@cras.com */}
                  seewalimotos@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  Mon - Sat: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* <p className="text-muted-foreground text-sm">
              © 2025 Cras. All rights reserved.
            </p> */}
            <div className="flex gap-6 text-sm">
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a> */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
