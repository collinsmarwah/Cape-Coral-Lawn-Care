import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-400">Last Updated: February 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you request a quote, schedule a service, or contact us. This may include your name, address, email address, phone number, and property details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, maintain, and improve our lawn care services.</li>
              <li>Process transactions and send you related information, including confirmations and invoices.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Communicate with you about services, offers, and promotions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. SMS Communications</h2>
            <p>
              By providing your phone number, you consent to receive text messages from Cape Coral Lawn Care regarding your service estimates, scheduling, and job completion updates. Message and data rates may apply. You can opt-out at any time by replying STOP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at team@capecorallawncare.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;