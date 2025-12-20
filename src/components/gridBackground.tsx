import React from "react";

interface GridBackgroundProps {
  gridSize?: number;
  lineColor?: string;
  lineThickness?: number;
  backgroundColor?: string;
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  gridSize = 40,
  lineColor = "hsl(var(--border))",
  lineThickness = 1,
  backgroundColor = "hsl(var(--background))",
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern
            id="grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={lineColor}
              strokeWidth={lineThickness}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={backgroundColor} />
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Bottom blur gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default GridBackground;
