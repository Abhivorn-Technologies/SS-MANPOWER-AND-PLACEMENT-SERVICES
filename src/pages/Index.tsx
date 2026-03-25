import { Link } from "react-router-dom";
import { Shield, Sparkles, Building2, Users, CheckCircle2, Clock, IndianRupee, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import securityTeam from "@/assets/security-team.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import manpowerImg from "@/assets/manpower.jpg";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Shield, title: "Security Guard Services", description: "Trained and verified security personnel for residential, commercial, and industrial premises.", image: securityTeam },
  { icon: Sparkles, title: "Housekeeping Services", description: "Professional housekeeping staff to maintain hygiene and cleanliness at your premises.", image: housekeepingImg },
  { icon: Building2, title: "Facility Management", description: "End-to-end facility management solutions tailored to your business needs.", image: manpowerImg },
  { icon: Users, title: "Manpower Supply", description: "Reliable manpower solutions across industries with flexible deployment options.", image: securityTeam },
];

const whyUs = [
  { icon: CheckCircle2, title: "Verified Staff", desc: "Background-checked and fully verified workforce." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock service and dedicated support team." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive rates without compromising on quality." },
  { icon: GraduationCap, title: "Trained Professionals", desc: "Skilled and professionally trained team members." },
];

const Index = () => {

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="SS Services security professional in light blue uniform" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-gradient-accent transition-all duration-300">
                    <s.icon className="w-5 h-5 text-secondary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading label="Watch Our Work" title="See Us in Action" description="Watch how our trained professionals deliver excellence every day." />
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border aspect-video bg-primary/5">
              {videoPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="SS Placements Company Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 group cursor-pointer"
                >
                  <img src={securityTeam} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/40" />
                  <div className="relative z-10 w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-button group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                  </div>
                  <span className="relative z-10 text-primary-foreground font-semibold text-lg">Watch Company Video</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
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
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={securityTeam} alt="SS Services security team" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
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

      {/* Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Gallery" title="Our Professionals at Work" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[heroBg, securityTeam, housekeepingImg, manpowerImg, securityTeam, housekeepingImg].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-card h-48 md:h-64">
                <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
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
};

export default Index;
