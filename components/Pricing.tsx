"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Service",
    originalPrice: 99,
    price: 49,
    period: "per service",
    description: "Essential maintenance package",
    features: [
      "Oil Change",
      "Filter Replacement",
      "Fluid Top-Off",
      "Visual Inspection",
      "Tire Pressure Check",
    ],
    featured: false,
  },
  {
    name: "Standard Package",
    originalPrice: 199,
    price: 129,
    period: "per service",
    description: "Comprehensive care package",
    features: [
      "Everything in Basic",
      "Brake Inspection",
      "Battery Test",
      "A/C Check",
      "Engine Diagnostics",
      "Wheel Alignment Check",
    ],
    featured: true,
  },
  {
    name: "Premium Care",
    originalPrice: 349,
    price: 249,
    period: "per service",
    description: "Full vehicle maintenance",
    features: [
      "Everything in Standard",
      "Full Brake Service",
      "Transmission Fluid",
      "Coolant Flush",
      "Spark Plug Replacement",
      "Priority Scheduling",
      "Free Loaner Vehicle",
    ],
    featured: false,
  },
  {
    name: "Fleet Plan",
    originalPrice: 999,
    price: 699,
    period: "monthly",
    description: "For business fleets",
    features: [
      "Unlimited Vehicles",
      "Priority Service",
      "Dedicated Account Manager",
      "24/7 Emergency Support",
      "Monthly Reports",
      "Discounted Parts",
      "Free Inspections",
      "Roadside Assistance",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">PRICING</span>
          <h2 className="section-title">Service Packages</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plan.featured
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl shadow-primary/30"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-xs font-semibold">
                  POPULAR
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-sm line-through ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                    ${plan.originalPrice}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.featured ? "" : "text-foreground"}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.featured ? "" : "text-primary"}`} />
                    <span className={`text-sm ${plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
