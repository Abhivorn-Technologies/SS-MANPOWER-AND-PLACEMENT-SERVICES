import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/SS SERVICE LOGO.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background shadow-md border-b border-border/10" 
          : "bg-background/90"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="SS Security Logo" className="h-14 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-base font-medium transition-all group py-2 px-1 ${
                location.pathname === link.path ? "text-secondary font-bold" : "text-foreground hover:text-secondary"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {/* Animated Underline */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform transition-transform duration-500 origin-left ${
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} 
              />
            </Link>
          ))}
          <a
            href="tel:+919177822547"
            className="group inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-6 py-2.5 rounded-full text-base font-bold shadow-button hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" /> 
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 text-base font-medium ${
                  location.pathname === link.path ? "text-secondary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919177822547"
              className="inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground px-5 py-2.5 rounded-lg text-base font-semibold mt-2"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
