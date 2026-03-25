import { Link } from "react-router-dom";
import { Shield, Sparkles, Building2, Users, CheckCircle2, Clock, IndianRupee, GraduationCap, ChevronLeft, ChevronRight, Award, MapPin, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroSlideHousekeeping from "@/assets/hero-slide-housekeeping.jpg";
import heroSlideFacility from "@/assets/hero-slide-facility.jpg";
import heroSlideManpower from "@/assets/hero-slide-manpower.jpg";
import securityTeam from "@/assets/security-team.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import manpowerImg from "@/assets/manpower.jpg";
import SectionHeading from "@/components/SectionHeading";
import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    image: heroBg,
    heading: "Your Security, Our Commitment. Always",
    subheading: "Professional security guard services across Hyderabad with trained & verified personnel.",
  },
  {
    image: heroSlideHousekeeping,
    heading: "Your Trusted Partner in Spotless Living",
    subheading: "Expert housekeeping staff to maintain hygiene and cleanliness at your premises.",
  },
  {
    image: heroSlideFacility,
    heading: "Smart Facility Management Solutions",
    subheading: "Cost-effective management that keeps your facility running smoothly.",
  },
  {
    image: heroSlideManpower,
    heading: "Reliable Manpower, Delivered On Time",
    subheading: "Your complete staffing solution for life and business, across industries.",
  },
];

const stats = [
  { icon: Briefcase, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Professional Team" },
  { icon: Award, value: "1000+", label: "Happy Clients" },
  { icon: MapPin, value: "15+", label: "Cities Served" },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* Hero Carousel */}
      <section className="relative h-[90vh] md:h-[85vh] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: currentSlide === i ? 1 : 0, zIndex: currentSlide === i ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(203, 80%, 15%, 0.82), hsla(203, 80%, 20%, 0.6))" }} />
          </div>
        ))}

        {/* Slide Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSlide === i ? 1 : 0,
                    transform: currentSlide === i ? "translateY(0)" : "translateY(30px)",
                    position: currentSlide === i ? "relative" : "absolute",
                    pointerEvents: currentSlide === i ? "auto" : "none",
                  }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight uppercase tracking-wide">
                    {slide.heading}
                  </h1>
                  <p className="mt-4 md:mt-6 text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                    {slide.subheading}
                  </p>
                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="bg-gradient-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold shadow-button hover:opacity-90 transition text-center"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      to="/services"
                      className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? "w-10 bg-secondary" : "w-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Counter */}
      <section className="relative z-10 -mt-16 md:-mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-card-hover border border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-6 md:py-8 justify-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
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

      {/* Company Video */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading label="Watch Our Work" title="See Us in Action" description="Watch how our trained professionals deliver excellence every day." />
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border aspect-video bg-primary/5">
              <video
                src="/__l5e/assets-v1/a0a3001c-37ed-4536-b0fd-38cb8f67e1da/company-video.mp4"
                controls
                poster={securityTeam}
                className="w-full h-full object-cover"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
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
              <div key={item.title} className="text-center bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
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
            {[heroBg, securityTeam, housekeepingImg, manpowerImg, heroSlideHousekeeping, heroSlideFacility].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-card h-48 md:h-64 group">
                <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
