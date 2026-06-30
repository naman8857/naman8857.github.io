'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CircuitBoard,
  Database,
  FileText,
  GitBranch,
  Gauge,
  Layers3,
  Mail,
  PanelsTopLeft,
  RadioTower,
  Route,
  ShieldCheck,
  Waypoints,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { ProjectTile } from '@/components/ProjectTile';
import { projects } from '@/data/projects';

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  tone: string;
  items: string[];
};

type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  focus: string;
  points: string[];
  tools: string[];
};

const navItems = ['Skills', 'Experience', 'Projects', 'Contact'];

const skills: SkillGroup[] = [
  {
    title: 'Power and Electrical Design',
    icon: Zap,
    tone: 'text-sky-700 bg-sky-50 border-sky-100',
    items: [
      'ETAP',
      'AutoCAD',
      'EHT Circuits',
      'Load Calculations',
      'Arc Flash Studies',
      'Short-Circuit Studies',
      'Protection Studies',
      'Substation Support',
      'P&ID Validation',
      'Electrical Drawings',
      'DIALux',
      'Revit',
    ],
  },
  {
    title: 'Instrumentation and Controls',
    icon: Gauge,
    tone: 'text-teal-700 bg-teal-50 border-teal-100',
    items: [
      'PLC Systems',
      'Siemens TIA Portal',
      'HMI/SCADA',
      'MODBUS',
      'PROFIBUS',
      'ProSoft Gateways',
      'RTAC Accelerator',
      'Motor Management Relays',
      'Field Troubleshooting',
      'Continuity Testing',
      'Device Management',
    ],
  },
  {
    title: 'Data, Automation, and Reporting',
    icon: Database,
    tone: 'text-amber-800 bg-amber-50 border-amber-100',
    items: [
      'Python',
      'SQL',
      'Power BI',
      'Tableau',
      'Microsoft Fabric',
      'Power Automate',
      'Power Apps',
      'SharePoint',
      'Data Pipelines',
      'Automated Workflows',
      'Schedule Tracking',
      'MS Office Suite',
    ],
  },
  {
    title: 'Circuit and Prototype Tools',
    icon: CircuitBoard,
    tone: 'text-indigo-700 bg-indigo-50 border-indigo-100',
    items: [
      'KiCAD',
      'PSpice',
      'MATLAB',
      'Analog Circuits',
      'Sensors',
      'Oscilloscope Testing',
      'ESP32',
      'Embedded C/C++',
      'PCB Design',
      'Technical Reports',
    ],
  },
];

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

const reasons = [
  {
    title: 'Practical field judgment',
    text: 'Experience is grounded in refinery systems, drawings, investigations, testing, and reliability work.',
    icon: ShieldCheck,
  },
  {
    title: 'Power plus controls range',
    text: 'ETAP, AutoCAD, PLC logic, SCADA, industrial protocols, and instrumentation troubleshooting sit in one profile.',
    icon: Layers3,
  },
  {
    title: 'Operational data mindset',
    text: 'Dashboards and automated workflows connect engineering work with visibility, speed, and decision support.',
    icon: Route,
  },
];

const targetRoles = [
  {
    title: 'Electrical Reliability Co-op',
    text: 'Field analysis, failure investigations, electrical asset performance, P&ID validation, and design reviews.',
    icon: ShieldCheck,
  },
  {
    title: 'Power Systems / Substation Intern',
    text: 'ETAP studies, load calculations, short-circuit review, arc-flash support, power distribution, and drawing updates.',
    icon: Waypoints,
  },
  {
    title: 'Instrumentation & Controls Intern',
    text: 'PLC systems, HMI/SCADA, motor management relays, industrial protocols, device management, and troubleshooting.',
    icon: RadioTower,
  },
  {
    title: 'Automation / Data Analyst Co-op',
    text: 'Power BI, Tableau, Fabric, SQL, Python, SharePoint, Power Automate, and process reliability improvements.',
    icon: Workflow,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
} as const;

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{text}</p>
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function PremiumName({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-teal-200 bg-teal-50 text-xs font-bold text-teal-800">
        NA
      </span>
      <span className={compact ? 'min-w-0 leading-tight' : 'leading-tight'}>
        <span className="block truncate font-semibold tracking-tight text-slate-950">Naman Arora</span>
        {!compact ? (
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Electrical Engineering Student
          </span>
        ) : (
          <span className="block truncate text-xs font-medium text-slate-500">Electrical Engineering Student</span>
        )}
      </span>
    </span>
  );
}

function EvidencePanel() {
  const capabilities = [
    {
      title: 'Power and reliability',
      detail: 'Low-, medium-, and high-voltage systems, EHT circuits, ETAP studies, substations, and asset performance.',
      icon: Zap,
    },
    {
      title: 'Instrumentation and controls',
      detail: 'PLC logic, EHT controllers, HMI/SCADA, MODBUS, PROFIBUS, ProSoft gateways, and motor relays.',
      icon: Gauge,
    },
    {
      title: 'Operational analytics',
      detail: 'Power BI, Tableau, Fabric, Python, SQL, SharePoint, and automated workflow systems.',
      icon: BarChart3,
    },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      <div className="absolute -inset-4 rounded-lg bg-[linear-gradient(135deg,rgba(13,148,136,0.12),rgba(245,158,11,0.12),rgba(2,132,199,0.08))]" />
      <div className="relative rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 sm:p-5">
        <div className="mb-4 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Engineering snapshot
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-950">Power, controls, and data evidence</h3>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Resume-aligned
          </div>
        </div>

        <div className="grid gap-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ['3.96/4.0', 'GPA'],
            ['Term 6', 'Electrical Engineering'],
            ['2028', 'Expected graduation'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-lg font-semibold text-slate-950">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#home" className="min-w-0 text-sm sm:text-base" aria-label="Naman Arora home">
            <PremiumName compact />
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="/resume"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-slate-950 px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 sm:px-4 sm:text-sm"
            aria-label="View resume"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">View Resume</span>
          </a>
        </div>
      </nav>

      <section id="home" className="px-5 pt-24 sm:px-6 md:pt-32">
        <div className="mx-auto w-full max-w-7xl pb-12 md:pb-20">
          <div className="grid w-full items-center gap-8 md:gap-12 lg:grid-cols-2">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full min-w-0"
            >
              <div className="mb-5 flex flex-wrap gap-2">
                {['Electrical Reliability', 'Power Systems', 'Controls', 'Data Automation'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h1 className="max-w-3xl text-[2rem] font-semibold leading-[1.2] tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-5xl">
                Electrical engineering for power, reliability, and automation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                I am an Electrical Engineering student at Memorial University of Newfoundland with refinery experience in electrical reliability, EHT systems, ETAP studies, instrumentation, controls, and operational data systems.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  View Experience
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                >
                  Project Evidence
                  <Layers3 className="h-4 w-4" />
                </a>
                <a
                  href="/resume"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl overflow-hidden rounded-lg border border-slate-200 shadow-xl shadow-slate-200/50">
                <Image
                  src="/images/portfolio/headshot-new-horizontal.webp"
                  alt="Naman Arora professional headshot"
                  width={1200}
                  height={626}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                />
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-12 md:mt-16">
            <EvidencePanel />
          </motion.div>
        </div>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Skills"
            title="Electrical-first skills with controls and data depth."
            text="Grouped for the roles you are strongest for: reliability, power systems, instrumentation, controls, and automation reporting."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article key={group.title} {...fadeUp} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`rounded-lg border p-2 ${group.tone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Pill key={skill}>{skill}</Pill>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience built around industrial systems."
            text="The timeline now highlights the refinery, reliability, power, controls, and process automation work that best matches electrical engineering roles."
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-8 left-4 top-8 hidden w-px bg-gradient-to-b from-teal-500 via-slate-300 to-transparent md:block" />
            <div className="space-y-5">
              {experience.map((role) => (
                <motion.article key={`${role.company}-${role.period}`} {...fadeUp} className="relative md:pl-12">
                  <div className="absolute left-2 top-7 hidden h-4 w-4 rounded-full border border-teal-600 bg-white md:block" />
                  <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-teal-700">{role.company}</p>
                        <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                          {role.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{role.location}</p>
                      </div>
                      <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">{role.focus}</p>
                    <div className="mt-4 grid gap-2">
                      {role.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-teal-700" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.tools.map((tool) => (
                        <Pill key={tool}>{tool}</Pill>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Project tiles that open into full engineering proof."
            text="The homepage now works like a clean project gallery: each tile gives a quick recruiter-friendly scan, then the full project page shows background, images, validation, tools, and links."
          />

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <motion.div key={project.slug} {...fadeUp} className="h-full">
                <ProjectTile project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Role fit"
            title="Aligned to practical electrical engineering screens."
            text="The site now leads with role signals that map to power, reliability, instrumentation, controls, and automation/data work."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {targetRoles.map((role) => {
              const Icon = role.icon;
              return (
                <motion.article key={role.title} {...fadeUp} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg border border-teal-100 bg-teal-50 p-2 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{role.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{role.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why hire me"
            title="A practical engineer who connects systems to outcomes."
            text="The throughline is reliable equipment, clear documentation, useful automation, and evidence people can inspect."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.article key={reason.title} {...fadeUp} className="rounded-lg border border-slate-200 bg-white p-5">
                  <Icon className="mb-5 h-6 w-6 text-teal-700" />
                  <h3 className="text-lg font-semibold text-slate-950">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{reason.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-12 sm:px-6 md:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/80 md:p-10">
          <Building2 className="mx-auto mb-5 h-8 w-8 text-teal-700" />
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Open to practical electrical engineering work.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            I am interested in electrical reliability, power systems, instrumentation and controls, automation, and data-enabled engineering roles.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {[
              { label: 'Email Me', href: 'mailto:namana@mun.ca', icon: Mail, primary: true },
              { label: 'GitHub', href: 'https://github.com/naman8857', icon: GitBranch },
              { label: 'View Resume', href: '/resume', icon: FileText },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    item.primary
                      ? 'bg-teal-700 text-white hover:bg-teal-800'
                      : 'border border-slate-300 bg-white text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Naman Arora. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <PanelsTopLeft className="h-4 w-4" />
            Portfolio with browser-viewable documents
          </div>
        </div>
      </footer>
    </main>
  );
}
