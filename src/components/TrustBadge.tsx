import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TrustBadge = ({ icon: Icon, title, description }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TrustBadge;