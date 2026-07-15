import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, GitBranch } from 'lucide-react';

export const metadata = {
  title: 'SIMOCODE Motor Monitoring Handover Guide - Naman Arora',
  description:
    'Browser-viewable commissioning and troubleshooting guide for the Siemens SIMOCODE to SEL RTAC motor monitoring integration project.',
};

const monitoredSignals = [
  'Group fault',
  'Group warning',
  'Overload prewarning',
  'Current-based load percentage',
  'Communication status',
];

const engineeringChecks = [
  'Commissioned the system in the correct order: SIMOCODE → PROFIBUS → PLX gateway → Modbus TCP → RTAC tags → HMI.',
  'Verified node health using SIMOCODE device LEDs, the PLX live list, and live data-exchange status before moving to tag mapping.',
  'Allocated dedicated register blocks per motor so new devices can be added in a repeatable pattern without overlapping addresses.',
  'Decoded packed status words into HMI-ready Boolean tags for group fault, group warning, overload prewarning, and communication health.',
  'Kept the initial scope monitoring-only, with no remote start/stop commands enabled until separate operational approvals and interlock reviews are complete.',
];

const proofImages = [
  {
    src: '/images/portfolio/simocode-architecture.webp',
    alt: 'Architecture diagram showing the PLX51-PBM gateway connected to multiple SIMOCODE devices over PROFIBUS with termination guidance.',
    label: 'System architecture and PROFIBUS termination strategy',
  },
  {
    src: '/images/portfolio/simocode-live-list.webp',
    alt: 'Live list screen showing the DP master and active PROFIBUS nodes.',
    label: 'Gateway-side live list confirmation',
  },
  {
    src: '/images/portfolio/simocode-termination.webp',
    alt: 'Close-up of the PLX51-PBM PROFIBUS connector with termination enabled.',
    label: 'Connector-level termination setting',
  },
  {
    src: '/images/portfolio/simocode-hero.webp',
    alt: 'Bench setup showing the laptop, Ethernet switch, RTAC connection, and PLX51-PBM communication path.',
    label: 'Bench setup and communication path',
  },
];

export default function SimocodeDocumentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10">
        <header className="mb-8 border-b border-slate-200 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                Industrial automation · motor protection
              </p>
              <h1 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                SIMOCODE Motor Monitoring Handover Guide
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 md:text-lg">
                This browser-viewable handover guide summarizes the commissioning logic, proof points, and troubleshooting
                approach used to bring Siemens SIMOCODE pro C motor-management data into an SEL-3555 RTAC through a
                ProSoft PLX51-PBM gateway.
              </p>
            </div>
            <a
              href="https://github.com/naman8857/naman8857.github.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              GitHub / Project Assets
              <GitBranch className="h-4 w-4" />
            </a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Communication path', 'SIMOCODE pro C → PROFIBUS DP → PLX51-PBM → Modbus TCP → SEL-3555 RTAC'],
            ['Current scope', 'Two motor-management devices commissioned with a scalable pattern for additional devices.'],
            ['Signals monitored', 'Group fault, group warning, overload prewarning, load percentage, and communication health.'],
            ['Project outcome', 'Validated live RTAC tags and produced a repeatable process for commissioning, mapping, troubleshooting, and HMI development.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <h2 className="text-xl font-semibold text-slate-950">Why this integration mattered</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              SIMOCODE motor-management devices provide valuable diagnostic information, but the RTAC used for monitoring
              does not natively sit on that PROFIBUS DP network. The engineering challenge was therefore not only to make
              communication work, but to prove where the communication path succeeded or failed across several layers:
              device configuration, PROFIBUS wiring, gateway status, Modbus mapping, RTAC tags, and HMI presentation.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The result was a monitoring-first architecture that preserves existing SIMOCODE equipment, exposes useful
              motor-health information in the RTAC, and gives future engineers a repeatable way to expand the system.
            </p>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
            <div className="relative aspect-[16/10] bg-white">
              <Image
                src="/images/portfolio/simocode-hero.webp"
                alt="SIMOCODE to RTAC bench setup with Ethernet switch, laptop, gateway, and cables labelled"
                fill
                className="object-contain p-4"
              />
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['Problem', 'SIMOCODE devices communicate over PROFIBUS DP, but the SEL RTAC reads structured data more naturally through Modbus TCP. Every part of the path therefore had to agree: addresses, data length, wiring, termination, gateway configuration, register mapping, and RTAC tag definitions.'],
            ['Solution / Build', 'The PLX51-PBM was configured as the PROFIBUS master and Modbus TCP server. SIMOCODE devices were commissioned as slaves, motor information was grouped into dedicated register blocks, and RTAC tags were mapped from holding registers into HMI-ready digital indications and a current-based load value.'],
            ['Engineering impact', 'The work produced more than a one-time bench demo. It created a commissioning order, a repeatable register structure, a troubleshooting method, and an HMI-ready signal model that can support future motor additions with less uncertainty.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
              <h2 className="text-base font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <h2 className="text-lg font-semibold text-slate-950">Signals monitored</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {monitoredSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {signal}
                </span>
              ))}
            </div>

            <h2 className="mt-7 text-lg font-semibold text-slate-950">Key handover notes</h2>
            <div className="mt-4 space-y-3">
              {engineeringChecks.map((check) => (
                <div key={check} className="flex gap-3 text-sm leading-7 text-slate-600">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-600" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </aside>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Proof and visuals</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Validation evidence and troubleshooting visuals
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {proofImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={index === 0 ? 'overflow-hidden rounded-xl border border-slate-200 bg-white md:col-span-2' : 'overflow-hidden rounded-xl border border-slate-200 bg-white'}
                >
                  <div className={index === 0 ? 'relative aspect-[16/9] bg-white' : 'relative aspect-[16/9] bg-white'}>
                    <Image src={image.src} alt={image.alt} fill className="object-contain p-3" />
                  </div>
                  <figcaption className="border-t border-slate-200 px-4 py-3 text-xs font-semibold text-slate-600">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">What I learned</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Recruiter-facing reflection
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            This project strengthened my understanding of how industrial systems from different manufacturers are
            integrated. I learned that successful communication depends on more than matching protocols. Device roles,
            station addresses, physical wiring, termination, data lengths, register conventions, software-to-hardware
            configuration, and clear validation steps all have to agree.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            It also reinforced the importance of troubleshooting from the physical layer upward and documenting both the
            working solution and the reasoning used to reach it, so the next engineer can expand or maintain the system
            with confidence.
          </p>
        </section>
      </div>
    </main>
  );
}
