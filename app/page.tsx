'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Building2,
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
import { ExperienceShowcase } from '@/components/ExperienceShowcase';
import { ProjectRail } from '@/components/ProjectRail';
import { projects } from '@/data/projects';

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  tone: string;
  items: string[];
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
    <motion.div {...fadeUp} className="section-heading mx-auto mb-10 max-w-4xl text-center md:mb-14 xl:mb-16">
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
      className="evidence-panel relative mx-auto w-full max-w-5xl"
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

        <div className="grid gap-3 lg:grid-cols-3">
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
    <main className="portfolio-home min-h-screen overflow-x-hidden bg-white text-slate-950">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="portfolio-container mx-auto flex h-16 w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
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

      <section id="home" className="hero-section px-5 pt-24 sm:px-6 md:pt-32 xl:pt-36">
        <div className="portfolio-container hero-container mx-auto w-full pb-12 md:pb-20 xl:pb-24">
          <div className="portfolio-hero-grid grid w-full items-center gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="hero-copy w-full min-w-0"
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
              <h1 className="max-w-4xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Electrical engineering for power, reliability, and automation.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg xl:text-xl xl:leading-8">
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
              <div className="hero-image-card relative w-full max-w-2xl overflow-hidden rounded-lg border border-slate-200 shadow-xl shadow-slate-200/50">
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
        <div className="portfolio-container mx-auto">
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

      <ExperienceShowcase />

      <section id="projects" className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 md:py-20">
        <div className="portfolio-container mx-auto">
          <SectionHeading
            eyebrow="Projects"
            title="Engineering proof, not just project screenshots."
            text="Each project opens as a small engineering case study: the problem, the design decisions, the implementation evidence, and the proof that the work can be inspected."
          />

          <ProjectRail projects={projects} />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="portfolio-container mx-auto">
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
        <div className="portfolio-container mx-auto">
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
        <motion.div {...fadeUp} className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/80 md:p-10 xl:p-12">
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
        <div className="portfolio-container mx-auto flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
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
