import { CalendarDays, GraduationCap, Languages, MapPin, Repeat2 } from "lucide-react";
import { profile } from "@/data/profile";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const facts = [
  { icon: GraduationCap, label: profile.currentEducation },
  { icon: CalendarDays, label: "Alternance dès septembre 2026" },
  { icon: Repeat2, label: `Rythme ${profile.rhythm}` },
  { icon: MapPin, label: `${profile.location} · Mobilité : ${profile.mobility}` },
  { icon: Languages, label: profile.languages },
];

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading eyebrow="À propos" title="Un parcours scientifique tourné vers la donnée" />
        <div>
          <p className="text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.about}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label }) => <Card key={label} className="flex items-center gap-3 p-4"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"><Icon className="size-4" /></span><span className="text-sm font-medium">{label}</span></Card>)}
          </div>
        </div>
      </div>
    </section>
  );
}
