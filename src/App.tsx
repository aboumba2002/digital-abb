import { useState } from 'react';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

export default function App() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showPilotForm, setShowPilotForm] = useState(false);

  const sectionClass = "bg-white rounded-2xl shadow p-8";
  const imageClass = "w-full max-w-4xl mx-auto rounded-2xl shadow-lg border mb-6 object-cover";
  const smallImageClass = "w-full h-64 object-cover rounded-2xl shadow-lg border";

  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Hero */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <img src="/logo.png" alt="Digital-ABB logo" className="w-24 h-24 rounded-xl shadow" />

            <div>
              <h1 className="text-5xl font-bold text-blue-600">Digital-ABB</h1>
              <h2 className="text-2xl font-semibold mt-2">
                Physical Layer Protection for Mission-Critical IT Environments
              </h2>
            </div>
          </div>

          <p className="text-lg text-gray-800 max-w-4xl">
            Digital-ABB protects server rooms, racks, and AI infrastructure from airflow degradation,
            particulate contamination, and thermal reliability failures before downtime occurs.
          </p>

          <p className="text-gray-800 max-w-4xl mt-4">
            Modern GPU servers and high-density racks operate with minimal thermal tolerance.
            Even minor dust buildup can reduce cooling efficiency, increase fan strain,
            accelerate hardware wear, and create thermal hotspots.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 font-semibold">
            <span>✔ No Downtime</span>
            <span>✔ ESD-Safe Procedures</span>
            <span>✔ Airflow Integrity</span>
            <span>✔ Thermal Risk Mitigation</span>
            <span>✔ 20+ Years Experience</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowPilotForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-500"
            >
              Request Free Infrastructure Audit
            </button>

            <button
              onClick={() => setShowAuditForm(true)}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800"
            >
              Download Sample Audit Report
            </button>
          </div>
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
            Modern cooling systems continuously pull airborne particulate into racks,
            heatsinks, fan assemblies, cable pathways, and exhaust channels.
            Over time, contamination accumulates inside the exact airflow paths
            critical to maintaining thermal stability and hardware reliability.
          </p>

          <p className="text-gray-800 mb-6">
            Most environments appear visually clean long before airflow degradation
            and thermal stress begin affecting infrastructure performance.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div className="border rounded-xl p-4">
              ✔ Restricted airflow paths
            </div>

            <div className="border rounded-xl p-4">
              ✔ Heatsink contamination buildup
            </div>

            <div className="border rounded-xl p-4">
              ✔ Increased fan RPM and power usage
            </div>

            <div className="border rounded-xl p-4">
              ✔ Thermal hotspots and heat retention
            </div>

            <div className="border rounded-xl p-4">
              ✔ Accelerated hardware wear
            </div>

            <div className="border rounded-xl p-4">
              ✔ Cooling inefficiency under AI workloads
            </div>
          </div>

          <div className="mt-8 border-l-4 border-blue-600 pl-6">
            <p className="text-xl font-semibold italic text-gray-900">
              “Dust becomes a thermal and operational problem long before it becomes visually obvious.”
            </p>
          </div>
        </section>

        {/* AI Infrastructure */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">
            Operational Infrastructure Work
          </h3>

          <p className="text-gray-800 mb-6">
            Digital-ABB works around live infrastructure with an ESD-aware,
            no-disconnect methodology focused on airflow preservation,
            thermal reliability, and physical-layer risk reduction.
          </p>

          <img
            src="/thermal-inspection.png"
            alt="Digital-ABB thermal inspection of enterprise infrastructure"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">Thermal Inspection</h4>
              <p>
                Identify airflow restrictions and abnormal thermal buildup
                before infrastructure degradation occurs.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">Airflow Protection</h4>
              <p>
                Preserve cold intake and warm exhaust pathways to maintain
                stable operating temperatures.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">Infrastructure Hygiene</h4>
              <p>
                Reduce particulate contamination affecting heatsinks,
                fans, cable paths, and cooling efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-3xl font-bold mb-4">
            Sovereign AI Airflow Engineering
          </h3>

          <img
            src="/sovereign-airflow.png"
            alt="Digital-ABB Sovereign AI Airflow Management"
            className="w-full rounded-2xl shadow-lg mb-6"
          />

          <p className="text-gray-800 text-lg leading-relaxed">
            Digital-ABB designs and maintains airflow-aware edge infrastructure
            environments optimized for AI nodes, thermal stability, and predictive
            reliability. Our approach combines environmental hygiene, directed airflow
            management, particulate reduction, and thermal-risk monitoring to preserve
            long-term infrastructure performance.
          </p>
        </section>

        {/* Services */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              PM2.5 / PM10 observation, thermal trend review, and maintenance interval recommendations.
            </p>
          </div>
        </section>

        {/* Ford/Flex Standard */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">The Ford & Flex Standard</h3>
          <p className="text-gray-800 mb-4">
            Digital-ABB was built from over two decades of experience inside high-pressure enterprise
            environments including Ford Motor Company Data Centers, Flex Testing Stations, and telecom
            infrastructure operations.
          </p>

          <p className="text-gray-800">
            We bring the operational discipline used to support enterprise infrastructure into small
            business server rooms, MSP environments, AI labs, telecom rooms, and edge compute spaces.
          </p>
        </section>

        {/* Preventive vs Reactive */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-3xl font-bold mb-4">Preventive vs. Reactive</h3>
          <p className="text-gray-800 mb-6">
            Most IT rooms are cleaned on a schedule — or not at all. Digital-ABB approaches infrastructure
            hygiene as preventive maintenance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold mb-3">Reactive Operations</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• Emergency hardware failure</li>
                <li>• Thermal shutdowns</li>
                <li>• Increased cooling costs</li>
                <li>• Unplanned downtime</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">Preventive Operations</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• Stable airflow conditions</li>
                <li>• Improved cooling efficiency</li>
                <li>• Lower thermal stress</li>
                <li>• Better audit readiness</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Airflow Preservation & Thermal Path Management */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">
            Airflow Preservation & Thermal Path Management
          </h3>

          <p className="text-gray-800 mb-6">
            Dust contamination becomes a risk when it interferes with the airflow paths
            your infrastructure was designed to rely on. Digital-ABB focuses on preserving
            cold intake, warm exhaust, and cable-path airflow integrity.
          </p>

          <img
            src="/sovereign-airflow.png"
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

        {/* Maintenance Intervals */}
        <section className="bg-white rounded-2xl shadow p-8">
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

        {/* Why In-House Cleaning Is Not Enough */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-3xl font-bold mb-4">Why In-House Cleaning Is Not Enough</h3>

          <p className="text-gray-800 mb-6">
            Most in-house or janitorial cleaning focuses on visible surfaces. Infrastructure
            hygiene requires a different approach because dust affects airflow paths, cooling
            efficiency, cable areas, and equipment-adjacent components.
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

        {/* Compliance & Standards Awareness */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-3xl font-bold mb-4">Compliance & Standards Awareness</h3>

          <p className="text-gray-800 mb-6">
            Digital-ABB does not provide formal compliance certification. We provide
            infrastructure hygiene services and documentation aligned with enterprise
            environmental best practices and audit readiness expectations.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">NFPA 75 Awareness</h4>
              <p>Fire protection considerations for IT equipment environments.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">ISO 14644-1 Reference</h4>
              <p>Environmental particulate awareness for controlled spaces.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">ESD-Safe Procedures</h4>
              <p>Grounding-aware methods for live infrastructure areas.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h4 className="font-bold mb-2">OEM Airflow Expectations</h4>
              <p>Supports conditions expected for reliable equipment operation.</p>
            </div>
          </div>
        </section>

        {/* Operational Infrastructure Work */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">
            Operational Infrastructure Work
          </h3>

          <p className="text-gray-800 mb-6">
            Digital-ABB works around live infrastructure with an ESD-aware, no-disconnect
            approach focused on airflow, thermal reliability, and physical-layer protection.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <img
                src="/thermal-inspection.png"
                alt="Thermal inspection of rack infrastructure"
                className={smallImageClass}
              />
              <h4 className="font-bold mt-3">Thermal Inspection</h4>
              <p className="text-gray-700 text-sm">
                Identify hotspots and airflow restrictions before they become failures.
              </p>
            </div>

            <div>
              <img
                src="/sovereign-airflow.png"
                alt="Airflow management diagram"
                className={smallImageClass}
              />
              <h4 className="font-bold mt-3">Airflow Management</h4>
              <p className="text-gray-700 text-sm">
                Preserve intake, exhaust, and cable-path airflow integrity.
              </p>
            </div>

            <div>
              <img
                src="/logo.png"
                alt="Digital-ABB audit documentation"
                className={smallImageClass}
              />
              <h4 className="font-bold mt-3">Audit Documentation</h4>
              <p className="text-gray-700 text-sm">
                Provide visual reporting for risk review and maintenance planning.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow p-8">
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
              <p className="text-gray-600">24/7 monitoring</p>
            </div>
          </div>

          <p className="text-gray-600 text-center mt-6">
            Enterprise and data center engagements are scoped individually based on risk level,
            compliance requirements, and operational constraints.
          </p>
        </section>

        {/* Maintenance Windows */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-3xl font-bold mb-4">Recommended Service Windows</h3>
          <ul className="space-y-2 text-gray-800">
            <li>✔ Standard server rooms: quarterly inspection / semiannual hygiene</li>
            <li>✔ AI / GPU environments: monthly thermal review / quarterly airflow maintenance</li>
            <li>✔ Deep fan and heatsink cleaning: annual or bi-annual shutdown window</li>
          </ul>
        </section>

        {/* MSP Partnership Section */}
        <section className={sectionClass}>
          <h3 className="text-3xl font-bold mb-4">
            MSP Infrastructure Partnership
          </h3>

          <p className="text-gray-800 text-lg mb-6">
            We reduce physical-layer risks your remote monitoring tools cannot see.
          </p>

          <p className="text-gray-800 mb-6">
            Most MSP platforms monitor CPU, memory, storage, and network performance —
            but they cannot detect airflow obstruction, heatsink contamination,
            particulate accumulation, thermal hotspots, or environmental degradation
            inside client infrastructure environments.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">
                What Digital-ABB Provides
              </h4>

              <ul className="space-y-2 text-gray-800">
                <li>✔ Thermal-risk assessments</li>
                <li>✔ Airflow inspections</li>
                <li>✔ Rack contamination reviews</li>
                <li>✔ Cable airflow analysis</li>
                <li>✔ Preventive infrastructure hygiene</li>
                <li>✔ Visual audit documentation</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6 bg-blue-50">
              <h4 className="text-xl font-bold mb-3">
                MSP Partnership Benefits
              </h4>

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

        {/* Contact */}
        <section className="border-t pt-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Digital-ABB</h3>
            <p>Pflugerville, TX | Serving the Austin Tech Corridor</p>
            <p>
              Email:{' '}
              <a href="mailto:info@digital-abb.com" className="text-blue-600">
                info@digital-abb.com
              </a>
            </p>
          </div>

          <button
            onClick={() => setShowAuditForm(true)}
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800"
          >
            Download Sample Audit Report
          </button>
        </section>

        {/* Pilot Form Modal */}
        {showPilotForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
              <ContactForm onClose={() => setShowPilotForm(false)} />
            </div>
          </div>
        )}

        {/* Audit Download Modal */}
        {showAuditForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
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

      </main>
    </div>
  );
}


