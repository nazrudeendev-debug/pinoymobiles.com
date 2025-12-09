"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { phones } from "@/lib/data/phones";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import CarouselPhoneCard from "./CarouselPhoneCard";

const priceRanges = [
  {
    id: "under10k",
    label: "Under ₱10K",
    min: 0,
    max: 10000,
  },
  {
    id: "10k-20k",
    label: "₱10K - ₱20K",
    min: 10000,
    max: 20000,
  },
  {
    id: "20k-30k",
    label: "₱20K - ₱30K",
    min: 20000,
    max: 30000,
  },
  {
    id: "30k-50k",
    label: "₱30K - ₱50K",
    min: 30000,
    max: 50000,
  },
  {
    id: "flagship",
    label: "₱50K+",
    min: 50000,
    max: Infinity,
  },
];

export default function BudgetPhones() {
  const [activeTab, setActiveTab] = useState("under10k");
  const scrollRef = useRef(null);

  const activeRange = priceRanges.find((r) => r.id === activeTab);
  const filteredPhones = phones
    .filter((p) => p.price >= activeRange.min && p.price < activeRange.max)
    .slice(0, 6);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const scrollAmount = containerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mx-auto mt-8 md:mt-10 w-full max-w-7xl px-4 md:px-6">
      {/* Header - Same pattern as other sections */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#4CB9A8]">
            💰 Phones by Budget
          </p>
          <h2 className="mt-1 text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Sulit Phones sa Bawat Budget
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="h-8 w-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center transition-colors sari-sari-glow"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 text-slate-600" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="h-8 w-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center transition-colors sari-sari-glow"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 text-slate-600" />
          </button>
          <Link
            href={`/phones?minPrice=${activeRange.min}&maxPrice=${activeRange.max}`}
            className="text-sm font-medium text-[#4CB9A8] hover:opacity-80 hidden md:flex items-center gap-1 ml-2"
          >
            Tingnan Lahat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Price Range Tabs - Compact pill style */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {priceRanges.map((range) => (
          <button
            key={range.id}
            onClick={() => setActiveTab(range.id)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-full border ${
              activeTab === range.id
                ? "text-white bg-[#4CB9A8] border-[#4CB9A8] shadow-sm"
                : "text-slate-600 bg-white border-slate-200 hover:border-[#4CB9A8]/50 hover:text-[#4CB9A8]"
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Phone Cards Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {filteredPhones.length > 0 ? (
            filteredPhones.map((phone, index) => (
              <CarouselPhoneCard
                key={phone.slug}
                phone={phone}
                index={index}
                badge="💰 SULIT"
                badgeColors="bg-[#4CB9A8]/10 border-[#4CB9A8]/30 text-[#4CB9A8]"
                imageColors="from-[#4CB9A8]/5 to-emerald-50"
                hoverColor="hover:border-[#4CB9A8]/40 group-hover:text-[#4CB9A8]"
                priceColor="text-[#4CB9A8]"
                subtitle="Best value"
                showSulitBadge={true}
              />
            ))
          ) : (
            <div className="w-full py-12 text-center text-slate-500">
              <p className="text-sm">Wala pang phones sa price range na ito.</p>
              <p className="text-xs mt-1">Check mo ulit mamaya!</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile View All Link */}
      <Link
        href={`/phones?minPrice=${activeRange.min}&maxPrice=${activeRange.max}`}
        className="mt-4 flex md:hidden items-center justify-center gap-1 text-sm font-medium text-[#4CB9A8] hover:opacity-80"
      >
        Tingnan Lahat ng Sulit Phones
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
