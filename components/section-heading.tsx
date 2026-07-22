export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="mt-4 text-pretty text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}
