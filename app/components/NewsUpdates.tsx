"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsUpdates() {
  const newsItems = [
    {
      id: 1,
      title: "BIN Trade Showcase 2027 Registration Now Open",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "New International Partnerships Announced",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Bhutan: The Next Hub for Business & Investment",
      date: "May 5, 2024",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="news" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#03142A] uppercase font-sans">
            Latest News &amp; Updates
          </h2>
          <div className="w-16 h-1 bg-[#EAA500] mx-auto rounded-full" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${news.image}')` }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#03142A] group-hover:text-[#0A4D8C] transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    {news.date}
                  </p>
                </div>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A4D8C] hover:text-[#EAA500] transition-colors underline underline-offset-4"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#03142A] hover:bg-[#072448] text-white font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md border border-slate-700"
          >
            View All News
          </Link>
        </div>

      </div>
    </section>
  );
}

