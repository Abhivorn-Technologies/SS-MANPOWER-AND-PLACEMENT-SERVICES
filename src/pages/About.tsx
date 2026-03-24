import { Target, Eye, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  { icon: Award, title: "Industry Expertise", desc: "Years of experience in manpower and security services across Hyderabad." },
  { icon: Users, title: "Trained Workforce", desc: "Every team member undergoes rigorous training and background verification." },
  { icon: Target, title: "Client-Centric Approach", desc: "Tailored solutions designed around your specific business requirements." },
  { icon: Eye, title: "Quality Assurance", desc: "Consistent monitoring and supervision to maintain the highest service standards." },
];

const About = () => (
  <>
    <section className="pt-28 pb-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading label="About Us" title="Who We Are" description="A trusted name in manpower, security, and facility management services in Hyderabad." />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          SS Placements & Manpower Services Pvt Ltd is a professionally managed company providing comprehensive manpower solutions including security services, housekeeping, facility management, and general staffing across Hyderabad and Telangana.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Founded on the principles of trust, quality, and reliability, we have built a strong reputation by consistently delivering trained and verified professionals to our clients across various industries.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To provide high-quality, reliable, and affordable manpower solutions that empower businesses to focus on their core operations while we handle their staffing and security needs." },
          { icon: Eye, title: "Our Vision", text: "To be the most trusted manpower and security services provider in Telangana, known for excellence, integrity, and innovation in workforce management." },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-8 shadow-card border border-border">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Strengths */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading label="Our Strengths" title="What Makes Us Strong" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div key={s.title} className="text-center bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
