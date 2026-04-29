export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Digital-abb
        </h1>
        <h2 className="text-xl font-semibold mb-4">
          Non-Disruptive Rack & IT Room Cleaning for Live Environments
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Non-disruptive cleaning for live IT environments. We clean racks,
          cables, and IT rooms safely using ESD-controlled methods.
        </p>
        <p className="text-sm text-gray-500 mt-3">
          ✔ No downtime • ✔ No cable disconnect • ✔ ESD-controlled process
        </p>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Services</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">✔ Rack Cleaning</div>
          <div className="bg-white p-4 rounded shadow">✔ Cable Dust Removal</div>
          <div className="bg-white p-4 rounded shadow">✔ IT Room Floor & Ceiling Cleaning</div>
          <div className="bg-white p-4 rounded shadow">✔ Visual Condition Reporting</div>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <p className="text-gray-600">
                10+ years working in data center environments including rack installation,
                testing, and support. We understand how to safely work inside live systems
                without disruption.
            </p>
          </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">✔ No system disruption</div>
          <div className="bg-white p-4 rounded shadow">✔ ESD-safe process</div>
          <div className="bg-white p-4 rounded shadow">✔ No cable disconnect</div>
          <div className="bg-white p-4 rounded shadow">✔ 10+ years rack experience</div>
        </div>
      </div>

      {/* Who We Help */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Who We Help</h3>
        <ul className="space-y-2 text-gray-700">
           <li>✔ IT teams with in-house cleaning</li>
           <li>✔ Offices with server rooms</li>
           <li>✔ MSP / managed service providers</li>
        </ul>
      </div>

      {/* Pricing */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Pricing</h3>
        <div className="bg-white p-6 rounded shadow">
          <p>1 Rack: $250 – $400 (single visit)</p>
          <p>2–5 Racks: $200 – $300 each</p>
          <p>6+ Racks: Custom quote based on size</p>
        </div>
      </div>

      {/* Contact */}
      {/* Contact */}
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-bold mb-6">Contact</h3>
      <div className="bg-white p-6 rounded shadow text-gray-800">
        <p className="font-semibold">
          Email: <a href="mailto:info@digital-abb.com" className="text-blue-600 underline">
           info@digital-abb.com
          </a>
        </p>
        <p>Location: Pflugerville, TX</p>
        <p className="text-sm text-gray-800 mt-2">
           Serving Austin / Pflugerville area • Supporting IT teams in live environments
        </p>
      </div>
    </div>

      {/* CTA */}
      {/* CTA */}
      <div className="text-center py-12">
          <p className="text-sm text-gray-600 mb-3">
           Limited pilot slots available this month
          </p>
          <a href="mailto:info@digital-abb.com?subject=Pilot Cleaning Request&body=Company Name:%0D%0ALocation:%0D%0ANumber of Racks:%0D%0ADescription:%0D%0A">
            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-500">
               Request Your Free Pilot Cleaning
            </button>
          </a>
       </div>
    </div>
  );
}
