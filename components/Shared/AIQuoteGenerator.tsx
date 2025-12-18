import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle, AlertCircle, Check, ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateSmartQuote } from '../../services/geminiService';
import { AIQuoteResponse } from '../../types';

const SERVICE_OPTIONS = [
  "Weekly Mowing",
  "Bi-Weekly Mowing",
  "Landscaping Design",
  "Irrigation Repair",
  "Tree Trimming",
  "Spring Cleanup",
  "Weeding",
  "Mulch & Rock",
  "Power Washing",
  "Fertilization"
];

const CONDITION_OPTIONS = [
  "Overgrown (>6 inches)",
  "Weeds Present",
  "Brown Patches",
  "Pests / Ants",
  "Broken Sprinklers",
  "Well Maintained",
  "New Construction"
];

const LAST_SERVICE_OPTIONS = [
  "Less than 1 week ago",
  "1-2 weeks ago",
  "3-4 weeks ago",
  "More than a month ago",
  "Never / Unknown"
];

const AIQuoteGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<{
    lawnSize: string;
    serviceTypes: string[];
    lawnConditions: string[];
    lastServiceDate: string;
    issues: string;
  }>({
    lawnSize: '',
    serviceTypes: [],
    lawnConditions: [],
    lastServiceDate: '',
    issues: ''
  });

  const [result, setResult] = useState<AIQuoteResponse | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(service)
        ? prev.serviceTypes.filter(s => s !== service)
        : [...prev.serviceTypes, service]
    }));
  };

  const toggleCondition = (condition: string) => {
    setFormData(prev => ({
      ...prev,
      lawnConditions: prev.lawnConditions.includes(condition)
        ? prev.lawnConditions.filter(c => c !== condition)
        : [...prev.lawnConditions, condition]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.serviceTypes.length === 0) {
      setError("Please select at least one service.");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await generateSmartQuote({
        lawnSize: Number(formData.lawnSize),
        serviceTypes: formData.serviceTypes,
        lawnConditions: formData.lawnConditions,
        lastServiceDate: formData.lastServiceDate || "Unknown",
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
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-emerald-100 dark:border-gray-700 transition-colors">
      <div className="bg-emerald-900 dark:bg-emerald-950 p-6 text-white relative overflow-hidden">
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
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white">Curious about pricing?</h4>
              <p className="text-gray-600 dark:text-gray-400">Get an instant, AI-generated estimate in seconds tailored to your specific lawn needs.</p>
              <button 
                onClick={() => setStep(2)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1 w-full md:w-auto"
              >
                Start Estimate
              </button>
           </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Approx Lawn Size (sq ft)</label>
              <input 
                type="number" 
                name="lawnSize"
                required
                placeholder="e.g. 2500"
                value={formData.lawnSize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
              />
              <p className="text-xs text-gray-400 mt-1">Don't know? An average suburban lawn is ~2,500 sq ft.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Services Needed (Select all that apply)</label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map((service) => {
                  const isSelected = formData.serviceTypes.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`text-sm px-3 py-2 rounded-lg border transition-all flex items-center gap-2 justify-center ${
                        isSelected
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                          : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {isSelected && <Check size={14} />}
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">When was the last mow?</label>
              <div className="relative">
                 <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <select
                    name="lastServiceDate"
                    value={formData.lastServiceDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none appearance-none bg-white dark:bg-gray-700"
                    required
                 >
                    <option value="" disabled className="dark:bg-gray-800">Select a duration</option>
                    {LAST_SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt} className="dark:bg-gray-800">{opt}</option>
                    ))}
                 </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Condition (Select all that apply)</label>
              <div className="grid grid-cols-2 gap-2">
                {CONDITION_OPTIONS.map((condition) => {
                  const isSelected = formData.lawnConditions.includes(condition);
                  return (
                    <button
                      key={condition}
                      type="button"
                      onClick={() => toggleCondition(condition)}
                      className={`text-sm px-3 py-2 rounded-lg border transition-all flex items-center gap-2 justify-center ${
                        isSelected
                          ? 'bg-amber-500 border-amber-500 text-white shadow-md'
                          : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {isSelected && <Check size={14} />}
                      {condition}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Other Notes / Details</label>
              <textarea 
                name="issues"
                placeholder="Describe any specific requests, access issues (e.g., locked gate), or concerns..."
                value={formData.issues}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none h-24 resize-none placeholder-gray-400"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm border border-red-100 dark:border-red-900/30">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 dark:disabled:bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Analyze & Estimate"}
            </button>
          </form>
        )}

        {step === 3 && result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
            {/* Visual Cue: Status Indicator */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800/50 text-sm font-bold shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Estimate Ready
                </div>
                <div className="text-emerald-300">
                    <Sparkles size={20} className="animate-pulse" />
                </div>
            </div>

            {/* Price Card */}
            <div className="bg-gradient-to-b from-white to-emerald-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-2xl p-6 border border-emerald-100 dark:border-gray-700 text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400 animate-shimmer"></div>
               <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold mb-2">Estimated Monthly Range</p>
               <div className="text-4xl md:text-5xl font-extrabold text-emerald-900 dark:text-emerald-400 tracking-tight mb-1">
                  {result.estimatedPrice}
               </div>
               <p className="text-xs text-emerald-600 dark:text-emerald-500 font-medium">Based on your inputs & Florida standards</p>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-wide">
                <Sparkles size={16} className="text-amber-400" /> 
                AI Analysis
              </h5>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm leading-relaxed shadow-sm">
                {result.summary}
              </div>
            </div>

            <div className="space-y-3">
               <h5 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">Pro Tips for Your Lawn</h5>
               <ul className="space-y-2">
                 {result.tips.map((tip, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 p-2.5 rounded-lg border border-gray-50 dark:border-gray-600 hover:border-emerald-100 dark:hover:border-emerald-500 transition-colors">
                     <CheckCircle size={16} className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                     <span>{tip}</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="pt-4 space-y-3">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-1 flex items-center justify-center gap-2 group ring-2 ring-emerald-500/0 hover:ring-emerald-500/20"
              >
                <span>Book This Service</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setStep(1)}
                className="w-full py-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm font-medium transition-colors hover:underline"
              >
                Start New Estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIQuoteGenerator;