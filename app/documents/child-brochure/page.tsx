import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, GitBranch } from 'lucide-react';

export const metadata = {
  title: 'Child Monitoring Brochure - Naman Arora',
  description: 'Browser-viewable project brochure for the smart child monitoring system.',
};

export default function ChildBrochurePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:py-10">
        <header className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Smart Child Monitoring Brochure
            </h1>
          </div>
          <a
            href="https://github.com/naman8857/Child-Monitoring-Project-ECE-5000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
          >
            GitHub Repo
            <GitBranch className="h-4 w-4" />
          </a>
        </header>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/80">
          <Image
            src="/images/child-brochure.png"
            alt="Smart child monitoring and comfort control brochure"
            width={1600}
            height={1200}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </main>
  );
}
