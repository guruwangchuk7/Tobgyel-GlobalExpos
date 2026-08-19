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

// Helper Functions
export const getExhibitors = (): ExhibitorSubmission[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEYS.EXHIBITORS);
  if (!stored) return [];
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
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEYS.SPONSORS);
  if (!stored) return [];
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
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEYS.VISITORS);
  if (!stored) return [];
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
