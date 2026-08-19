"use client";

import { Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#03142A] text-white pt-14 pb-6 border-t border-slate-900 relative overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Left Column: Contact Details + World Map Background (span 7 cols) */}
          <div className="lg:col-span-7 space-y-6 relative min-h-[320px] flex flex-col justify-between py-2">
            
            {/* Dotted World Map Matrix Overlay matching user screenshot */}
            <div className="absolute inset-0 opacity-40 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
              <svg 
                viewBox="0 0 1000 500" 
                className="w-full h-full text-slate-400 fill-current"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <pattern id="worldMapDotGrid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="6" cy="6" r="3" fill="#94A3B8" opacity="0.9" />
                  </pattern>
                </defs>

                {/* Dotted Continent Shapes Matrix */}
                <g fill="url(#worldMapDotGrid)">
                  {/* North America */}
                  <path d="M 60,80 L 320,80 L 320,180 L 260,250 L 180,240 L 140,200 L 60,160 Z" />
                  {/* South America */}
                  <path d="M 240,270 L 360,270 L 320,440 L 260,460 L 240,360 Z" />
                  {/* Europe */}
                  <path d="M 440,70 L 590,70 L 580,160 L 440,150 Z" />
                  {/* Africa */}
                  <path d="M 460,170 L 600,170 L 590,360 L 500,380 L 460,280 Z" />
                  {/* Asia */}
                  <path d="M 590,60 L 920,60 L 910,240 L 800,260 L 740,220 L 590,180 Z" />
                  {/* Australia & Oceania */}
                  <path d="M 760,320 L 890,320 L 880,420 L 760,410 Z" />
                </g>

                {/* Glowing Gold Pin on Bhutan (Approx 700, 185) */}
                <g transform="translate(695, 185)">
                  <circle r="18" fill="#EAA500" className="animate-ping opacity-75" />
                  <circle r="12" fill="#EAA500" opacity="0.5" />
                  <circle r="7" fill="#EAA500" stroke="#FFFFFF" strokeWidth="2.5" />
                </g>
              </svg>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-widest uppercase font-sans text-white">
                Contact Us
              </h2>
              <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
            </div>

            <div className="space-y-4 pt-1 text-slate-200">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                  Tobgyel Global Expos
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  P.O. Box 123, Phuentsholing<br />
                  Chukha, Bhutan
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-full bg-slate-800/80 text-white">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <a href="tel:+9755251252" className="hover:text-[#EAA500] transition-colors">
                    +975 5 251 252
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-full bg-slate-800/80 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@tobgyelglobalexpos.bt" className="hover:text-[#EAA500] transition-colors">
                    info@tobgyelglobalexpos.bt
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-full bg-slate-800/80 text-white">
                    <Globe className="w-4 h-4" />
                  </div>
                  <a href="https://www.tobgyelglobalexpos.bt" target="_blank" rel="noopener noreferrer" className="hover:text-[#EAA500] transition-colors">
                    www.tobgyelglobalexpos.bt
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us A Message Form (span 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-white">
              Send Us A Message
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded bg-slate-100 text-slate-900 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#EAA500]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2.5 rounded bg-slate-100 text-slate-900 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#EAA500]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2.5 rounded bg-slate-100 text-slate-900 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#EAA500]"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2.5 rounded bg-slate-100 text-slate-900 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#EAA500] resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded bg-[#D49900] hover:bg-[#bd8800] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Footer Bar matching reference image with developer credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
          <p>
            © 2024 Tobgyel Global Expos. All Rights Reserved.{" "}
            <span className="hidden sm:inline text-slate-500">|</span>{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              Developed by{" "}
              <a 
                href="https://kodadevportfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#EAA500] hover:underline font-bold transition-colors"
              >
                KodaDev
              </a>
            </span>
          </p>

          <div className="flex items-center space-x-3">
            {/* Facebook Circular Icon */}
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 text-[#03142A] hover:bg-[#EAA500] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn Circular Icon */}
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 text-[#03142A] hover:bg-[#EAA500] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>
            {/* Instagram Circular Icon */}
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-100 text-[#03142A] hover:bg-[#EAA500] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube Circular Icon */}
            <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-slate-100 text-[#03142A] hover:bg-[#EAA500] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}


