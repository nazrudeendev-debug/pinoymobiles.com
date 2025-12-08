import { CheckCircle2, TrendingUp, Tag } from "lucide-react";
import HeroSearch from "./HeroSearch";
import QuickCategories from "./QuickCategories";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-5 md:py-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Hero Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-4 md:p-6">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-5 lg:gap-8">
            {/* Left: Title, Search, Filters */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <div className="mb-4">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  Find Best Phone Deals
                </h1>
                <p className="text-sm text-slate-500">
                  Compare prices from 6,300+ trusted Philippine sellers
                </p>
              </div>

              {/* Search Bar - Full width */}
              <div className="w-full mb-4">
                <HeroSearch />
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <QuickCategories />
              </div>
            </div>

            {/* Right: Feature highlights */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-6">
              <div className="flex flex-row lg:flex-col gap-3">
                {/* Feature 1 */}
                <div className="flex-1 lg:flex-none flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                    <Tag className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Best Prices
                    </p>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      Compare across stores
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex-1 lg:flex-none flex items-center gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
                  <div className="w-9 h-9 rounded-lg bg-violet-500 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Live Updates
                    </p>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      Real-time tracking
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex-1 lg:flex-none flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Trusted
                    </p>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      5,000+ verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
