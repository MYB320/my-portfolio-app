import { Moon, Sun, Monitor } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { cn } from "~/lib/utils";
import { useTheme } from "~/components/theme-provider";

export default function ThemeSwitcher() {
  type Theme = "dark" | "light" | "system";

  const { setTheme, theme } = useTheme();

  return (
    <div>
      <ToggleGroup
        type="single"
        value={theme}
        defaultValue="system"
        onValueChange={(value) =>
          value === "" ? setTheme(theme) : setTheme(value as Theme)
        }
      >
        <ToggleGroupItem value="light">
          <Sun
            className={cn("w-4 h-4", theme === "light" ? "text-primary" : "")}
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark">
          <Moon
            className={cn("w-4 h-4", theme === "dark" ? "text-primary" : "")}
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="system">
          <Monitor
            className={cn("w-4 h-4", theme === "system" ? "text-primary" : "")}
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
