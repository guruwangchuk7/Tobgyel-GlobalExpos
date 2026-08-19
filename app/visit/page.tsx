import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoHub from "../components/InfoHub";
import { Plane, Hotel, Car, Compass, Sun, PhoneCall, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "Plan Your Visit | Tobgyel Global Expos",
  description: "Complete visitor guide for traveling to Bhutan: visa procedures, flight connections, partner hotels, local transportation, and venue information.",
};

export default function VisitPage() {
  const visitorSections = [
    {
      icon: Plane,
      title: "Travel & Flight Information",
      subtitle: "Paro International Airport & Land Entry",
      items: [
        "Direct flights to Paro International Airport (PBH) operated by Drukair and Bhutan Airlines from Bangkok, New Delhi, Kolkata, Singapore, and Kathmandu.",
        "Land border entry via Phuentsholing (Chukha District) connecting directly from Jaigaon (West Bengal, India) and Bagdogra Airport (IXB).",
        "Complimentary airport shuttle buses for accredited trade delegates traveling between Paro Airport, Phuentsholing, and Thimphu.",
      ],
    },
    {
      icon: Hotel,
      title: "Accommodation & Partner Hotels",
      subtitle: "Phuentsholing & Thimphu Lodging",
      items: [
        "Exclusive 20% to 35% delegate discounts at 4-star and 5-star partner hotels across Phuentsholing and Thimphu.",
        "Featured Partner Hotels in Phuentsholing: Druk Hotel Phuentsholing, Hotel Tara Phendeyling, Hotel Phuentsholing.",
        "Featured Partner Hotels in Thimphu: Le Méridien Thimphu, Taj Tashi, Hotel Druk, Terma Linca Resort.",
      ],
    },
    {
      icon: Car,
      title: "Local Transportation & Shuttles",
      subtitle: "Venue Transfers & Taxi Services",
      items: [
        "Dedicated shuttle coaches running every 30 minutes between official partner hotels and exhibition halls throughout event days.",
        "Pre-booked chauffeur-driven sedan cars and SUV taxis available through our event hospitality desk.",
        "Cross-border taxi services operating continuously between Indian border towns and Phuentsholing plaza.",
      ],
    },
    {
      icon: Sun,
      title: "Weather, Climate & Business Attire",
      subtitle: "Phuentsholing vs Thimphu Climate",
      items: [
        "Phuentsholing (Border Gateway): Warm subtropical climate averaging 20°C to 28°C during expo season.",
        "Thimphu (Capital City): Pleasant mountain valley climate averaging 12°C to 22°C during expo season.",
        "Recommended Attire: Smart business formal / professional formal casual for all exhibition days and B2B sessions.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header />
      
      {/* Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAA500]/15 border border-[#EAA500]/40 text-[#EAA500] text-xs font-extrabold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Visitor Guide &amp; Logistics</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Plan Your Visit To Bhutan
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-medium pt-1 leading-relaxed">
            Everything you need to know about traveling to Bhutan, securing entry visas, reserving partner hotels, and navigating Phuentsholing &amp; Thimphu for Tobgyel Global Expos.
          </p>
        </div>
      </section>

      <main className="flex-1">
        
        {/* Visitor Travel Details */}
        <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-black tracking-widest text-[#0A4D8C] uppercase">
                Official Delegate Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-[#03142A] uppercase font-sans">
                Travel &amp; Visitor Logistics
              </h2>
              <div className="w-12 h-1 bg-[#EAA500] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visitorSections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div key={idx} className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#03142A] text-[#EAA500] rounded-lg shadow-sm">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-[#03142A] leading-tight">
                          {sec.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {sec.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                      {sec.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EAA500] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4-Column Participant Hub Component */}
        <InfoHub />

        {/* Support & Concierge Desk Section */}
        <section className="py-14 sm:py-18 bg-[#03142A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest text-[#EAA500] uppercase">
                Need Visitor Support?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans">
                Useful Contacts &amp; Delegate Assistance
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mx-auto font-medium">
                Our hospitality concierge is ready to assist you with flight arrangements, visa clearance, hotel reservations, and venue inquiries.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-bold">
              <div className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-slate-200 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#EAA500]" />
                <span>Hotline: +975-5-252100 / +975-2-322100</span>
              </div>
              <a
                href="mailto:visit@tobgyelglobalexpos.com"
                className="px-6 py-3 rounded-lg bg-[#EAA500] hover:bg-[#c98e00] text-[#03142A] uppercase tracking-wider transition-colors shadow-md"
              >
                Email Hospitality Desk
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
