import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/5">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.025]" />
        <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1.5 font-mono text-[.68rem] text-white backdrop-blur">0{index + 1} / CASE STUDY</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-teal-700 dark:text-teal-400"><ShieldCheck className="size-3.5" />{project.status}</p>
        <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">{project.shortTitle}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.skills.slice(0, 3).map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
        <div className="mt-6 flex gap-2">
          <Button asChild className="flex-1"><Link href={`/projects/${project.slug}`}>Voir le projet<ArrowUpRight className="size-4" /></Link></Button>
        </div>
      </div>
    </Card>
  );
}
