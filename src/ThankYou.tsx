export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Thank You!
        </h1>

        <p className="text-gray-700 mb-6">
          Your request has been submitted. We will contact you within 24 hours.
        </p>


      <div className="mt-4 flex justify-between">
       <a href="/" className="text-sm text-gray-600 underline">
           Back to Website
       </a>

       <button
          type="button"
          onClick={() => window.location.href = "/"}
          className="text-sm text-gray-600 underline"
       >
            Cancel
        </button>
       </div>
      </div>
    </div>
  );
}
