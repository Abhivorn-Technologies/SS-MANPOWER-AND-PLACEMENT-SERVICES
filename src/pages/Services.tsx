import { Shield, Sparkles, Users, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    icon: Shield,
    title: "Security Guard Services",
    description: "We provide well-trained, uniformed security personnel for residential complexes, commercial offices, industrial sites, events, and more.",
    benefits: [
      "Trained and licensed security guards",
      "Round-the-clock surveillance and patrol",
      "Access control and visitor management",
      "Event security management",
      "CCTV monitoring support",
    ],
  },
  {
    icon: Sparkles,
    title: "Housekeeping Services",
    description: "Our professional housekeeping staff ensures your premises remain spotless and hygienic, enhancing your work environment.",
    benefits: [
      "Daily cleaning and maintenance",
      "Deep cleaning and sanitization",
      "Restroom and pantry upkeep",
      "Waste management",
      "Specialized floor and carpet cleaning",
    ],
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Flexible and reliable manpower solutions tailored to your business needs—whether temporary, contract, or permanent staffing.",
    benefits: [
      "Skilled and unskilled workforce supply",
      "Temporary and permanent staffing",
      "Quick deployment across industries",
      "Payroll and compliance management",
      "Scalable workforce solutions",
    ],
  },
];

const Services = () => (
  <>
    <section className="pt-28 pb-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading label="Our Services" title="What We Offer" description="Comprehensive, professional, and tailored workforce solutions for every business." />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 space-y-16">
        {serviceDetails.map((service, idx) => (
          <div key={service.title} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-muted rounded-2xl h-64 md:h-80 flex items-center justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <service.icon className="w-20 h-20 text-muted-foreground/30" />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-cta rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need a Customized Solution?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Tell us your requirements and we'll craft the perfect workforce solution for you.</p>
          <Link to="/contact" className="inline-flex bg-background text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-background/90 transition">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Services;
