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
        className="scroll-mt-20 mt-24 mx-auto container py-6 md:py-8 lg:py-12 px-4 md:px-6 lg:px-8 max-w-6xl"
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
                    className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
