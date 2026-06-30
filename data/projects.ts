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
  cardTitle?: string;
  category: string;
  summary: string;
  problem: string;
  built: string;
  tools: string[];
  impact: string;
  icon: LucideIcon;
  repoUrl: string;
  image: string;
  imageFit?: 'cover' | 'contain';
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
    cardTitle: 'Smart Child Monitoring System',
    category: 'Controls and IoT Prototype',
    summary:
      'An ESP32-S3-CAM embedded controls prototype that monitors room temperature, humidity, light level, and sound, then displays live readings on a local C++ web dashboard while controlling 12V comfort outputs. The project presents a complete sensor-to-action system: low-voltage power conversion, fuse protection, MOSFET load switching, labeled wiring, enclosure integration, and browser-based monitoring.',
    problem:
      'A useful comfort-monitoring prototype cannot stop at one sensor value. It needs to read multiple environmental conditions, keep the low-voltage electronics protected and regulated, switch real 12V loads, and present the system status in a way that can be inspected during a demonstration. The engineering challenge was to connect sensing, power, control, protection, packaging, and user interface into one working prototype instead of leaving them as separate parts.',
    built:
      'Built a low-voltage ESP32-S3-CAM prototype using a DHT11 temperature/humidity sensor, BH1750 light sensor, analog sound sensor, LED indicators, buzzer output, 12V fan output, and 12V LED strip output. The hardware includes a barrel-jack input, inline fuse, 470 uF filtering capacitor, buck conversion from 12V to 5V, MOSFET driver stages for output switching, and labeled enclosure wiring. I also created a local browser dashboard in embedded C++/Arduino logic so the prototype could show live readings, AUTO/MANUAL mode, cry-alert state, fan/light status, and manual output controls.',
    tools: ['ESP32-S3 CAM', 'DHT11', 'BH1750', 'Sound sensor', 'MOSFET drivers', 'Embedded C/C++', 'Web dashboard'],
    impact:
      'This project demonstrates practical embedded controls work in a form that can be inspected: sensor inputs, regulated power rails, input protection, MOSFET-switched loads, physical wiring, enclosure-level connections, and a live dashboard. It shows that the design is not only a software demo or a wiring photo; it is an end-to-end controls prototype where the hardware layer, control logic, and user interface are connected and explainable.',
    icon: CircuitBoard,
    repoUrl: 'https://github.com/naman8857/Child-Monitoring-Project-ECE-5000',
    image: '/images/portfolio/child-final-prototype.webp',
    imageFit: 'contain',
    gallery: [
      {
        src: '/images/portfolio/child-inside-circuitry.webp',
        alt: 'Inside circuitry of the smart child monitoring system showing ESP32-S3 CAM, sensors, power components, MOSFET drivers, fuse, capacitor, and wiring',
        label: 'Inside circuitry and labeled hardware integration',
      },
      {
        src: '/images/portfolio/child-circuit-schematic.webp',
        alt: 'Circuit schematic for the smart child monitoring system showing 12V input, buck converter, sensors, ESP32-S3 CAM, MOSFET drivers, fan, LED strip, buzzer, and LEDs',
        label: 'Circuit schematic and electrical architecture',
      },
      {
        src: '/images/portfolio/child-web-dashboard.webp',
        alt: 'Browser dashboard for the smart child monitoring system showing temperature, humidity, light, sound, auto/manual mode, fan control, light control, and alert reset',
        label: 'Embedded C++ web dashboard and live controls',
      },
    ],
    docUrl: '/documents/child-brochure',
    docLabel: 'View Brochure',
    highlights: [
      'Integrated environmental sensing, low-voltage power conversion, inline fuse protection, MOSFET output switching, and enclosure wiring into one prototype.',
      'Used embedded C++/Arduino logic to publish a local web dashboard for live readings, operating mode, fan/light status, manual controls, and alert reset.',
      'Documented the build with final prototype photos, internal wiring, schematic evidence, and dashboard proof so the design can be reviewed like an engineering case study.',
    ],
  },
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
        src: '/images/portfolio/smartfuse-proof-enclosure.webp',
        alt: 'Transparent enclosure mockup showing the WiFi SmartFuse PCB inside a serviceable housing',
        label: 'Enclosure fit and board packaging',
      },
      {
        src: '/images/portfolio/smartfuse-pcb-layout.webp',
        alt: 'WiFi SmartFuse PCB layout and routing evidence',
        label: 'PCB layout and routing evidence',
      },
      {
        src: '/images/portfolio/smartfuse-proof-board-render.webp',
        alt: '3D rendered WiFi SmartFuse PCB showing component placement, terminals, buttons, and test points',
        label: '3D board render and component placement',
      },
      {
        src: '/images/portfolio/smartfuse-proof-schematic-overview.webp',
        alt: 'KiCad hierarchical schematic overview showing protection, power regulation, sensing, controller, MOSFET switching, and LED test point sheets',
        label: 'Hierarchical schematic architecture',
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
