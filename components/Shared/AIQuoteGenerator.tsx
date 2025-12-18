import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, CheckCircle, AlertCircle, Check, ArrowRight, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateSmartQuote } from '../../services/geminiService';
import { AIQuoteResponse } from '../../types';

const SERVICE_OPTIONS = [
  "Weekly Mowing",
  "Bi-Weekly Mowing",
  "Landscaping Design",
  "Irrigation Repair",
  "Tree Trimming",
  "Mulch & Rock"
];

const LAST_SERVICE_OPTIONS = [
  "Less than 1 week ago",
  "1-2 weeks ago",
  "3-4 weeks ago",
  "More than a month ago"
];

const AIQuoteGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  
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

  // Smooth progress calculation
  useEffect(() => {
    const targetProgress = (step / 3) * 100;
    const timer = setTimeout(() => {
        if (progress < targetProgress) setProgress(prev => Math.min(prev + 5, targetProgress));
        if (progress > targetProgress) setProgress(prev => Math.max(prev - 5, targetProgress));
    }, 20);
    return () => clearTimeout(timer);
  }, [step, progress]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await generateSmartQuote({
        lawnSize: Number(formData.lawnSize) || 2500,
        serviceTypes: formData.serviceTypes.length ? formData.serviceTypes : ["General Mow"],
        lawnConditions: formData.lawnConditions,
        lastServiceDate: formData.lastServiceDate || "Unknown",
        issues: formData.issues || 'None'
      });
      
      if (response) {
        setResult(response);
        setStep(4);
      } else {
        setError("Could not generate quote at this time.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500">
      {/* Dynamic Header */}
      <div className="bg-emerald-900 dark:bg-emerald-950 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Sparkles size={120} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500/20 p-2 rounded-lg">
                <Sparkles className="text-emerald-400" size={20} />
              </div>
              <span className="font-bold text-lg">AI Price Estimator</span>
            </div>
            {step < 4 && <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Step {step} of 3</span>}
          </div>
          
          {/* Progress Bar */}
          <div className="h-1 w-full bg-emerald-950/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-400 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {step === 1 && (
           <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">Let's start with your yard.</h4>
                <p className="text-gray-500 dark:text-gray-400">Rough estimates are fine, we'll confirm on-site.</p>
              </div>

              <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Approx Lawn Size (sq ft)</label>
                    <input 
                        type="number" 
                        name="lawnSize"
                        required
                        autoFocus
                        placeholder="e.g. 2500"
                        value={formData.lawnSize}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-lg font-bold"
                    />
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {['1500', '2500', '5000', '10000+'].map(val => (
                            <button 
                                key={val}
                                type="button"
                                onClick={() => setFormData({...formData, lawnSize: val})}
                                className={`py-2 px-3 rounded-xl border text-sm font-bold transition-all ${formData.lawnSize === val ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-600' : 'bg-gray-50 dark:bg-gray-800 border-transparent text-gray-400'}`}
                            >
                                {val} sq ft
                            </button>
                        ))}
                    </div>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                disabled={!formData.lawnSize}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                Next Step
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">What services do you need?</h4>
                <p className="text-gray-500 dark:text-gray-400">Select all that apply for your property.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((service) => {
                    const isSelected = formData.serviceTypes.includes(service);
                    return (
                    <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`text-sm font-bold px-4 py-4 rounded-2xl border transition-all flex flex-col items-center gap-2 text-center ${
                        isSelected
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg'
                            : 'bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-emerald-200'
                        }`}
                    >
                        {service}
                    </button>
                    );
                })}
            </div>

            <div className="flex gap-4">
                <button 
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                    <ChevronLeft size={20} /> Back
                </button>
                <button 
                    onClick={() => setStep(3)}
                    disabled={formData.serviceTypes.length === 0}
                    className="flex-[2] bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group"
                >
                    Almost Done
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        )}

        {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                    <h4 className="text-2xl font-black text-gray-900 dark:text-white">One last thing...</h4>
                    <p className="text-gray-500 dark:text-gray-400">Current condition helps our AI be precise.</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Last Service Date</label>
                        <select
                            name="lastServiceDate"
                            value={formData.lastServiceDate}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-4 focus:ring-emerald-500/10 outline-none appearance-none"
                            required
                        >
                            <option value="" disabled>Select approximate time</option>
                            {LAST_SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Specific Challenges (Optional)</label>
                        <textarea 
                            name="issues"
                            placeholder="Locked gates, pets, brown spots, irrigation issues..."
                            value={formData.issues}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-4 focus:ring-emerald-500/10 outline-none h-24 resize-none"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <button 
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold py-5 rounded-2xl transition-all"
                    >
                        Back
                    </button>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="flex-[2] bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <>Calculate Estimate <Sparkles size={18} /></>}
                    </button>
                </div>
            </form>
        )}

        {step === 4 && result && (
          <div className="animate-in zoom-in-95 fade-in duration-700 space-y-8">
            <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-800/50 text-sm font-black shadow-sm mb-4">
                    <CheckCircle size={16} /> Estimation Confirmed
                </div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white">Your Smart Quote</h4>
            </div>

            <div className="bg-emerald-600 rounded-3xl p-8 text-center text-white shadow-2xl shadow-emerald-600/20 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
               <p className="text-xs text-emerald-100 uppercase tracking-widest font-black mb-2 opacity-80">Estimated Monthly Rate</p>
               <div className="text-5xl md:text-6xl font-black tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500">
                  {result.estimatedPrice}
               </div>
               <div className="flex items-center justify-center gap-2 text-xs font-bold bg-white/10 w-fit mx-auto px-4 py-1.5 rounded-full border border-white/20">
                   <div className="h-2 w-2 bg-emerald-300 rounded-full animate-pulse"></div>
                   Verified local pricing
               </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-black text-gray-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-wide">
                <Sparkles size={16} className="text-emerald-500" /> 
                Professional Analysis
              </h5>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic">
                "{result.summary}"
              </div>
            </div>

            <div className="space-y-4">
               <h5 className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wide">AI Recommendation Tips</h5>
               <ul className="grid grid-cols-1 gap-3">
                 {result.tips.map((tip, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-500 transition-all group">
                     <div className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Check size={12} />
                     </div>
                     <span className="font-medium">{tip}</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="pt-4 space-y-4">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-600/30 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Book This Plan
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setStep(1)}
                className="w-full py-2 text-gray-400 dark:text-gray-500 hover:text-emerald-600 text-sm font-bold transition-colors"
              >
                Reset Calculation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIQuoteGenerator;