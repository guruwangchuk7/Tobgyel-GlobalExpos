import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Link from "next/link";
import { Handshake } from "lucide-react";

export const metadata = {
  title: "Partners & Sponsors | Tobgyel Global Expos",
  description: "Government and corporate partners of Tobgyel Global Expos in Bhutan.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      
      {/* Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-10 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-2.5 sm:space-y-3 z-10">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Our Partners &amp; Sponsors
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl font-medium pt-1">
            Collaborating with key ministries, municipal authorities, and premier corporate leaders to deliver world-class international exhibitions.
          </p>

          <div className="pt-2">
            <Link
              href="/register/sponsor"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#D49900] hover:bg-[#bd8800] active:bg-[#a37500] text-white font-extrabold text-xs uppercase tracking-widest transition-colors shadow-md min-h-[44px]"
            >
              <Handshake className="w-4 h-4" />
              <span>Become a Sponsor</span>
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
