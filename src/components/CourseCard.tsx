import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "green" | "red" | "orange";
}

const colorClasses = {
  blue: {
    bg: "bg-primary/10",
    icon: "bg-gradient-primary",
    border: "border-primary/20",
    hover: "hover:border-primary/40",
  },
  green: {
    bg: "bg-success/10",
    icon: "bg-gradient-success",
    border: "border-success/20",
    hover: "hover:border-success/40",
  },
  red: {
    bg: "bg-cta/10",
    icon: "bg-gradient-cta",
    border: "border-cta/20",
    hover: "hover:border-cta/40",
  },
  orange: {
    bg: "bg-warning/10",
    icon: "bg-warning",
    border: "border-warning/20",
    hover: "hover:border-warning/40",
  },
};

const CourseCard = ({ icon: Icon, title, description, features, color }: CourseCardProps) => {
  const classes = colorClasses[color];

  return (
    <div
      className={`group relative p-6 bg-card rounded-2xl border-2 ${classes.border} ${classes.hover} shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
    >
      <div className={`w-14 h-14 ${classes.icon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-foreground">
            <div className={`w-1.5 h-1.5 rounded-full ${classes.icon}`} />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="outline" size="sm" className="group/btn" asChild>
        <Link to="/contact">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
};

export default CourseCard;