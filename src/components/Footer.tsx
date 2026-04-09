import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/SS SERVICE LOGO.png";

const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground pt-1 border-t-4 border-secondary/80">
    {/* Gradient Overlay for visual depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/30 pointer-events-none" />
    
    <div className="container relative mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="group inline-block hover:scale-105 transition-transform duration-300">
            <div className="bg-white/10 group-hover:bg-white p-2 rounded-lg shadow-sm mb-4 transition-all duration-300">
              <img src={logo} alt="SS Security & Housekeeping Logo" className="h-16 w-auto brightness-0 invert opacity-90 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Trusted security, housekeeping, and specialized office boy services across Hyderabad. Your reliable partner for total facility excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Services", "Contact"].map((name) => (
              <Link
                key={name}
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                className="text-primary-foreground/70 hover:text-secondary transition text-sm"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Our Services</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { name: "Security Guard Services", id: "security-guard-services" },
              { name: "Housekeeping Services", id: "housekeeping-services" },
              { name: "Facility Management", id: "facility-management" },
              { name: "Office Boy Services", id: "office-boy-pantry-services" }
            ].map((service) => (
              <Link 
                key={service.name} 
                to={`/services#${service.id}`} 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
              <span>Shanthi Nilayam, MIG 648, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-secondary" />
              <a href="tel:+919177822547" className="hover:text-secondary transition">+91 9177822547</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-secondary" />
              <a href="mailto:operations@ssmanpowerservices.com" className="hover:text-secondary transition">operations@ssmanpowerservices.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="relative z-10 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/70 font-medium">
          &copy; {new Date().getFullYear()} SS Security & Housekeeping Services Pvt Ltd. All rights reserved. | Developed by <a href="https://abhivorn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">Abhivorn Technologies</a>
        </p>
        <div className="flex gap-5">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Linkedin, href: "https://www.linkedin.com/company/ss-security-housekeeping-services/" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target={social.href === "#" ? undefined : "_blank"} 
              rel={social.href === "#" ? undefined : "noopener noreferrer"} 
              className="text-primary-foreground/70 hover:text-secondary hover:scale-110 transition-all duration-300"
              onClick={social.href === "#" ? (e) => e.preventDefault() : undefined}
            >
              <social.Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
