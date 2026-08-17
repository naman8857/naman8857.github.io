'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  MapPin,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';

type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  focus: string;
  points: string[];
  tools: string[];
  current?: boolean;
};

const experience: Experience[] = [
  {
    company: 'Irving Oil',
    title: 'Electrical & Instrumentation Reliability Engineering Co-op',
    location: 'Saint John, NB, Canada',
    period: 'May 2026 - Present',
    focus: 'Refinery reliability, power distribution, instrumentation, and control-system support.',
    points: [
      'Support refinery electrical and instrumentation reliability through field analysis, failure investigations, and design reviews on low-, medium-, and high-voltage systems.',
      'Assist power distribution and substation maintenance by validating P&IDs and drawings, supporting design changes, and improving long-term electrical asset performance.',
      'Work with MODBUS, PROFIBUS, ProSoft gateways, HMI/SCADA systems, automation control systems, and motor management relays for device management, troubleshooting, and reliable operation.',
    ],
    tools: ['Reliability', 'P&IDs', 'Substations', 'HMI/SCADA', 'MODBUS', 'PROFIBUS'],
    current: true,
  },
  {
    company: 'Brightisle',
    title: 'Data Analyst, Remote Part-time',
    location: 'St. Johns, NL, Canada',
    period: 'Apr 2025 - Present',
    focus: 'Operational reporting, healthcare program visibility, and process automation.',
    points: [
      'Maintain and enhance Power BI and Tableau dashboards in Microsoft Fabric, improving operational visibility, schedule tracking, and planning support across healthcare programs.',
      'Develop automated workflows and data systems using Power Automate, SharePoint, SQL, and Python to improve process reliability, data accuracy, and reporting speed.',
    ],
    tools: ['Power BI', 'Tableau', 'Microsoft Fabric', 'SQL', 'Python', 'Power Automate'],
    current: true,
  },
  {
    company: 'Irving Oil',
    title: 'Electrical Engineering Intern Co-op',
    location: 'Saint John, NB, Canada',
    period: 'Sept 2025 - Dec 2025',
    focus: 'Refinery electrical design, heat-trace reliability, ETAP studies, and Co-Gen integration support.',
    points: [
      'Designed and revised EHT circuits and AutoCAD drawings, completed load calculations, and configured PLC logic and EHT controllers for refinery electrical systems.',
      'Performed field troubleshooting of heat-trace systems and instrumentation by verifying continuity, resolving faults, and improving system reliability and uptime.',
      'Built and updated an ETAP model for part of the refinery, performing load flow, short-circuit, arc-flash, and protection studies.',
      'Supported the Co-Gen integration project through equipment assessments, ETAP studies, and electrical drawing updates for safe and reliable tie-in execution.',
    ],
    tools: ['ETAP', 'AutoCAD', 'EHT', 'PLC Logic', 'Arc Flash', 'Co-Gen'],
  },
  {
    company: 'Seafair Capital',
    title: 'Project Management Intern Co-op',
    location: 'St. Johns, NL, Canada',
    period: 'Jan 2025 - Apr 2025',
    focus: 'Cross-company process improvement, dashboards, payroll systems, and workflow automation.',
    points: [
      'Led payroll and HR process improvements, delivering Python, SQL, Power Automate, and Power Apps solutions that cut manual work by 50%.',
      'Built Power BI and Tableau dashboards and automated data pipelines across BlueSky, Momentum, and Caregivers, enabling real-time monitoring and faster issue detection.',
    ],
    tools: ['Python', 'SQL', 'Power Apps', 'Power BI', 'Tableau', 'Automation'],
  },
];

export function ExperienceShowcase() {
  const [selectedRole, setSelectedRole] = useState<Experience | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedRole) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedRole(null);
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedRole]);

  function openRole(role: Experience, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelectedRole(role);
  }

  function closeRole() {
    setSelectedRole(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section id="experience" className="px-4 py-12 sm:px-6 md:py-16">
      <div className="portfolio-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="section-heading mx-auto mb-8 max-w-4xl text-center md:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Professional experience, summarized for quick review.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Each position shows the employer, period, location, and technical focus. Open a role for the detailed work, systems, and tools.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
              className="group flex min-h-[250px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/80"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-teal-700">{role.company}</p>
                    {role.current ? (
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                    {role.title}
                  </h3>
                </div>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-teal-700">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {role.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {role.location}
                </span>
              </div>

              <p className="mt-4 text-sm font-medium leading-6 text-slate-700">{role.focus}</p>

              <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                <div className="flex min-w-0 flex-wrap gap-2">
                  {role.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.72rem] font-semibold text-slate-600"
                    >
                      {tool}
                    </span>
                  ))}
                  {role.tools.length > 3 ? (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.72rem] font-semibold text-slate-500">
                      +{role.tools.length - 3}
                    </span>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={(event: ReactMouseEvent<HTMLButtonElement>) => openRole(role, event.currentTarget)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label={`View experience details for ${role.title} at ${role.company}`}
                >
                  View experience
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRole ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-slate-950/55 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event: ReactMouseEvent<HTMLDivElement>) => {
              if (event.target === event.currentTarget) closeRole();
            }}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-dialog-title"
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-7">
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeRole}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label="Close experience details"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="pr-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-teal-700">{selectedRole.company}</p>
                    {selectedRole.current ? (
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <h3 id="experience-dialog-title" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {selectedRole.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {selectedRole.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {selectedRole.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-h-[72vh] overflow-y-auto px-5 py-6 sm:px-7 sm:py-7">
                <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-teal-700">Main focus</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">{selectedRole.focus}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-slate-950">What I worked on</h4>
                  <div className="mt-4 space-y-3">
                    {selectedRole.points.map((point) => (
                      <div key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <Check className="mt-1.5 h-4 w-4 shrink-0 text-teal-700" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Tools and areas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedRole.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
