import { useState } from 'react';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';
import hero from './assets/infrastructure-health-hero.png';

const services = [
  {
    title: 'Thermal Intelligence',
    copy:
      'Measure heat patterns, hotspots, and temperature delta conditions that may affect infrastructure reliability.',
  },
  {
    title: 'Airflow Intelligence',
    copy:
      'Identify airflow restrictions, blocked exhaust paths, cable congestion, and equipment placement issues.',
  },
  {
    title: 'Environmental Intelligence',
    copy:
      'Review humidity, airborne contamination, water exposure, room conditions, and other environmental risk indicators.',
  },
  {
    title: 'Physical Infrastructure Intelligence',
    copy:
      'Assess racks, systems, power-adjacent conditions, cabling, placement, access, and physical risk factors.',
  },
  {
    title: 'Continuous Intelligence',
    copy:
      'Support recurring visibility through monitoring recommendations, trending, alerts, and Infrastructure Health reviews.',
  },
  {
    title: 'Asset Intelligence',
    copy:
      'Document critical infrastructure assets, observed condition, ownership context, and risk indicators that affect operational continuity.',
  },
  {
    title: 'Documentation Intelligence',
    copy:
      'Turn assessment findings into clear records, executive summaries, remediation roadmaps, and recurring monitoring guidance.',
  },
];

const remediationServices = [
  {
    title: 'Dust Remediation',
    copy:
      'ESD-safe removal of dust and airborne contaminants from racks, servers, switches, and network equipment.',
  },
  {
    title: 'Airflow Optimization',
    copy:
      'Improve cooling efficiency by reducing airflow restrictions, organizing cable pathways, and improving equipment placement.',
  },
  {
    title: 'Sensor Installation',
    copy:
      'Install intake, exhaust, humidity, airflow, and environmental sensors for continuous visibility.',
  },
  {
    title: 'Environmental Monitoring',
    copy:
      'Provide trending, alerts, and recurring Infrastructure Health reviews.',
  },
  {
    title: 'Asset & Documentation Updates',
    copy:
      'Verify assets, update inventories, rack layouts, cable paths, and operational records.',
  },
  {
    title: 'Positive-Pressure Protection (AirCap™)',
    copy:
      'Coming soon: retrofit protection designed to reduce airborne contamination in existing server racks.',
  },
];

const packages = [
  {
    name: 'Micro-Vault Package',
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
    frequency:
      'Quarterly or bi-annual depending on assessment findings.',
  },
  {
    name: 'Sovereign 9U Package',
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
  'Number of racks and systems',
  'Thermal hotspots and temperature delta',
  'Airflow restriction indicators',
  'Environmental exposure',
  'AI/GPU density',
  'Asset condition',
  'Documentation completeness',
  'Business impact level',
];

const recommendationExamples = [
  ['Light risk', 'Micro-Vault Package'],
  ['Moderate risk', 'Sovereign 9U Package'],
  ['High risk', 'Enterprise Zone Package'],
];

export default function App() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showPilotForm, setShowPilotForm] = useState(false);

  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="flex items-center gap-3 font-bold text-slate-950">
            <img src="/logo.png" alt="Digital-ABB logo" className="h-10 w-10 rounded-md" />
            <span>Digital-ABB</span>
          </a>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#assessment" className="hover:text-blue-700">Assessment</a>
            <a href="#packages" className="hover:text-blue-700">Packages</a>
            <a href="#remediation" className="hover:text-blue-700">Remediation & Optimization</a>
            <a href="#methodology" className="hover:text-blue-700">Methodology</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
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
                Infrastructure Health Intelligence Platform
              </h1>
              <p className="mt-5 text-2xl font-semibold text-blue-100 md:text-4xl">
                Digital-ABB
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                Helping organizations identify, assess, document, and monitor physical
                infrastructure risks before they impact operations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowPilotForm(true)}
                  className="rounded-md bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-500"
                >
                  Request Assessment
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuditForm(true)}
                  className="rounded-md border border-white/70 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Intelligence Services
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Identify, assess, remediate, document, and monitor physical risk.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Digital-ABB gives organizations a practical way to see the physical
                infrastructure conditions that remote tools often miss.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
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
                Assessment-to-Package
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Every package starts with measured infrastructure findings.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Digital-ABB begins with an Infrastructure Health Assessment that
                collects data across racks, systems, operating conditions, asset
                condition, and documentation quality. The assessment produces
                documented findings that guide package recommendations,
                remediation priorities, optimization work, and monitoring needs.
              </p>
            </div>

            <div className="rounded-lg border border-slate-300 bg-white p-6">
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

        <section id="packages" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Packages
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Infrastructure Health Packages
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Digital-ABB begins with an Infrastructure Health Assessment. Assessment
                findings determine the recommended package based on rack count,
                environmental exposure, thermal risk, airflow restriction, AI/GPU density,
                asset condition, and documentation gaps.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <article key={pkg.name} className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-2xl font-black text-slate-950">{pkg.name}</h3>

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
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-slate-300 bg-slate-950 p-6 text-white">
              <h3 className="text-2xl font-bold">Package recommendation logic</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {recommendationExamples.map(([risk, pkg]) => (
                  <div key={risk} className="rounded-lg border border-white/15 bg-white/10 p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-200">{risk}</p>
                    <p className="mt-2 text-xl font-bold">{pkg}</p>
                  </div>
                ))}
              </div>
            </div>
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
              <p className="mt-5 text-lg leading-8 text-slate-700">
                After the Infrastructure Health Assessment, Digital-ABB provides
                prioritized remediation and optimization services based on documented
                findings and measured operational risks.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {remediationServices.map((service) => (
                <article key={service.title} className="rounded-lg border border-slate-300 bg-white p-6">
                  <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{service.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <p className="text-xl font-bold text-slate-950">
                From Assessment to Action:
              </p>
              <p className="mt-3 leading-8 text-slate-700">
                Every Infrastructure Health Assessment concludes with a prioritized
                remediation roadmap. Digital-ABB turns findings into practical
                actions that improve reliability, visibility, and long-term resilience.
              </p>
            </div>
          </div>
        </section>

        <section id="methodology" className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-5">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Methodology
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight">
              A practical workflow for physical infrastructure risk intelligence.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-5">
              {['Assessment', 'Analysis', 'Intelligence Report', 'Remediation', 'Monitoring'].map((step, index) => (
                <div key={step} className="rounded-lg border border-slate-300 bg-white p-5">
                  <p className="text-sm font-bold text-blue-700">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-black">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Build visibility into infrastructure health findings and convert
                    them into operational next steps.
                  </p>
                </div>
              ))}
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
                Review a sample report or request an assessment to map environmental
                risk, airflow risk, thermal risk, Asset Intelligence, Documentation
                Intelligence, remediation roadmap, and monitoring options.
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
                <p>3801 N Capital of Texas Hwy</p>
                <p>Ste E240-3962</p>
                <p>Austin, TX 78746</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@digital-abb.com" className="font-semibold text-blue-700">
                    info@digital-abb.com
                  </a>
                </p>
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
