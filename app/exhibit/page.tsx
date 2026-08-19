import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, Download, UserCheck, BarChart3, Globe2 } from "lucide-react";

export const metadata = {
  title: "Exhibit With Us | Tobgyel Global Expos",
  description: "Register as an exhibitor at Tobgyel Global Expos in Bhutan to connect with regional partners, investors, and qualified buyers.",
};

export default function ExhibitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      
      {/* Page Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/85 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Exhibit With Us
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-medium pt-1">
            Showcase your products, services, and innovations to key government stakeholders, regional distributors, and qualified global buyers.
          </p>
        </div>
      </section>

      <main className="flex-1 py-14 sm:py-18 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Key Benefits Grid */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-[#03142A] uppercase font-sans">
                Why Exhibit At Tobgyel Global Expos?
              </h2>
              <div className="w-12 h-1 bg-[#EAA500] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: UserCheck,
                  title: "Direct B2B Access",
                  desc: "Connect directly with decision-makers, government officials, and vetted regional trade partners.",
                },
                {
                  icon: Globe2,
                  title: "Bhutan Market Expansion",
                  desc: "Establish your brand presence in Bhutan's rapidly growing trade and investment ecosystem.",
                },
                {
                  icon: BarChart3,
                  title: "Maximized ROI",
                  desc: "Benefit from targeted media coverage, curated business matching, and high-footfall expo halls.",
                },
              ].map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left hover:shadow-md transition-all">
                    <div className="p-3.5 bg-[#03142A] text-[#EAA500] rounded-lg w-fit">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#03142A]">
                      {b.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Registration Form / Callout */}
          <div className="bg-[#03142A] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                Book Your Booth Space Today
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Booths are allocated on a first-come, first-served basis. Secure prime hall locations for the BIN Trade Showcase 2027.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008E48]" />
                  <span>Customizable Shell Scheme &amp; Raw Space Options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008E48]" />
                  <span>Complimentary B2B Matchmaking Portal Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008E48]" />
                  <span>Official Exhibitor Badge &amp; Catalog Listing</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href="#exhibitor-form"
                className="w-full py-4 px-6 rounded-lg bg-[#D49900] hover:bg-[#bd8800] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest text-center shadow-lg transition-all"
              >
                Register As Exhibitor
              </a>

              <a
                href="#download-prospectus"
                className="w-full py-3.5 px-6 rounded-lg border border-slate-600 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#EAA500]" />
                <span>Download Prospectus (PDF)</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
