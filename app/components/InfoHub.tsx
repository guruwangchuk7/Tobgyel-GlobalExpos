"use client";

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
  Contact 
} from "lucide-react";

export default function InfoHub() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
          
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
              <a
                href="#learn-more"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Learn More
              </a>
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
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold hover:text-[#03142A] cursor-pointer">
                      <ItemIcon className="w-4 h-4 text-slate-600 shrink-0 stroke-[1.8]" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#participant-guide"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Participant Guide
              </a>
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
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold hover:text-[#03142A] cursor-pointer">
                      <ItemIcon className="w-4 h-4 text-slate-600 shrink-0 stroke-[1.8]" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#read-regulations"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Read Regulations
              </a>
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
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold hover:text-[#03142A] cursor-pointer">
                      <ItemIcon className="w-4 h-4 text-slate-600 shrink-0 stroke-[1.8]" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#visitor-guide"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#03142A] hover:bg-[#072448] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Visitor Guide
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

