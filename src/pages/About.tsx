import { Target, Eye, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import managementSkyBlue from "@/assets/management-sky-blue-clean.png";
import ScrollReveal from "@/components/ScrollReveal";

const strengths = [
  { icon: Award, title: "Elite Security Protocols", desc: "Expertly managed protection and rapid-response training across Hyderabad." },
  { icon: Users, title: "Meticulous Housekeeping", desc: "Setting the highest standards in hygiene and specialized cleaning excellence." },
  { icon: Target, title: "Intensive Verification", desc: "Every professional undergoes rigorous background checks and elite grooming." },
  { icon: Eye, title: "Dedicated Supervision", desc: "Consistent monitoring and 24/7 support to maintain premium service levels." },
];

const About = () => (
  <>
    <section className="pt-28 pb-10 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading label="About Us" title="Who We Are" description="A trusted name in elite security protocols and specialized housekeeping solutions in Hyderabad." />
      </div>
    </section>

    <section className="py-0">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <ScrollReveal variant="slide-left" delay={300}>
          <div className="flex flex-col">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              SS Security & Housekeeping Services Pvt Ltd is a premier, professionally managed organization providing high-end security protocols, specialized housekeeping, and expert facility management solutions across Hyderabad and Telangana.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded on the pillars of integrity, safety, and hygiene, we have established a distinct brand by consistently delivering meticulously trained and background-verified professionals to protect and maintain your most valuable environments.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="slide-right" delay={300}>
          <div className="group rounded-2xl overflow-hidden shadow-card h-48 md:h-64">
            <img src={managementSkyBlue} alt="SS Security & Housekeeping Management Team" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To provide elite, technology-driven security protocols and meticulous, high-standard housekeeping solutions that ensure safety, hygiene, and absolute peace of mind for our corporate and residential clients." },
          { icon: Eye, title: "Our Vision", text: "To be the most trusted and specialized provider of security and cleaning excellence in Hyderabad, setting new benchmarks in professional integrity and service quality." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} variant="slide-up" delay={300 + (i * 200)} duration={1200}>
            <div className="group bg-card rounded-2xl p-8 shadow-card border border-border h-full hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Strengths */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="slide-up" delay={300}>
          <SectionHeading label="Our Strengths" title="What Makes Us Strong" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {strengths.map((s, i) => (
            <ScrollReveal key={s.title} variant="slide-up" delay={300 + (i * 150)} duration={1500}>
              <div className="group bg-card rounded-2xl p-8 shadow-card border border-border h-full hover:shadow-card-hover hover:-translate-y-2 hover:bg-secondary/[0.02] transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] cursor-default overflow-hidden relative">
                {/* Background accent glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-secondary/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                    <s.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-secondary transition-colors duration-500">{s.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
