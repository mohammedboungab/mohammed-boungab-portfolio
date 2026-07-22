import { BarChart3, Boxes, BrainCircuit, Code2, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const icons = [BarChart3, BrainCircuit, Boxes, Wrench, Code2];

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Compétences" title="Une boîte à outils centrée sur la Data" description="Des compétences mobilisées pour comprendre un besoin, préparer les données, construire une solution et restituer des résultats utiles." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((category, index) => {
            const Icon = icons[index];
            return <Card key={category.title} className={`p-6 ${category.secondary ? "md:col-span-2 lg:col-span-2" : "lg:col-span-3"}`}><span className="mb-5 grid size-10 place-items-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"><Icon className="size-5" /></span><h3 className="text-lg font-bold">{category.title}</h3><p className="mt-2 text-sm text-slate-500">{category.description}</p><div className="mt-5 flex flex-wrap gap-2">{category.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></Card>;
          })}
        </div>
      </div>
    </section>
  );
}
