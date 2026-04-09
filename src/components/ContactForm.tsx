import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          title: "New Contact Request", // Matches {{title}} in subject
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
      setNameError("");
      setPhoneError("");
      setEmailError("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 9876543210" },
        { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
      ].map((field) => (
        <div key={field.name} className="relative">
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-sm font-medium text-foreground">{field.label}</label>
            {field.name === "name" && nameError && (
              <span className="text-[10px] md:text-xs font-semibold text-destructive animate-fade-in">
                {nameError}
              </span>
            )}
            {field.name === "phone" && phoneError && (
              <span className="text-[10px] md:text-xs font-semibold text-destructive animate-fade-in">
                {phoneError}
              </span>
            )}
            {field.name === "email" && emailError && (
              <span className="text-[10px] md:text-xs font-semibold text-destructive animate-fade-in">
                {emailError}
              </span>
            )}
          </div>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => {
              const value = e.target.value;
              
              if (field.name === "name") {
                if (value !== "" && !/^[a-zA-Z\s]*$/.test(value)) {
                  setNameError("No numbers & Special characters allowed");
                  return;
                }
                setNameError("");
                setForm({ ...form, name: value });
              } else if (field.name === "phone") {
                // Allow only numbers, leading +, and one space
                const isNumeric = /^\+?[0-9]*\s?[0-9]*$/.test(value);
                if (!isNumeric) {
                  setPhoneError("Only numbers allowed");
                  return;
                }

                // Auto-format: Add space after +XX
                let formattedValue = value;
                if (value.startsWith("+") && value.length > 3 && !value.includes(" ")) {
                  formattedValue = `${value.slice(0, 3)} ${value.slice(3)}`;
                }

                // Length logic: 14 if starts with + (due to space), else 10
                const maxLength = formattedValue.startsWith("+") ? 14 : 10;
                if (formattedValue.length > maxLength) {
                  setPhoneError(`Too long (max ${formattedValue.startsWith("+") ? 10 : 10} digits)`);
                  return;
                }

                setPhoneError("");
                setForm({ ...form, phone: formattedValue });
              } else if (field.name === "email") {
                const lowerValue = value.toLowerCase();
                // Allow only small letters, numbers, @, . and _
                if (lowerValue !== "" && !/^[a-z0-9@._]*$/.test(lowerValue)) {
                  setEmailError("Small letters, numbers, @, . & _ only");
                  return;
                }
                setEmailError("");
                setForm({ ...form, email: lowerValue });
              } else {
                setForm({ ...form, [field.name]: value });
              }
            }}
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 transition ${
              (field.name === "name" && nameError) || (field.name === "phone" && phoneError) || (field.name === "email" && emailError)
                ? "border-destructive focus:ring-destructive/20" 
                : "border-border focus:ring-secondary/50"
            }`}
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us about your requirements..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-accent text-accent-foreground py-3 rounded-lg font-semibold text-sm shadow-button hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
