import { useState, type ChangeEvent, type FormEvent } from 'react';
import { BarChart3, ClipboardList, Gauge, ShieldCheck, Thermometer, Wind } from 'lucide-react';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';
import hero from './assets/infrastructure-health-hero.png';
import './App.css';

type GuideFormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
};

const services = [
  {
    title: 'Thermal Environment Assessment',
    copy: 'Capture the conditions surrounding IT equipment — including temperature, air velocity, thermal patterns, intake/exhaust conditions, and localized environmental evidence.',
  },
  {
    title: 'Device Assessment',
    copy: 'Capture supported device-reported physical operating information from switches, routers, access points, and other infrastructure devices — including device identity, internal thermal condition, cooling/fans, power condition, and physical port information for fiber and copper.',
  },
  {
    title: 'Physical Infrastructure Documentation',
    copy: 'Document what is physically present across rooms, racks, equipment, connections, ports, cabling, labels, locations, and supporting evidence to establish a verified infrastructure baseline.',
  },
  {
    title: 'Periodic Verification',
    copy: 'Revalidate physical infrastructure after additions, moves, replacements, cabling changes, upgrades, or other physical changes so teams can identify drift and maintain current evidence over time.',
  },
];

const remediationServices = [
  {
    title: 'ESD-Safe Particulate Decontamination & Spec Restoration',
    Icon: Wind,
    price: 'Starting at: $1,800',
    pricingCopy:
      'This investment covers specialized, non-conductive particulate removal using certified ESD-safe (electrostatic discharge) HEPA equipment to clean sub-floors, intake grilles, and internal server pathways under live operating conditions.',
    pricingNote:
      'Pricing varies by: Number of racks, equipment density, environmental conditions, and level of contamination.',
    copy: 'Remove accumulated dust and airborne contaminants from server racks, network equipment, storage systems, and supporting infrastructure using ESD-safe procedures designed specifically for technology environments.',
  },
  {
    title: 'Airflow Optimization',
    Icon: Gauge,
    price: 'Custom Proposal',
    pricingCopy:
      'Recommendations depend on infrastructure layout, cooling requirements, airflow restrictions, and remediation scope.',
    copy: 'Improve cooling performance by reducing airflow restrictions, optimizing equipment placement, organizing cable pathways, and improving intake and exhaust airflow throughout the rack.',
  },
  {
    title: 'Sensor Installation',
    Icon: Thermometer,
    price: 'Starting at: $850',
    pricingCopy:
      'This baseline covers the physical deployment, precision placement, and connectivity calibration of critical environmental telemetry hardware to track temperature, humidity, and airflow bottlenecks.',
    pricingNote:
      'Pricing depends on: Number of sensors, sensor types, and monitoring requirements.',
    copy: 'Deploy environmental sensors that continuously monitor intake temperature, exhaust temperature, humidity, airflow conditions, and other critical operating metrics to provide greater infrastructure visibility.',
  },
  {
    title: 'Environmental Monitoring',
    Icon: BarChart3,
    price: 'Starting at: $49/month',
    pricingCopy:
      'This provides continuous, proactive oversight of your environment, delivering real-time anomaly alerts and monthly structural health reports to catch thermal and particulate spikes before they cause downtime.',
    pricingNote:
      'Monitoring plans are customized according to infrastructure size and operational requirements.',
    copy: 'Provide ongoing monitoring, trending, alerts, and recurring Infrastructure Health Reviews that help identify developing risks before they impact business operations.',
  },
  {
    title: 'Asset & Documentation Updates',
    Icon: ClipboardList,
    price: 'Custom Proposal',
    pricingCopy:
      'Pricing is based on the number of assets, documentation scope, rack layouts, cable infrastructure, and inventory requirements.',
    copy: 'Verify physical assets, update inventories, improve rack documentation, document cable pathways, and maintain accurate infrastructure records that support operations, troubleshooting, and future planning.',
  },
  {
    title: 'AirCap™ (Coming Soon)',
    Icon: ShieldCheck,
    price: 'Coming Soon',
    pricingCopy: 'Pricing will be announced following product launch.',
    copy: 'Coming Soon: A future Digital-ABB engineered retrofit solution designed to help protect existing server racks by delivering filtered positive-pressure airflow, reducing airborne particulate exposure without requiring replacement of the existing cabinet.',
  },
];

const packages = [
  {
    name: 'Micro-Vault Package',
    price: 'Starting at: $1,250',
    pricingCopy:
      'This baseline covers highly meticulous, static-safe physical decontamination, cable tracking, and thermal path optimization for a single standalone enclosure, ensuring a flawless foundation for localized operations.',
    bestFor:
      'Small offices, startups, departmental IT rooms, single racks, and low-volume environments.',
    typicalFit:
      '1-4 systems or small rack environments with light-to-moderate physical infrastructure risk.',
    includes: [
      'Infrastructure Health Assessment',
      'Asset Intelligence snapshot',
      'Environmental risk review',
      'Basic documentation findings',
      'Package recommendation',
      'Optional sensor or filter upgrade review',
    ],
    frequency: 'Quarterly or bi-annual depending on assessment findings.',
  },
  {
    name: 'Sovereign 9U Package',
    price: 'Starting at: $3,450',
    pricingCopy:
      'This covers an intensive multi-rack or lab environment engagement. It includes advanced airflow mapping, structured cable re-routing, and deep physical hygiene remediation across complex, high-utilization edge deployments.',
    bestFor:
      'Growing MSP clients, small colo cages, edge environments, labs, and mid-size infrastructure rooms.',
    typicalFit:
      '5-20 systems, 9U-42U rack environments, moderate AI/GPU density, airflow concerns, or documentation gaps.',
    includes: [
      'Infrastructure Health Assessment',
      'Thermal and airflow review',
      'Environmental Intelligence findings',
      'Asset and Documentation Intelligence review',
      'Risk summary',
      'Recommended remediation roadmap',
      'Optional sensor installation and monitoring plan',
    ],
    frequency: 'Monthly or quarterly depending on risk level.',
  },
  {
    name: 'Enterprise Zone Package',
    price: 'Custom Proposal',
    pricingCopy:
      'Every Enterprise Zone engagement is customized based on rack count, AI/GPU density, operational requirements, environmental conditions, and business impact.',
    bestFor:
      'Multi-rack environments, AI/GPU clusters, warehouses, manufacturing sites, and higher-risk edge infrastructure.',
    typicalFit:
      'Multiple racks, high-density systems, high business impact, harsh environments, thermal stress, or significant documentation gaps.',
    includes: [
      'Full Infrastructure Health Intelligence Assessment',
      'Thermal, airflow, environmental, physical infrastructure, asset, and documentation intelligence',
      'Executive risk summary',
      'Prioritized remediation roadmap',
      'Monitoring recommendations',
      'Sensor and positive-pressure protection review',
      'Recurring Infrastructure Health reporting',
    ],
    frequency: 'Monthly for high-density or high-risk environments.',
  },
];

const assessmentMetrics = [
  'Room, rack, and equipment context',
  'Temperature and localized thermal patterns',
  'Air velocity and airflow conditions',
  'Intake and exhaust conditions',
  'Device identity and hardware information',
  'Internal device thermal condition where supported',
  'Cooling and fan condition where supported',
  'Power and PSU condition where supported',
  'Physical port information for fiber and copper where supported',
  'Asset, connection, and documentation evidence',
  'Baseline and change-verification findings',
];

const assessmentPricing = {
  title: 'Infrastructure Health Assessment',
  price: 'Starting at: $495',
  copy: 'This starting investment covers an on-site, evidence-based assessment using Digital-ABB field tools to capture relevant physical infrastructure and operating-condition evidence, followed by documented findings and an executive summary. Final scope and pricing depend on site size, equipment count, and selected assessment products.',
};

function getInvestmentParts(price: string) {
  if (price.startsWith('Starting at: ')) {
    return {
      label: 'Starting at:',
      value: price.replace('Starting at: ', ''),
    };
  }

  return {
    label: '',
    value: price,
  };
}

const recommendationExamples = [
  ['Light risk', 'Micro-Vault Package'],
  ['Moderate risk', 'Sovereign 9U Package'],
  ['High risk', 'Enterprise Zone Package'],
];

export default function App() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showPilotForm, setShowPilotForm] = useState(false);
  const [showGuideForm, setShowGuideForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<GuideFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  });
  const assessmentInvestment = getInvestmentParts(assessmentPricing.price);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleGuideSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mzdozewz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          email: formData.email,
          formType: 'Infrastructure Health Guide Download',
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    }
  };

  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-[#F3F7FA] text-slate-950 font-sans">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="flex items-center gap-3 font-bold text-slate-950">
            <img src="/logo.png" alt="Digital-ABB logo" className="h-10 w-10 rounded-md" />
            <span>Digital-ABB</span>
          </a>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
            <a href="#assessment" className="hover:text-blue-700">
              Assessment
            </a>
            <a href="#packages" className="hover:text-blue-700">
              Packages
            </a>
            <a href="#remediation" className="hover:text-blue-700">
              Remediation & Optimization
            </a>
            <a href="#methodology" className="hover:text-blue-700">
              Methodology
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="relative isolate min-h-[78vh] overflow-hidden">
          <img
            src={hero}
            alt="Infrastructure health monitoring dashboard"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />

          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 py-20">
            <div className="max-w-4xl text-white">
              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Make Your Physical Infrastructure Visible.
              </h1>
              <p className="mt-5 text-2xl font-semibold text-blue-100 md:text-4xl">Digital-ABB</p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                From CPU-based networks to GPU-powered infrastructure, increasing density and
                complexity make periodic physical verification essential to proactive operations.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                Digital-ABB uses purpose-built field assessment tools to capture and document the
                physical environment, device-reported operating conditions, and infrastructure
                evidence — helping organizations understand what is physically present, the
                conditions surrounding it, and how supported devices are operating within that
                environment.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-300">
                Reliability. Performance. Longevity.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowPilotForm(true)}
                  className="rounded-md bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-500"
                >
                  Request an Infrastructure Assessment
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuditForm(true)}
                  className="rounded-md border border-white/70 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View Sample Assessment Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* THE 30-SECOND DIFFERENTIATOR */}
        <section className="py-12 bg-slate-950 border-y border-slate-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold">
              The Digital-ABB Difference
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-4">
              Purpose-Built Tools for Physical Infrastructure Verification
            </h2>

            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              Digital-ABB doesn't just recommend physical verification. We use purpose-built field
              tools and our
              <strong className="text-white"> Engineering Assessment Framework™ (EAF™)</strong>
              to capture, organize, and verify evidence from the environment, the equipment, and the
              physical infrastructure itself.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">
              <span className="text-blue-400">⚡</span>
              <span>
                No Guesswork. No Assumptions. Documented Physical Evidence.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: ENGINEERING EVIDENCE FIRST */}
        <section className="engineering-evidence-section py-16 bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
              Methodology Over Assumptions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Every Recommendation Begins with Engineering Evidence
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              At Digital-ABB, we don't guess. Every recommendation begins with our
              <strong className="text-white">Engineering Assessment Framework™ (EAF™)</strong>, a
              structured process that evaluates the physical operating condition of your IT
              environment before any corrective action is recommended.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-8 text-sm font-medium">
              <div className="p-3 bg-slate-800/60 rounded border border-slate-700/80">
                Thermal Conditions
              </div>
              <div className="p-3 bg-slate-800/60 rounded border border-slate-700/80">
                Airflow Performance
              </div>
              <div className="p-3 bg-slate-800/60 rounded border border-slate-700/80">
                Environmental Conditions
              </div>
              <div className="p-3 bg-slate-800/60 rounded border border-slate-700/80">
                Physical Infrastructure
              </div>
              <div className="p-3 bg-slate-800/60 rounded border border-slate-700/80">
                Device Condition
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-8">
              This ensures that every recommendation is based on documented engineering evidence
              rather than assumptions.
            </p>

            <a
              href="#eaf-framework"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Learn About Our Engineering Framework
            </a>
          </div>
        </section>

        {/* VISUAL PROCESS FLOW */}
        <div className="py-10 bg-slate-950 text-white text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
            The Engineering Process
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-base font-semibold">
            <span className="px-4 py-2 bg-slate-900 rounded-md border border-slate-800 text-blue-400">
              Observe
            </span>
            <span className="text-slate-600">↓</span>
            <span className="px-4 py-2 bg-slate-900 rounded-md border border-slate-800 text-blue-400">
              Measure
            </span>
            <span className="text-slate-600">↓</span>
            <span className="px-4 py-2 bg-slate-900 rounded-md border border-slate-800 text-blue-400">
              Analyze
            </span>
            <span className="text-slate-600">↓</span>
            <span className="px-4 py-2 bg-slate-900 rounded-md border border-slate-800 text-blue-400">
              Recommend
            </span>
            <span className="text-slate-600">↓</span>
            <span className="px-4 py-2 bg-slate-900 rounded-md border border-slate-800 text-blue-400">
              Verify
            </span>
          </div>
        </div>

        <section className="border-t border-slate-800 bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Infrastructure Health Index™ (IHI™)</h2>
              <p className="mx-auto mt-2 max-w-2xl text-slate-400">
                IHI™ organizes measured and observed physical findings into a consistent
                infrastructure-condition score that supports prioritization, comparison, and
                revalidation over time.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-emerald-500/30 bg-slate-900 p-6 text-center">
                <div className="mb-1 text-2xl font-bold text-emerald-400">🟢 90 – 100</div>
                <div className="mb-2 text-lg font-semibold">Strong Baseline</div>
                <p className="text-xs text-slate-400">
                  Measured and observed conditions show a strong physical operating baseline.
                </p>
              </div>

              <div className="rounded-xl border border-yellow-500/30 bg-slate-900 p-6 text-center">
                <div className="mb-1 text-2xl font-bold text-yellow-400">🟡 75 – 89</div>
                <div className="mb-2 text-lg font-semibold">Stable / Minor Drift</div>
                <p className="text-xs text-slate-400">
                  Minor physical-condition drift is present; review and routine verification are recommended.
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-slate-900 p-6 text-center">
                <div className="mb-1 text-2xl font-bold text-orange-400">🟠 60 – 74</div>
                <div className="mb-2 text-lg font-semibold">Needs Attention</div>
                <p className="text-xs text-slate-400">
                  One or more physical conditions warrant attention, additional investigation, or corrective action.
                </p>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-slate-900 p-6 text-center">
                <div className="mb-1 text-2xl font-bold text-red-400">🔴 Below 60</div>
                <div className="mb-2 text-lg font-semibold">Priority Review</div>
                <p className="text-xs text-slate-400">
                  Significant physical-condition findings warrant prompt review and appropriate follow-up.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Assessment Comes First</h2>
            <p className="mb-6 text-lg text-slate-300">
              Remote monitoring can show that a device or service has a problem, but it may not
              reveal the physical conditions surrounding the equipment. Localized heat, airflow
              restriction, contamination, cabling conditions, and device-reported physical health
              can provide additional evidence for better decisions.
            </p>
            <div className="space-y-3 rounded-xl border border-blue-500/30 bg-slate-800/70 p-6 text-left text-slate-300">
              <p>
                <strong className="text-white">The Engineering Advantage:</strong> Digital-ABB
                captures evidence before recommending action. That helps teams distinguish observed
                physical conditions from assumptions and focus follow-up work where the evidence
                indicates it may be needed.
              </p>
              <p className="text-sm text-slate-400">
                Assessment findings can support remediation, additional investigation, periodic
                verification, or continued observation depending on what is actually documented.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                What We Assess
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#16324F]">
                Environment. Device. Documentation. Verification.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Digital-ABB gives organizations practical visibility into where equipment is,
                the conditions surrounding it, and the physical operating condition reported by
                supported devices.
              </p>

              <p className="mt-6 text-lg font-semibold text-slate-700">
                <strong>
                  Know what you have. Know the environment it operates in. Know the physical
                  condition of the equipment. Verify it again when conditions change.
                </strong>
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-[#D7E2EA] bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="assessment" className="bg-slate-100 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Assessment Products
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Capture the environment and the equipment — then bring the evidence together.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Digital-ABB combines Thermal Environment Assessment, Device Assessment, and
                Physical Infrastructure Documentation as appropriate to the assignment. The
                environment shows what equipment is exposed to. Supported devices provide
                device-reported physical operating condition. Documentation establishes what is
                physically present and where. Together, these evidence sources create a clearer
                infrastructure baseline for verification and decision-making.
              </p>
              <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  {assessmentPricing.title}
                </p>
                <p className="mt-3 text-sm italic leading-7 text-slate-700">
                  Assessment scope is selected for the customer environment. Digital-ABB records
                  measured, observed, and supported device-reported evidence without treating
                  assumptions as documented fact.
                </p>
                <div className="mt-3">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
                    Starting Investment
                  </p>
                  <p className="mt-2 text-sm font-bold text-blue-700">
                    {assessmentInvestment.label}
                  </p>
                  <p className="text-3xl font-black text-slate-950">{assessmentInvestment.value}</p>
                </div>
                <p className="mt-4 leading-7 text-slate-700">
                  <span className="font-bold text-slate-950">What this covers: </span>
                  {assessmentPricing.copy}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-[#D7E2EA] bg-white p-6">
              <h3 className="text-xl font-bold">Assessment metrics used</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                {assessmentMetrics.map((metric) => (
                  <li key={metric} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-5xl px-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Understand the operating environment before escalating the problem.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Not every infrastructure problem is caused by physical or environmental conditions.
                Digital-ABB helps determine whether those conditions may be contributing — or
                provides evidence that allows troubleshooting to continue to the next layer.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                We don't guess the cause. We help eliminate the possibilities.
              </p>
            </div>
          </div>
        </section>

        <section id="packages" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">Packages</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Infrastructure Health Packages
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Digital-ABB begins with an Infrastructure Health Assessment. Assessment findings
                determine the recommended package based on rack count, environmental exposure,
                thermal risk, airflow restriction, AI/GPU density, asset condition, and
                documentation gaps.
              </p>

              <p className="mt-6 text-lg font-semibold text-slate-700">
                <strong>
                  Know what you have. Know the environment it operates in. Know the physical
                  condition of the equipment. Verify it again when conditions change.
                </strong>
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => {
                const investment = getInvestmentParts(pkg.price);

                return (
                  <article
                    key={pkg.name}
                    className="flex flex-col rounded-lg border border-[#D7E2EA] bg-white p-6"
                  >
                    <h3 className="text-2xl font-black text-slate-950">{pkg.name}</h3>
                    <div className="mt-4 rounded-md border border-blue-100 bg-white p-4">
                      <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
                        Starting Investment
                      </p>
                      {investment.label && (
                        <p className="mt-2 text-sm font-bold text-blue-700">{investment.label}</p>
                      )}
                      <p className="text-2xl font-black text-blue-700">{investment.value}</p>
                      <p className="mt-3 leading-7 text-slate-700">
                        {pkg.price !== 'Custom Proposal' && (
                          <span className="font-bold text-slate-950">What this covers: </span>
                        )}
                        {pkg.pricingCopy}
                      </p>
                    </div>

                    <p className="mt-5 text-sm font-bold uppercase tracking-wide text-blue-700">
                      Best for
                    </p>
                    <p className="mt-2 leading-7 text-slate-700">{pkg.bestFor}</p>

                    <p className="mt-5 text-sm font-bold uppercase tracking-wide text-blue-700">
                      Typical fit
                    </p>
                    <p className="mt-2 leading-7 text-slate-700">{pkg.typicalFit}</p>

                    <p className="mt-5 text-sm font-bold uppercase tracking-wide text-blue-700">
                      Includes
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border-t border-slate-200 pt-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                        Recommended frequency
                      </p>
                      <p className="mt-2 leading-7 text-slate-700">{pkg.frequency}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-lg border border-slate-300 bg-slate-950 p-6 text-white">
              <h3 className="text-2xl font-bold">Package recommendation logic</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {recommendationExamples.map(([risk, pkg]) => (
                  <div key={risk} className="rounded-lg border border-white/15 bg-white/10 p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-200">
                      {risk}
                    </p>
                    <p className="mt-2 text-xl font-bold">{pkg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section" id="free-guide">
          <div className="guide-content">
            <h2>Free Infrastructure Health Guide</h2>

            <p>
              Learn how to identify common physical infrastructure risks affecting server rooms, AI
              systems, and critical IT environments.
            </p>

            {!showGuideForm && !submitted && (
              <button
                type="button"
                className="download-button"
                onClick={() => setShowGuideForm(true)}
              >
                Get Your Free Guide
              </button>
            )}

            {showGuideForm && !submitted && (
              <form className="guide-form" onSubmit={handleGuideSubmit}>
                <div className="guide-form-grid">
                  <label>
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Company
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Business Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <button type="submit" className="download-button">
                  Submit and Access Guide
                </button>
              </form>
            )}

            {submitted && (
              <div className="guide-success">
                <h3>Thank you, {formData.firstName}.</h3>

                <p>Your Infrastructure Health Guide is ready.</p>

                <a
                  href="/guides/Protect-Your-IT-Room-Guide.pdf"
                  download
                  className="download-button"
                >
                  Download Your Guide
                </a>

                <a href="#assessment" className="assessment-link">
                  Request an Infrastructure Health Assessment
                </a>
              </div>
            )}
          </div>
        </section>

        <section id="remediation" className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Remediation
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Remediation & Optimization
              </h2>
              <h3 className="mt-4 text-2xl font-bold text-slate-800">
                Turning Assessment Findings into Practical Solutions
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                When an assessment identifies actionable physical conditions, Digital-ABB can
                provide a prioritized remediation roadmap describing the observed condition,
                recommended corrective action, and verification steps.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Digital-ABB helps organizations move beyond identifying problems by delivering
                practical remediation and optimization services that improve the health,
                reliability, and resilience of the physical infrastructure supporting today's IT and
                AI environments.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Our recommendations are based on measured conditions, documented observations, and
                operational risk, not assumptions.
              </p>
              <p className="mt-6 text-lg font-semibold text-slate-700">
                <strong>
                  Know what you have. Know the environment it operates in. Know the physical
                  condition of the equipment. Verify it again when conditions change.
                </strong>
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {remediationServices.map((service) => {
                const investment = getInvestmentParts(service.price);

                return (
                  <article
                    key={service.title}
                    className="rounded-lg border border-slate-300 bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                        <service.Icon aria-hidden="true" className="h-6 w-6" strokeWidth={2.2} />
                      </span>
                      <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                    </div>
                    <p className="mt-4 leading-7 text-slate-700">{service.copy}</p>
                    <div className="mt-5 border-t border-slate-200 pt-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
                        Starting Investment
                      </p>
                      {investment.label && (
                        <p className="mt-2 text-sm font-bold text-blue-700">{investment.label}</p>
                      )}
                      <p className="text-2xl font-black text-blue-700">{investment.value}</p>
                      <p className="mt-3 leading-7 text-slate-700">
                        {service.price !== 'Custom Proposal' && service.price !== 'Coming Soon' && (
                          <span className="font-bold text-slate-950">What this covers: </span>
                        )}
                        {service.pricingCopy}
                      </p>
                      {service.pricingNote && (
                        <p className="mt-3 leading-7 text-slate-700">{service.pricingNote}</p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <p className="text-xl font-bold text-slate-950">From Assessment to Action</p>
              <p className="mt-3 leading-8 text-slate-700">
                The Infrastructure Health Assessment is the beginning of the customer journey, not
                the end.
              </p>
              <p className="mt-3 leading-8 text-slate-700">
                Digital-ABB does not assess infrastructure simply to describe its condition. We
                collect evidence to identify physical operating conditions that can be acted upon.
              </p>
              <p className="mt-3 leading-8 text-slate-700">
                Assessment findings help determine whether thermal, airflow, environmental, physical
                infrastructure, power, asset, or documentation conditions warrant remediation,
                additional investigation, verification, or continued observation.
              </p>
              <p className="mt-3 leading-8 text-slate-700">
                Where actionable physical conditions are identified, Digital-ABB can help remediate
                those conditions and reassess the environment to verify what changed.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                Assessment → Correlation → Remediation → Verification → Prevention
              </p>
            </div>
          </div>
        </section>

        <section
          id="methodology"
          className="py-12 bg-slate-950 text-white text-center border-b border-slate-800"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">
              The Engineering Process
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5 text-left">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  01
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">Assessment</h3>
                <p className="mt-4 text-lg font-semibold text-white">Discover the condition.</p>
                <p className="mt-3 text-slate-400">
                  Collect measured and observed evidence across thermal, airflow, environmental,
                  physical infrastructure, power, asset, and documentation conditions.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  02
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">Correlation</h3>
                <p className="mt-4 text-lg font-semibold text-white">
                  Determine whether it may matter.
                </p>
                <p className="mt-3 text-slate-400">
                  Evaluate relationships between measured physical conditions, infrastructure
                  configuration, workload context, and observed operating concerns without assuming
                  causation.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  03
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">Remediation</h3>
                <p className="mt-4 text-lg font-semibold text-white">
                  Address the physical contributor.
                </p>
                <p className="mt-3 text-slate-400">
                  Correct actionable physical conditions identified through the assessment using
                  appropriate infrastructure remediation and optimization practices.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  04
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">Verification</h3>
                <p className="mt-4 text-lg font-semibold text-white">Prove what changed.</p>
                <p className="mt-3 text-slate-400">
                  Reassess relevant conditions after remediation and compare before-and-after
                  evidence to verify the resulting physical operating environment.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  05
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">Prevention</h3>
                <p className="mt-4 text-lg font-semibold text-white">
                  Help keep the condition from returning.
                </p>
                <p className="mt-3 text-slate-400">
                  Establish baselines, recurring reviews, monitoring recommendations, and preventive
                  practices appropriate to the infrastructure environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Sample Report / Contact
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                See how Infrastructure Health Intelligence is documented.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                Review a sample report or request an assessment to see how Digital-ABB documents
                thermal environment, device condition, physical infrastructure, evidence,
                recommendations, and verification needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowPilotForm(true)}
                  className="rounded-md bg-blue-600 px-6 py-3 font-bold text-white shadow transition hover:bg-blue-500"
                >
                  Request Assessment
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuditForm(true)}
                  className="rounded-md bg-slate-950 px-6 py-3 font-bold text-white shadow transition hover:bg-slate-800"
                >
                  View Sample Report
                </button>
              </div>

              <div className="mt-8 leading-7 text-slate-700">
                <p className="font-bold text-slate-950">Digital-ABB LLC</p>
                <p>3801 North Capital of Texas Hwy</p>
                <p>Ste E240-3962</p>
                <p>Austin, TX 78746</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@digital-abb.com" className="font-semibold text-blue-700">
                    info@digital-abb.com
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://www.digital-abb.com" className="font-semibold text-blue-700">
                    www.digital-abb.com
                  </a>
                </p>
                <div className="mt-4">
                  <p className="font-bold text-slate-950">Business Hours</p>
                  <p>Monday-Friday</p>
                  <p>8:00 AM - 6:00 PM CST</p>
                </div>
              </div>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* BRAND IDENTITY ANCHOR */}
      <div className="py-14 bg-blue-950/40 border-t border-slate-800 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          We Don't Assume. We Verify.
        </h3>
        <p className="text-slate-400 text-sm mt-2">
          Evidence first. Technician verified. Built for physical infrastructure.
        </p>
      </div>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-lg font-black text-white">Digital-ABB</p>
            <p className="mt-2 max-w-xl leading-7 text-slate-300">
              Physical infrastructure visibility products that help organizations assess the
              environment, document what is physically present, evaluate supported device-reported
              physical condition, and verify change over time.
            </p>
          </div>

          <div className="leading-7">
            <p className="font-bold text-white">Contact</p>
            <p>info@digital-abb.com</p>
            <p>3801 North Capital of Texas Hwy</p>
            <p>Ste E240-3962</p>
            <p>Austin, TX 78746</p>
            <p>www.digital-abb.com</p>
          </div>

          <div className="leading-7">
            <p className="font-bold text-white">Business Hours</p>
            <p>Monday-Friday</p>
            <p>8:00 AM - 6:00 PM CST</p>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">
          <p>&copy; 2026 Digital-ABB LLC. All Rights Reserved.</p>
        </div>
      </footer>

      {showPilotForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setShowPilotForm(false)}
              className="absolute right-4 top-4 text-slate-500 hover:text-slate-900"
            >
              X
            </button>
            <ContactForm onClose={() => setShowPilotForm(false)} />
          </div>
        </div>
      )}

      {showAuditForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setShowAuditForm(false)}
              className="absolute right-4 top-4 text-slate-500 hover:text-slate-900"
            >
              X
            </button>

            <h3 className="mb-3 text-2xl font-bold">View Sample Report</h3>

            <p className="mb-6 text-slate-700">
              Enter your details to receive the Digital-ABB sample report.
            </p>

            <form
              action="https://formspree.io/f/mzdozewz"
              method="POST"
              onSubmit={() => {
                setTimeout(() => {
                  window.open('/Digital-ABB_Sample_InfraSummary.pdf', '_blank');
                  setShowAuditForm(false);
                }, 500);
              }}
              className="space-y-4"
            >
              <input type="hidden" name="lead_type" value="Sample Report Request" />

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-slate-300 px-4 py-3"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Work email"
                className="w-full rounded-md border border-slate-300 px-4 py-3"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full rounded-md border border-slate-300 px-4 py-3"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
              >
                Submit and View
              </button>
            </form>

            <button
              type="button"
              onClick={() => setShowAuditForm(false)}
              className="mt-4 text-sm text-slate-600 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

