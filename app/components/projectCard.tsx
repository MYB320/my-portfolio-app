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
    <Link to={`/projects/${slug}`}>
      <Card className="cursor-pointer w-full aspect-video p-0 overflow-hidden group relative border border-border/40 hover:border-primary/50 transition-all duration-300">
        {imageSrc ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-background" />
        )}

        <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

        <CardContent className="relative z-10 h-full flex flex-col justify-end py-4 px-6">
          <CardTitle className="text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>

          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs text-gray-200 border-white/20 bg-black/40 backdrop-blur-xs"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
