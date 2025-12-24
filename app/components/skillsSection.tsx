import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Python",
        "C/C++",
        "Java",
        "Rust",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "svelte",
        "astro",
        "expo",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Bun js",
        "Express js",
        "Nest.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Linux",
        "Git",
        "Docker",
        "Arduino",
        "CI/CD",
        "Kubernetes",
        "cloudflare",
        "netlify",
        "AWS",
      ],
    },
  ];

  return (
    <div className="bg-muted">
      <section
        id="skills"
        className="mx-auto container py-16 md:py-22 lg:py-32 px-4 md:px-6 lg:px-8 max-w-7xl"
      >
        <h2 className="text-2xl text-accent-foreground font-bold tracking-tight mb-8">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle className="group-hover:text-primary group-focus:text-primary group-active:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="active:border-transparent active:bg-secondary active:text-secondary-foreground group-hover:border-transparent group-hover:bg-secondary group-hover:text-secondary-foreground group-active:border-transparent group-active:bg-secondary group-active:text-secondary-foreground transition-colors duration-200 text-sm cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <div className="relative bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
