import {
  Star,
  ArrowRight,
  Smartphone,
  Wallet,
  Target,
  GitCompare,
  Camera,
  Battery,
  Gamepad2,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import HeroSearch from "./HeroSearch";
import PhFlag from "@/components/ui/PhFlag";

const actionCards = [
  {
    id: "all-phones",
    icon: Smartphone,
    title: "All Phones",
    description: "Browse with reviews & prices",
    href: "/phones",
    color: "from-[#6C2BD9] to-[#5521B0]",
  },
  {
    id: "by-budget",
    icon: Wallet,
    title: "By Budget",
    description: "Under ₱10k, ₱15k, ₱20k",
    href: "/phones?sort=budget",
    color: "from-[#4CB9A8] to-[#3B9C8D]",
    badge: "🔥",
  },
  {
    id: "best-for-you",
    icon: Target,
    title: "Best for You",
    description: "Camera • Gaming • Work",
    href: "/phones?filter=purpose",
    color: "from-[#F9B434] to-[#E5A020]",
  },
  {
    id: "compare",
    icon: GitCompare,
    title: "Compare",
    description: "Side-by-side comparison",
    href: "/compare",
    color: "from-[#DC2626] to-[#B91C1C]",
  },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#FAF6ED] to-white py-6 md:py-8 banig-pattern">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Main Hero Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 md:p-8 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 sunrays-pattern opacity-30 pointer-events-none" />

          <div className="relative">
            {/* Top: Title + Search */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C2BD9]/10 text-[#6C2BD9] text-xs font-bold mb-3">
                <Star className="w-3.5 h-3.5 fill-current" />
                #1 Phone Guide sa Pilipinas
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-2 flex items-center justify-center gap-2">
                Find the Right Phone for You
                <PhFlag className="w-7 h-5" />
              </h1>
              <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto">
                Honest reviews, Pinoy Scores & best prices from{" "}
                <span className="text-[#4CB9A8] font-semibold">
                  trusted PH stores
                </span>
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <HeroSearch />
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {actionCards.map((card) => (
                <Link
                  key={card.id}
                  href={card.href}
                  className="group relative flex items-center gap-3 p-3 md:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  {/* Badge */}
                  {card.badge && (
                    <span className="absolute -top-1.5 -right-1.5 text-sm">
                      {card.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <card.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#1F2A44] group-hover:text-[#6C2BD9] transition-colors truncate">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow on hover */}
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#6C2BD9] opacity-0 group-hover:opacity-100 transition-all shrink-0 hidden md:block" />
                </Link>
              ))}
            </div>

            {/* Bottom stats line */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 md:gap-8 text-xs text-slate-400">
              <span>
                <strong className="text-[#6C2BD9]">6,300+</strong> phones
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                <strong className="text-[#4CB9A8]">50+</strong> brands
              </span>
              <span>•</span>
              <span>
                <strong className="text-[#F9B434]">5+</strong> trusted stores
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
