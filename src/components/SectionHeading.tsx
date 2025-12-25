interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 ${
            light
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-primary/10 text-primary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;