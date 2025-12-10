import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-400">Last Updated: February 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p>
              Cape Coral Lawn Care provides residential and commercial lawn maintenance, landscaping, and related outdoor services. Specific inclusions for "Bi-Weekly" and "Weekly" plans are defined in your service agreement or quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payments & Billing</h2>
            <p>
              Services are billed monthly or per project. Payment is due upon receipt of invoice unless otherwise agreed. We reserve the right to suspend service for past-due accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellations</h2>
            <p>
              You may cancel your recurring service at any time with at least 24 hours notice before the next scheduled visit. No long-term contracts are required for standard maintenance plans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Property Access & Pets</h2>
            <p>
              The client agrees to provide safe access to the property on scheduled service days. Please ensure gates are unlocked and pets are secured inside. We are not responsible for pets that escape if gates are left unlocked by others or if latches are faulty, though we make every effort to close gates behind us.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability</h2>
            <p>
              While we take great care, Cape Coral Lawn Care is not responsible for damage to sprinkler heads, exposed cables, or other items hidden in the turf that are not clearly marked or disclosed prior to service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;