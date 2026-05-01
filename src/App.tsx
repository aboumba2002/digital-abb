export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-2xl shadow">
          <div className="flex items-center gap-6 mb-6">
            <img src="/logo.png" alt="Digital-ABB logo" className="w-20 h-20 rounded-xl shadow" />

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

              <a
                href="/Digital-ABB-Sample-Audit.pdf"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-500"
              >
                Download Sample Audit PDF
              </a>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p>Email: <a href="mailto:info@digital-abb.com" className="text-blue-600 font-medium">info@digital-abb.com</a></p>
              <p>Location: Pflugerville, TX</p>
              <p className="text-blue-600 mt-2">
                Serving Austin / Pflugerville • Supporting IT teams in live environments
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-2xl text-center shadow-lg">
              <p className="mb-4">Limited pilot slots available this month</p>

              <a href="mailto:info@digital-abb.com">
                <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
                  Request Your Free Pilot Cleaning
                </button>
              </a>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
