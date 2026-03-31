import { Shield, Sparkles, Users, CheckCircle2, Coffee, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import manpowerImg from "@/assets/manpower-blue.png";
import securityBlue from "@/assets/security_guard_logo.png";
import housekeepingBlue from "@/assets/housekeeping_logo(2).png";
import manpowerBlue from "@/assets/manpower-blue.png";
import officeBoyFinal from "@/assets/service-office-boy-final.png";
import facilityBlue from "@/assets/facility_management_logo(1).png";

const serviceDetails = [
  {
    icon: Shield,
    title: "Security Guard Services",
    image: securityBlue,
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
    image: housekeepingBlue,
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
    icon: Building2,
    title: "Facility Management",
    image: facilityBlue,
    description: "Comprehensive facility management solutions including hospitality, security, office boy services, and more, designed to streamline your operations and maintain your infrastructure at peak performance.",
    benefits: [
      "Hospitality & Guest Management",
      "Specialized Security Protocols",
      "Office Boy & Pantry Support",
      "Comprehensive Physical Asset Management",
      "Tailored Workforce Solutions",
    ],
  },
  {
    icon: Coffee,
    title: "Office Boy & Pantry Services",
    image: officeBoyFinal,
    description: "Optimize your corporate workflow with our well-groomed office boys and pantry staff, dedicated to maintaining professional office etiquette.",
    benefits: [
      "Trained in Office Etiquette & Protocol",
      "Pantry & Cafeteria Management",
      "Professional Appearance & Grooming",
      "Filing & Document Handling Support",
      "Meeting Coordination & Guest Hospitality",
    ],
  },
];

const Services = () => (
  <>
    <section className="pt-28 pb-4 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal variant="fade" delay={300}>
          <SectionHeading label="Our Services" title="What We Offer" description="Comprehensive, professional, and tailored workforce solutions for every business." />
        </ScrollReveal>
      </div>
    </section>

    <section className="py-0">
      <div className="container mx-auto px-4 space-y-24 py-8 overflow-hidden">
        {serviceDetails.map((service, idx) => (
          <div 
            key={service.title} 
            id={service.title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div 
              className={`md:pt-0 ${idx % 2 === 1 ? "md:order-2" : ""}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -70 : 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{service.description}</p>
                <ul className="space-y-4">
                  {service.benefits.map((b, bIdx) => (
                    <motion.li 
                      key={b}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + (bIdx * 0.1) }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-sm md:text-base">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            {/* Image Content */}
            <motion.div 
              className={`group rounded-2xl overflow-hidden shadow-card h-80 md:h-[400px] ${idx % 2 === 1 ? "md:order-1" : ""}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 70 : -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="scale" duration={1200} delay={300}>
          <div className="bg-gradient-cta rounded-3xl p-10 md:p-16 text-center shadow-card hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 group relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">Need a Customized Solution?</h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">Tell us your requirements and we'll craft the perfect workforce and security solution tailored to your business.</p>
              <Link to="/contact" className="inline-flex bg-background text-foreground px-10 py-4 rounded-xl font-bold hover:bg-white hover:scale-110 hover:shadow-button transition-all duration-300 active:scale-95 text-lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
