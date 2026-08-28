import { Link } from "react-router";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

type ProjectCardProps = {
  title: string;
  tech?: string[];
  imageSrc?: string | null;
  slug: string;
};

export const ProjectCard = ({
  title,
  tech = [],
  imageSrc,
  slug,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`} className="block group">
      <Card className="cursor-pointer w-full aspect-video p-0 overflow-hidden relative border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md bg-muted/40">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback if image fails
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-background" />
        )}

        {/* Gradient scrim for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        <CardContent className="relative z-10 h-full flex flex-col justify-end p-5">
          <CardTitle className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {title}
          </CardTitle>

          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 3).map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-[11px] text-gray-200 border-white/20 bg-black/50 backdrop-blur-xs font-normal"
              >
                {item}
              </Badge>
            ))}
            {tech.length > 3 && (
              <Badge
                variant="outline"
                className="text-[11px] text-gray-400 border-white/10 bg-black/40"
              >
                +{tech.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
