import { Award, BookOpen } from "lucide-react";

interface FacultyCardProps {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  image?: string;
  achievements?: string[];
}

const FacultyCard = ({
  name,
  qualification,
  specialization,
  experience,
  image,
  achievements = [],
}: FacultyCardProps) => {
  return (
    <div className="group bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Faculty Image */}
      {image ? (
        <div className="w-full h-72 overflow-hidden bg-secondary flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="h-32 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-card border-4 border-card flex items-center justify-center shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="py-6 px-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm font-medium text-primary mb-4">{qualification}</p>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>{specialization}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Award className="w-4 h-4 text-success" />
            <span>{experience}</span>
          </div>
        </div>

        {achievements.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-xs text-muted-foreground bg-secondary/50 rounded-lg py-2 px-3"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyCard;