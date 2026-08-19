"use client";

import { Calendar, MapPin } from "lucide-react";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "BIN TRADE SHOWCASE 2027",
      category: "Construction | Food | Tourism | Technology",
      date: "May 20 – 23, 2027",
      location: "Phuentsholing, Bhutan",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "HIMALAYAN FOOD & CULTURE FESTIVAL",
      category: "Celebrating Heritage, Food, Arts & Traditions",
      date: "Oct 10 – 14, 2027",
      location: "Thimphu, Bhutan",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="events" className="py-14 sm:py-18 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-xl sm:text-2xl font-black tracking-widest text-[#03142A] uppercase font-sans">
            Upcoming Events
          </h2>
          <div className="w-12 h-1 bg-[#EAA500] mx-auto rounded-full" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="group relative rounded-xl overflow-hidden shadow-md border border-slate-200/80 bg-[#03142A] min-h-[280px] sm:min-h-[320px] flex flex-col justify-end transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Image with Dark Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${evt.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-[#03142A]/85 to-transparent" />

              {/* Event Info Content */}
              <div className="relative p-6 sm:p-7 space-y-2.5 z-10 text-left">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase leading-tight">
                  {evt.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-200 font-medium tracking-wide">
                  {evt.category}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center pb-8">
          <a
            href="#all-events"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md"
          >
            View All Events
          </a>
        </div>

      </div>

      {/* Subtle Horizontal Divider with Yellow Accent Line */}
      <div className="relative w-full border-t border-slate-200 flex justify-center">
        <div className="w-8 h-1.5 bg-[#EAA500] -mt-0.5 rounded-full" />
      </div>
    </section>
  );
}

