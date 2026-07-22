import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, CodeXml, ContactRound, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)] dark:opacity-30" />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_.75fr] lg:py-24">
        <div>
          <Badge className="mb-6 border-teal-200 bg-teal-50 text-teal-800 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-300"><span className="mr-2 size-2 rounded-full bg-teal-500" />Alternance · Septembre 2026</Badge>
          <p className="mb-3 font-semibold text-slate-600 dark:text-slate-300">Bonjour, je suis</p>
          <h1 className="text-balance text-5xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">{profile.name}</h1>
          <p className="mt-5 max-w-3xl text-balance text-xl font-semibold leading-8 text-slate-700 sm:text-2xl dark:text-slate-200">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl border-l-2 border-teal-500 pl-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{profile.search}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="default"><Link href="#projets">Voir mes projets<ArrowDownRight className="size-4" /></Link></Button>
            <Button asChild variant="outline"><a href={profile.cvDownloadUrl} download={profile.cvDownloadName}><Download className="size-4" />Télécharger mon CV</a></Button>
            <Button asChild variant="outline"><Link href="#contact"><Mail className="size-4" />Me contacter</Link></Button>
            <Button asChild variant="ghost" size="icon"><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Voir le profil GitHub de Mohammed Boungab" title="Voir le profil GitHub de Mohammed Boungab"><CodeXml className="size-4" /></a></Button>
            <Button asChild variant="ghost" size="icon"><a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn de Mohammed Boungab" title="Voir le profil LinkedIn de Mohammed Boungab"><ContactRound className="size-4" /></a></Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-500"><MapPin className="size-4 text-teal-600" />{profile.location} · Mobilité : {profile.mobility}</p>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-label="Photo de profil et domaines de spécialisation">
          <div className="data-orbit profile-stage relative mx-auto aspect-[3/4] max-w-sm">
            <div className="profile-glow absolute inset-[12%] -z-10 rounded-full bg-teal-400/25 blur-3xl" aria-hidden="true" />
            <div className="profile-glass-halo absolute -inset-6 -z-10" aria-hidden="true" />
            <div className="profile-morph-shell relative h-full p-2.5 sm:p-3">
              <div className="profile-photo-frame relative h-full overflow-hidden rounded-[1.6rem] bg-slate-100 dark:bg-slate-950">
                <Image src={profile.profileImage} alt={profile.profileImageAlt} fill priority sizes="(max-width: 1024px) 384px, 30vw" className="object-contain" />
                <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/35 dark:ring-white/10" aria-hidden="true" />
              </div>
            </div>
            <span className="orbit-label profile-tech-badge -left-[8%] top-[16%]">Python</span>
            <span className="orbit-label profile-tech-badge -right-[10%] top-[32%] [animation-delay:-1.2s]">Machine Learning</span>
            <span className="orbit-label profile-tech-badge -left-[12%] bottom-[20%] [animation-delay:-2.4s]">Data Analysis</span>
            <span className="orbit-label profile-tech-badge -right-[8%] bottom-[8%] [animation-delay:-3.6s]">Automation</span>
            <span className="absolute -right-2 top-[8%] size-3 rounded-full bg-teal-500 shadow-[0_0_18px_rgba(20,184,166,.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
