import { education } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="parcours" className="scroll-mt-16 bg-slate-100/70 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Parcours académique" title="De la physique aux systèmes intelligents" description="Un parcours progressif qui combine rigueur scientifique, intelligence artificielle, ingénierie des données et objets connectés." />
        <ol className="relative ml-3 border-l border-slate-300 dark:border-slate-700">
          {education.map((item) => (
            <li key={item.period} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[7px] top-1 size-3.5 rounded-full border-2 border-white bg-teal-500 ring-4 ring-teal-100 dark:border-slate-950 dark:ring-teal-950" />
              <p className="font-mono text-sm font-bold text-teal-700 dark:text-teal-400">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{item.degree}</h3>
              {item.details && <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">{item.details}</p>}
              {item.institution && <p className="mt-1 text-sm text-slate-500">{item.institution}</p>}
              <div className="mt-4 flex flex-wrap gap-2">{item.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
