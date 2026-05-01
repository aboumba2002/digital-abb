import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    racks: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xlgzdjzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', racks: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Request Your Free Pilot Cleaning</h2>
      <p className="text-gray-600 mb-6">Limited pilot slots available this month. Fill out the form below and we'll be in touch within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Company"
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
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="(512) 555-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="racks" className="block text-sm font-semibold text-gray-700 mb-1">
            Number of Racks *
          </label>
          <input
            type="text"
            id="racks"
            name="racks"
            value={formData.racks}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Tell us about your environment, specific concerns, or preferred service window..."
          />
        </div>

        {status === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            ✓ Thank you! Your pilot cleaning request has been submitted. We'll contact you within 24 hours.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            ✗ {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'loading' ? 'Submitting...' : 'Request Free Pilot Cleaning'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your information will be used only to contact you about your pilot cleaning request.
        </p>
      </form>
    </div>
  );
}
