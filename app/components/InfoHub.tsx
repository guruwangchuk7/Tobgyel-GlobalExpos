"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Handshake,
  Globe,
  Landmark,
  Plane,
  FileText,
  Building,
  Truck,
  Shield,
  Receipt,
  Compass,
  Car,
  Sun,
  Contact,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function InfoHub() {
  const [participantsOpen, setParticipantsOpen] = useState(false);
  const [regulationsOpen, setRegulationsOpen] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);

  return (
    <section className="py-10 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MOBILE VIEW (< 768px): Progressive Disclosure Accordions & Compact Summaries */}
        <div className="md:hidden space-y-4 text-left">

          {/* Mobile Card 1: WHY EXHIBIT? Compact Summary */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-[#03142A] stroke-[1.5] shrink-0" />
              <div>
                <h3 className="text-sm font-black tracking-wider text-[#03142A] uppercase font-sans">
                  WHY EXHIBIT?
                </h3>
                <div className="w-8 h-0.5 bg-[#EAA500] mt-1" />
              </div>
            </div>

            <ul className="space-y-2 pt-1 text-xs text-slate-800 font-semibold">
              {[
                "Meet qualified international buyers",
                "Expand market footprint into Bhutan",
                "Connect with regional government partners",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008E48] stroke-[2.5] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/exhibit"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Mobile Accordion 2: INTERNATIONAL PARTICIPANTS */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
            <button
              onClick={() => setParticipantsOpen(!participantsOpen)}
              className="w-full p-4 flex items-center justify-between min-h-[48px] text-left focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-xs font-black tracking-wider text-[#03142A] uppercase font-sans">
                    INTERNATIONAL PARTICIPANTS
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">Visa, Hotels, Customs & Logistics</span>
                </div>
              </div>
              {participantsOpen ? (
                <ChevronUp className="w-5 h-5 text-[#EAA500] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
              )}
            </button>

            {participantsOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-slate-200/80 space-y-3 animate-fade-in">
                <ul className="space-y-2.5 text-xs font-semibold text-slate-800">
                  {[
                    { icon: FileText, text: "Visa & Entry Formalities" },
                    { icon: Building, text: "Official Hotel Accommodations" },
                    { icon: Truck, text: "Freight & Shipping Logistics" },
                    { icon: Shield, text: "Customs Clearance & Tax Exemption" },
                    { icon: Receipt, text: "Tax & Financial Information" },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href="/participants"
                          className="flex items-center gap-2.5 py-1 text-slate-800 hover:text-[#0A4D8C] transition-colors"
                        >
                          <ItemIcon className="w-4 h-4 text-slate-500 shrink-0 stroke-[1.8]" />
                          <span>{item.text}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-2">
                  <Link
                    href="/participants"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                  >
                    Participant Guide
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Accordion 3: GOVERNMENT REGULATIONS */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
            <button
              onClick={() => setRegulationsOpen(!regulationsOpen)}
              className="w-full p-4 flex items-center justify-between min-h-[48px] text-left focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <Landmark className="w-6 h-6 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-xs font-black tracking-wider text-[#03142A] uppercase font-sans">
                    GOVERNMENT REGULATIONS
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">Immigration, Import & Compliance</span>
                </div>
              </div>
              {regulationsOpen ? (
                <ChevronUp className="w-5 h-5 text-[#EAA500] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
              )}
            </button>

            {regulationsOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-slate-200/80 space-y-3 animate-fade-in">
                <ul className="space-y-2.5 text-xs font-semibold text-slate-800">
                  {[
                    { icon: FileText, text: "Immigration Rules & Directives" },
                    { icon: FileText, text: "Import & Export Regulations" },
                    { icon: FileText, text: "Tax & Duty Structure" },
                    { icon: FileText, text: "Business Licensing Compliance" },
                    { icon: FileText, text: "Event Participation Policies" },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href="/regulations"
                          className="flex items-center gap-2.5 py-1 text-slate-800 hover:text-[#0A4D8C] transition-colors"
                        >
                          <ItemIcon className="w-4 h-4 text-slate-500 shrink-0 stroke-[1.8]" />
                          <span>{item.text}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-2">
                  <Link
                    href="/regulations"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                  >
                    Read Regulations
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Accordion 4: PLAN YOUR VISIT */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
            <button
              onClick={() => setVisitOpen(!visitOpen)}
              className="w-full p-4 flex items-center justify-between min-h-[48px] text-left focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-xs font-black tracking-wider text-[#03142A] uppercase font-sans">
                    PLAN YOUR VISIT
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">Travel, Flights & Weather</span>
                </div>
              </div>
              {visitOpen ? (
                <ChevronUp className="w-5 h-5 text-[#EAA500] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
              )}
            </button>

            {visitOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-slate-200/80 space-y-3 animate-fade-in">
                <ul className="space-y-2.5 text-xs font-semibold text-slate-800">
                  {[
                    { icon: Compass, text: "Travel Routes to Phuentsholing" },
                    { icon: Building, text: "Hotel Accommodations" },
                    { icon: Car, text: "Local Taxi & Transport" },
                    { icon: Sun, text: "Bhutan Climate & Weather" },
                    { icon: Contact, text: "Useful Helpdesk Contacts" },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={idx}>
                        <Link
                          href="/visit"
                          className="flex items-center gap-2.5 py-1 text-slate-800 hover:text-[#0A4D8C] transition-colors"
                        >
                          <ItemIcon className="w-4 h-4 text-slate-500 shrink-0 stroke-[1.8]" />
                          <span>{item.text}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-2">
                  <Link
                    href="/visit"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                  >
                    Visitor Guide
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* DESKTOP VIEW (>= 768px): Original 4-Column Layout (100% UNCHANGED) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">

          {/* Column 1: WHY EXHIBIT? */}
          <div className="flex flex-col justify-between space-y-6 lg:px-6 pb-6 lg:pb-0 border-b sm:border-b-0 border-slate-200 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Handshake className="w-8 h-8 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-sm font-black tracking-wider text-[#03142A] uppercase font-sans">
                    WHY EXHIBIT?
                  </h3>
                  <div className="w-8 h-0.5 bg-[#EAA500] mt-1" />
                </div>
              </div>

              <ul className="space-y-3 pt-3">
                {[
                  "Meet qualified buyers",
                  "Expand into Bhutan",
                  "Connect with regional partners",
                  "Increase brand visibility",
                  "Launch products & services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                    <Check className="w-4 h-4 text-[#008E48] stroke-[2.5] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/exhibit"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Column 2: INTERNATIONAL PARTICIPANTS */}
          <div className="flex flex-col justify-between space-y-6 lg:px-6 pb-6 lg:pb-0 border-b sm:border-b-0 border-slate-200 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-sm font-black tracking-wider text-[#03142A] uppercase font-sans leading-tight">
                    INTERNATIONAL<br />PARTICIPANTS
                  </h3>
                  <div className="w-8 h-0.5 bg-[#EAA500] mt-1" />
                </div>
              </div>

              <ul className="space-y-3 pt-3">
                {[
                  { icon: FileText, text: "Visa & Entry" },
                  { icon: Building, text: "Hotels" },
                  { icon: Truck, text: "Logistics" },
                  { icon: Shield, text: "Customs" },
                  { icon: Receipt, text: "Tax Information" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <li key={idx}>
                      <Link
                        href="/participants"
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold hover:text-[#0A4D8C] transition-colors"
                      >
                        <ItemIcon className="w-4 h-4 text-slate-600 shrink-0 stroke-[1.8]" />
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/participants"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Participant Guide
              </Link>
            </div>
          </div>

          {/* Column 3: GOVERNMENT REGULATIONS */}
          <div className="flex flex-col justify-between space-y-6 lg:px-6 pb-6 lg:pb-0 border-b sm:border-b-0 border-slate-200 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Landmark className="w-8 h-8 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-sm font-black tracking-wider text-[#03142A] uppercase font-sans leading-tight">
                    GOVERNMENT<br />REGULATIONS
                  </h3>
                  <div className="w-8 h-0.5 bg-[#EAA500] mt-1" />
                </div>
              </div>

              <ul className="space-y-3 pt-3">
                {[
                  { icon: FileText, text: "Immigration Rules" },
                  { icon: FileText, text: "Import Procedures" },
                  { icon: FileText, text: "Tax & Duty Regulations" },
                  { icon: FileText, text: "Business Compliance" },
                  { icon: FileText, text: "Event Participation" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <li key={idx}>
                      <Link
                        href="/regulations"
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold hover:text-[#0A4D8C] transition-colors"
                      >
                        <ItemIcon className="w-4 h-4 text-slate-600 shrink-0 stroke-[1.8]" />
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/regulations"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Read Regulations
              </Link>
            </div>
          </div>

          {/* Column 4: PLAN YOUR VISIT */}
          <div className="flex flex-col justify-between space-y-6 lg:px-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Plane className="w-8 h-8 text-[#03142A] stroke-[1.5] shrink-0" />
                <div>
                  <h3 className="text-sm font-black tracking-wider text-[#03142A] uppercase font-sans">
                    PLAN YOUR VISIT
                  </h3>
                  <div className="w-8 h-0.5 bg-[#EAA500] mt-1" />
                </div>
              </div>

              <ul className="space-y-3 pt-3">
                {[
                  { icon: Compass, text: "Travel Information" },
                  { icon: Building, text: "Accommodation" },
                  { icon: Car, text: "Transportation" },
                  { icon: Sun, text: "Weather" },
                  { icon: Contact, text: "Useful Contacts" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <li key={idx}>
                      <Link
                        href="/visit"
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold hover:text-[#0A4D8C] transition-colors"
                      >
                        <ItemIcon className="w-4 h-4 text-slate-600 shrink-0 stroke-[1.8]" />
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/visit"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Visitor Guide
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
