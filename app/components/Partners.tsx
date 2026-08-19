"use client";

export default function Partners() {
  const govtPartners = [
    {
      name: "Royal Government of Bhutan",
      image: "/partners/Royal_Government_of_Bhutan.jpg",
      sealText: "ROYAL GOVT",
      color: "#d99b00",
    },
    {
      name: "Ministry in Industry, Commerce & Employment",
      image: "/partners/MoICE.jpg",
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
    { name: "TATA", image: "/partners/Tata.svg", logoText: "TATA" },
    { name: "DHI", image: "/partners/dhi.png", logoText: "DHI" },
    { name: "Bank of Bhutan", image: "/partners/Bank_of_Bhutan_highres.webp", logoText: "BANK OF BHUTAN" },
    { name: "Drukair", image: "/partners/Drukair.png", logoText: "Drukair" },
    { name: "BOB", image: "/partners/Bank_of_Bhutan_highres.webp", logoText: "BOB" },
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#03142A] uppercase font-sans">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-[#EAA500] mx-auto rounded-full" />
        </div>

        {/* Government Partners */}
        <div className="space-y-6">
          <h3 className="text-center text-xs sm:text-sm font-extrabold tracking-widest text-slate-600 uppercase">
            Government Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {govtPartners.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                {/* Circular Seal / Real Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center p-2 group-hover:border-[#EAA500] transition-colors overflow-hidden">
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
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
                  )}
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
                className="w-full h-20 sm:h-24 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center p-4 hover:border-[#EAA500] hover:shadow-md transition-all cursor-pointer overflow-hidden"
              >
                {cp.image ? (
                  <img 
                    src={cp.image} 
                    alt={cp.name} 
                    className="max-h-12 sm:max-h-14 w-auto object-contain"
                  />
                ) : (
                  <span className="font-extrabold text-sm text-[#03142A]">
                    {cp.logoText}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

