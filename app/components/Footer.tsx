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
            
            {/* Discrete Dots World Map Vector Overlay matching reference image 100% */}
            <div className="absolute inset-0 opacity-45 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
              <svg 
                viewBox="0 0 900 400" 
                className="w-full h-full text-slate-400"
                preserveAspectRatio="xMidYMid meet"
              >
                <g fill="#94A3B8" opacity="0.85">
                  {[
                    // North America & Greenland
                    [40,50],[52,50],[64,50],[76,50],[88,50],[100,50],[112,50],[124,50],[136,50],[148,50],[160,50],[172,50],[184,50],[196,50],[208,50],[220,50],[232,50],[244,50],[270,35],[282,35],[294,35],[306,35],[318,35],
                    [52,62],[64,62],[76,62],[88,62],[100,62],[112,62],[124,62],[136,62],[148,62],[160,62],[172,62],[184,62],[196,62],[208,62],[220,62],[232,62],[244,62],[256,62],[270,47],[282,47],[294,47],[306,47],
                    [64,74],[76,74],[88,74],[100,74],[112,74],[124,74],[136,74],[148,74],[160,74],[172,74],[184,74],[196,74],[208,74],[220,74],[232,74],[244,74],[256,74],[280,59],[292,59],[304,59],
                    [76,86],[88,86],[100,86],[112,86],[124,86],[136,86],[148,86],[160,86],[172,86],[184,86],[196,86],[208,86],[220,86],[232,86],[244,86],
                    [88,98],[100,98],[112,98],[124,98],[136,98],[148,98],[160,98],[172,98],[184,98],[196,98],[208,98],[220,98],[232,98],
                    [112,110],[124,110],[136,110],[148,110],[160,110],[172,110],[184,110],[196,110],[208,110],[220,110],
                    [136,122],[148,122],[160,122],[172,122],[184,122],[196,122],[208,122],
                    [148,134],[160,134],[172,134],[184,134],[196,134],
                    [160,146],[172,146],[184,146],
                    [172,158],[184,158],[196,158],
                    [184,170],[196,170],
                    [196,182],[208,182],

                    // South America
                    [220,200],[232,200],[244,200],[256,200],[268,200],[280,200],
                    [208,212],[220,212],[232,212],[244,212],[256,212],[268,212],[280,212],[292,212],
                    [208,224],[220,224],[232,224],[244,224],[256,224],[268,224],[280,224],[292,224],[304,224],
                    [220,236],[232,236],[244,236],[256,236],[268,236],[280,236],[292,236],[304,236],
                    [220,248],[232,248],[244,248],[256,248],[268,248],[280,248],[292,248],
                    [232,260],[244,260],[256,260],[268,260],[280,260],[292,260],
                    [232,272],[244,272],[256,272],[268,272],[280,272],
                    [244,284],[256,284],[268,284],[280,284],
                    [244,296],[256,296],[268,296],
                    [244,308],[256,308],[268,308],
                    [244,320],[256,320],
                    [244,332],[256,332],
                    [244,344],

                    // Europe
                    [440,50],[452,50],[464,50],[476,50],[488,50],
                    [416,62],[428,62],[440,62],[452,62],[464,62],[476,62],[488,62],[500,62],[512,62],
                    [416,74],[428,74],[440,74],[452,74],[464,74],[476,74],[488,74],[500,74],[512,74],[524,74],
                    [404,86],[416,86],[428,86],[440,86],[452,86],[464,86],[476,86],[488,86],[500,86],[512,86],[524,86],[536,86],

                    // Africa & Madagascar
                    [404,110],[416,110],[428,110],[440,110],[452,110],[464,110],[476,110],[488,110],[500,110],[512,110],[524,110],
                    [392,122],[404,122],[416,122],[428,122],[440,122],[452,122],[464,122],[476,122],[488,122],[500,122],[512,122],[524,122],[536,122],
                    [380,134],[392,134],[404,134],[416,134],[428,134],[440,134],[452,134],[464,134],[476,134],[488,134],[500,134],[512,134],[524,134],[536,134],[548,134],
                    [392,146],[404,146],[416,146],[428,146],[440,146],[452,146],[464,146],[476,146],[488,146],[500,146],[512,146],[524,146],[536,146],[548,146],[560,146],
                    [404,158],[416,158],[428,158],[440,158],[452,158],[464,158],[476,158],[488,158],[500,158],[512,158],[524,158],[536,158],
                    [416,170],[428,170],[440,170],[452,170],[464,170],[476,170],[488,170],[500,170],[512,170],[524,170],[560,170],
                    [428,182],[440,182],[452,182],[464,182],[476,182],[488,182],[500,182],[512,182],[560,182],
                    [440,194],[452,194],[464,194],[476,194],[488,194],[500,194],[512,194],
                    [452,206],[464,206],[476,206],[488,206],[500,206],
                    [452,218],[464,218],[476,218],[488,218],
                    [464,230],[476,230],[488,230],
                    [464,242],[476,242],
                    [464,254],[476,254],
                    [464,266],

                    // Asia & Middle East & India & Bhutan
                    [536,50],[548,50],[560,50],[572,50],[584,50],[596,50],[608,50],[620,50],[632,50],[644,50],[656,50],[668,50],[680,50],[692,50],[704,50],[716,50],[728,50],[740,50],
                    [548,62],[560,62],[572,62],[584,62],[596,62],[608,62],[620,62],[632,62],[644,62],[656,62],[668,62],[680,62],[692,62],[704,62],[716,62],[728,62],[740,62],[752,62],[764,62],[776,62],
                    [536,74],[548,74],[560,74],[572,74],[584,74],[596,74],[608,74],[620,74],[632,74],[644,74],[656,74],[668,74],[680,74],[692,74],[704,74],[716,74],[728,74],[740,74],[752,74],[764,74],[776,74],[788,74],[800,74],
                    [548,86],[560,86],[572,86],[584,86],[596,86],[608,86],[620,86],[632,86],[644,86],[656,86],[668,86],[680,86],[692,86],[704,86],[716,86],[728,86],[740,86],[752,86],[764,86],[776,86],[788,86],[800,86],[812,86],
                    [560,98],[572,98],[584,98],[596,98],[608,98],[620,98],[632,98],[644,98],[656,98],[668,98],[680,98],[692,98],[704,98],[716,98],[728,98],[740,98],[752,98],[764,98],[776,98],[788,98],[800,98],[812,98],[824,98],
                    [572,110],[584,110],[596,110],[608,110],[620,110],[632,110],[644,110],[656,110],[668,110],[680,110],[692,110],[704,110],[716,110],[728,110],[740,110],[752,110],[764,110],[776,110],[788,110],[800,110],
                    [560,122],[572,122],[584,122],[596,122],[608,122],[620,122],[632,122],[644,122],[656,122],[668,122],[680,122],[692,122],[704,122],[716,122],[728,122],[740,122],[752,122],[764,122],
                    [572,134],[584,134],[596,134],[608,134],[620,134],[632,134],[644,134],[656,134],[668,134],[680,134],[692,134],[704,134],[716,134],[728,134],[740,134],[752,134],
                    [620,146],[632,146],[644,146],[656,146],[668,146],[680,146],[692,146],[704,146],[716,146],[728,146],[740,146],
                    [632,158],[644,158],[656,158],[668,158],[680,158],[692,158],[704,158],[716,158],[728,158],
                    [644,170],[656,170],[668,170],[680,170],[692,170],[704,170],
                    [656,182],[668,182],[680,182],

                    // Japan & SE Asian Islands
                    [776,110],[788,110],[800,110],
                    [788,122],[800,122],
                    [752,170],[764,170],[776,170],
                    [764,182],[776,182],[788,182],

                    // Australia & Oceania
                    [716,230],[728,230],[740,230],[752,230],[764,230],[776,230],[788,230],
                    [704,242],[716,242],[728,242],[740,242],[752,242],[764,242],[776,242],[788,242],[800,242],
                    [704,254],[716,254],[728,254],[740,254],[752,254],[764,254],[776,254],[788,254],[800,254],[812,254],
                    [716,266],[728,266],[740,266],[752,266],[764,266],[776,266],[788,266],[800,266],[812,266],
                    [728,278],[740,278],[752,278],[764,278],[776,278],[788,278],[800,278],
                    [740,290],[752,290],[764,290],[776,290],[788,290],
                    [752,302],[764,302],[776,302],
                    [764,314],[776,314]
                  ].map(([cx, cy], idx) => (
                    <circle key={idx} cx={cx} cy={cy} r="3" />
                  ))}
                </g>

                {/* Glowing Gold Pin on Bhutan (Approx 668, 134) */}
                <g transform="translate(668, 134)">
                  <circle r="18" fill="#EAA500" className="animate-ping opacity-75" />
                  <circle r="12" fill="#EAA500" opacity="0.5" />
                  <circle r="6" fill="#EAA500" stroke="#FFFFFF" strokeWidth="2.5" />
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


