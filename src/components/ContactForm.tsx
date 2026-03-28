import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

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
        <div key={field.name}>
          <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
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
