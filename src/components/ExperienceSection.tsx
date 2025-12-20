import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Software Engineer",
    company: "TechCorp",
    companyUrl: "https://techcorp.com",
    description:
      "Build and maintain critical frontend infrastructure and UI components for a platform serving millions of users. Work closely with cross-functional teams to implement best practices in web accessibility and performance optimization.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "Innovation Labs",
    companyUrl: "https://innovationlabs.com",
    description:
      "Developed and shipped multiple features for web applications using modern JavaScript frameworks. Collaborated with designers and product managers to deliver polished user experiences.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Digital Studio",
    companyUrl: "https://digitalstudio.com",
    description:
      "Created responsive websites and interactive web applications for diverse clients. Focused on clean code, performance optimization, and modern CSS techniques.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 mt-24 mx-auto container py-6 md:py-8 lg:py-12 px-4 md:px-6 lg:px-8 max-w-6xl"
    >
      <h2 className="text-2xl text-accent-foreground font-bold tracking-tight mb-8">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="sm:w-40 shrink-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {exp.period}
                </p>
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary hover:text-secondary/80 transition-colors"
                  >
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
