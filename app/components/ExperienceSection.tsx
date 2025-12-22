import { ExternalLink } from "lucide-react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

const experiences = [
  {
    period: "Nov 2022 — Oct",
    title: "IT Services",
    company: "Owner",
    companyUrl: "#",
    description: "Office for IT services in my home town.",
    technologies: ["Ms Office", "Ia", "Next.js", "Jora"],
  },
  {
    period: "Feb 2022 — Dec 2022",
    title: "Full Stack Web Developer",
    company: "35mm.pro",
    companyUrl: "https://35mm.pro",
    description:
      "Planned website development, converting mock-ups into usable web presence with HTML, CSS, and JavaScript coding. Provided front-end website development using ReactJS and content management system as back-end with Strapi.",
    technologies: ["JavaScript", "React", "strapi", "PostgreSQL"],
  },
  {
    period: "Oct 2021 — Jan 2022",
    title: "Frontend Developer",
    company: "DzBuyInfo Store",
    companyUrl: "#",
    description:
      "Created responsive websites and interactive web applications using WordPress and mysql for database.",
    technologies: ["HTML", "CSS", "WordPress", "Mysql"],
  },
  {
    period: "Dec 2019 — Apr 2020",
    title: "Software Developer (Intership)",
    company: "BM Cork SARL",
    companyUrl: "#",
    description: "Provided inventory management Software developed.",
    technologies: ["Java", "JavaFx", "Mysql"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl"
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
