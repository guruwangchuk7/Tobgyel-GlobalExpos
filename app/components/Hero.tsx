"use client";

import { User, Handshake, Users, Globe, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: Globe,
      title: "GLOBAL NETWORK",
      subtitle: "Connecting Markets",
    },
    {
      icon: Users,
      title: "1000+ BUSINESSES",
      subtitle: "Participating",
    },
    {
      icon: Calendar,
      title: "WORLD CLASS EVENTS",
      subtitle: "Exhibitions & Forums",
    },
    {
      icon: MapPin,
      title: "BHUTAN PHUENTSHOLING",
      subtitle: "Strategic Location",
    },
    {
      icon: TrendingUp,
      title: "GROW TOGETHER",
      subtitle: "Collaborate • Expand • Succeed",
    },
  ];

  return (
    <section className="relative bg-[#03142A] text-white overflow-hidden">
      {/* Background Image Overlay featuring high-res Bhutan Trade Pavilion & Delegates */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center"
        style={{
          backgroundImage: `url('/hero-bhutan-expo.jpg')`,
        }}
      />
      
      {/* Gradient Overlay for high text contrast while revealing the Bhutan trade pavilion on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/85 lg:via-[#03142A]/70 to-[#03142A]/30" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28 z-10">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Main Heading matching landing page.jpeg */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.15] text-white font-sans">
              Bhutan&apos;s Gateway to{" "}
              <span className="block text-[#EAA500]">
                International Trade,
              </span>
              <span className="block text-[#EAA500]">
                Culture &amp; Business Events
              </span>
            </h1>
            {/* Small Yellow Accent Line under Heading */}
            <div className="w-12 h-1 bg-[#EAA500] rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-xl">
            Connecting global businesses, investors, innovators, and communities through world-class exhibitions and events.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
            {/* Button 1: Exhibitor */}
            <a
              href="#exhibit"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-[#0A4D8C] hover:bg-[#083e73] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <User className="w-5 h-5 text-white" />
              <span>Register as Exhibitor</span>
            </a>

            {/* Button 2: Sponsor */}
            <a
              href="#sponsor"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-[#D49900] hover:bg-[#bd8800] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <Handshake className="w-5 h-5 text-white" />
              <span>Become a Sponsor</span>
            </a>

            {/* Button 3: Visitor */}
            <a
              href="#visit"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-[#008E48] hover:bg-[#00773d] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <Users className="w-5 h-5 text-white" />
              <span>Visitor Registration</span>
            </a>
          </div>

        </div>
      </div>

      {/* Highlights / Stats Bar matching landing page.jpeg */}
      <div className="relative bg-[#020b18] border-t border-slate-800/80 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-700/60">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 px-2 lg:px-6 py-2 lg:py-0 text-left"
                >
                  <Icon className="w-7 h-7 text-[#EAA500] shrink-0 stroke-[1.8]" />
                  <div>
                    <h3 className="text-xs xl:text-sm font-black tracking-wider text-white uppercase leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

