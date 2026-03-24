import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="group bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 hover:-translate-y-1">
    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-accent group-hover:text-accent-foreground transition-all duration-300">
      <Icon className="w-7 h-7 text-secondary group-hover:text-accent-foreground transition-colors" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
