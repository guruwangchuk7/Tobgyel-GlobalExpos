"use client";

export default function Partners() {
  const govtPartners = [
    {
      name: "Royal Government of Bhutan",
      sealText: "ROYAL GOVT",
      color: "#d99b00",
    },
    {
      name: "Ministry in Industry, Commerce & Employment",
      sealText: "MOICE",
      color: "#0f4c81",
    },
    {
      name: "Department of Tourism",
      sealText: "TOURISM",
      color: "#008a4b",
    },
    {
      name: "Phuentsholing Thromde",
      sealText: "THROMDE",
      color: "#07162c",
    },
    {
      name: "Bhutan Chamber of Commerce & Industry",
      sealText: "BCCI",
      color: "#c68a00",
    },
  ];

  const corpPartners = [
    { name: "TATA", logoText: "TATA", textColor: "text-blue-900", font: "font-black tracking-widest text-xl sm:text-2xl" },
    { name: "DHI", logoText: "DHI", textColor: "text-emerald-700", font: "font-black italic text-xl sm:text-2xl tracking-tighter" },
    { name: "Bank of Bhutan", logoText: "BANK OF BHUTAN", textColor: "text-[#0f4c81]", font: "font-bold text-xs sm:text-sm tracking-wide" },
    { name: "Drukair", logoText: "Drukair", textColor: "text-amber-700", font: "font-serif italic font-extrabold text-lg sm:text-xl" },
    { name: "BOB", logoText: "BOB", textColor: "text-blue-950", font: "font-black text-xl sm:text-2xl tracking-widest" },
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#07162C] uppercase font-sans">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-[#e5a000] mx-auto rounded-full" />
        </div>

        {/* Government Partners */}
        <div className="space-y-6">
          <h3 className="text-center text-xs sm:text-sm font-extrabold tracking-widest text-slate-600 uppercase">
            Government Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {govtPartners.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                {/* Circular Seal Emblem */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center p-2 group-hover:border-[#e5a000] transition-colors">
                  <div 
                    className="w-full h-full rounded-full border border-dashed border-slate-300 flex flex-col items-center justify-center p-1"
                    style={{ backgroundColor: `${p.color}0D` }}
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color: p.color }} fill="currentColor">
                      <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16L6 19.5L7.5 13.5L3 9L9 8L12 2Z" />
                    </svg>
                    <span className="text-[9px] font-black tracking-tighter uppercase mt-0.5" style={{ color: p.color }}>
                      {p.sealText}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs font-semibold text-slate-700 max-w-[130px] leading-tight">
                  {p.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full border-t border-slate-200/80 my-8" />

        {/* Corporate Partners */}
        <div className="space-y-6">
          <h3 className="text-center text-xs sm:text-sm font-extrabold tracking-widest text-slate-600 uppercase">
            Corporate Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {corpPartners.map((cp, idx) => (
              <div 
                key={idx} 
                className="w-full h-20 sm:h-24 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center p-4 hover:border-[#e5a000] hover:shadow-md transition-all cursor-pointer"
              >
                <span className={`${cp.font} ${cp.textColor}`}>
                  {cp.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
