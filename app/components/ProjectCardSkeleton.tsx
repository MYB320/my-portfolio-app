import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <Card className="w-full aspect-video p-0 overflow-hidden relative">
      {/* Skeleton Background Image */}
      <Skeleton className="absolute inset-0 rounded-none" />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Skeleton Content */}
      <CardContent className="relative z-10 h-full flex flex-col justify-end py-4 px-6">
        {/* Skeleton Title */}
        <Skeleton className="h-8 w-3/4 mb-3" />

        {/* Skeleton Badges */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
};
