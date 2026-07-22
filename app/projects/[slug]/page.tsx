import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject, projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) return {};

  const canonicalPath = `/projects/${project.slug}`;

  return {
    title: project.shortTitle,
    description: project.shortDescription,
    alternates: siteUrl ? { canonical: canonicalPath } : undefined,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: siteUrl ? canonicalPath : undefined,
      images: siteUrl ? [{ url: project.image, alt: project.imageAlt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: siteUrl ? [project.image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
