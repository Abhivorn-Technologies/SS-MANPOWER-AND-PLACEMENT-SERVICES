import { Target, Eye, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import staffLogo from "@/assets/staff_logo.jpeg";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const strengths = [
  { icon: Award, title: "Elite Security Protocols", desc: "Expertly managed protection and rapid-response training across Hyderabad." },
  { icon: Users, title: "Meticulous Housekeeping", desc: "Setting the highest standards in hygiene and specialized cleaning excellence." },
  { icon: Target, title: "Intensive Verification", desc: "Every professional undergoes rigorous background checks and elite grooming." },
  { icon: Eye, title: "Dedicated Supervision", desc: "Consistent monitoring and 24/7 support to maintain premium service levels." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const About = () => (
  <>
    <section className="pt-28 pb-10 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal variant="fade" duration={1200}>
          <SectionHeading label="About Us" title="Who We Are" description="A trusted name in elite security protocols and specialized housekeeping solutions in Hyderabad." />
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 lg:text-xl">
              SS Security & Housekeeping Services Pvt Ltd is a premier, professionally managed organization providing high-end security protocols, specialized housekeeping, and expert facility management solutions across Hyderabad and Telangana.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl">
              Founded on the pillars of integrity, safety, and hygiene, we have established a distinct brand by consistently delivering meticulously trained and background-verified professionals to protect and maintain your most valuable environments.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="group rounded-2xl overflow-hidden shadow-card h-64 md:h-96">
            <img 
              src={staffLogo} 
              alt="SS Security & Housekeeping Services Team" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To provide elite, technology-driven security protocols and meticulous, high-standard housekeeping solutions that ensure safety, hygiene, and absolute peace of mind for our corporate and residential clients." },
          { icon: Eye, title: "Our Vision", text: "To be the most trusted and specialized provider of security and cleaning excellence in Hyderabad, setting new benchmarks in professional integrity and service quality." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} variant={i === 0 ? "slide-left" : "slide-right"} delay={i * 200} duration={1400}>
            <div className="group bg-card rounded-2xl p-8 shadow-card border border-border h-full hover:shadow-card-hover hover:-translate-y-2 hover:border-secondary/30 transition-all duration-500 cursor-default">
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
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariants}
        >
          {strengths.map((s) => (
            <motion.div key={s.title} variants={itemVariants} className="h-full">
              <div className="group bg-card rounded-2xl p-8 shadow-card border border-border h-full hover:shadow-card-hover hover:-translate-y-2 hover:bg-secondary/[0.02] transition-all duration-700 ease-out cursor-default overflow-hidden relative">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
