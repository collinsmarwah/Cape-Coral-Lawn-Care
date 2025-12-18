import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, CreditCard, Clock, MapPin, Download, ChevronRight, User, Settings, LogOut, Bell, Scissors } from 'lucide-react';

const PortalDashboardPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div className="space-y-1">
                <div className="flex items-center gap-3">
                   <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Hello, John!</h1>
                   <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-800">PREMIUM</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <MapPin size={16} /> 3405 SW 8th St, Cape Coral, FL
                </p>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-emerald-600 transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-1.5 pr-4 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                        JD
                    </div>
                    <div className="text-left hidden sm:block">
                        <p className="text-sm font-bold text-gray-900 dark:text-white">John Doe</p>
                        <NavLink to="/portal" className="text-xs text-red-500 hover:underline flex items-center gap-1">
                            <LogOut size={10} /> Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
                
                {/* Upcoming Service Card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <Calendar className="text-emerald-500" size={24} />
                        Next Scheduled Visit
                    </h2>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl p-8 border border-emerald-100/50 dark:border-emerald-800/30">
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl text-center min-w-[120px] shadow-lg shadow-emerald-900/5 ring-1 ring-emerald-100 dark:ring-emerald-900/50">
                            <span className="block text-xs text-emerald-600 dark:text-emerald-400 uppercase font-black tracking-widest mb-1">OCTOBER</span>
                            <span className="block text-5xl font-black text-gray-900 dark:text-white">15</span>
                            <span className="block text-xs text-gray-500 mt-1 font-bold">TUESDAY</span>
                        </div>
                        <div className="flex-grow text-center md:text-left space-y-3">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm bg-emerald-100/50 dark:bg-emerald-900/40 w-fit px-3 py-1 rounded-full">
                                <Scissors size={14} /> 
                                Weekly Mow & Trim
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white">Professional Maintenance</h3>
                            <div className="space-y-1.5">
                                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
                                    <Clock size={16} className="text-emerald-500" /> Estimated: 8:00 AM - 11:00 AM
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
                                    <MapPin size={16} className="text-emerald-500" /> Back gate access: Enabled
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all shadow-sm active:scale-95">
                                Reschedule
                            </button>
                            <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
                                Add Note
                            </button>
                        </div>
                    </div>
                </div>

                {/* History Section */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Services</h2>
                        <a href="#" className="text-sm text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1">
                            History <ChevronRight size={14} />
                        </a>
                    </div>
                    <div className="space-y-2">
                        {[
                            { date: 'Oct 08', service: 'Weekly Mow', status: 'Completed', tech: 'Brett Madr', cost: '$139' },
                            { date: 'Oct 01', service: 'Weekly Mow', status: 'Completed', tech: 'Jonathan Kennedy', cost: '$139' },
                            { date: 'Sep 24', service: 'Irrigation Check', status: 'Completed', tech: 'Tyler Cone', cost: '$45' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all group border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                                <div className="flex items-center gap-5">
                                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl h-12 w-12 flex flex-col items-center justify-center text-emerald-700 dark:text-emerald-400">
                                        <span className="text-[10px] font-black leading-none uppercase">{item.date.split(' ')[0]}</span>
                                        <span className="text-lg font-black">{item.date.split(' ')[1]}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">{item.service}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Technician: {item.tech}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="font-black text-gray-900 dark:text-white">{item.cost}</span>
                                    <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800">
                                        {item.status}
                                    </span>
                                    <button className="text-gray-300 hover:text-emerald-600 transition-colors">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {/* Billing Summary */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    <div className="absolute -bottom-10 -right-10 p-4 opacity-5 text-emerald-900 dark:text-emerald-100 group-hover:scale-110 transition-transform duration-700">
                        <CreditCard size={160} />
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 relative z-10">
                        <CreditCard className="text-emerald-500" size={24} />
                        Payments
                    </h2>
                    
                    <div className="text-center py-6 relative z-10">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Account Balance</p>
                        <p className="text-6xl font-black text-gray-900 dark:text-white">$0.00</p>
                        <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 w-fit mx-auto px-4 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800/50">
                             <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                             Up to Date
                        </div>
                    </div>

                    <div className="mt-8 space-y-3 relative z-10">
                        <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98]">
                            Manage AutoPay
                        </button>
                        <button className="w-full py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-2xl font-bold transition-all active:scale-[0.98]">
                            View Invoices
                        </button>
                    </div>
                </div>

                {/* Profile Quick Links */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
                    <h3 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6">Quick Settings</h3>
                    <div className="space-y-2">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-2xl transition-all group">
                            <div className="flex items-center gap-3">
                                <User size={18} className="text-emerald-600" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Profile Details</span>
                            </div>
                            <ChevronRight size={18} className="text-gray-300 group-hover:text-emerald-600" />
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-2xl transition-all group">
                            <div className="flex items-center gap-3">
                                <Settings size={18} className="text-emerald-600" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Service Preferences</span>
                            </div>
                            <ChevronRight size={18} className="text-gray-300 group-hover:text-emerald-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PortalDashboardPage;