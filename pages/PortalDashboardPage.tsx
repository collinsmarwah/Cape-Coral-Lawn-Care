import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, CreditCard, Clock, MapPin, Download, ChevronRight, User } from 'lucide-react';

const PortalDashboardPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
                <p className="text-gray-500">Property: 3405 SW 8th St, Cape Coral, FL</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <User size={20} />
                </div>
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-gray-900">John Doe</p>
                    <NavLink to="/portal" className="text-xs text-red-500 hover:underline">Sign Out</NavLink>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Status Column */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Upcoming Service Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="text-emerald-500" size={20} />
                        Next Scheduled Service
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 items-center bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                        <div className="bg-white p-4 rounded-xl text-center min-w-[100px] shadow-sm">
                            <span className="block text-xs text-gray-500 uppercase font-bold">OCT</span>
                            <span className="block text-3xl font-bold text-emerald-600">15</span>
                            <span className="block text-xs text-gray-500">Tuesday</span>
                        </div>
                        <div className="flex-grow text-center sm:text-left">
                            <h3 className="text-xl font-bold text-gray-900">Weekly Lawn Maintenance</h3>
                            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-2 mt-1">
                                <Clock size={16} /> Estimated arrival: 8:00 AM - 11:00 AM
                            </p>
                            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-2 mt-1">
                                <MapPin size={16} /> Backyard access confirmed
                            </p>
                        </div>
                        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                            Reschedule
                        </button>
                    </div>
                </div>

                {/* Recent History */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Recent Service History</h2>
                        <a href="#" className="text-sm text-emerald-600 font-semibold hover:underline">View All</a>
                    </div>
                    <div className="space-y-4">
                        {[
                            { date: 'Oct 08', service: 'Weekly Lawn Maintenance', status: 'Completed', tech: 'Brett Madr' },
                            { date: 'Oct 01', service: 'Weekly Lawn Maintenance', status: 'Completed', tech: 'Jonathan Kennedy' },
                            { date: 'Sep 24', service: 'Irrigation Checkup', status: 'Completed', tech: 'Tyler Cone' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center text-gray-500 font-bold text-xs">
                                        {item.date.split(' ')[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{item.service}</p>
                                        <p className="text-xs text-gray-500">Tech: {item.tech}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Billing Column */}
            <div className="space-y-8">
                {/* Billing Summary */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <CreditCard size={100} />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
                        <CreditCard className="text-emerald-500" size={20} />
                        Billing & Payments
                    </h2>
                    
                    <div className="text-center py-6">
                        <p className="text-gray-500 text-sm mb-1">Current Balance</p>
                        <p className="text-4xl font-extrabold text-gray-900">$0.00</p>
                        <p className="text-emerald-600 text-sm font-medium flex items-center justify-center gap-1 mt-2">
                             All invoices paid
                        </p>
                    </div>

                    <div className="mt-6 space-y-3">
                        <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 transition-all">
                            Manage Payment Method
                        </button>
                        <button className="w-full py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold transition-all">
                            View Invoice History
                        </button>
                    </div>
                </div>

                {/* Recent Invoices Mini List */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Latest Invoices</h3>
                    <div className="space-y-3">
                        {[
                            { id: '#INV-2024-001', date: 'Oct 01, 2025', amount: '$139.00' },
                            { id: '#INV-2024-002', date: 'Sep 01, 2025', amount: '$139.00' },
                        ].map((inv, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group cursor-pointer">
                                <div>
                                    <p className="font-bold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">{inv.id}</p>
                                    <p className="text-xs text-gray-500">{inv.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-gray-700">{inv.amount}</span>
                                    <button className="text-gray-400 hover:text-emerald-600">
                                        <Download size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 text-sm text-emerald-600 font-semibold hover:underline flex items-center justify-center gap-1">
                        View All Invoices <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PortalDashboardPage;