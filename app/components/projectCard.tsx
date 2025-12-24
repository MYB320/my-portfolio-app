import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

type ProjectCardProps = {
  title: string;
  tech: string[];
  imageSrc: string;
  slug: string;
};

export const ProjectCard = ({
  title,
  tech,
  imageSrc,
  slug,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`}>
      <Card className="cursor-pointer w-full aspect-video p-0 overflow-hidden group relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none" />

        <CardContent className="relative z-10 h-full flex flex-col justify-end py-4 px-6">
          <CardTitle className="text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>

          <div className="flex flex-wrap gap-2">
            {tech.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
