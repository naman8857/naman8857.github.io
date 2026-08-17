import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectTile({ project }: { project: Project }) {
  const Icon = project.icon;
  const displayTitle = project.cardTitle ?? project.title;
  const imageClassName = project.imageFit === 'contain'
    ? 'object-contain p-3 transition duration-500 group-hover:scale-[1.03]'
    : 'object-cover transition duration-500 group-hover:scale-[1.03]';
  const visibleTools = project.tools.slice(0, 4);
  const extraToolCount = project.tools.length - visibleTools.length;
  const hasSecondaryAction = Boolean(project.repoUrl || project.docUrl);

  return (
    <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/80 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/90">
      <Link href={`/projects/${project.slug}`} className="block" aria-label={`View ${project.title}`}>
        <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-white">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className={imageClassName}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-teal-700">
              {project.category}
            </p>
            <h3 className="line-clamp-3 text-xl font-semibold tracking-tight text-slate-950">
              {displayTitle}
            </h3>
          </div>
          <div className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2 text-teal-700">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
            >
              {tool}
            </span>
          ))}
          {extraToolCount > 0 ? (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
              +{extraToolCount} more
            </span>
          ) : null}
        </div>

        <div className={`mt-auto grid gap-3 pt-6 ${hasSecondaryAction ? 'grid-cols-2' : 'grid-cols-1'}`}>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Project
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              {project.repoLabel ?? 'GitHub'}
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          ) : project.docUrl ? (
            <Link
              href={project.docUrl}
              className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              Report
              <FileText className="h-4 w-4 shrink-0" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
