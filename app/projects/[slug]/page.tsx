import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, ExternalLink, FileText } from 'lucide-react';
import { getProjectBySlug, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;
  const heroImageClassName = (project.heroImageFit ?? project.imageFit) === 'contain' ? 'object-contain p-4' : 'object-cover';
  const hasThreeProofImages = project.gallery.length === 3;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:py-10">
        <header className="mb-8 border-b border-slate-200 pb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to project gallery
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl border border-teal-100 bg-teal-50 p-2 text-teal-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  {project.pageCategory ?? project.category}
                </p>
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                {project.heroDescription ?? project.summary}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {project.repoLabel ?? 'GitHub / Project Assets'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                {project.docUrl ? (
                  <Link
                    href={project.docUrl}
                    className={project.repoUrl
                      ? 'inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50'
                      : 'inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'}
                  >
                    {project.docLabel ?? 'View Document'}
                    <FileText className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/80">
              <div className="relative aspect-[16/10] bg-white">
                <Image
                  src={project.heroImage ?? project.image}
                  alt={`${project.title} main project image`}
                  fill
                  priority
                  className={heroImageClassName}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </header>


        {project.status ? (
          <section className="mb-8 rounded-2xl border border-amber-200 bg-amber-50/70 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">Validation status</p>
            <p className="mt-2 text-base font-semibold text-slate-950">{project.status.label}</p>
            <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-700">{project.status.detail}</p>
          </section>
        ) : null}

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ['Problem', project.problem],
            ['Solution / Build', project.built],
            ['Engineering Impact', project.impact],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
              <h2 className="text-base font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
            <h2 className="text-lg font-semibold text-slate-950">Tools and skills shown</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h2 className="mt-7 text-lg font-semibold text-slate-950">Key engineering details</h2>
            <div className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal-700" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </aside>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Proof and visuals
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Project images and validation evidence
                </h2>
              </div>
              {project.docUrl ? (
                <Link href={project.docUrl} className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                  Open full document
                </Link>
              ) : null}
            </div>

            <div className={hasThreeProofImages ? 'grid gap-4 md:grid-cols-2' : 'grid gap-4 md:grid-cols-3'}>
              {project.gallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={index === 0
                    ? `${hasThreeProofImages ? 'md:col-span-2' : 'md:col-span-3'} overflow-hidden rounded-xl border border-slate-200 bg-white`
                    : 'overflow-hidden rounded-xl border border-slate-200 bg-white'}
                >
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    className={`${index === 0 || hasThreeProofImages ? 'relative aspect-[16/9]' : 'relative aspect-[4/3]'} block bg-white transition hover:bg-slate-50`}
                    aria-label={`Open full-size image: ${item.label}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      sizes={index === 0 ? '(max-width: 1024px) 100vw, 820px' : hasThreeProofImages ? '(max-width: 1024px) 100vw, 420px' : '(max-width: 1024px) 100vw, 260px'}
                    />
                  </a>
                  <figcaption className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600">
                    <span>{item.label}</span>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-teal-700 hover:text-teal-800"
                    >
                      Open
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
