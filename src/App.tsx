import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showPilotForm, setShowPilotForm] = useState(false);

  useEffect(() => {
    setShowPilotForm(false);
  }, []);

  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-2xl shadow">
          <div className="flex items-center gap-6 mb-6">
            <img
              src="/logo.png"
              alt="Digital-ABB logo"
              className="w-20 h-20 rounded-xl shadow"
            />
            <div>
              <h1 className="text-5xl font-bold text-blue-600">Digital-ABB</h1>
              <h2 className="text-xl font-semibold">
                Infrastructure Hygiene & Physical Layer Protection
              </h2>
            </div>
          </div>

          <p className="text-gray-700 max-w-3xl">
            Digital-ABB protects live IT environments through ESD-aware rack, cable, and equipment-adjacent dust control.
            We focus on airflow, fiber-area cleanliness, and physical-layer reliability—purpose-built for technical environments, not general-purpose cleaning.
          </p>

          <p className="text-gray-900 font-semibold max-w-3xl mt-4">
            Most environments appear clean—but are not operationally clean.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-gray-800">
            <span>✔ No downtime</span>
            <span>✔ No cable disconnect</span>
            <span>✔ No system access</span>
            <span>✔ Physical-layer focused</span>
          </div>

          <p className="mt-4 font-medium text-gray-900">
            Built for environments where downtime, airflow restriction, and contamination carry real operational risk.
          </p>
        </section>

        {/* Request Pilot Cleaning Button */}
        <section className="max-w-5xl mx-auto px-6 py-10 text-center">
          <button
            onClick={() => setShowPilotForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-500 transition-colors"
          >
            Request Free Pilot Cleaning
          </button>
        </section>

        {/* About */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">
              Physical Layer Protection for Mission-Critical Networks
            </h3>

            <p className="text-gray-800 mb-4">
              Digital-ABB was built from real infrastructure experience across enterprise
              environments including AT&amp;T, Ford Motor, and Flex.
            </p>

            <p className="text-gray-800 mb-4">
              With hands-on background in rack builds, Cisco gear validation, live data
              center work, and hardened facility protocols, we understand that "clean"
              is not cosmetic — it is operational.
            </p>

            <p className="text-gray-800 mb-4">
              Our focus is Infrastructure Hygiene &amp; Physical Layer Protection:
              rack hygiene, cable dust control, airflow protection, fiber-area
              cleanliness, and visual condition reporting.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mt-6">
              <p className="font-semibold text-gray-900">
                We do not perform janitorial cleaning. We do not access systems.
                We do not disconnect cables.
              </p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">The Risk</h3>
            <p className="text-gray-800">
              Dust buildup in racks and cable pathways can restrict airflow, increase thermal load,
              and impact fiber reliability. Most environments rely on inconsistent cleaning practices
              that do not address these risks.
            </p>
          </div>
        </div>

        {/* Operational Blind Spot */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">Operational Blind Spot</h3>
            <p className="text-gray-800 mb-4">
              In many environments, infrastructure hygiene is not treated as a technical function.
              Rack and equipment cleaning is often assigned to general in-house or janitorial teams
              whose scope focuses on visible surfaces — not airflow pathways, cable contamination,
              or equipment-adjacent dust accumulation.
            </p>
            <p className="text-gray-800 mb-4">
              As a result, critical risk factors remain unaddressed:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Dust buildup inside airflow paths and cooling zones</li>
              <li>• Contamination around fiber and cable infrastructure</li>
              <li>• Restricted intake/exhaust airflow at rack level</li>
              <li>• Gradual thermal stress that is not immediately visible</li>
            </ul>
            <p className="text-gray-800 mt-4">
              Because these conditions develop slowly, they are often not identified until
              performance degradation or failure occurs.
            </p>
          </div>
        </div>

        {/* Why Standard Cleaning Falls Short */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">Why Standard Cleaning Falls Short</h3>
            <p className="text-gray-800 mb-4">
              General cleaning practices are not designed for live IT environments.
            </p>
            <p className="text-gray-800 mb-4">
              Typical limitations include:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• No ESD awareness or grounding procedures</li>
              <li>• No access to rack airflow zones or equipment-adjacent areas</li>
              <li>• No understanding of thermal load or airflow behavior</li>
              <li>• No documentation or validation of environmental conditions</li>
            </ul>
            <p className="text-gray-800 mt-4">
              As a result, cleaning may improve appearance — but not operational reliability.
            </p>
          </div>
        </div>

        {/* Why This Becomes a Priority */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">Why This Becomes a Priority</h3>
            <p className="text-gray-800 mb-4">
              Infrastructure hygiene directly impacts system performance, cooling efficiency, and operational risk.
            </p>
            <p className="text-gray-800 mb-4">
              Unchecked contamination can contribute to:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Increased thermal load and cooling inefficiency</li>
              <li>• Reduced equipment lifespan</li>
              <li>• Higher probability of failure under load</li>
              <li>• Potential warranty review issues tied to environmental conditions</li>
            </ul>
            <p className="text-gray-800 mt-4">
              Addressing these factors proactively shifts hygiene from a maintenance task to a risk management function.
            </p>
          </div>
        </div>

        {/* Service Approach */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">Service Approach</h3>

            <p className="text-gray-800">
              Our service follows structured contamination-control practices used in IT environments.
              Cleaning scope is adjusted based on airflow risk, dust accumulation, and operational sensitivity.
            </p>

            <ul className="mt-4 space-y-2 text-gray-800">
              <li>✔ Routine rack and airflow pathway cleaning</li>
              <li>✔ Targeted fiber and cable-area hygiene</li>
              <li>✔ Periodic deep cleaning for subfloor and critical zones</li>
            </ul>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>

            <ul className="space-y-2 text-gray-800">
              <li>✔ Prevent airflow restriction and thermal buildup</li>
              <li>✔ Reduce risk of equipment failure</li>
              <li>✔ Maintain fiber signal reliability</li>
              <li>✔ Support audit readiness and operational standards</li>
            </ul>
          </div>
        </div>

        <section className="grid gap-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-3xl shadow">
              <h2 className="text-2xl font-semibold mb-3">Services</h2>
              <ul className="space-y-3 text-gray-800">
                <li>✔ Rack Cleaning</li>
                <li>✔ Cable Dust Removal</li>
                <li>✔ IT Room Floor & Ceiling Cleaning</li>
                <li>✔ Visual Condition Reporting</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow">
              <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
              <ul className="space-y-3 text-gray-800">
                <li>✔ No system disruption</li>
                <li>✔ ESD-safe process</li>
                <li>✔ No cable disconnect</li>
                <li>✔ 10+ years rack experience</li>
              </ul>
            </div>
          </div>

          {/* Advanced Cleaning Services */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-4">Advanced Cleaning Services</h3>

              <p className="text-gray-800">
                For environments requiring deeper contamination control, Digital-ABB offers
                internal device and airflow component cleaning performed under controlled conditions.
              </p>

              <ul className="mt-4 space-y-2 text-gray-800">
                <li>✔ Dry fan and heatsink cleaning (servers and network devices)</li>
                <li>✔ Intake vent and airflow path restoration</li>
                <li>✔ Dust removal from critical cooling components</li>
              </ul>

              <p className="mt-4 text-gray-700">
                These services are performed during scheduled maintenance windows and typically require
                equipment to be safely powered down.
              </p>

              <p className="mt-2 text-gray-700">
                Deep cleaning is generally recommended once or twice per year depending on environmental conditions.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-4">Experience</h3>

              <p className="text-gray-800">
                Built from experience within enterprise environments including AT&T, Ford Motor Company, and Flex.
                Work includes rack integration, testing environments, and infrastructure-level operations where cleanliness directly impacts performance and uptime.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Experience supporting enterprise environments including AT&T, Ford Motor Company, and Flex
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-4">Who We Help</h3>
              <ul className="space-y-2 text-gray-800">
                <li>✔ IT teams with in-house cleaning limitations</li>
                <li>✔ Offices with server rooms and edge infrastructure</li>
                <li>✔ MSP / managed service providers</li>
                <li>✔ Data centers (select engagements & audit-based work)</li>
              </ul>
              <p className="mt-4 text-gray-700">
                Digital-ABB engages in higher-control environments through audit-driven and risk-sensitive scopes — not commodity cleaning contracts.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-4">Pricing</h3>

              <div className="space-y-2 text-gray-800">
                <p>1 Rack: $250 – $400 (single visit)</p>
                <p>2–5 Racks: $200 – $300 each</p>
                <p>6+ Racks: Custom quote based on size</p>
              </div>
              <p className="text-gray-600 mt-3">
                Enterprise and data center engagements are scoped individually based on risk level, compliance requirements, and operational constraints.
              </p>
            </div>
          </div>

          {/* Typical Service Timing */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-4">Typical Service Timing</h3>

              <ul className="space-y-2 text-gray-800">
                <li>✔ 1–5 racks: 1–2 hours</li>
                <li>✔ Small server rooms: half-day service</li>
                <li>✔ Larger environments: scheduled project basis</li>
              </ul>
            </div>
          </div>

          {/* Sample Audit */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-4">See What We Find</h3>

              <p className="text-gray-800 mb-4">
                Our visual rack health report documents airflow restrictions, dust buildup,
                cable-area contamination, and physical-layer risks without accessing systems
                or disrupting operations.
              </p>

              <p className="text-gray-800 mb-6">
                Download a sample report to see how Digital-ABB documents infrastructure
                hygiene issues for IT managers.
              </p>

              <p className="text-sm text-gray-600 mb-4">
                Used by IT teams to review airflow, contamination, and physical-layer risk before it becomes downtime.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-500 cursor-pointer"
              >
                Download Sample Audit PDF
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-bold mb-2">Or Contact Us Directly</h3>
              <p>Email: <a href="mailto:info@digital-abb.com" className="text-blue-600 font-medium">info@digital-abb.com</a></p>
              <p>Location: Pflugerville, TX</p>
              <p className="text-blue-600 mt-2">
                Serving Austin / Pflugerville • Supporting IT teams in live environments
              </p>
            </div>
          </div>
        </section>

        {showPilotForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
              <ContactForm onClose={() => setShowPilotForm(false)} />
            </div>
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-3">
                Download Sample Audit
              </h3>

              <p className="text-gray-700 mb-6">
                Enter your details to receive the Digital-ABB sample audit report.
              </p>

              <form
                action="https://formspree.io/f/mzdozewz"
                method="POST"
                onSubmit={() => {
                  setTimeout(() => {
                    window.open("/Digital-ABB-Sample-Audit.pdf", "_blank");
                    setShowForm(false);
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
                  onClick={() => setShowForm(false)}
                  className="mt-4 text-sm text-gray-600 underline"
                >
                   Cancel
                </button>
            </div>
          </div>
          )}
      </main>
    </div>
  )
}
