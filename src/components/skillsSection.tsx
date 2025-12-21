import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C & C++", "Java", "Rust"],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "HTML/CSS",
        "React Native",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Bun js",
        "Express & Nest.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "Docker",
        "Linux",
        "CI/CD",
        "Kubernetes",
        "netlify",
        "AWS",
      ],
    },
  ];

  return (
    <div className="bg-muted">
      <section
        id="skills"
        className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-6xl"
      >
        <h2 className="text-2xl text-accent-foreground font-bold tracking-tight mb-8">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:border-secondary group transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle className="group-hover:text-secondary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-muted-foreground hover:text-secondary-foreground hover:scale-110 hover:bg-secondary transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <div className="relative bottom-0 left-0 right-0 h-64 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
