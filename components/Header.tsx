"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from 'next/image';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    // { name: "Team", href: "#team" },
    // { name: "Pricing", href: "#pricing" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:info@cras.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                {/* <Mail className="w-4 h-4 text-primary" /> */}
                <Phone className="w-4 h-4 text-primary " />
                +94 37 2278496 / +94 77 5511490 / +94 37 2278566
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Seewali Motors, Colombo Road, Wariyagoda,Alawwa.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Mon - Sat: 8:00 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}   
      {/* bg-transparent */}
      <nav
        className={`transition-all duration-300 ${isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background/50"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <div className="relative w-10 h-10">
                  <Image
                    src="/smn-logo.png" // or "/logo.svg"
                    alt="Company Logo"
                    // fill
                    // className="object-contain"
                    width={340}
                    height={340}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* <span className="text-primary-foreground font-bold text-xl">SM</span> */}
              </div>
              <span className="text-2xl font-bold text-foreground">
                Seewali Motors<span className="text-primary"></span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base text-foreground hover:text-primary transition-colors "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+94-372278496" className="flex items-center gap-2 text-foreground">
                 <span className="absolute w-12 h-12 rounded-full border-2 border-primary/40 animate-ripple" />

      {/* Ring 2 — staggered */}
      <span className="absolute w-12 h-12 rounded-full border-2 border-primary/40 animate-ripple-delay" />

                
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">

                  {/* <Phone className="w-5 h-5 text-primary" /> */}
                  <Phone className="w-5 h-5 " fill="white"/>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Anytime</p>
                  <p className="font-semibold">+94-372278496</p>
                </div>
              </a>
              {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Book Appointment
              </Button> */}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                    Book Appointment
                  </Button> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
