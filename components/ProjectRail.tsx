'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProjectTile } from '@/components/ProjectTile';
import type { Project } from '@/data/projects';

export function ProjectRail({ projects }: { projects: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(projects.length > 1);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;

    if (!rail) return;

    const remaining = rail.scrollWidth - rail.clientWidth - rail.scrollLeft;
    setCanScrollBack(rail.scrollLeft > 8);
    setCanScrollForward(remaining > 8);
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) return;

    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(rail);
    rail.addEventListener('scroll', updateScrollState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      rail.removeEventListener('scroll', updateScrollState);
    };
  }, [updateScrollState]);

  function move(direction: -1 | 1) {
    const rail = railRef.current;

    if (!rail) return;

    const firstCard = rail.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? rail.clientWidth * 0.85;
    const gap = 24;

    rail.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">
          Swipe on touch screens or use the arrows to explore every project.
        </p>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={!canScrollBack}
            aria-label="Show previous projects"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-teal-300 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={!canScrollForward}
            aria-label="Show more projects"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-teal-300 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="project-rail -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:gap-6 sm:px-6 lg:mx-0 lg:px-0"
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="w-[84vw] min-w-[84vw] max-w-[420px] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] sm:min-w-[calc((100%-1.5rem)/2)] sm:max-w-none lg:w-[calc((100%-3rem)/3)] lg:min-w-[calc((100%-3rem)/3)] 2xl:w-[calc((100%-4.5rem)/4)] 2xl:min-w-[calc((100%-4.5rem)/4)]"
          >
            <ProjectTile project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
