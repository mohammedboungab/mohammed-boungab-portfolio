import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-16 bg-slate-100/70 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Projets principaux" title="Des données jusqu’à la décision" description="Trois projets terminés qui illustrent une approche concrète de l’analyse, du machine learning et de la création d’outils utiles." />
          <Button asChild variant="ghost" className="mb-10 self-start sm:self-auto"><Link href="/projects">Tous les projets<ArrowRight className="size-4" /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
