interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg relative">
      {/* Close Button (X) in top right corner */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl"
        type="button"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold mb-2 text-gray-900">Request Your Free Pilot Audit</h2>
      <p className="text-gray-600 mb-6">Limited slots available this month. Fill out the form below and we'll be in touch within 24 hours.</p>

      <form action="https://formspree.io/f/xlgzdjzr" method="POST" className="space-y-4">
        <input type="hidden" name="_redirect" value="https://digital-abb.netlify.app/thank-you" />
        <input type="hidden" name="lead_type" value="Pilot Cleaning Request" />

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name (IT Contact) *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="John Doe"
          />
        </div>

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

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-500 transition-colors"
          >
            Request Free Pilot Audit
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
          >
            Cancel
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Your information will be used only to contact you about your request.
        </p>
      </form>
    </div>
  );
}

