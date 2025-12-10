import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { generateSmartQuote } from '../../services/geminiService';
import { AIQuoteResponse } from '../../types';

const AIQuoteGenerator: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    lawnSize: '',
    serviceType: 'Maintenance',
    issues: ''
  });

  const [result, setResult] = useState<AIQuoteResponse | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await generateSmartQuote({
        lawnSize: Number(formData.lawnSize),
        serviceType: formData.serviceType,
        issues: formData.issues || 'None'
      });
      
      if (response) {
        setResult(response);
        setStep(3);
      } else {
        setError("Could not generate quote at this time.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (!process.env.API_KEY) {
      return null; // Gracefully hide if no API key
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
      <div className="bg-emerald-900 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles size={100} />
        </div>
        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-lg backdrop-blur-md">
            <Sparkles className="text-emerald-300" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-xl">Instant AI Quote</h3>
            <p className="text-emerald-200 text-sm">Powered by Gemini AI</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {step === 1 && (
           <div className="text-center space-y-6 py-6">
              <h4 className="text-2xl font-bold text-gray-800">Curious about pricing?</h4>
              <p className="text-gray-600">Get an instant, AI-generated estimate in seconds without a phone call.</p>
              <button 
                onClick={() => setStep(2)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1 w-full md:w-auto"
              >
                Start Estimate
              </button>
           </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Approx Lawn Size (sq ft)</label>
              <input 
                type="number" 
                name="lawnSize"
                required
                placeholder="e.g. 2500"
                value={formData.lawnSize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              />
              <p className="text-xs text-gray-400 mt-1">Don't know? An average suburban lawn is ~2,500 sq ft.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
              <select 
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              >
                <option value="Weekly Mowing">Weekly Mowing</option>
                <option value="Fertilization">Fertilization & Weed Control</option>
                <option value="Spring Cleanup">Spring Cleanup</option>
                <option value="Landscaping">Landscaping Project</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Issues (Optional)</label>
              <textarea 
                name="issues"
                placeholder="e.g. lots of dandelions, bare spots near the driveway..."
                value={formData.issues}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none h-24 resize-none"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Analyze & Estimate"}
            </button>
          </form>
        )}

        {step === 3 && result && (
          <div className="animate-in fade-in zoom-in duration-300 space-y-6">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-4">
               <CheckCircle size={20} />
               <span>Estimate Ready</span>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 text-center">
               <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Estimated Monthly Cost</p>
               <p className="text-4xl font-bold text-emerald-800">{result.estimatedPrice}</p>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-gray-900">AI Summary</h5>
              <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">
                {result.summary}
              </p>
            </div>

            <div className="space-y-3">
               <h5 className="font-semibold text-gray-900">Immediate Care Tips</h5>
               <ul className="space-y-2">
                 {result.tips.map((tip, idx) => (
                   <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                     <span className="text-emerald-500 mt-1">•</span>
                     {tip}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="pt-4 flex gap-3">
              <button 
                onClick={() => window.location.hash = '#contact'}
                className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                Book This Service
              </button>
              <button 
                onClick={() => setStep(1)}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors"
              >
                New Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIQuoteGenerator;
