"use client";

import { Calendar, Check, CodeXml, ContactRound, Copy, Download, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    let resetTimer: number | undefined;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      const copyOperation = navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
      resetTimer = window.setTimeout(() => setCopyStatus("idle"), 2200);
      await copyOperation;
    } catch {
      if (resetTimer) window.clearTimeout(resetTimer);
      setCopyStatus("error");
      window.setTimeout(() => setCopyStatus("idle"), 2200);
    }
  }

  const copyLabel = copyStatus === "copied" ? "Adresse copiée" : copyStatus === "error" ? "Copie impossible" : "Copier l’adresse";

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-white sm:px-12 lg:px-16 dark:border dark:border-slate-800">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-teal-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[.18em] text-teal-400">Contact</p><h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">Vous recherchez un alternant capable de transformer les données en solutions concrètes ? Échangeons.</h2><div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"><span className="flex items-center gap-2"><MapPin className="size-4 text-teal-400" />{profile.location} · Mobilité : {profile.mobility}</span><span className="flex items-center gap-2"><Calendar className="size-4 text-teal-400" />{profile.availability} · {profile.rhythm}</span></div></div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild><a href={`mailto:${profile.email}`}><Mail />M’écrire</a></Button>
              <Button variant="outline" className="border-slate-700 bg-slate-900 text-white hover:bg-slate-800 hover:text-white" onClick={copyEmail} aria-live="polite">{copyStatus === "copied" ? <Check /> : <Copy />}{copyLabel}</Button>
              <Button asChild variant="outline" className="border-slate-700 bg-slate-900 text-white"><a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn de Mohammed Boungab" title="Voir le profil LinkedIn de Mohammed Boungab"><ContactRound /></a></Button>
              <Button asChild variant="outline" className="border-slate-700 bg-slate-900 text-white"><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Voir le profil GitHub de Mohammed Boungab" title="Voir le profil GitHub de Mohammed Boungab"><CodeXml /></a></Button>
              <Button asChild variant="outline" className="border-slate-700 bg-slate-900 text-white"><a href={profile.cvDownloadUrl} download={profile.cvDownloadName} aria-label="Télécharger le CV de Mohammed Boungab" title="Télécharger le CV de Mohammed Boungab"><Download /></a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
