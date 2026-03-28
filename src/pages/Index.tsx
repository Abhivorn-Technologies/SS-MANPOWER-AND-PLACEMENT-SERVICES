import { Link } from "react-router-dom";
import { Shield, Sparkles, Building2, Users, CheckCircle2, Clock, IndianRupee, GraduationCap, ChevronLeft, ChevronRight, Award, MapPin, Briefcase, Coffee } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroSlideHousekeeping from "@/assets/housekeeping_logo.jpeg";
import heroSlideFacility from "@/assets/hero-slide-facility.jpg";
import heroSlideManpower from "@/assets/hero-slide-manpower.jpg";
import securityTeam from "@/assets/security-team.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import manpowerImg from "@/assets/manpower.jpg";
import securityBlue from "@/assets/security_guards_logo.jpg.jpeg";
import housekeepingBlue from "@/assets/housekeeping_logo.jpeg";
import manpowerBlue from "@/assets/manpower-blue.png";
import officeBoyFinal from "@/assets/service-office-boy-final.png";
import aboutPreview from "@/assets/staff_logo.jpeg";
import facilityBlue from "@/assets/feciity_management_logo.jpeg";
import galleryBlue1 from "@/assets/gallery-blue-1.png";
import gallerySecurity1 from "@/assets/gallery-security-1.png";
import galSec2 from "@/assets/gallery-security-2.png";
import galSec3 from "@/assets/gallery-security-3.png";
import galHouse2 from "@/assets/gallery-housekeeping-2.png";
import galRecruit from "@/assets/gallery-recruitment.png";
import companyVideo from "@/assets/video_with_logo.mp4";
import SectionHeading from "@/components/SectionHeading";
import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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
    image: officeBoyFinal,
    heading: "Expert Office Boys & Pantry Services",
    subheading: "Ensure your workplace runs smoothly with our well-trained and attentive office staff.",
  },
];

const stats = [
  { icon: Briefcase, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Professional Team" },
  { icon: Award, value: "1000+", label: "Happy Clients" },
  { icon: MapPin, value: "15+", label: "Cities Served" },
];

const services = [
  { icon: Shield, title: "Security Guard Services", description: "Trained and verified security personnel for residential, commercial, and industrial premises.", image: securityBlue },
  { icon: Sparkles, title: "Housekeeping Services", description: "Professional housekeeping staff to maintain hygiene and cleanliness at your premises.", image: housekeepingBlue },
  { icon: Building2, title: "Facility Management", description: "End-to-end facility management solutions tailored to your business needs.", image: facilityBlue },
  { icon: Coffee, title: "Office Boy & Pantry Services", description: "Professional office boys and pantry staff to maintain corporate workflow and hospitality.", image: officeBoyFinal },
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 2500);
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
      <section className="relative h-[80vh] md:h-[75vh] mt-16 md:mt-20 overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
            style={{ 
              opacity: currentSlide === i ? 1 : 0,
              zIndex: currentSlide === i ? 1 : 0 
            }}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-[2500ms] ease-in-out ${
                currentSlide === i ? "scale-110 opacity-100" : "scale-100 opacity-90"
              }`}
              style={{
                transform: `translateX(${(i - currentSlide) * 20}%)`,
              }}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(203, 80%, 15%, 0.42), hsla(203, 80%, 20%, 0.3))" }} />
          </div>
        ))}

        {/* Slide Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className="transition-all ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    opacity: (currentSlide === i && hasMounted) ? 1 : 0,
                    transform: (currentSlide === i && hasMounted) ? "translateY(0)" : "translateY(40px)",
                    position: currentSlide === i ? "relative" : "absolute",
                    pointerEvents: currentSlide === i ? "auto" : "none",
                    transitionDuration: (currentSlide === i && hasMounted) ? "1800ms" : "800ms",
                    transitionDelay: (currentSlide === i && hasMounted) ? "400ms" : "0ms",
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
                      className="bg-gradient-accent text-accent-foreground px-8 py-3.5 rounded-lg font-bold shadow-button hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 text-center"
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

        {/* Navigation arrows and dots removed as requested */}
      </section>

      {/* Stats Counter */}
      <section className="relative z-10 -mt-16 md:-mt-12">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="slide-up">
            <div className="bg-card rounded-2xl shadow-card-hover border border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border overflow-hidden">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} variant="fade" delay={i * 100} duration={800}>
                  <div className="group flex items-center gap-3 md:gap-4 px-4 md:px-6 py-6 md:py-8 justify-center hover:bg-muted/50 transition-all duration-300 cursor-default h-full">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">{stat.value}</p>
                      <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="slide-up">
            <SectionHeading label="What We Offer" title="Our Services" description="Comprehensive manpower and facility management solutions for businesses of all sizes." />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} variant="scale" delay={i * 200} duration={1800}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-gradient-accent transition-all duration-300">
                      <s.icon className="w-5 h-5 text-secondary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Video */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="slide-up">
            <SectionHeading label="Watch Our Work" title="See Us in Action" description="Watch how our trained professionals deliver excellence every day." />
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal variant="scale" duration={1200}>
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-secondary/20 aspect-video bg-primary/5 group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <video
                  src={companyVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  poster={securityTeam}
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                {/* Subtle overlay hint */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="slide-left" duration={1800}>
            <div>
              <SectionHeading 
                label="About Us" 
                title="Your Trusted Security & Housekeeping Partner" 
                center={false} 
                titleClassName="text-2xl md:text-3xl"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                SS Security & Housekeeping Services Pvt Ltd is a premier provider of elite security protocols and high-end cleaning solutions based in Hyderabad. We deliver meticulously managed services tailored to protect and maintain your professional environment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our trained professionals undergo rigorous background checks and skill assessments to ensure the highest standards of service delivery.
              </p>
              <Link to="/about" className="inline-flex bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm">
                Learn More About Us
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-right" duration={1800}>
            <div className="group rounded-2xl overflow-hidden shadow-card">
              <img src={aboutPreview} alt="SS Services professional team" className="w-full h-80 md:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="slide-up">
            <SectionHeading label="Why Choose Us" title="What Sets Us Apart" description="We bring professionalism, reliability, and dedication to every engagement." />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} variant="fade" delay={i * 150}>
                <div className="text-center bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="slide-up">
            <SectionHeading label="Our Gallery" title="Our Professionals at Work" />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[gallerySecurity1, housekeepingBlue, officeBoyFinal, galleryBlue1, galSec3, galRecruit].map((img, i) => (
              <ScrollReveal key={i} variant="scale" delay={i * 100}>
                <div className="rounded-xl overflow-hidden shadow-card h-48 md:h-64 group">
                  <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="scale" duration={1200}>
            <div className="bg-gradient-cta rounded-3xl p-10 md:p-16 text-center shadow-card hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 group relative overflow-hidden">
              {/* Subtle background spark effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">Looking for Reliable Manpower Solutions?</h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">Get in touch with us today and let us handle your staffing and security needs with professionalism and care.</p>
                <Link to="/contact" className="inline-flex bg-background text-foreground px-10 py-4 rounded-xl font-bold hover:bg-white hover:scale-110 hover:shadow-button transition-all duration-300 active:scale-95 text-lg">
                  Contact Now
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
