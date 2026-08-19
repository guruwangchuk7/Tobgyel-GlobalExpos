"use client";

export interface ExhibitorSubmission {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  sector: string;
  boothSize: string;
  description: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt: string;
}

export interface SponsorSubmission {
  id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  tier: "Platinum ($10,000)" | "Gold ($5,000)" | "Silver ($2,500)" | "Official Partner";
  budget: string;
  message: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt: string;
}

export interface VisitorSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  profession: string;
  purpose: string;
  daysAttending: string[];
  passCode: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt: string;
}

const STORAGE_KEYS = {
  EXHIBITORS: "tobgyel_exhibitors",
  SPONSORS: "tobgyel_sponsors",
  VISITORS: "tobgyel_visitors",
};

// Seed Data
const initialExhibitors: ExhibitorSubmission[] = [
  {
    id: "exh-101",
    companyName: "Druk Green Tech Solutions",
    contactPerson: "Sonam Dorji",
    email: "sonam@drukgreentech.bt",
    phone: "+975 17 123 456",
    sector: "Renewable Energy",
    boothSize: "Large (6m x 6m)",
    description: "Showcasing Himalayan solar and hydro micro-turbines.",
    status: "Approved",
    submittedAt: "2024-05-10 10:30 AM",
  },
  {
    id: "exh-102",
    companyName: "Himalayan Herbal Craft",
    contactPerson: "Pema Lhamo",
    email: "info@himalayanherbal.bt",
    phone: "+975 77 987 654",
    sector: "Organic & Agriculture",
    boothSize: "Standard (3m x 3m)",
    description: "Premium Cordyceps and organic Bhutanese herbal teas.",
    status: "Approved",
    submittedAt: "2024-05-12 02:15 PM",
  },
  {
    id: "exh-103",
    companyName: "Tata Motors Commercial",
    contactPerson: "Rajesh Kumar",
    email: "rajesh.k@tata.com",
    phone: "+91 98765 43210",
    sector: "Automotive & Logistics",
    boothSize: "Premium Island (10m x 10m)",
    description: "EV electric commercial trucks for hill terrain transport.",
    status: "Pending",
    submittedAt: "2024-05-15 09:45 AM",
  },
];

const initialSponsors: SponsorSubmission[] = [
  {
    id: "sp-201",
    organizationName: "Druk Holding & Investments (DHI)",
    contactPerson: "Tashi Wangchuk",
    email: "tashi.w@dhi.bt",
    phone: "+975 2 321 999",
    tier: "Platinum ($10,000)",
    budget: "$15,000",
    message: "Supporting national economic development and innovation technology.",
    status: "Approved",
    submittedAt: "2024-05-08 11:00 AM",
  },
  {
    id: "sp-202",
    organizationName: "Bank of Bhutan",
    contactPerson: "Karma Tshering",
    email: "sponsorships@bob.bt",
    phone: "+975 2 333 111",
    tier: "Gold ($5,000)",
    budget: "$8,000",
    message: "Exclusive banking and fintech partner for international expos.",
    status: "Approved",
    submittedAt: "2024-05-11 04:20 PM",
  },
];

const initialVisitors: VisitorSubmission[] = [
  {
    id: "vis-301",
    fullName: "Choki Gyeltshen",
    email: "choki.g@gmail.com",
    phone: "+975 17 654 321",
    country: "Bhutan",
    profession: "Business Owner",
    purpose: "B2B Trade & Networking",
    daysAttending: ["Day 1 - Opening Ceremony", "Day 2 - B2B Summit"],
    passCode: "TGE-VIP-8821",
    status: "Approved",
    submittedAt: "2024-05-14 01:10 PM",
  },
  {
    id: "vis-302",
    fullName: "Elena Rostova",
    email: "elena.r@investglob.com",
    phone: "+44 20 7946 0912",
    country: "United Kingdom",
    profession: "Venture Capitalist",
    purpose: "Investment Opportunities",
    daysAttending: ["Day 1 - Opening Ceremony", "Day 3 - Innovation Showcase"],
    passCode: "TGE-INT-9943",
    status: "Approved",
    submittedAt: "2024-05-16 05:50 PM",
  },
];

// Helper Functions
export const getExhibitors = (): ExhibitorSubmission[] => {
  if (typeof window === "undefined") return initialExhibitors;
  const stored = localStorage.getItem(STORAGE_KEYS.EXHIBITORS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(initialExhibitors));
    return initialExhibitors;
  }
  return JSON.parse(stored);
};

export const addExhibitor = (data: Omit<ExhibitorSubmission, "id" | "status" | "submittedAt">): ExhibitorSubmission => {
  const list = getExhibitors();
  const newEntry: ExhibitorSubmission = {
    ...data,
    id: `exh-${Date.now()}`,
    status: "Pending",
    submittedAt: new Date().toLocaleString(),
  };
  const updated = [newEntry, ...list];
  localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(updated));
  return newEntry;
};

export const updateExhibitorStatus = (id: string, status: "Pending" | "Approved" | "Rejected") => {
  const list = getExhibitors();
  const updated = list.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(updated));
};

export const deleteExhibitor = (id: string) => {
  const list = getExhibitors();
  const updated = list.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEYS.EXHIBITORS, JSON.stringify(updated));
};

export const getSponsors = (): SponsorSubmission[] => {
  if (typeof window === "undefined") return initialSponsors;
  const stored = localStorage.getItem(STORAGE_KEYS.SPONSORS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(initialSponsors));
    return initialSponsors;
  }
  return JSON.parse(stored);
};

export const addSponsor = (data: Omit<SponsorSubmission, "id" | "status" | "submittedAt">): SponsorSubmission => {
  const list = getSponsors();
  const newEntry: SponsorSubmission = {
    ...data,
    id: `sp-${Date.now()}`,
    status: "Pending",
    submittedAt: new Date().toLocaleString(),
  };
  const updated = [newEntry, ...list];
  localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
  return newEntry;
};

export const updateSponsorStatus = (id: string, status: "Pending" | "Approved" | "Rejected") => {
  const list = getSponsors();
  const updated = list.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
};

export const deleteSponsor = (id: string) => {
  const list = getSponsors();
  const updated = list.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
};

export const getVisitors = (): VisitorSubmission[] => {
  if (typeof window === "undefined") return initialVisitors;
  const stored = localStorage.getItem(STORAGE_KEYS.VISITORS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(initialVisitors));
    return initialVisitors;
  }
  return JSON.parse(stored);
};

export const addVisitor = (data: Omit<VisitorSubmission, "id" | "passCode" | "status" | "submittedAt">): VisitorSubmission => {
  const list = getVisitors();
  const newEntry: VisitorSubmission = {
    ...data,
    id: `vis-${Date.now()}`,
    passCode: `TGE-PASS-${Math.floor(1000 + Math.random() * 9000)}`,
    status: "Approved",
    submittedAt: new Date().toLocaleString(),
  };
  const updated = [newEntry, ...list];
  localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(updated));
  return newEntry;
};

export const updateVisitorStatus = (id: string, status: "Pending" | "Approved" | "Rejected") => {
  const list = getVisitors();
  const updated = list.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(updated));
};

export const deleteVisitor = (id: string) => {
  const list = getVisitors();
  const updated = list.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(updated));
};
