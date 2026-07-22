import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  CodeXml,
  Database,
  ExternalLink,
  Film,
  Gauge,
  Lightbulb,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  Wrench,
} from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sectionIconClass = "size-5 text-teal-700 dark:text-teal-400";

function CaseSection({
  id,
  title,
  icon,
  children,
}: {
  id?: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200 py-10 dark:border-slate-800 sm:py-14">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-teal-50 dark:bg-teal-950/50">{icon}</span>
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-[0.98rem] leading-7 text-slate-600 dark:text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const hasLinks = Boolean(project.githubUrl || project.demoUrl || project.notebookUrl);

  return (
    <article className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Button asChild variant="ghost" className="-ml-3 mb-8">
          <Link href="/projects"><ArrowLeft aria-hidden="true" />Retour aux projets</Link>
        </Button>

        <header className="grid items-end gap-10 lg:grid-cols-[1fr_18rem]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{project.eyebrow}</Badge>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <ShieldCheck className="size-4 text-teal-600" aria-hidden="true" />{project.status}
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{project.fullDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
              {project.technologies.slice(0, 5).map((technology) => <Badge key={technology} className="bg-slate-100 dark:bg-slate-900">{technology}</Badge>)}
          </div>
        </header>

        {hasLinks && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && <Button asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><CodeXml />Code source<ArrowUpRight /></a></Button>}
            {project.notebookUrl && <Button asChild variant="outline"><a href={project.notebookUrl} target="_blank" rel="noopener noreferrer">Notebook<ExternalLink /></a></Button>}
            {project.demoUrl && <Button asChild variant="outline"><a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Démonstration<ExternalLink /></a></Button>}
          </div>
        )}

        <figure className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-950/10 dark:border-slate-800">
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover object-top" />
          </div>
        </figure>

        <section aria-label="Métriques principales" className="relative z-10 -mt-5 grid gap-3 px-3 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{metric.label}</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-teal-700 dark:text-teal-400">{metric.value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{metric.detail}</p>
            </div>
          ))}
        </section>

        <div className="mx-auto mt-8 max-w-4xl">
          <CaseSection title="Contexte métier" icon={<Gauge className={sectionIconClass} aria-hidden="true" />}>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{project.context}</p>
          </CaseSection>

          <CaseSection title="Problème traité" icon={<Target className={sectionIconClass} aria-hidden="true" />}>
            <p className="rounded-2xl border-l-4 border-teal-500 bg-teal-50 p-6 text-lg font-medium leading-8 text-slate-800 dark:bg-teal-950/30 dark:text-slate-200">{project.problem}</p>
          </CaseSection>

          <div className="grid gap-x-12 md:grid-cols-2">
            <CaseSection title="Objectifs" icon={<Target className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.objectives} /></CaseSection>
            <CaseSection title="Mon rôle" icon={<UserRound className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.role} /></CaseSection>
          </div>

          <CaseSection title="Données utilisées" icon={<Database className={sectionIconClass} aria-hidden="true" />}>
            <div className="grid gap-5 rounded-2xl bg-slate-100 p-6 dark:bg-slate-900 sm:grid-cols-2">
              <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Jeu de données</p><p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{project.data.summary}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Dimensions</p><p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{project.data.dimensions}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Source</p><p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{project.data.source}</p></div>
              {project.data.target && <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Cible</p><p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{project.data.target}</p></div>}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">{project.data.variables.map((variable) => <Badge key={variable} className="bg-slate-100 dark:bg-slate-900">{variable}</Badge>)}</div>
            {project.data.privacy && <p className="mt-5 flex gap-3 text-sm leading-6 text-slate-500 dark:text-slate-400"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal-600" aria-hidden="true" />{project.data.privacy}</p>}
          </CaseSection>

          <div className="grid gap-x-12 md:grid-cols-2">
            <CaseSection title="Méthodologie" icon={<Sparkles className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.methodology} /></CaseSection>
            <CaseSection title="Fonctionnalités ou modèles" icon={<Wrench className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.features} /></CaseSection>
          </div>

          <CaseSection title="Architecture & pipeline" icon={<Route className={sectionIconClass} aria-hidden="true" />}>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.pipeline.map((step, index) => (
                <li key={step} className="relative rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">{step}</p>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection title="Résultats réels" icon={<CheckCircle2 className={sectionIconClass} aria-hidden="true" />}>
            <BulletList items={project.results} />
            <p className="mt-6 rounded-xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-600 dark:bg-slate-900 dark:text-slate-400">{project.verificationNote}</p>
          </CaseSection>
        </div>

        {project.video && (
          <section className="mx-auto max-w-5xl border-t border-slate-200 py-12 dark:border-slate-800 sm:py-16" aria-labelledby="video-title">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-teal-50 dark:bg-teal-950/50"><Film className={sectionIconClass} aria-hidden="true" /></span>
              <div><h2 id="video-title" className="text-2xl font-bold tracking-tight">{project.video.title}</h2><p className="mt-1 text-sm text-slate-500">Durée : {project.video.duration}</p></div>
            </div>
            <video className="aspect-video w-full rounded-3xl border border-slate-200 bg-slate-950 shadow-xl dark:border-slate-800" controls preload="metadata" playsInline poster={project.video.poster} aria-label={project.video.title}>
              <source src={project.video.src} type="video/mp4" />
              Votre navigateur ne prend pas en charge la vidéo HTML5.
            </video>
            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{project.video.description}</p>
          </section>
        )}

        <section className="mx-auto max-w-6xl border-t border-slate-200 py-12 dark:border-slate-800 sm:py-16" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="text-2xl font-bold tracking-tight">Galerie</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {project.gallery.map((media) => (
              <figure key={media.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900"><Image src={media.src} alt={media.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" /></div>
                <figcaption className="border-t border-slate-200 p-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-400">{media.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mx-auto grid max-w-5xl gap-x-12 md:grid-cols-2">
          <CaseSection title="Difficultés" icon={<CircleAlert className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.challenges} /></CaseSection>
          <CaseSection title="Solutions appliquées" icon={<Wrench className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.solutions} /></CaseSection>
          <CaseSection title="Compétences démontrées" icon={<CodeXml className={sectionIconClass} aria-hidden="true" />}>
            <div className="flex flex-wrap gap-2">{project.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}{project.technologies.map((technology) => <Badge key={technology} className="bg-slate-100 dark:bg-slate-900">{technology}</Badge>)}</div>
          </CaseSection>
          <CaseSection title="Apprentissages" icon={<Lightbulb className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.lessons} /></CaseSection>
          <CaseSection title="Limites" icon={<CircleAlert className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.limits} /></CaseSection>
          <CaseSection title="Améliorations futures" icon={<Sparkles className={sectionIconClass} aria-hidden="true" />}><BulletList items={project.futureImprovements} /></CaseSection>
        </div>
      </div>
    </article>
  );
}
