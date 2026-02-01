import { Check, Shield, Award, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Certified Technicians",
    description: "Our team consists of ASE-certified professionals with years of experience.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties on all services.",
  },
  // {
  //   icon: Star,
  //   title: "5-Star Reviews",
  //   description: "Consistently rated 5 stars by our satisfied customers for exceptional service.",
  // },
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize transparency and communication throughout every repair.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                alt="Auto mechanic working"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-8 border-primary/30 hidden lg:block" />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-6 bg-primary rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-foreground">25+</span>
                <span className="text-primary-foreground/80 text-sm">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="section-label">WHY CHOOSE US</span>
            <h2 className="section-title mb-6">
              We Are Qualified & Professional
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 25 years of experience in the automotive industry, we've built a reputation for excellence. Our state-of-the-art facility and skilled technicians ensure your vehicle receives the best care possible.
            </p>
             {/* <p className="text-muted-foreground text-lg mb-8">
              මෝටර් රථ කර්මාන්තයේ වසර 25 කට වැඩි පළපුරුද්දක් ඇති අපි විශිෂ්ටත්වය සඳහා කීර්තියක් ගොඩනගා ඇත්තෙමු. අපගේ අති නවීන පහසුකම් සහ දක්ෂ කාර්මික ශිල්පීන් ඔබේ වාහනයට හැකි උපරිම සත්කාර ලබා දෙන බව සහතික කරයි.
            </p> */}
             <p className="text-muted-foreground text-lg mb-8">
              මෝටර් රථ කර්මාන්තයේ වසර 25 කට වැඩි පළපුරුද්දක්  ඇති අපි විශිෂ්ටත්වය සඳහා කීර්තියක් ගොඩනගා ඇත්තෙමු !. 
            </p>
            <p className="text-muted-foreground text-lg mb-8">
             අපගේ අති නවීන පහසුකම් සහ දක්ෂ කාර්මික ශිල්පීන් ඔබේ වාහනයට හැකි උපරිම සත්කාර ලබා දෙන බව සහතික කරයි.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More About Us
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
