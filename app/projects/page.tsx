import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Projets",
  description: "Projets Data, Machine Learning, Intelligence Artificielle et Objets Connectés de Mohammed Boungab.",
  alternates: siteUrl ? { canonical: "/projects" } : undefined,
  openGraph: {
    title: "Projets — Mohammed Boungab",
    description: "Études de cas en Data, Machine Learning, Intelligence Artificielle et Objets Connectés.",
    url: siteUrl ? "/projects" : undefined,
  },
};

export default function ProjectsPage() {
  return (
    <section className="min-h-[70vh] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-teal-700 dark:text-teal-400">Portfolio</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Projets</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">Trois études de cas documentées à partir du code, des données et des résultats réels : une plateforme de stock, une détection de fraude et une prédiction des courses de taxi susceptibles de recevoir un pourboire élevé.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
