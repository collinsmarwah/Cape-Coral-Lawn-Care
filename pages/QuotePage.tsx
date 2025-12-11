import React from 'react';
import AIQuoteGenerator from '../components/Shared/AIQuoteGenerator';

const QuotePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
           <h1 className="text-4xl font-bold text-gray-900 mb-4">Instant Lawn Care Estimate</h1>
           <p className="text-xl text-gray-600">
             Answer a few questions about your lawn, and our AI will generate a personalized price range and service plan instantly.
           </p>
        </div>
        <div className="flex justify-center">
            <AIQuoteGenerator />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;