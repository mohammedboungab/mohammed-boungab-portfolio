import Link from "next/link";
import { profile, socialLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Portfolio.</p>
        <nav className="flex flex-wrap gap-5" aria-label="Liens du pied de page">
          <Link href="/projects" className="hover:text-teal-600">Projets</Link>
          {socialLinks.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} className="hover:text-teal-600">{link.label}</a>)}
          <a href={`mailto:${profile.email}`} className="hover:text-teal-600">E-mail</a>
          <a href={profile.cvDownloadUrl} download={profile.cvDownloadName} className="hover:text-teal-600">CV</a>
        </nav>
      </div>
    </footer>
  );
}
