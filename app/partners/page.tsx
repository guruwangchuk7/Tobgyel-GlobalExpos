import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

export const metadata = {
  title: "Partners & Sponsors | Tobgyel Global Expos",
  description: "Government and corporate partners of Tobgyel Global Expos in Bhutan.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      
      {/* Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Our Partners &amp; Sponsors
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-medium pt-1">
            Collaborating with key ministries, municipal authorities, and premier corporate leaders to deliver world-class international exhibitions.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
