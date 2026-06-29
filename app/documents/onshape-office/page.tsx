import Link from 'next/link';
import { ArrowLeft, Download, GitBranch } from 'lucide-react';

const pdfUrl = '/images/Onshape%20Project/Naman_Arora_CAD_Office_Workspace_Project_Document.pdf';
const repoUrl =
  'https://github.com/naman8857/naman-portfolio/tree/master/public/images/Onshape%20Project';

export const metadata = {
  title: 'Onshape Office Workspace Design - Naman Arora',
  description: 'Browser-viewable project document for the Onshape office workspace design.',
};

export default function OnshapeOfficePage() {
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
              Onshape Office Workspace Design
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              A first-year CAD and engineering graphics project focused on spatial layout,
              section-view thinking, drawing-sheet communication, and practical documentation.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              Project Assets
              <GitBranch className="h-4 w-4" />
            </a>
            <a
              href={pdfUrl}
              download
              className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Download PDF
              <Download className="h-4 w-4" />
            </a>
          </div>
        </header>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/80">
          <div className="relative mx-auto max-w-4xl" style={{ aspectRatio: '8.5/11' }}>
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="h-full w-full border-0"
              title="Onshape office workspace project document"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
