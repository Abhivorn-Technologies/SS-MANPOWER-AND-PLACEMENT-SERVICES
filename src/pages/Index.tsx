import { Link } from "react-router-dom";
import { Shield, Sparkles, Building2, Users, CheckCircle2, Clock, IndianRupee, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Shield, title: "Security Guard Services", description: "Trained and verified security personnel for residential, commercial, and industrial premises." },
  { icon: Sparkles, title: "Housekeeping Services", description: "Professional housekeeping staff to maintain hygiene and cleanliness at your premises." },
  { icon: Building2, title: "Facility Management", description: "End-to-end facility management solutions tailored to your business needs." },
  { icon: Users, title: "Manpower Supply", description: "Reliable manpower solutions across industries with flexible deployment options." },
];

const whyUs = [
  { icon: CheckCircle2, title: "Verified Staff", desc: "Background-checked and fully verified workforce." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock service and dedicated support team." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive rates without compromising on quality." },
  { icon: GraduationCap, title: "Trained Professionals", desc: "Skilled and professionally trained team members." },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Security professionals" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto animate-fade-in-up">
          Reliable Manpower & Security Services You Can Trust
        </h1>
        <p className="mt-5 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Professional security, housekeeping, and staffing solutions across Hyderabad
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/contact" className="bg-gradient-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold shadow-button hover:opacity-90 transition">
            Get a Quote
          </Link>
          <Link to="/contact" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading label="What We Offer" title="Our Services" description="Comprehensive manpower and facility management solutions for businesses of all sizes." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading label="About Us" title="Your Trusted Manpower Partner" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            SS Placements & Manpower Services Pvt Ltd is a leading provider of security, housekeeping, and staffing solutions based in Hyderabad. With years of experience and a commitment to excellence, we deliver reliable workforce solutions tailored to your needs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our trained professionals undergo rigorous background checks and skill assessments to ensure the highest standards of service delivery.
          </p>
          <Link to="/about" className="inline-flex bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm">
            Learn More About Us
          </Link>
        </div>
        <div className="bg-muted rounded-2xl p-8 flex flex-col gap-4">
          {["10+ Years of Industry Experience", "500+ Trained Professionals", "100+ Satisfied Clients", "24/7 Service Availability"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading label="Why Choose Us" title="What Sets Us Apart" description="We bring professionalism, reliability, and dedication to every engagement." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item) => (
            <div key={item.title} className="text-center bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Clients */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading label="Our Clients" title="Trusted by Leading Organizations" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-20 bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm font-medium">
              Client {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-cta rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Looking for Reliable Manpower Solutions?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Get in touch with us today and let us handle your staffing and security needs with professionalism.</p>
          <Link to="/contact" className="inline-flex bg-background text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-background/90 transition">
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
