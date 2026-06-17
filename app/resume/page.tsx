import Link from 'next/link';
import { ArrowLeft, BriefcaseBusiness, Mail } from 'lucide-react';

const experience = [
  {
    company: 'Irving Oil',
    title: 'Electrical & Instrumentation Reliability Engineering Co-op',
    period: 'May 2026 - Present',
    points: [
      'Support refinery electrical and instrumentation reliability through field analysis, failure investigations, and design reviews on low-, medium-, and high-voltage systems.',
      'Assist power distribution and substation maintenance by validating P&IDs and drawings, supporting design changes, and improving long-term electrical asset performance.',
      'Work with MODBUS, PROFIBUS, ProSoft gateways, HMI/SCADA systems, automation control systems, and motor management relays to support device management, troubleshooting, and reliable operation.',
    ],
  },
  {
    company: 'Brightisle',
    title: 'Data Analyst, Remote Part-time',
    period: 'Apr 2025 - Present',
    points: [
      'Maintain and enhance Power BI and Tableau dashboards in Microsoft Fabric, improving operational visibility, schedule tracking, and planning support across healthcare programs.',
      'Develop automated workflows and data systems using Power Automate, SharePoint, SQL, and Python to improve process reliability, data accuracy, and reporting speed.',
    ],
  },
  {
    company: 'Irving Oil',
    title: 'Electrical Engineering Intern Co-op',
    period: 'Sept 2025 - Dec 2025',
    points: [
      'Designed and revised EHT circuits and AutoCAD drawings, completed load calculations, and configured PLC logic and EHT controllers for refinery electrical systems.',
      'Performed field troubleshooting of heat-trace systems and instrumentation, verifying continuity, resolving faults, and improving system reliability and uptime.',
      'Built and updated an ETAP model for part of the refinery, performing load flow, short-circuit, arc-flash, and protection studies.',
      'Supported the Co-Gen integration project through equipment assessments, ETAP studies, and electrical drawing updates for safe and reliable tie-in execution.',
    ],
  },
  {
    company: 'Seafair Capital',
    title: 'Project Management Intern Co-op',
    period: 'Jan 2025 - Apr 2025',
    points: [
      'Led payroll and HR process improvements, delivering Python, SQL, Power Automate, and Power Apps solutions that cut manual work by 50%.',
      'Built Power BI and Tableau dashboards and automated data pipelines across BlueSky, Momentum, and Caregivers, enabling real-time monitoring and faster issue detection.',
    ],
  },
];

const skillGroups = [
  [
    'Power and electrical',
    'ETAP, AutoCAD, EHT circuits, load calculations, short-circuit studies, arc-flash studies, protection studies, P&IDs, DIALux, Revit',
  ],
  [
    'Instrumentation and controls',
    'Siemens TIA Portal, RTAC Accelerator, MODBUS, PROFIBUS, ProSoft gateways, HMI/SCADA, PLC systems, motor management relays',
  ],
  [
    'Data and automation',
    'Python, SQL, Power BI, Tableau, Power Automate, Power Apps, SharePoint, Microsoft Fabric, MS Office Suite',
  ],
  ['Circuit tools', 'KiCAD, PSpice, MATLAB, sensors, oscilloscope validation, PCB design, analog signal conditioning'],
];

export const metadata = {
  title: 'Resume - Naman Arora',
  description: 'Web resume for Naman Arora focused on electrical reliability, power systems, controls, and automation.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:py-10">
        <header className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <a
            href="mailto:namana@mun.ca"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
        </header>

        <section className="w-full max-w-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80 md:p-8">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Electrical Engineering</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Naman Arora
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                Electrical Engineering student focused on refinery reliability, power distribution, instrumentation, controls, ETAP studies, and data automation.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              <p className="font-semibold text-slate-950">Memorial University of Newfoundland</p>
              <p>GPA: 3.95/4.0</p>
              <p>Expected graduation: 2028</p>
            </div>
          </div>

          <section className="border-b border-slate-200 py-6">
            <div className="mb-4 flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-teal-700" />
              <h2 className="text-xl font-semibold text-slate-950">Experience</h2>
            </div>
            <div className="space-y-5">
              {experience.map((role) => (
                <article key={`${role.company}-${role.period}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{role.title}</h3>
                      <p className="text-sm font-semibold text-teal-700">{role.company}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-slate-500">{role.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((point) => (
                      <li key={point} className="flex max-w-full gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                        <span className="min-w-0">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-xl font-semibold text-slate-950">Skills</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {skillGroups.map(([title, content]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{content}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
