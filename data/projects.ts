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
      'A portfolio-level 12/24V DC smart protection module designed to show how a basic fuse can be extended into a monitored, switchable, and serviceable protection system. The project combines PCB layout, input protection, regulated logic power, current/voltage sensing, ESP32-C3 control, MOSFET load switching, and enclosure planning to demonstrate practical electrical design thinking from schematic to physical prototype concept.',
    problem:
      'Small DC loads are often protected by a simple inline fuse, but a fuse alone does not show load current, voltage condition, overload trend, reverse-polarity risk, or whether the load has been electronically isolated. For a real maintenance or troubleshooting environment, the protection device should also provide visibility, test access, and a clear way to understand the health of the protected circuit.',
    built:
      'Designed a KiCad PCB concept for a low-voltage SmartFuse architecture: 12/24V DC input, fuse protection, reverse-polarity and TVS protection, input filtering, buck regulation to 5V, 3.3V logic regulation, ESP32-C3 Wi-Fi control, INA226 voltage/current/power monitoring, low-side MOSFET load switching, status LEDs, buttons, labeled test points, terminal access, and a FreeCAD enclosure mockup. The layout separates protection, regulation, sensing, control, and output switching so the board can be explained and debugged like a real electrical product prototype.',
    tools: ['KiCad', 'ESP32-C3', 'INA226', 'MOSFET switching', 'DC protection', 'Buck regulation', 'FreeCAD'],
    impact:
      'This project connects power protection, embedded control, instrumentation, and maintainability. It shows that I can think beyond drawing a circuit by considering polarity protection, surge suppression, power rails, measurement points, load switching, enclosure fit, and how a technician or engineer would validate the design during commissioning.',
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
      'Organized the design into input protection, regulated power, sensing, controller, user interface, and protected load output stages.',
      'Used test points, status LEDs, labeled terminals, and a physical enclosure concept to make the design easier to troubleshoot and present.',
      'Presented as an engineering design and virtual prototype concept, not as a certified or manufactured protection product.',
    ],
    featured: true,
  },
  {
    slug: 'optical-heart-rate-monitor',
    title: 'Optical Heart Rate Monitor',
    category: 'Analog Instrumentation',
    summary:
      'An analog instrumentation project that converts a weak optical pulse signal into a measurable and visible heartbeat indication. The project demonstrates sensor interfacing, op-amp signal conditioning, filtering, threshold detection, timing logic, breadboard debugging, and oscilloscope-based validation.',
    problem:
      'The optical change caused by blood flow is very small compared with noise, ambient light effects, and sensor variation. To make the pulse usable, the circuit must detect a weak analog signal, filter unwanted components, amplify it without saturating, and convert it into a clean output that can be counted or displayed.',
    built:
      'Built and validated a low-voltage optical heart-rate monitor using an IR sensing front end, cascaded op-amp amplification and filtering stages, threshold/trigger logic, 555-timer-based pulse shaping, and LED pulse indication. The circuit was tested stage-by-stage on a breadboard and verified using oscilloscope captures to compare the raw and conditioned waveforms.',
    tools: ['IR optical sensing', 'Op-amp filtering', 'Schmitt trigger', '555 timer', 'Oscilloscope validation'],
    impact:
      'This project shows practical analog electronics skills that are directly useful in instrumentation and controls work: reading a sensor signal, conditioning it, validating it with test equipment, and troubleshooting each stage instead of treating the circuit like a black box.',
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
      'Converted a weak and noisy optical waveform into a usable electrical pulse signal.',
      'Applied amplification, filtering, threshold detection, and timing logic to improve repeatability.',
      'Used oscilloscope validation to confirm circuit behavior and document measured results.',
    ],
  },
  {
    slug: 'smart-child-monitoring-system',
    title: 'Smart Child Monitoring & Comfort Control System',
    category: 'Controls and IoT Prototype',
    summary:
      'An embedded controls and IoT prototype designed to monitor comfort-related environmental conditions and respond through alerts and low-voltage outputs. The project combines ESP32-S3 CAM hardware, temperature/humidity sensing, light sensing, sound sensing, dashboard visibility, enclosure thinking, and simple control outputs to show a complete sensor-to-action system.',
    problem:
      'Caregivers need a simple way to observe comfort and safety-related conditions without constantly checking the room manually. Temperature, humidity, lighting, and sound levels can change quickly, so the system needs to collect real-time inputs, make the condition visible, and support a practical response before the issue becomes disruptive.',
    built:
      'Developed an ESP32-S3 CAM based prototype with DHT11 temperature/humidity sensing, BH1750 light measurement, sound sensing, dashboard monitoring, alert logic, and low-voltage comfort outputs such as a 12V fan and LED indication. The design was documented through project reports, brochure material, system diagrams, and prototype visuals so both the technical function and user need are clear.',
    tools: ['ESP32-S3 CAM', 'DHT11', 'BH1750', 'Sound sensor', 'Embedded C/C++', 'IoT monitoring'],
    impact:
      'This project demonstrates the full path from sensing to decision to output control. It is relevant to electrical engineering because it brings together embedded hardware, sensor integration, power/output switching, control logic, documentation, and user-focused system design.',
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
      'Integrated multiple environmental sensors into one embedded monitoring platform.',
      'Connected sensor readings to practical outputs such as fan control, LED indication, alerts, and dashboard feedback.',
      'Documented the design as a complete system with prototype visuals, user-facing explanation, and engineering decision-making.',
    ],
  },
  {
    slug: 'onshape-office-workspace-design',
    title: 'Onshape Office Workspace Design',
    category: 'Engineering CAD / Design Communication',
    summary:
      'A first-year CAD design project that models a complete office workspace and presents it through clear views, layout planning, and documentation-style visuals. The project shows how CAD can be used as an engineering communication tool for planning space, equipment access, work areas, lighting, furniture, and possible electrical/control-room considerations before physical work begins.',
    problem:
      'Engineering spaces need to be planned before installation so equipment, access paths, work areas, lighting, furniture, storage, and service clearances can be understood early. Without clear CAD views, design intent is harder to communicate and later changes can become more expensive or confusing.',
    built:
      'Modeled a complete office workspace in Onshape with walls, doors, windows, desks, storage, seating/rest areas, work zones, plant wall features, perspective views, top layout views, and documentation outputs. The model was built to practice CAD fundamentals while also thinking like an electrical engineering student who may later review layouts, panel locations, cable routes, control rooms, and as-built drawings.',
    tools: ['Onshape', '3D CAD', '2D drawings', 'Section views', 'Layout planning', 'Technical documentation'],
    impact:
      'This project frames CAD as more than a drawing exercise. It shows design communication, spatial reasoning, layout clarity, and documentation discipline that transfer directly to electrical drawings, panel layouts, equipment placement, HMI/control-room planning, and field as-built work.',
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
      'Created multiple CAD views so the design can be reviewed from both spatial and documentation perspectives.',
      'Practiced layout planning, view organization, and drawing-sheet communication using Onshape.',
      'Connected first-year CAD learning to electrical engineering tasks such as equipment placement, access planning, and as-built documentation.',
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
