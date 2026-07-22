"use client";

import Link from "next/link";
import { CodeXml, ContactRound, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile, socialLinks } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  ["Accueil", "/#accueil"], ["Projets", "/projects"], ["Compétences", "/#competences"], ["Parcours", "/#parcours"], ["Contact", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const github = socialLinks.find((link) => link.label === "GitHub");
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/#accueil" className="font-bold tracking-tight" aria-label="Accueil — Mohammed Boungab">
          MB<span className="text-teal-600">.</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {nav.map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-1 lg:flex">
          <ThemeToggle />
          {github && <Button asChild variant="ghost" size="icon"><a href={github.url} target="_blank" rel="noopener noreferrer" aria-label={github.ariaLabel} title={github.ariaLabel}><CodeXml className="size-4" /></a></Button>}
          {linkedin && <Button asChild variant="ghost" size="icon"><a href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label={linkedin.ariaLabel} title={linkedin.ariaLabel}><ContactRound className="size-4" /></a></Button>}
          <Button asChild size="sm" variant="outline"><a href={profile.cvDownloadUrl} download={profile.cvDownloadName}><Download className="size-4" />CV</a></Button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 px-5 py-4 lg:hidden dark:border-slate-800">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Navigation mobile">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-slate-100 dark:hover:bg-slate-800">{label}</Link>)}
            <div className="mt-3 flex gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
              {github && <Button asChild variant="outline" className="flex-1"><a href={github.url} target="_blank" rel="noopener noreferrer" aria-label={github.ariaLabel} onClick={() => setOpen(false)}><CodeXml />GitHub</a></Button>}
              {linkedin && <Button asChild variant="outline" className="flex-1"><a href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label={linkedin.ariaLabel} onClick={() => setOpen(false)}><ContactRound />LinkedIn</a></Button>}
              <Button asChild variant="outline" className="flex-1"><a href={profile.cvDownloadUrl} download={profile.cvDownloadName} onClick={() => setOpen(false)}><Download />CV</a></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
