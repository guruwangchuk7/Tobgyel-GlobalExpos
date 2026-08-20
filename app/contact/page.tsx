import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Tobgyel Global Expos",
  description: "Get in touch with Tobgyel Global Expos team in Phuentsholing, Bhutan for exhibition registration, sponsorship inquiries, and visitor info.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#03142A] text-white selection:bg-[#EAA500] selection:text-slate-950">
      <Header />

      <main className="flex-1 bg-[#03142A] flex flex-col justify-between">
        <Footer />
      </main>
    </div>
  );
}
