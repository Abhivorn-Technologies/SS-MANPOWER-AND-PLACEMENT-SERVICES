import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Shanthi Nilayam, MIG 648, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072" },
  { icon: Phone, label: "Phone", value: "+91 9177822547", href: "tel:+919177822547" },
  { icon: Mail, label: "Email", value: "hr@ssmanpowerservices.com", href: "mailto:hr@ssmanpowerservices.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const Contact = () => (
  <>
    <section className="pt-28 pb-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading label="Get In Touch" title="Contact Us" description="Have questions or need a quote? Reach out and we'll respond within 24 hours." />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-6">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-secondary transition">{item.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-card border border-border h-64">
            <iframe
              title="SS Placements Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.39!3d17.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzI0LjAiTiA3OMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
