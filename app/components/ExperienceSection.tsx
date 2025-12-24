import { ChevronLeftIcon, ChevronRightIcon, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { useState } from "react";
import { TransitionPanel } from "./ui/transition-panel";
import { Button } from "./ui/button";

const experiences = [
  {
    period: "Nov 2022 — Oct 2024",
    title: "IT Services",
    company: "Owner",
    companyUrl: "#",
    description: "Office for IT services in my home town.",
    technologies: ["Ms Office", "Ia", "Next.js", "Jira"],
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
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <section
        id="experience"
        className="mx-auto container py-16 md:py-22 lg:py-32 px-4 md:px-6 lg:px-8 max-w-7xl"
      >
        <h2 className="text-2xl text-accent-foreground font-bold tracking-tight mb-8">
          Experience
        </h2>

        <div className="mb-4 flex justify-center md:justify-start items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            <ChevronLeftIcon className="size-4 md:size-6" />
          </Button>
          <h3 className="md:text-lg">{experiences[activeIndex].period}</h3>
          <Button
            variant="ghost"
            size="icon"
            disabled={activeIndex === experiences.length - 1}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <ChevronRightIcon className="size-4 md:size-6" />
          </Button>
        </div>
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, x: -10, filter: "blur(4px)" },
            center: { opacity: 1, x: 0, filter: "blur(0px)" },
            exit: { opacity: 0, x: 10, filter: "blur(4px)" },
          }}
        >
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <a
                  href={exp.companyUrl}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  {exp.company}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardHeader>
              <CardContent>
                <CardDescription>{exp.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </TransitionPanel>
      </section>
      <div className="relative bottom-0 left-0 right-0 h-16 bg-linear-to-t from-muted to-transparent pointer-events-none" />
    </div>
  );
}
