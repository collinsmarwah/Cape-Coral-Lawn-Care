import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { User, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

const PortalLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API login delay
    setTimeout(() => {
        setLoading(false);
        // Prototype logic: Accept anything for demo
        navigate('/portal/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <NavLink to="/" className="inline-block transition-transform hover:scale-105">
            <img
            src={LOGO_URL}
            alt="Cape Coral Lawn Care"
            className="h-24 w-auto mx-auto mb-6 dark:brightness-110 dark:invert-[0.05]"
            />
        </NavLink>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Customer Portal
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to view invoices, visits, and account settings.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-900 py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-10 border border-gray-100 dark:border-gray-800">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Email address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="focus:ring-2 focus:ring-emerald-500 focus:border-transparent block w-full pl-10 text-sm border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl py-3.5 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="focus:ring-2 focus:ring-emerald-500 focus:border-transparent block w-full pl-10 text-sm border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl py-3.5 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-400 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-5 w-5" />
                        Verifying...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 font-medium">
                  New Customer?
                </span>
              </div>
            </div>

            <div className="mt-8">
              <NavLink
                to="/contact"
                className="w-full inline-flex justify-center py-4 px-4 border-2 border-emerald-600/10 dark:border-emerald-400/10 rounded-xl shadow-sm bg-emerald-50/30 dark:bg-emerald-900/10 text-base font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-colors"
              >
                Request Access
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalLoginPage;