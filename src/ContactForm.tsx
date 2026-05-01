export default function ContactForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Request Your Free Pilot Cleaning</h2>
      <p className="text-gray-600 mb-6">Limited pilot slots available this month. Fill out the form below and we'll be in touch within 24 hours.</p>

      <form action="https://formspree.io/f/xlgzdjzr" method="POST" className="space-y-4">
        <input type="hidden" name="_redirect" value="https://digital-abb.vercel.app/thank-you" />

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="5125550000"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-500 transition-colors"
        >
          Request Free Pilot Cleaning
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your information will be used only to contact you about your pilot cleaning request.
        </p>
      </form>

      <button onClick={onClose} className="mt-4 text-sm text-gray-600 underline">
        Cancel
      </button>
    </div>
  );
}
