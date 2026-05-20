'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CircuitBoard,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Layers3,
  Mail,
  PanelsTopLeft,
  RadioTower,
  Route,
  Sparkles,
  Thermometer,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type Project = {
  title: string;
  category: string;
  problem: string;
  built: string;
  tools: string[];
  impact: string;
  icon: LucideIcon;
  repoUrl: string;
  image?: string;
  gallery?: {
    src: string;
    alt: string;
    label: string;
  }[];
  docUrl?: string;
  docLabel?: string;
  highlights?: string[];
  featured?: boolean;
};

type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string;
  points: string[];
};

const navItems = ['Home', 'Projects', 'Skills', 'Experience', 'Contact'];

const projects: Project[] = [
  {
    title: 'Smart Child Monitoring & Comfort Control System',
    category: 'Embedded Systems',
    problem:
      'Caregivers need a stable way to monitor room conditions and respond safely to environmental comfort alerts.',
    built:
      'Developed an ESP32-S3 CAM prototype with temperature, light, and sound sensing, alerting, dashboard monitoring, and comfort control outputs.',
    tools: ['ESP32-S3 CAM', 'DHT11', 'BH1750', 'Sound sensor', 'Embedded C/C++', 'IoT monitoring'],
    impact:
      'Demonstrates embedded systems, real-time monitoring, alerting, and practical safety-focused design.',
    icon: Cpu,
    repoUrl: 'https://github.com/naman8857/Child-Monitoring-Project-ECE-5000',
    image: '/images/child-brochure.png',
    docUrl:
      'https://github.com/naman8857/Child-Monitoring-Project-ECE-5000/raw/main/Product%20Brochure%20ECE%205000.pdf',
    featured: true,
  },
  {
    title: 'Optical Heart Rate Monitor',
    category: 'Analog Instrumentation',
    problem:
      'Optical pulse changes are small and noisy, so the signal needs careful sensing, filtering, amplification, and threshold detection.',
    built:
      'Built and validated a low-voltage optical heart-rate monitor with an IR sensing front-end, cascaded op-amp stages, threshold logic, and LED pulse alerts.',
    tools: [
      'IR optical sensing',
      'Op-amp filtering',
      'Schmitt trigger',
      '555 timer',
      'Oscilloscope validation',
    ],
    impact:
      'Demonstrates biomedical instrumentation, analog signal processing, breadboard prototyping, and test-driven circuit debugging.',
    icon: Thermometer,
    repoUrl: 'https://github.com/naman8857/Optical-Heart-Rate-Monitor-Project',
    image: '/images/heart-rate-oscilloscope.jpg',
    gallery: [
      {
        src: '/images/heart-rate-prototype.jpg',
        alt: 'Breadboard prototype for the optical heart-rate monitor circuit',
        label: 'Breadboard prototype',
      },
    ],
    docUrl:
      'https://github.com/naman8857/Optical-Heart-Rate-Monitor-Project/raw/main/Optical%20Heart%20Rate%20Monitor%20Project.pdf',
    docLabel: 'View Report',
    highlights: [
      'IR sensor front-end converts pulse-driven light changes into an electrical signal.',
      'Analog stages filter and amplify the small waveform before threshold detection.',
      'Oscilloscope testing verified repeatable pulse behavior and alert response.',
    ],
  },
];

const skills = [
  {
    title: 'Electrical / Hardware',
    icon: CircuitBoard,
    items: [
      'PCB Design',
      'Circuit Design',
      'ESP32',
      'Arduino',
      'Sensors',
      'Power Monitoring',
      'ETAP',
      'AutoCAD',
      'KiCAD',
      'PSpice',
    ],
  },
  {
    title: 'Automation / Software',
    icon: Workflow,
    items: [
      'Power Automate',
      'Power Apps',
      'SharePoint',
      'Excel Automation',
      'JavaScript',
      'TypeScript',
      'Python',
      'SQL',
    ],
  },
  {
    title: 'Data / Business',
    icon: BarChart3,
    items: [
      'Power BI',
      'Excel',
      'Data Analysis',
      'Process Improvement',
      'Dashboarding',
      'Reporting',
      'Tableau',
      'MS Office Suite',
    ],
  },
];

const experience: Experience[] = [
  {
    company: 'Irving Oil',
    title: 'Electrical & Instrumentation Reliability Engineering (Co-op)',
    location: 'Saint John, NB, Canada',
    period: 'May 2026 - Present',
    description:
      'Supporting refinery electrical and instrumentation reliability through field analysis, failure investigations, and design reviews.',
    points: [
      'Works on low-, medium-, and high-voltage systems with a focus on safety, reliability, and uptime.',
      'Assists with power distribution and maintenance activities by validating P&IDs, drawings, and design changes.',
    ],
  },
  {
    company: 'Brightisle',
    title: 'Data Analyst (Remote Part-time)',
    location: 'St. Johns, NL, Canada',
    period: 'Apr 2025 - Present',
    description:
      'Maintaining and improving operational reporting systems for healthcare programs.',
    points: [
      'Enhances Power BI and Tableau dashboards in Microsoft Fabric for schedule tracking and planning support.',
      'Develops workflows and data systems with Power Automate, SharePoint, SQL, and Python.',
    ],
  },
  {
    company: 'Irving Oil',
    title: 'Electrical Engineering Intern (Co-op)',
    location: 'Saint John, NB, Canada',
    period: 'Sept 2025 - Dec 2025',
    description:
      'Worked on refinery electrical systems, troubleshooting, ETAP studies, and drawing updates.',
    points: [
      'Designed and revised EHT circuits and AutoCAD drawings, completed load calculations, and configured PLC logic.',
      'Built and updated ETAP models for load flow, short-circuit, arc-flash, and protection studies.',
    ],
  },
  {
    company: 'Seafair Capital',
    title: 'Project Management Intern (Co-op)',
    location: 'St. Johns, NL, Canada',
    period: 'Jan 2025 - Apr 2025',
    description:
      'Delivered process improvements and reporting systems across payroll, HR, and care operations.',
    points: [
      'Built Python, SQL, Power Automate, and Power Apps solutions that cut manual work by 50%.',
      'Created unified Power BI and Tableau dashboards with automated data pipelines for faster issue detection.',
    ],
  },
];

const reasons = [
  {
    title: 'I build real systems, not just assignments.',
    text: 'My projects combine hardware, data, automation, and practical implementation.',
    icon: Layers3,
  },
  {
    title: 'I connect engineering with business impact.',
    text: 'I can translate technical systems into dashboards, workflows, and decisions that teams can use.',
    icon: Route,
  },
  {
    title: 'I learn fast and communicate clearly.',
    text: 'I explain technical ideas clearly and build solutions that are useful, maintainable, and easy to understand.',
    icon: Sparkles,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
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
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">{text}</p>
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
      {children}
    </span>
  );
}

function PremiumName({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-xs font-semibold text-cyan-100 shadow-lg shadow-cyan-950/30">
        NA
      </span>
      <span className={compact ? 'leading-none' : 'leading-tight'}>
        <span className="block bg-gradient-to-r from-white via-cyan-100 to-zinc-400 bg-clip-text font-semibold tracking-tight text-transparent">
          Naman Arora
        </span>
        {!compact ? (
          <span className="mt-1 block text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Electrical Engineering Student
          </span>
        ) : null}
      </span>
    </span>
  );
}

function RobotCrew() {
  const { scrollYProgress } = useScroll();
  const signalY = useSpring(useTransform(scrollYProgress, [0, 1], [92, 610]), { stiffness: 70, damping: 18 });
  const signalX = useSpring(useTransform(scrollYProgress, [0, 0.45, 1], [0, -64, -14]), { stiffness: 70, damping: 18 });
  const signalRotate = useSpring(useTransform(scrollYProgress, [0, 1], [-8, 22]), { stiffness: 80, damping: 18 });

  const powerY = useSpring(useTransform(scrollYProgress, [0, 1], [190, 42]), { stiffness: 70, damping: 18 });
  const powerX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-8, -92, -22]), { stiffness: 70, damping: 18 });
  const powerRotate = useSpring(useTransform(scrollYProgress, [0, 1], [10, -24]), { stiffness: 80, damping: 18 });

  const pcbY = useSpring(useTransform(scrollYProgress, [0, 1], [315, 690]), { stiffness: 70, damping: 18 });
  const pcbX = useSpring(useTransform(scrollYProgress, [0, 0.55, 1], [-126, -34, -118]), { stiffness: 70, damping: 18 });
  const pcbRotate = useSpring(useTransform(scrollYProgress, [0, 1], [-16, 18]), { stiffness: 80, damping: 18 });

  const dataY = useSpring(useTransform(scrollYProgress, [0, 1], [470, 210]), { stiffness: 70, damping: 18 });
  const dataX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-46, -150, -76]), { stiffness: 70, damping: 18 });
  const dataRotate = useSpring(useTransform(scrollYProgress, [0, 1], [14, -18]), { stiffness: 80, damping: 18 });

  const flowY = useSpring(useTransform(scrollYProgress, [0, 1], [34, 430]), { stiffness: 70, damping: 18 });
  const flowX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-176, -112, -194]), { stiffness: 70, damping: 18 });
  const flowRotate = useSpring(useTransform(scrollYProgress, [0, 1], [-4, 28]), { stiffness: 80, damping: 18 });

  const bots = [
    {
      name: 'Signal',
      x: signalX,
      y: signalY,
      rotate: signalRotate,
      body: 'from-cyan-200 to-sky-500',
      visor: 'from-white to-cyan-100',
      delay: 0,
      scale: 0.92,
    },
    {
      name: 'Power',
      x: powerX,
      y: powerY,
      rotate: powerRotate,
      body: 'from-emerald-200 to-teal-500',
      visor: 'from-white to-emerald-100',
      delay: 0.25,
      scale: 0.78,
    },
    {
      name: 'PCB',
      x: pcbX,
      y: pcbY,
      rotate: pcbRotate,
      body: 'from-amber-200 to-orange-500',
      visor: 'from-white to-amber-100',
      delay: 0.5,
      scale: 0.72,
    },
    {
      name: 'Data',
      x: dataX,
      y: dataY,
      rotate: dataRotate,
      body: 'from-violet-200 to-fuchsia-500',
      visor: 'from-white to-violet-100',
      delay: 0.75,
      scale: 0.68,
    },
    {
      name: 'Flow',
      x: flowX,
      y: flowY,
      rotate: flowRotate,
      body: 'from-rose-200 to-red-500',
      visor: 'from-white to-rose-100',
      delay: 1,
      scale: 0.62,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-0 z-20 hidden w-60 overflow-visible lg:block xl:w-72"
    >
      <div className="absolute right-8 top-24 h-96 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
      {bots.map((bot) => (
        <motion.div
          key={bot.name}
          style={{ x: bot.x, y: bot.y, rotate: bot.rotate, scale: bot.scale }}
          className="absolute right-5 top-0"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bot.delay,
            }}
            className="relative h-28 w-20 drop-shadow-2xl"
          >
            <div
              className={`absolute inset-x-2 top-3 h-20 rounded-[1.6rem] border border-white/30 bg-gradient-to-b ${bot.body} shadow-2xl shadow-black/35`}
            >
              <div
                className={`absolute left-3 top-4 h-7 w-11 rounded-full border border-white/60 bg-gradient-to-br ${bot.visor} shadow-inner shadow-cyan-950/20`}
              />
              <div className="absolute bottom-3 left-1/2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-white/45" />
            </div>
            <div className="absolute left-0 top-12 h-8 w-4 rounded-full border border-white/20 bg-white/20" />
            <div className="absolute right-0 top-12 h-8 w-4 rounded-full border border-white/20 bg-white/20" />
            <div className="absolute bottom-0 left-5 h-7 w-4 rounded-b-xl bg-zinc-300" />
            <div className="absolute bottom-0 right-5 h-7 w-4 rounded-b-xl bg-zinc-300" />
            <div className="absolute -bottom-2 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-cyan-200/25 blur-md" />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-zinc-950/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
              {bot.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function DashboardVisual() {
  const nodes = [
    { label: 'ESP32', icon: Cpu, tone: 'text-cyan-300' },
    { label: 'Sensors', icon: RadioTower, tone: 'text-emerald-300' },
    { label: 'PCB Design', icon: CircuitBoard, tone: 'text-amber-300' },
    { label: 'Power BI', icon: BarChart3, tone: 'text-sky-300' },
    { label: 'Power Automate', icon: Workflow, tone: 'text-rose-300' },
    { label: 'Data Flow', icon: Database, tone: 'text-violet-300' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[520px] lg:pr-8"
    >
      <div className="absolute inset-x-8 -top-8 h-24 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/12 bg-zinc-950/80 p-4 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">System dashboard</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Engineering signal chain</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <div
                key={node.label}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-3"
              >
                <Icon className={`mb-3 h-5 w-5 ${node.tone}`} />
                <p className="text-sm font-medium text-white">{node.label}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-black/25 p-4">
            <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
              <span>Load profile</span>
              <span>12 samples</span>
            </div>
            <div className="flex h-24 items-end gap-2">
              {[42, 56, 36, 68, 74, 52, 82, 61, 70, 86, 64, 78].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-cyan-200"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-4">
            <p className="text-xs text-zinc-400">Pipeline</p>
            <div className="mt-3 space-y-3 text-sm">
              {['Sense', 'Process', 'Visualize'].map((step) => (
                <div key={step} className="flex items-center gap-2 text-zinc-200">
                  <Check className="h-4 w-4 text-emerald-300" />
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050506] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#050506_0%,#09090b_45%,#050506_100%)]" />
      <RobotCrew />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/65 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="text-sm sm:text-base" aria-label="Naman Arora home">
            <PremiumName compact />
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="/Naman-Arora-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-4 sm:text-sm"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>

      <section id="home" className="px-6 pt-28 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 md:pb-24 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg shadow-black/20 sm:text-sm">
              <Sparkles className="h-4 w-4 shrink-0 text-cyan-300" />
              <span className="truncate">
                Electrical Engineering &bull; Embedded Systems &bull; Automation &bull; Data
              </span>
            </div>
            <div className="mb-5">
              <PremiumName />
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Engineering practical systems across hardware, data, and automation.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
              I&apos;m Naman Arora, an Electrical Engineering student at Memorial
              University of Newfoundland with a 3.95/4.0 GPA. I build real-world
              systems using embedded hardware, automation workflows, data analysis,
              and electrical engineering fundamentals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/Naman-Arora-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <DashboardVisual />
        </div>
      </section>

      <section aria-label="Portfolio proof points" className="px-6 pb-16">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-6xl gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3 backdrop-blur md:grid-cols-4"
        >
          {[
            ['3.95/4.0 GPA', 'Resume verified'],
            ['Electrical Engineering', 'Memorial University'],
            ['Hardware + Automation Projects', 'Embedded systems'],
            ['Data + Business Experience', 'Dashboards and workflows'],
          ].map(([value, label]) => (
            <div key={value} className="rounded-lg border border-white/8 bg-black/20 p-4">
              <p className="text-lg font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="projects" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured projects"
            title="Case-study cards for practical engineering work."
            text="A compact view of hardware, embedded systems, data visualization, and automation projects."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  {...fadeUp}
                  className={`rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-xl shadow-black/20 transition hover:border-white/20 ${
                    project.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.05] p-2 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="grid gap-4 text-sm leading-6 text-zinc-400 md:grid-cols-2">
                    <div>
                      <p className="font-semibold text-zinc-200">Problem</p>
                      <p className="mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-200">Built</p>
                      <p className="mt-1">{project.built}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-200">Impact</p>
                      <p className="mt-1">{project.impact}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-200">Tools</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Pill key={tool}>{tool}</Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                  {project.image ? (
                    <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ) : null}
                  {project.gallery ? (
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {project.gallery.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={900}
                            height={650}
                            className="aspect-[4/3] w-full object-cover"
                          />
                          <figcaption className="border-t border-white/10 px-3 py-2 text-xs font-medium text-zinc-400">
                            {image.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : null}
                  {project.highlights ? (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="mb-3 text-sm font-semibold text-zinc-200">
                        Most important engineering details
                      </p>
                      <div className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex gap-2 text-sm leading-6 text-zinc-400">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      View Repo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {project.docUrl ? (
                      <a
                        href={project.docUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        {project.docLabel ?? 'View Brochure'}
                        <FileText className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Skills"
            title="Focused skill groups, organized for recruiters."
            text="Electrical fundamentals, automation workflows, and data systems pulled from the resume and verified project work."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  {...fadeUp}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg border border-white/10 bg-zinc-950 p-2 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
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

      <section id="experience" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Experience"
            title="Resume-based professional timeline."
            text="Verified roles, companies, dates, locations, and responsibilities from the resume PDF."
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-8 left-4 top-8 hidden w-px bg-gradient-to-b from-cyan-300/70 via-white/20 to-transparent md:block" />
            <div className="space-y-4">
              {experience.map((role) => (
                <motion.article key={`${role.company}-${role.period}`} {...fadeUp} className="relative md:pl-12">
                  <div className="absolute left-2 top-6 hidden h-4 w-4 rounded-full border border-cyan-300/70 bg-zinc-950 md:block" />
                  <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-cyan-300">{role.company}</p>
                        <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                          {role.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">{role.location}</p>
                      </div>
                      <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-zinc-400">{role.description}</p>
                    <div className="mt-4 grid gap-2">
                      {role.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-6 text-zinc-300">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why hire me"
            title="A practical engineer with product instincts."
            text="The throughline is simple: build systems people can trust, understand, and use."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.title}
                  {...fadeUp}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <Icon className="mb-5 h-6 w-6 text-cyan-200" />
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{reason.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 md:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 text-center shadow-2xl shadow-black/30 md:p-10"
        >
          <BriefcaseBusiness className="mx-auto mb-5 h-8 w-8 text-cyan-200" />
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            I&apos;m open to engineering, automation, embedded systems, data analyst,
            and technical co-op opportunities.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {[
              { label: 'Email Me', href: 'mailto:namana@mun.ca', icon: Mail, primary: true },
              { label: 'GitHub', href: 'https://github.com/naman8857', icon: GitBranch },
              { label: 'Resume', href: '/Naman-Arora-Resume.pdf', icon: Download },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    item.primary
                      ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                      : 'border border-white/12 bg-white/[0.05] text-white hover:bg-white/10'
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

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Naman Arora. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <PanelsTopLeft className="h-4 w-4" />
            Frontend-only portfolio
          </div>
        </div>
      </footer>
    </main>
  );
}
