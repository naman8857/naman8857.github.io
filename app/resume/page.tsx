'use client';

import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10">
        <header className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <a
            href="/Naman-Arora-Resume.pdf"
            download="Naman-Arora-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </header>

        <div className="flex flex-col gap-6">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <FileText className="mx-auto mb-3 h-12 w-12 text-teal-700" />
            <h1 className="text-2xl font-semibold text-slate-950 md:text-3xl">Naman Arora</h1>
            <p className="mt-2 text-slate-600">Electrical Engineering • Power Systems • Reliability • Automation</p>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="relative mx-auto max-w-4xl" style={{ aspectRatio: '8.5/11' }}>
              <iframe
                src="/Naman-Arora-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="h-full w-full rounded-lg border-0"
                title="Resume PDF"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/Naman-Arora-Resume.pdf"
              download="Naman-Arora-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
