"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="space-y-3" role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const headingId = `faq-heading-${i}`;

        return (
          <div
            key={i}
            role="listitem"
            className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
              isOpen ? "border-[#003366]/25 bg-[#003366]/[0.02]" : "border-neutral-200 bg-white"
            }`}
          >
            {/* Bouton accordéon */}
            <button
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366]/30 focus-visible:ring-inset"
            >
              <span
                className={`text-[0.9375rem] font-semibold leading-snug transition-colors ${
                  isOpen ? "text-[#003366]" : "text-neutral-800"
                }`}
              >
                {item.question}
              </span>

              <div
                className={`flex size-7 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                  isOpen ? "bg-[#003366] text-white" : "bg-neutral-100 text-neutral-500"
                }`}
                aria-hidden
              >
                {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
              </div>
            </button>

            {/* Panneau de réponse — animation height */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" as const }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-[#003366]/8 mb-4" aria-hidden />
                    <p className="text-[0.9rem] leading-[1.75] text-neutral-600">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
