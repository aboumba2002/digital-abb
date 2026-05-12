import { useState } from 'react';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

export default function App() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showPilotForm, setShowPilotForm] = useState(false);

  const sectionClass = 'bg-white rounded-2xl shadow p-8';
  const imageClass =
    'w-full max-w-4xl mx-auto rounded-2xl shadow-lg border mb-6 object-cover';

  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-5 justify-center text-sm font-bold text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#airflow" className="hover:text-blue-600 transition">Airflow & Thermal</a>
          <a href="#environmental" className="hover:text-blue-600 transition">Environmental Monitoring</a>
          <a href="#msp" className="hover:text-blue-600 transition">MSP Partners</a>
          <a href="#audit-report" className="hover:text-blue-600 transition">Audit Report</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero */}
        <section id="home" className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <img src="/logo.png" alt="Digital-ABB logo" className="w-24 h-24 rounded-xl shadow" />

            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 leading-tight">
                Digital-ABB
              </h1>
              <h2 className="text-2xl font-semibold mt-2">
                Physical Layer Protection for Mission-Critical IT Environments
                Preventing catastrophic downtime from small physical failures.
              </h2>
            </div>
          </div>

          <p className="text-lg text-gray-800 max-w-4xl">
            Digital-ABB protects server rooms, racks, and AI infrastructure from airflow degradation,
            particulate contamination, water intrusion risk, and thermal reliability failures before downtime occurs.

            AI-powered infrastructure assurance through infrastructure intelligence, predictive maintenance, and smart operational response.
          </p>

          <p className="text-gray-800 max-w-4xl mt-4">
            We help organizations maintain stable physical operations by improving airflow integrity,
            thermal visibility, infrastructure hygiene, and environmental risk awareness.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 font-semibold">
            <span>✔ No Downtime</span>
            <span>✔ ESD-Safe Procedures</span>
            <span>✔ Airflow Integrity</span>
            <span>✔ Thermal Risk Mitigation</span>
            <span>✔ Environmental Risk Awareness</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowPilotForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-500 transition"
            >
              Request Free Infrastructure Audit
            </button>

            <button
              onClick={() => setShowAuditForm(true)}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
            >
              Download Sample Audit Report
            </button>
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">
            Hyperscale-Inspired Infrastructure Logic
          </h3>

          <p className="text-xl leading-relaxed max-w-4xl">
            Data is permanent. Compute is replaceable.
          </p>

          <p className="mt-6 text-lg leading-8 max-w-5xl text-blue-100">
            Digital-ABB applies hyperscale-inspired thinking to physical-layer infrastructure reliability.
            Modern environments depend on stable airflow, thermal consistency, environmental awareness,
            and operational continuity to protect storage, compute, and network infrastructure from
            preventable failure conditions.
          </p>

          <p className="mt-4 text-blue-200 italic">
            Protecting stable physical operations within hybrid infrastructure environments.
          </p>
        </section>

        {/* Invisible Threat */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">
            The Invisible Infrastructure Threat Most IT Rooms Ignore
          </h3>

          <h4 className="text-2xl font-semibold text-blue-600 mb-4">
            Your Cooling System May Be Working Against You
          </h4>

          <p className="text-gray-800 mb-6">
            Modern cooling systems continuously pull airborne particulate into racks, heatsinks,
            fan assemblies, cable pathways, and exhaust channels. Over time, contamination accumulates
            inside the exact airflow paths critical to maintaining thermal stability and hardware reliability.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div className="border rounded-xl p-4">✔ Restricted airflow paths</div>
            <div className="border rounded-xl p-4">✔ Heatsink contamination buildup</div>
            <div className="border rounded-xl p-4">✔ Increased fan RPM and power usage</div>
            <div className="border rounded-xl p-4">✔ Thermal hotspots and heat retention</div>
            <div className="border rounded-xl p-4">✔ Accelerated hardware wear</div>
            <div className="border rounded-xl p-4">✔ Cooling inefficiency under AI workloads</div>
          </div>

          <div className="mt-8 border-l-4 border-blue-600 pl-6">
            <p className="text-xl font-semibold italic text-gray-900">
              “Dust becomes a thermal and operational problem long before it becomes visually obvious.”
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-6">Services</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Infrastructure Hygiene</h3>
              <p className="text-gray-800">
                Condition-based particulate decontamination using ESD-safe tools and airflow-preserving procedures.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Thermal & Airflow Preservation</h3>
              <p className="text-gray-800">
                Airflow-focused maintenance designed to preserve cooling efficiency and reduce thermal stress.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Cable & Physical Layer Integrity</h3>
              <p className="text-gray-800">
                Cable pathway inspection, airflow obstruction review, and fiber-area contamination control.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Environmental Monitoring</h3>
              <p className="text-gray-800">
                Water intrusion awareness, humidity observation, thermal trend review, and maintenance recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Scalable Solutions */}
        <section id="solutions" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-10 text-center">
            Scalable Physical-Layer Solutions
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Micro-Vault</h4>
              <p className="text-sm text-gray-600 mb-4 font-semibold uppercase">
                Desktop & Small Office
              </p>
              <p className="text-gray-700">
                Predictive hygiene and thermal protection for standalone servers, NAS units,
                network closets, and small office infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50">
              <h4 className="text-xl font-bold mb-2">Sovereign 9U</h4>
              <p className="text-sm text-blue-600 mb-4 font-semibold uppercase">
                Mid-Size Infrastructure
              </p>
              <p className="text-gray-700">
                Airflow-aware infrastructure support for medical offices, logistics hubs,
                MSP environments, and hybrid IT rooms.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Enterprise Zone</h4>
              <p className="text-sm text-gray-600 mb-4 font-semibold uppercase">
                42U Cabinets & Data Centers
              </p>
              <p className="text-gray-700">
                Physical-layer reliability support for high-density racks, AI infrastructure,
                telecom closets, and data center environments.
              </p>
            </div>
          </div>
        </section>

        {/* Operational Infrastructure Work */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">Operational Infrastructure Work</h3>

          <p className="text-gray-800 mb-6">
            Digital-ABB works around live infrastructure with an ESD-aware, no-disconnect
            approach focused on airflow preservation, thermal reliability, and physical-layer protection.
          </p>

          <img
            src="/thermal-inspection-ai-server.png"
            alt="Digital-ABB thermal inspection of enterprise infrastructure"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">Thermal Inspection</h4>
              <p>Identify airflow restrictions and abnormal thermal buildup before degradation occurs.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">Airflow Protection</h4>
              <p>Preserve cold intake and warm exhaust pathways to maintain stable operating temperatures.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">Infrastructure Hygiene</h4>
              <p>Reduce particulate contamination affecting heatsinks, fans, cable paths, and cooling efficiency.</p>
            </div>
          </div>
        </section>

        {/* Airflow */}
        <section id="airflow" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">
            Airflow Preservation & Thermal Path Management
          </h3>

          <p className="text-gray-800 mb-6">
            Dust contamination becomes a risk when it interferes with the airflow paths your infrastructure
            was designed to rely on. Digital-ABB focuses on preserving cold intake, warm exhaust,
            and cable-path airflow integrity.
          </p>

          <img
            src="/server-rack-airflow-management.png"
            alt="Digital-ABB airflow management diagram"
            className={imageClass}
          />

          <div className="grid md:grid-cols-3 gap-4 text-gray-800">
            <div className="border rounded-xl p-4">
              <h4 className="font-bold mb-2">Cool Intake</h4>
              <p>Maintain clear front-side airflow paths.</p>
            </div>

            <div className="border rounded-xl p-4">
              <h4 className="font-bold mb-2">Thermal Transfer</h4>
              <p>Reduce particulate buildup near heatsinks and fans.</p>
            </div>

            <div className="border rounded-xl p-4">
              <h4 className="font-bold mb-2">Warm Exhaust</h4>
              <p>Protect rear exhaust flow and prevent recirculation.</p>
            </div>
          </div>
        </section>

        {/* Environmental Risk Monitoring */}
        <section id="environmental" className={sectionClass}>
          <h2 className="text-3xl font-bold mb-6">Environmental Risk Monitoring</h2>

          <img
            src="/environmental-risk-monitoring.png"
            alt="Digital-ABB environmental risk monitoring and infrastructure protection"
            className="w-full max-w-4xl h-[420px] mx-auto rounded-2xl shadow-lg border mb-8 object-cover"
          />

          <p className="text-gray-700 leading-8 mb-4">
            Digital-ABB supports environmental risk awareness for hybrid infrastructure environments
            through monitoring approaches focused on water intrusion, AC condensation and leakage risk,
            airflow obstruction, thermal imbalance, humidity variation, particulate contamination,
            and physical-layer operating conditions.
          </p>

          <p className="text-gray-700 leading-8 mb-4">
            Cooling system leaks, unnoticed humidity fluctuations, and restricted airflow can silently
            contribute to hardware degradation, instability, and unexpected downtime within server rooms
            and critical IT spaces.
          </p>

          <p className="text-gray-700 leading-8">
            Our objective is to help organizations identify environmental risks early — before they escalate
            into equipment damage, cooling inefficiencies, service interruptions, or costly infrastructure failures.
          </p>

          <p className="text-sm text-gray-500 mt-4 italic">
            Detecting environmental risk before downtime happens.
          </p>
        </section>

        {/* Compliance & Monitoring */}
        <section id="compliance" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-8">Physical Compliance & Monitoring</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900 italic">Leak Protection</h4>
              <p className="text-gray-600">
                Environmental monitoring helps identify AC condensation leaks, humidity instability,
                and water intrusion risks before hardware damage occurs.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900 italic">Static Tolerance</h4>
              <p className="text-gray-600">
                Humidity awareness helps reduce conditions that may contribute to static risk and environmental instability.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900 italic">Infrastructure Hygiene</h4>
              <p className="text-gray-600">
                Particulate management supports mission-critical reliability, airflow efficiency, and audit readiness.
              </p>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">Recommended Maintenance Intervals</h3>

          <p className="text-gray-800 mb-6">
            Infrastructure hygiene should be scheduled based on risk level, equipment density,
            airflow sensitivity, and environmental conditions — not treated as general cleaning.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-xl p-5">
              <h4 className="font-bold text-lg mb-2">Small Server Rooms</h4>
              <p>Quarterly inspection / semiannual hygiene service</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold text-lg mb-2">MSP Client Environments</h4>
              <p>Quarterly rack and airflow pathway review</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold text-lg mb-2">AI / GPU Racks</h4>
              <p>Monthly thermal review / quarterly airflow maintenance</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold text-lg mb-2">Deep Fan & Heatsink Cleaning</h4>
              <p>Annual or bi-annual service during approved shutdown windows</p>
            </div>
          </div>
        </section>

        {/* In-house cleaning */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">Why In-House Cleaning Is Not Enough</h3>

          <p className="text-gray-800 mb-6">
            Most in-house or janitorial cleaning focuses on visible surfaces. Infrastructure hygiene
            requires a different approach because contamination affects airflow paths, cooling efficiency,
            cable areas, and equipment-adjacent components.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold mb-3">General Cleaning Limitations</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• No ESD-safe handling process</li>
                <li>• No rack airflow assessment</li>
                <li>• No fiber or cable-area contamination review</li>
                <li>• No thermal-risk documentation</li>
                <li>• No maintenance window planning</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">Digital-ABB Approach</h4>
              <ul className="space-y-2 text-gray-800">
                <li>✔ ESD-aware procedures</li>
                <li>✔ No cable disconnect</li>
                <li>✔ No system access</li>
                <li>✔ Airflow and thermal-risk focus</li>
                <li>✔ Visual reporting for IT managers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Audit Report */}
        <section id="audit-report" className="bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Audit Documentation</h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Provide visual reporting for risk review and maintenance planning. Our audit report
                documents physical-layer risks that remote monitoring tools cannot physically detect.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">✔</div>
                  <div>
                    <h5 className="font-bold">Thermal & Airflow Observations</h5>
                    <p className="text-sm opacity-70">
                      Visual evidence of airflow obstruction, thermal imbalance, and cooling inefficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">✔</div>
                  <div>
                    <h5 className="font-bold">Environmental Risk Findings</h5>
                    <p className="text-sm opacity-70">
                      Water intrusion risk, humidity concerns, contamination exposure, and physical-layer operating issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-blue-400 italic">
                Sample Physical Integrity Snapshot
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-red-400">AIRFLOW: OBSTRUCTION RISK DETECTED</p>
                <p className="text-orange-400">THERMAL: HOTSPOT POTENTIAL</p>
                <p className="text-blue-400">ENVIRONMENT: HUMIDITY / LEAKAGE WATCH</p>
                <div className="w-full bg-gray-800 h-2 mt-4 rounded-full">
                  <div className="bg-red-500 h-2 w-[75%] rounded-full"></div>
                </div>
                <p className="text-right text-xs opacity-50">Physical Layer Risk Score: Elevated</p>
              </div>
            </div>
          </div>
        </section>

        {/* MSP */}
        <section id="msp" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">MSP Infrastructure Partnership</h3>

          <p className="text-gray-800 text-lg mb-6">
            We reduce physical-layer risks your remote monitoring tools cannot see.
          </p>

          <p className="text-gray-800 mb-6">
            Most MSP platforms monitor CPU, memory, storage, and network performance —
            but they cannot detect airflow obstruction, heatsink contamination, particulate accumulation,
            thermal hotspots, water intrusion risks, or environmental degradation inside client infrastructure environments.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">What Digital-ABB Provides</h4>
              <ul className="space-y-2 text-gray-800">
                <li>✔ Thermal-risk assessments</li>
                <li>✔ Airflow inspections</li>
                <li>✔ Rack contamination reviews</li>
                <li>✔ Cable airflow analysis</li>
                <li>✔ Environmental risk awareness</li>
                <li>✔ Visual audit documentation</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6 bg-blue-50">
              <h4 className="text-xl font-bold mb-3">MSP Partnership Benefits</h4>
              <ul className="space-y-2 text-gray-800">
                <li>✔ Reduced emergency hardware events</li>
                <li>✔ Improved client infrastructure reliability</li>
                <li>✔ Increased service differentiation</li>
                <li>✔ Additional recurring service opportunities</li>
                <li>✔ No added engineering workload</li>
                <li>✔ White-label partnership options</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-blue-600 pl-6">
            <p className="text-xl font-semibold text-gray-900 italic">
              “Digital-ABB helps MSPs deliver infrastructure reliability beyond software monitoring.”
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold text-center mb-6">Service On-Demand Pricing</h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="border rounded-xl p-6">
              <h4 className="text-xl font-bold">1 Rack</h4>
              <p className="text-2xl font-bold text-blue-600">$250 – $400</p>
              <p className="text-gray-600">Per service call</p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="text-xl font-bold">2–5 Racks</h4>
              <p className="text-2xl font-bold text-blue-600">$200 – $300</p>
              <p className="text-gray-600">Per rack / visit</p>
            </div>

            <div className="border rounded-xl p-6 bg-blue-50">
              <h4 className="text-xl font-bold">Managed Monitoring</h4>
              <p className="text-2xl font-bold text-blue-600">Custom Quote</p>
              <p className="text-gray-600">Environmental and infrastructure monitoring</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={sectionClass}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">Digital-ABB</h3>
              <p>Pflugerville, TX | Serving the Austin Tech Corridor</p>
              <p>
                Email:{' '}
                <a href="mailto:info@digital-abb.com" className="text-blue-600">
                  info@digital-abb.com
                </a>
              </p>
              <p className="mt-3 text-gray-600">
                Protecting stable physical operations within hybrid infrastructure environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowAuditForm(true)}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Download Sample Audit Report
              </button>

              <button
                onClick={() => setShowPilotForm(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
              >
                Book Audit
              </button>
            </div>
          </div>
        </section>

        <div className="text-sm text-gray-500 mt-6">
          Digital-ABB provides responsive IT support, hybrid infrastructure assistance,
          airflow-awareness, environmental risk monitoring, and physical-layer operational reliability
          services throughout Austin, Pflugerville, Round Rock, and surrounding Texas areas.
        </div>
      </main>

      {/* Pilot Form Modal */}
      {showPilotForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setShowPilotForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
            <ContactForm onClose={() => setShowPilotForm(false)} />
          </div>
        </div>
      )}

      {/* Audit Download Modal */}
      {showAuditForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setShowAuditForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-3">Download Sample Audit</h3>

            <p className="text-gray-700 mb-6">
              Enter your details to receive the Digital-ABB sample audit report.
            </p>

            <form
              action="https://formspree.io/f/mzdozewz"
              method="POST"
              onSubmit={() => {
                setTimeout(() => {
                  window.open('/Digital-ABB-Sample-Audit.pdf', '_blank');
                  setShowAuditForm(false);
                }, 500);
              }}
              className="space-y-4"
            >
              <input type="hidden" name="lead_type" value="Sample Audit Download" />

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Work email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500"
              >
                Submit & Download
              </button>
            </form>

            <button
              type="button"
              onClick={() => setShowAuditForm(false)}
              className="mt-4 text-sm text-gray-600 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
