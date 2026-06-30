import {
  Building2,
  CircuitBoard,
  ShieldCheck,
  Thermometer,
  type LucideIcon,
} from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  built: string;
  tools: string[];
  impact: string;
  icon: LucideIcon;
  repoUrl: string;
  image: string;
  gallery: {
    src: string;
    alt: string;
    label: string;
  }[];
  docUrl?: string;
  docLabel?: string;
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'wifi-smartfuse-pcb',
    title: 'WiFi SmartFuse PCB',
    category: 'Power Electronics / Embedded Protection',
    summary:
      'A 12/24V DC smart protection PCB concept with fuse protection, sensing, Wi-Fi monitoring, MOSFET switching, and enclosure planning.',
    problem:
      'Small 12/24V DC loads need protection plus visibility into current, voltage, load state, and early warning fault conditions.',
    built:
      'Designed a KiCad PCB concept with fuse protection, reverse-polarity and TVS protection, buck regulation, ESP32-C3 Wi-Fi control, INA226 monitoring, MOSFET load switching, LEDs, buttons, test points, and a FreeCAD enclosure mockup.',
    tools: ['KiCad', 'ESP32-C3', 'INA226', 'MOSFET switching', 'DC protection', 'Buck regulation', 'FreeCAD'],
    impact:
      'Connects industrial protection thinking with embedded power electronics by turning a basic DC fuse idea into a monitored, switchable, serviceable protection module concept.',
    icon: ShieldCheck,
    repoUrl:
      'https://github.com/naman8857/naman-portfolio/tree/master/public/images/Wifi%20Smart%20Fuse%20Project',
    image: '/images/portfolio/smartfuse-pcb-layout.webp',
    gallery: [
      {
        src: '/images/portfolio/smartfuse-pcb-layout.webp',
        alt: 'KiCad PCB layout for the WiFi SmartFuse PCB',
        label: 'PCB layout',
      },
      {
        src: '/images/portfolio/smartfuse-enclosure.webp',
        alt: 'FreeCAD enclosure mockup for the WiFi SmartFuse PCB with transparent cover',
        label: 'Enclosure and board mockup',
      },
      {
        src: '/images/portfolio/smartfuse-enclosure-square.webp',
        alt: 'Square preview of the WiFi SmartFuse enclosure concept',
        label: 'Enclosure detail',
      },
    ],
    docUrl: '/documents/wifi-smartfuse',
    docLabel: 'View Project Document',
    highlights: [
      'Structured the design around input protection, regulated logic power, sensing, control, and protected load output stages.',
      'Added debug test points, status LEDs, and serviceable terminal access to make the board easier to validate and explain.',
      'Presented as a design and virtual prototype, not as a manufactured or certified protection product.',
    ],
    featured: true,
  },
  {
    slug: 'optical-heart-rate-monitor',
    title: 'Optical Heart Rate Monitor',
    category: 'Analog Instrumentation',
    summary:
      'An analog optical pulse circuit that turns a weak noisy sensor signal into a visible pulse indication using filtering, amplification, and threshold logic.',
    problem:
      'Optical pulse changes are small and noisy, so the signal needs careful sensing, filtering, amplification, and threshold detection.',
    built:
      'Built and validated a low-voltage optical heart-rate monitor with an IR sensing front end, cascaded op-amp stages, threshold logic, and LED pulse alerts.',
    tools: ['IR optical sensing', 'Op-amp filtering', 'Schmitt trigger', '555 timer', 'Oscilloscope validation'],
    impact:
      'Shows instrumentation fundamentals, analog signal conditioning, test discipline, and practical circuit debugging.',
    icon: Thermometer,
    repoUrl: 'https://github.com/naman8857/Optical-Heart-Rate-Monitor-Project',
    image: '/images/portfolio/heart-rate-square.webp',
    gallery: [
      {
        src: '/images/heart-rate-oscilloscope.jpg',
        alt: 'Oscilloscope capture from the optical heart-rate monitor validation',
        label: 'Oscilloscope validation',
      },
      {
        src: '/images/heart-rate-prototype.jpg',
        alt: 'Breadboard prototype for the optical heart-rate monitor circuit',
        label: 'Breadboard prototype',
      },
      {
        src: '/images/heart-rate-schematic.jpg',
        alt: 'Schematic for the optical heart-rate monitor circuit',
        label: 'Circuit schematic',
      },
    ],
    docUrl: '/documents/heart-rate-report',
    docLabel: 'View Report',
    highlights: [
      'Translated a weak optical waveform into a usable electrical signal.',
      'Used filtering, amplification, and threshold logic to produce repeatable pulse indication.',
      'Verified circuit behavior with oscilloscope testing and documented measured results.',
    ],
  },
  {
    slug: 'smart-child-monitoring-system',
    title: 'Smart Child Monitoring & Comfort Control System',
    category: 'Controls and IoT Prototype',
    summary:
      'An ESP32-based comfort monitoring prototype with environmental sensing, dashboard visibility, alerts, and low-voltage control outputs.',
    problem:
      'Caregivers need a simple way to monitor environmental comfort conditions and respond to alerts before they become operational issues.',
    built:
      'Developed an ESP32-S3 CAM prototype with temperature, light, and sound sensing, dashboard monitoring, alerting, and comfort control outputs.',
    tools: ['ESP32-S3 CAM', 'DHT11', 'BH1750', 'Sound sensor', 'Embedded C/C++', 'IoT monitoring'],
    impact:
      'Shows sensor integration, automation logic, device testing, and readable technical documentation.',
    icon: CircuitBoard,
    repoUrl: 'https://github.com/naman8857/Child-Monitoring-Project-ECE-5000',
    image: '/images/portfolio/child-monitoring-square.webp',
    gallery: [
      {
        src: '/images/portfolio/child-monitoring-square.webp',
        alt: 'Smart child monitoring system prototype preview',
        label: 'System prototype',
      },
      {
        src: '/images/child-brochure.png',
        alt: 'Smart child monitoring system brochure preview',
        label: 'Project brochure',
      },
      {
        src: '/images/child-report.png',
        alt: 'Smart child monitoring system report preview',
        label: 'Report preview',
      },
    ],
    docUrl: '/documents/child-brochure',
    docLabel: 'View Brochure',
    highlights: [
      'Monitored temperature, humidity, light intensity, and sound level as real-time comfort inputs.',
      'Used low-voltage 12V fan and LED outputs to connect sensing with practical comfort control.',
      'Packaged the system around alerts, protected power, switched outputs, and a physical enclosure concept.',
    ],
  },
  {
    slug: 'onshape-office-workspace-design',
    title: 'Onshape Office Workspace Design',
    category: 'Engineering CAD / Design Communication',
    summary:
      'A first-year CAD project that models an office workspace with layout views, perspective views, section thinking, and documentation outputs.',
    problem:
      'Engineering layouts need clear views before physical work starts so equipment, access, furniture, lighting, and possible electrical points can be understood early.',
    built:
      'Modeled a complete office workspace in Onshape with walls, doors, windows, furniture, rest area, work area, storage, plant wall features, perspective views, layout views, and drawing sheets.',
    tools: ['Onshape', '3D CAD', '2D drawings', 'Section views', 'Layout planning', 'Technical documentation'],
    impact:
      'Shows spatial planning and design communication skills that transfer to electrical layouts, control rooms, panel spacing, HMI desk planning, cable routing, lighting plans, and as-built documentation.',
    icon: Building2,
    repoUrl:
      'https://github.com/naman8857/naman-portfolio/tree/master/public/images/Onshape%20Project',
    image: '/images/portfolio/onshape-office-perspective.webp',
    gallery: [
      {
        src: '/images/portfolio/onshape-office-perspective.webp',
        alt: 'Perspective view of the Onshape office workspace design',
        label: 'Perspective view',
      },
      {
        src: '/images/portfolio/onshape-office-layout.webp',
        alt: 'Top layout view of the Onshape office workspace design',
        label: 'Top layout view',
      },
      {
        src: '/images/portfolio/onshape-office-square.webp',
        alt: 'Square preview of the Onshape office workspace design',
        label: 'CAD model preview',
      },
    ],
    docUrl: '/documents/onshape-office',
    docLabel: 'View Project Document',
    highlights: [
      'Created multiple views so the model can be reviewed from both spatial and documentation perspectives.',
      'Practiced section-view thinking, layout clarity, and drawing-sheet communication from first-year CAD work.',
      'Frames CAD as an electrical engineering skill for planning equipment locations, access, and documentation.',
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
