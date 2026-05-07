"use client";

import dynamic from "next/dynamic";

// Framer Motion est importé uniquement par ces 3 sections.
// En les lazy-loadant depuis un client wrapper, le bundle initial n'inclut
// pas Framer Motion → hydratation plus rapide, TBT et TTI réduits.
const ProcessTimeline = dynamic(
  () => import("@/components/sections/ProcessTimeline"),
  { loading: () => <div className="min-h-[600px] bg-white" aria-hidden /> }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => <div className="min-h-[440px] bg-[#F8F9FA]" aria-hidden /> }
);
export default function BelowFoldSections() {
  return (
    <>
      <ProcessTimeline />
      <Testimonials />
    </>
  );
}
