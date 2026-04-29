export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="bg-white rounded-3xl shadow-lg p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <img
              src="/logo.png"
              alt="Digital-abb logo"
              className="w-28 h-28 rounded-3xl shadow-md object-cover"
            />
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-blue-600">Digital-abb</h1>
              <p className="text-xl font-semibold text-slate-700">
                Non-Disruptive Rack & IT Room Cleaning for Live Environments
              </p>
              <p className="max-w-3xl text-gray-600">
                Non-disruptive cleaning for live IT environments. We clean racks,
                cables, and IT rooms safely using ESD-controlled methods.
              </p>
              <p className="text-sm text-gray-500">
                ✔ No downtime • ✔ No cable disconnect • ✔ ESD-controlled process
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-3xl shadow">
              <h2 className="text-2xl font-semibold mb-3">Services</h2>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Rack Cleaning</li>
                <li>✔ Cable Dust Removal</li>
                <li>✔ IT Room Floor & Ceiling Cleaning</li>
                <li>✔ Visual Condition Reporting</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow">
              <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
              <ul className="space-y-3 text-gray-700">
                <li>✔ No system disruption</li>
                <li>✔ ESD-safe process</li>
                <li>✔ No cable disconnect</li>
                <li>✔ 10+ years rack experience</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="text-2xl font-semibold mb-3">Experience</h3>
              <p className="text-gray-600">
                10+ years working in data center environments including rack
                installation, testing, and support. We understand how to safely
                work inside live systems without disruption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="text-2xl font-semibold mb-3">Who We Help</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ IT teams with in-house cleaning</li>
                <li>✔ Offices with server rooms</li>
                <li>✔ MSP / managed service providers</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
            <div className="space-y-3 text-gray-700">
              <p>1 Rack: $250 – $400 (single visit)</p>
              <p>2–5 Racks: $200 – $300 each</p>
              <p>6+ Racks: Custom quote based on size</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="text-2xl font-semibold mb-3">Contact</h3>
              <p className="font-semibold text-gray-800">
                Email: <a href="mailto:info@digital-abb.com" className="text-blue-600 underline">info@digital-abb.com</a>
              </p>
              <p className="text-gray-700">Location: Pflugerville, TX</p>
              <p className="text-sm text-gray-600 mt-2">
                Serving Austin / Pflugerville area • Supporting IT teams in live environments
              </p>
            </div>
            <div className="flex items-center justify-center bg-blue-600 rounded-3xl p-6 text-center text-white shadow-lg">
              <div>
                <p className="text-lg font-semibold mb-4">Limited pilot slots available this month</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@digital-abb.com&su=Pilot%20Cleaning%20Request&body=Company%20Name:%0D%0ALocation:%0D%0ANumber%20of%20Racks:%0D%0ADescription:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-white px-6 py-3 text-blue-600 font-semibold hover:bg-slate-100"
                >
                  Request Your Free Pilot Cleaning
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
