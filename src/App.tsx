import { useState } from 'react';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

export default function App() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showPilotForm, setShowPilotForm] = useState(false);

  const sectionClass = "bg-white rounded-2xl shadow p-8";

  if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-6 justify-between items-center text-sm font-bold text-gray-700">
          <div className="text-blue-600 text-xl tracking-tighter">DIGITAL-ABB</div>
          <div className="flex gap-6">
            <a href="#audit" className="hover:text-blue-600 transition">Infrastructure Audit</a>
            <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
            <a href="#compliance" className="hover:text-blue-600 transition">Compliance</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Hero: Flexible Infrastructure Protection */}
        <section id="home" className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
              Physical Layer Protection for <span className="text-blue-600">Any</span> IT Footprint.
            </h1>
            <p className="text-2xl font-medium text-gray-600 mt-6 leading-relaxed">
              From a single office server to industrial data centers. We audit, protect, and optimize the hardware that drives your revenue.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPilotForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                Request 15-Minute Risk Audit
              </button>
              <button
                onClick={() => setShowAuditForm(true)}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-black transition transform hover:-translate-y-1"
              >
                Sample Revenue Recovery Report
              </button>
            </div>
          </div>
        </section>

        {/* Tiered Solutions: Removing the "9U Only" Barrier */}
        <section id="solutions" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-10 text-center">Scalable Sovereign Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Micro-Vault</h4>
              <p className="text-sm text-gray-600 mb-4 font-semibold uppercase">Desktop & Small Office</p>
              <p className="text-gray-700">Predictive hygiene and thermal protection for standalone servers and NAS units. No rack required.</p>
            </div>
            <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50">
              <h4 className="text-xl font-bold mb-2">Sovereign 9U</h4>
              <p className="text-sm text-blue-600 mb-4 font-semibold uppercase">The Mid-Size Standard</p>
              <p className="text-gray-700">A fully integrated, air-gapped environment. Ideal for medical offices and logistics hubs.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Enterprise Zone</h4>
              <p className="text-sm text-gray-600 mb-4 font-semibold uppercase">42U Cabinets & Data Centers</p>
              <p className="text-gray-700">Applying the "Body/Brain" stateless architecture and humidity guard to your existing high-density racks.</p>
            </div>
          </div>
        </section>

        {/* The Revenue Recovery Report (Financial Logic) */}
        <section id="audit" className="bg-gray-900 rounded-3xl shadow-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Stop Uninsured Downtime</h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Whether you own one server or fifty, our **Visual Asset Audit** proves the physical risk to your billable hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">✔</div>
                  <div>
                    <h5 className="font-bold">Warranty Life-Cycle Check</h5>
                    <p className="text-sm opacity-70">Automated serial scan to identify "Orphaned" hardware.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">✔</div>
                  <div>
                    <h5 className="font-bold">Thermal History Mapping</h5>
                    <p className="text-sm opacity-70">AI analysis of dust accumulation and cooling efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-blue-400 italic">Audit Result: Node-04</h4>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-red-400">STATUS: EXPIRED WARRANTY (732 Days)</p>
                <p className="text-orange-400">THERMAL: STAGE 3 DUST DETECTED</p>
                <p className="text-blue-400">HUMIDITY: 18% (CRITICAL STATIC RISK)</p>
                <div className="w-full bg-gray-800 h-2 mt-4 rounded-full">
                  <div className="bg-red-500 h-2 w-[85%] rounded-full"></div>
                </div>
                <p className="text-right text-xs opacity-50">Physical Integrity Score: 15%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Protection */}
        <section id="compliance" className={sectionClass}>
          <h3 className="text-3xl font-bold mb-8">Physical Compliance & Monitoring</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900 italic">Leak Protection</h4>
              <p className="text-gray-600">Rope sensors wired to Shelly Pro 4PM kill-switches to save hardware from AC failure.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900 italic">Static Tolerance</h4>
              <p className="text-gray-600">Monitoring the 40-55% "Golden Window" to satisfy 2026 Cyber-Insurance requirements.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900 italic">Infrastructure Hygiene</h4>
              <p className="text-gray-600">ISO 14644-1 aligned particulate management for mission-critical reliability.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="pt-12 border-t flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-2xl font-black text-blue-600">DIGITAL-ABB</h3>
            <p className="font-bold">Pflugerville, TX | Risk Management for Physical IT</p>
            <p className="mt-2 text-gray-600">Industrial Audit Readiness & Hardware Continuity</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAuditForm(true)}
              className="bg-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition"
            >
              Get Sample Audit
            </button>
            <button
              onClick={() => setShowPilotForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Book Audit
            </button>
          </div>
        </footer>
      </main>

      {/* Modals for Lead Capture */}
      {showPilotForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full relative">
            <button onClick={() => setShowPilotForm(false)} className="absolute top-4 right-4 text-gray-400">✕</button>
            <ContactForm onClose={() => setShowPilotForm(false)} />
          </div>
        </div>
      )}

      {showAuditForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full relative text-center">
            <button onClick={() => setShowAuditForm(false)} className="absolute top-4 right-4 text-gray-400">✕</button>
            <h3 className="text-3xl font-bold mb-4">Revenue Recovery Report</h3>
            <p className="text-gray-600 mb-8 font-medium">Download a sample of the audit report that uncovers hidden financial risks in your IT room.</p>
            <form action="https://formspree.io/f/mzdozewz" method="POST" className="space-y-4">
              <input type="hidden" name="lead_type" value="Sample Audit Download" />
              <input type="text" name="name" required placeholder="Full Name" className="w-full border rounded-xl px-5 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-600 outline-none" />
              <input type="email" name="email" required placeholder="Professional Email" className="w-full border rounded-xl px-5 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-600 outline-none" />
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">Get Sample PDF</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
