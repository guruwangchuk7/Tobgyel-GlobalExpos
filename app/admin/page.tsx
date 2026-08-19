"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  LogOut, 
  User, 
  Handshake, 
  Users, 
  Search, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Trash2, 
  Download, 
  ArrowLeft,
  LayoutDashboard
} from "lucide-react";

import {
  getExhibitors,
  getSponsors,
  getVisitors,
  updateExhibitorStatus,
  deleteExhibitor,
  updateSponsorStatus,
  deleteSponsor,
  updateVisitorStatus,
  deleteVisitor,
  ExhibitorSubmission,
  SponsorSubmission,
  VisitorSubmission,
} from "@/app/lib/registrationStore";

export default function AdminPage() {
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Dashboard Data State
  const [activeTab, setActiveTab] = useState<"exhibitors" | "sponsors" | "visitors">("exhibitors");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const [exhibitors, setExhibitors] = useState<ExhibitorSubmission[]>([]);
  const [sponsors, setSponsors] = useState<SponsorSubmission[]>([]);
  const [visitors, setVisitors] = useState<VisitorSubmission[]>([]);

  // Check login session on mount
  useEffect(() => {
    const session = localStorage.getItem("tobgyel_admin_session");
    if (session === "active") {
      setIsLoggedIn(true);
    }
    refreshData();
  }, []);

  const refreshData = () => {
    setExhibitors(getExhibitors());
    setSponsors(getSponsors());
    setVisitors(getVisitors());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      localStorage.setItem("tobgyel_admin_session", "active");
      setLoginError("");
      refreshData();
    } else {
      setLoginError("Invalid username or password. (Use admin / admin123)");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("tobgyel_admin_session");
  };

  // Status Toggles
  const handleExhibitorStatus = (id: string, status: "Pending" | "Approved" | "Rejected") => {
    updateExhibitorStatus(id, status);
    refreshData();
  };

  const handleDeleteExhibitor = (id: string) => {
    if (confirm("Are you sure you want to delete this exhibitor entry?")) {
      deleteExhibitor(id);
      refreshData();
    }
  };

  const handleSponsorStatus = (id: string, status: "Pending" | "Approved" | "Rejected") => {
    updateSponsorStatus(id, status);
    refreshData();
  };

  const handleDeleteSponsor = (id: string) => {
    if (confirm("Are you sure you want to delete this sponsor entry?")) {
      deleteSponsor(id);
      refreshData();
    }
  };

  const handleVisitorStatus = (id: string, status: "Pending" | "Approved" | "Rejected") => {
    updateVisitorStatus(id, status);
    refreshData();
  };

  const handleDeleteVisitor = (id: string) => {
    if (confirm("Are you sure you want to delete this visitor pass entry?")) {
      deleteVisitor(id);
      refreshData();
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (activeTab === "exhibitors") {
      csvContent += "ID,Company Name,Contact Person,Email,Phone,Sector,Booth Size,Status,Submitted At\n";
      exhibitors.forEach((item) => {
        csvContent += `"${item.id}","${item.companyName}","${item.contactPerson}","${item.email}","${item.phone}","${item.sector}","${item.boothSize}","${item.status}","${item.submittedAt}"\n`;
      });
    } else if (activeTab === "sponsors") {
      csvContent += "ID,Organization Name,Contact Person,Email,Phone,Tier,Budget,Status,Submitted At\n";
      sponsors.forEach((item) => {
        csvContent += `"${item.id}","${item.organizationName}","${item.contactPerson}","${item.email}","${item.phone}","${item.tier}","${item.budget}","${item.status}","${item.submittedAt}"\n`;
      });
    } else {
      csvContent += "ID,Full Name,Email,Phone,Country,Profession,Pass Code,Status,Submitted At\n";
      visitors.forEach((item) => {
        csvContent += `"${item.id}","${item.fullName}","${item.email}","${item.phone}","${item.country}","${item.profession}","${item.passCode}","${item.status}","${item.submittedAt}"\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tobgyel_${activeTab}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics
  const totalPending = 
    exhibitors.filter(e => e.status === "Pending").length +
    sponsors.filter(s => s.status === "Pending").length +
    visitors.filter(v => v.status === "Pending").length;

  // Filtered lists
  const filteredExhibitors = exhibitors.filter((item) => {
    const matchesSearch =
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredSponsors = sponsors.filter((item) => {
    const matchesSearch =
      item.organizationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredVisitors = visitors.filter((item) => {
    const matchesSearch =
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.passCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-[#020D1B] text-white py-8 px-4 sm:px-6 lg:px-8">
      
      {!isLoggedIn ? (
        /* Login Screen */
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <div className="max-w-md w-full bg-[#03142A] border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#0A4D8C]/30 border border-[#0A4D8C] text-[#EAA500] mx-auto flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-black uppercase text-white tracking-wide font-sans">
                Admin Portal Login
              </h1>
              <p className="text-xs text-slate-300">
                Tobgyel Global Expos Event Management System
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/40 text-red-400 text-xs font-semibold text-center">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                  Admin Username
                </label>
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#EAA500]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#EAA500]"
                />
              </div>

              <div className="p-3 rounded bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold text-[#EAA500]">Demo Credentials:</span> Username: <code className="text-white">admin</code> | Password: <code className="text-white">admin123</code>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#0A4D8C] hover:bg-[#083e73] text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Sign In to Dashboard</span>
              </button>
            </form>

            <div className="text-center pt-2">
              <Link href="/" className="text-xs text-slate-400 hover:text-[#EAA500] transition-colors">
                ← Return to Public Website
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Protected Admin Dashboard */
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Top Admin Header Bar */}
          <div className="bg-[#03142A] border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0A4D8C] text-[#EAA500]">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
                  Event Submissions Dashboard
                </h1>
                <p className="text-xs text-slate-300">
                  Manage Exhibitors, Sponsors, Visitor Passes, and Status Approvals
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View Site</span>
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold transition-colors flex items-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Key Metrics Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1 */}
            <div className="bg-[#03142A] border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-slate-400">Total Exhibitors</span>
                <User className="w-5 h-5 text-[#0A4D8C]" />
              </div>
              <div className="text-2xl font-black text-white">{exhibitors.length}</div>
              <div className="text-[11px] text-amber-400 font-semibold">
                {exhibitors.filter(e => e.status === "Pending").length} Pending Review
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#03142A] border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-slate-400">Total Sponsors</span>
                <Handshake className="w-5 h-5 text-[#EAA500]" />
              </div>
              <div className="text-2xl font-black text-white">{sponsors.length}</div>
              <div className="text-[11px] text-emerald-400 font-semibold">
                {sponsors.filter(s => s.status === "Approved").length} Approved Partners
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#03142A] border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-slate-400">Visitor Passes</span>
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-white">{visitors.length}</div>
              <div className="text-[11px] text-slate-400 font-semibold">Issued Passes</div>
            </div>

            {/* Metric 4 */}
            <div className="bg-[#03142A] border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-slate-400">Action Required</span>
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-2xl font-black text-amber-400">{totalPending}</div>
              <div className="text-[11px] text-slate-300">Pending Approvals</div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-[#03142A] border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
            
            {/* Tabs & Tools Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              
              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
                <button
                  onClick={() => { setActiveTab("exhibitors"); setStatusFilter("All"); }}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === "exhibitors"
                      ? "bg-[#0A4D8C] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Exhibitors ({exhibitors.length})</span>
                </button>

                <button
                  onClick={() => { setActiveTab("sponsors"); setStatusFilter("All"); }}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === "sponsors"
                      ? "bg-[#D49900] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Handshake className="w-4 h-4" />
                  <span>Sponsors ({sponsors.length})</span>
                </button>

                <button
                  onClick={() => { setActiveTab("visitors"); setStatusFilter("All"); }}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === "visitors"
                      ? "bg-[#008E48] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Visitors ({visitors.length})</span>
                </button>
              </div>

              {/* Search, Filter & CSV Export */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search name, company, email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#EAA500]"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>

                <button
                  onClick={exportToCSV}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#EAA500]" />
                  <span>Export CSV</span>
                </button>
              </div>

            </div>

            {/* TAB 1: EXHIBITORS TABLE */}
            {activeTab === "exhibitors" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider bg-slate-900/50">
                      <th className="py-3 px-4">Company & Contact</th>
                      <th className="py-3 px-4">Sector</th>
                      <th className="py-3 px-4">Booth Size</th>
                      <th className="py-3 px-4">Submitted At</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredExhibitors.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-500">
                          No exhibitor registrations found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredExhibitors.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3.5 px-4 space-y-1">
                            <div className="font-extrabold text-white text-sm">{item.companyName}</div>
                            <div className="text-slate-300 font-medium">{item.contactPerson}</div>
                            <div className="text-[11px] text-slate-400">{item.email} • {item.phone}</div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-300 font-medium">{item.sector}</td>
                          <td className="py-3.5 px-4 text-[#EAA500] font-bold">{item.boothSize}</td>
                          <td className="py-3.5 px-4 text-slate-400">{item.submittedAt}</td>
                          <td className="py-3.5 px-4">
                            <select
                              value={item.status}
                              onChange={(e) => handleExhibitorStatus(item.id, e.target.value as ExhibitorSubmission["status"])}
                              className={`px-2.5 py-1 rounded text-xs font-bold focus:outline-none border ${
                                item.status === "Approved"
                                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                  : item.status === "Pending"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : "bg-red-500/20 text-red-300 border-red-500/40"
                              }`}
                            >
                              <option value="Pending" className="bg-slate-900 text-amber-300">Pending</option>
                              <option value="Approved" className="bg-slate-900 text-emerald-300">Approved</option>
                              <option value="Rejected" className="bg-slate-900 text-red-300">Rejected</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleDeleteExhibitor(item.id)}
                              className="p-1.5 rounded hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                              title="Delete Entry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB 2: SPONSORS TABLE */}
            {activeTab === "sponsors" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider bg-slate-900/50">
                      <th className="py-3 px-4">Organization & Contact</th>
                      <th className="py-3 px-4">Tier Package</th>
                      <th className="py-3 px-4">Budget</th>
                      <th className="py-3 px-4">Submitted At</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredSponsors.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-500">
                          No sponsorship applications found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredSponsors.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3.5 px-4 space-y-1">
                            <div className="font-extrabold text-white text-sm">{item.organizationName}</div>
                            <div className="text-slate-300 font-medium">{item.contactPerson}</div>
                            <div className="text-[11px] text-slate-400">{item.email} • {item.phone}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[#EAA500] font-extrabold">{item.tier}</td>
                          <td className="py-3.5 px-4 text-slate-300 font-semibold">{item.budget}</td>
                          <td className="py-3.5 px-4 text-slate-400">{item.submittedAt}</td>
                          <td className="py-3.5 px-4">
                            <select
                              value={item.status}
                              onChange={(e) => handleSponsorStatus(item.id, e.target.value as SponsorSubmission["status"])}
                              className={`px-2.5 py-1 rounded text-xs font-bold focus:outline-none border ${
                                item.status === "Approved"
                                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                  : item.status === "Pending"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : "bg-red-500/20 text-red-300 border-red-500/40"
                              }`}
                            >
                              <option value="Pending" className="bg-slate-900 text-amber-300">Pending</option>
                              <option value="Approved" className="bg-slate-900 text-emerald-300">Approved</option>
                              <option value="Rejected" className="bg-slate-900 text-red-300">Rejected</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleDeleteSponsor(item.id)}
                              className="p-1.5 rounded hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                              title="Delete Entry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB 3: VISITORS TABLE */}
            {activeTab === "visitors" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider bg-slate-900/50">
                      <th className="py-3 px-4">Visitor & Contact</th>
                      <th className="py-3 px-4">Country & Role</th>
                      <th className="py-3 px-4">Pass ID Code</th>
                      <th className="py-3 px-4">Submitted At</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredVisitors.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-500">
                          No visitor pass registrations found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredVisitors.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3.5 px-4 space-y-1">
                            <div className="font-extrabold text-white text-sm">{item.fullName}</div>
                            <div className="text-[11px] text-slate-400">{item.email} • {item.phone}</div>
                          </td>
                          <td className="py-3.5 px-4 font-medium text-slate-300">
                            <div>{item.country}</div>
                            <div className="text-[11px] text-slate-400">{item.profession}</div>
                          </td>
                          <td className="py-3.5 px-4 text-emerald-400 font-mono font-bold">{item.passCode}</td>
                          <td className="py-3.5 px-4 text-slate-400">{item.submittedAt}</td>
                          <td className="py-3.5 px-4">
                            <select
                              value={item.status}
                              onChange={(e) => handleVisitorStatus(item.id, e.target.value as VisitorSubmission["status"])}
                              className={`px-2.5 py-1 rounded text-xs font-bold focus:outline-none border ${
                                item.status === "Approved"
                                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                  : item.status === "Pending"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : "bg-red-500/20 text-red-300 border-red-500/40"
                              }`}
                            >
                              <option value="Pending" className="bg-slate-900 text-amber-300">Pending</option>
                              <option value="Approved" className="bg-slate-900 text-emerald-300">Approved</option>
                              <option value="Rejected" className="bg-slate-900 text-red-300">Rejected</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleDeleteVisitor(item.id)}
                              className="p-1.5 rounded hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                              title="Delete Entry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

          </div>

        </div>
      )}

    </main>
  );
}
