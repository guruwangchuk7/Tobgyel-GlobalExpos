import Header from "../components/Header";
import Footer from "../components/Footer";
import { Plane, Hotel, Car } from "lucide-react";

export const metadata = {
  title: "Plan Your Visit | Tobgyel Global Expos",
  description: "Travel guide, visa requirements, hotel accommodations, and transportation information for attending Tobgyel Global Expos in Bhutan.",
};

export default function VisitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      {/* Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/85 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Plan Your Visit
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-medium pt-1">
            Everything you need to know about traveling to Bhutan, securing entry visas, booking partner hotels, and navigating Phuentsholing &amp; Thimphu.
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* Travel Highlights */}
        <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-[#03142A] uppercase font-sans">
                Visitor Assistance &amp; Logistics
              </h2>
              <div className="w-12 h-1 bg-[#EAA500] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Plane,
                  title: "Flight & Entry Visa",
                  desc: "Drukair and Bhutan Airlines operate direct flights into Paro International Airport. Special event entry passes are available via our concierge.",
                },
                {
                  icon: Hotel,
                  title: "Official Partner Hotels",
                  desc: "Enjoy exclusive discounted room rates at partner luxury & boutique hotels in Phuentsholing and Thimphu.",
                },
                {
                  icon: Car,
                  title: "Shuttle & Transport",
                  desc: "Dedicated shuttle buses connect Paro Airport, Phuentsholing border plaza, and expo venue halls throughout the event days.",
                },
              ].map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
                    <div className="p-3 bg-[#03142A] text-[#EAA500] rounded-lg w-fit">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#03142A]">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
