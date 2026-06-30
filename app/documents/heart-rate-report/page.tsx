import Link from 'next/link';
import ImageCarousel from '../../../components/ImageCarousel';
import { ArrowLeft, GitBranch } from 'lucide-react';

const reportPages = [
  ['/images/heart-rate-report.png', 'Optical heart rate monitor report cover'],
  ['/images/heart-rate-page-02.png', 'Optical heart rate monitor report page 2'],
  ['/images/heart-rate-page-03.png', 'Optical heart rate monitor report page 3'],
  ['/images/heart-rate-page-04.png', 'Optical heart rate monitor report page 4'],
  ['/images/heart-rate-page-05.png', 'Optical heart rate monitor report page 5'],
  ['/images/heart-rate-page-06.png', 'Optical heart rate monitor report page 6'],
  ['/images/heart-rate-page-07.png', 'Optical heart rate monitor report page 7'],
  ['/images/heart-rate-page-08.png', 'Optical heart rate monitor report page 8'],
  ['/images/heart-rate-page-09.png', 'Optical heart rate monitor report page 9'],
  ['/images/heart-rate-page-10.png', 'Optical heart rate monitor report page 10'],
];

export const metadata = {
  title: 'Optical Heart Rate Report - Naman Arora',
  description: 'Browser-viewable project report for the optical heart rate monitor.',
};

export default function HeartRateReportPage() {
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
              Optical Heart Rate Monitor Report
            </h1>
          </div>
          <a
            href="https://github.com/naman8857/Optical-Heart-Rate-Monitor-Project"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
          >
            GitHub Repo
            <GitBranch className="h-4 w-4" />
          </a>
        </header>

        <div>
          <ImageCarousel
            slides={reportPages.map(([src, alt]) => ({ src, alt }))}
            interval={3500}
          />
        </div>
      </div>
    </main>
  );
}
