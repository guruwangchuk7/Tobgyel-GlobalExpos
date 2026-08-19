import Header from "../components/Header";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/UpcomingEvents";

export const metadata = {
  title: "Events & Exhibitions | Tobgyel Global Expos",
  description: "Explore upcoming international trade showcases, cultural festivals, and business forums organized by Tobgyel Global Expos in Bhutan.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      
      {/* Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-10 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-2.5 sm:space-y-3 z-10">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Events &amp; Exhibitions
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl font-medium pt-1">
            Discover world-class exhibitions, trade showcases, and cultural festivals hosted in Phuentsholing &amp; Thimphu, Bhutan.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <UpcomingEvents />
      </main>

      <Footer />
    </div>
  );
}
