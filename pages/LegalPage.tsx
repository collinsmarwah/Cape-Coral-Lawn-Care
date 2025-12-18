import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, FileText, Scale, Lock } from 'lucide-react';

const LegalPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-700 rounded-full mb-4">
             <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Legal Information</h1>
          <p className="text-lg text-gray-600">Our policies, procedures, and commitment to your privacy and service quality.</p>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-wrap justify-center gap-4">
            <a href="#privacy" className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl font-bold text-gray-700 transition-all shadow-sm">
                <Lock size={18} className="text-emerald-600" />
                Privacy Policy
            </a>
            <a href="#terms" className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl font-bold text-gray-700 transition-all shadow-sm">
                <FileText size={18} className="text-emerald-600" />
                Terms of Service
            </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Privacy Policy Section */}
          <section id="privacy" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
               <Shield className="text-emerald-600" size={28} />
               <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            
            <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-400">Last Updated: February 2025</p>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h3>
                <p>
                  We collect information you provide directly to us when you request a quote, schedule a service, or contact us. This may include your name, address, email address, phone number, and property details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h3>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide, maintain, and improve our lawn care services.</li>
                  <li>Process transactions and send you related information, including confirmations and invoices.</li>
                  <li>Respond to your comments, questions, and requests.</li>
                  <li>Communicate with you about services, offers, and promotions.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Sharing of Information</h3>
                <p>
                  We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. SMS Communications</h3>
                <p>
                  By providing your phone number, you consent to receive text messages from Cape Coral Lawn Care regarding your service estimates, scheduling, and job completion updates. Message and data rates may apply. You can opt-out at any time by replying STOP.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at team@capecorallawncare.com.
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section id="terms" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
               <FileText className="text-emerald-600" size={28} />
               <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
            </div>
            
            <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-400">Last Updated: February 2025</p>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h3>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Service Description</h3>
                <p>
                  Cape Coral Lawn Care provides residential and commercial lawn maintenance, landscaping, and related outdoor services. Specific inclusions for "Bi-Weekly" and "Weekly" plans are defined in your service agreement or quote.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Payments & Billing</h3>
                <p>
                  Services are billed monthly or per project. Payment is due upon receipt of invoice unless otherwise agreed. We reserve the right to suspend service for past-due accounts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Cancellations</h3>
                <p>
                  You may cancel your recurring service at any time with at least 24 hours notice before the next scheduled visit. No long-term contracts are required for standard maintenance plans.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Property Access & Pets</h3>
                <p>
                  The client agrees to provide safe access to the property on scheduled service days. Please ensure gates are unlocked and pets are secured inside. We are not responsible for pets that escape if gates are left unlocked by others or if latches are faulty, though we make every effort to close gates behind us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Liability</h3>
                <p>
                  While we take great care, Cape Coral Lawn Care is not responsible for damage to sprinkler heads, exposed cables, or other items hidden in the turf that are not clearly marked or disclosed prior to service.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalPage;