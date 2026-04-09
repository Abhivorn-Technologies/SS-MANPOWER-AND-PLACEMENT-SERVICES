import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Shanthi Nilayam, MIG 648, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072" },
  { icon: Phone, label: "Phone", value: "+91 9177822547", href: "tel:+919177822547" },
  { icon: Mail, label: "Email", value: "operations@ssmanpowerservices.com", href: "mailto:operations@ssmanpowerservices.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const Contact = () => (
  <>
    <section className="pt-28 pb-4 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading label="Get In Touch" title="Contact Us" description="Have questions or need a quote? Reach out and we'll respond within 24 hours." />
        </motion.div>
      </div>
    </section>

    <section className="py-0">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 py-8 overflow-hidden">
        {/* Form - Side Animation (Left to Right) */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-card rounded-2xl p-8 shadow-card border border-border h-full"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
          <ContactForm />
        </motion.div>

        {/* Info - Side Animation (Right to Left) */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <motion.div 
                key={item.label} 
                variants={itemVariants}
                className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-accent transition-all duration-300">
                  <item.icon className="w-5 h-5 text-secondary group-hover:text-accent-foreground transition-all" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-secondary transition">{item.value}</a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Section */}
            <motion.div 
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-card border border-border h-64"
            >
              <iframe
                title="SS Placements Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.432153899146!2d78.39400447462904!3d17.48687229993262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9191f62a3ce1%3A0xab502097c0b002f9!2sMatrix%20IT%20Hub!5e0!3m2!1sen!2sin!4v1774874614231!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Contact;
