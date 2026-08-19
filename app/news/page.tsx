import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsUpdates from "../components/NewsUpdates";

export const metadata = {
  title: "Latest News & Updates | Tobgyel Global Expos",
  description: "Stay informed with press releases, partnership announcements, and exhibition updates from Tobgyel Global Expos.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      
      {/* Sub-hero Banner */}
      <section className="bg-[#03142A] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Latest News &amp; Updates
          </h1>
          <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-medium pt-1">
            Read official announcements, event schedules, and economic partnership developments.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <NewsUpdates />
      </main>

      <Footer />
    </div>
  );
}
