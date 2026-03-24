interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {label && (
      <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase mb-2">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
