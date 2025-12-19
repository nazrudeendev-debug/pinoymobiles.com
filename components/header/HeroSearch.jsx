import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function HeroSearch() {
  return (
    <div className="w-full ">
      <div className="relative">
        {/* Search container */}
        <div className="relative flex items-center bg-[#FFFFFF] rounded-xl border-2 border-[#E5E5E5] shadow-lg shadow-[#2563eb]/10 hover:border-[#2563eb]/30 focus-within:border-[#2563eb]/50 focus-within:shadow-[#2563eb]/20 transition-all duration-300">
          <Search className="absolute left-4 h-4 w-4 text-slate-400 pointer-events-none" />
          <Input
            type="text"
            placeholder="Hanapin: iPhone 16, Samsung Galaxy S24..."
            className="flex-1 h-11 w-full pl-11 pr-4 rounded-xl border-0 bg-transparent text-sm text-[#232323] placeholder-[#B0B0B0] focus:outline-none focus:ring-0"
          />
          <Button className="absolute right-1 h-9 px-4 rounded-lg bg-linear-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white text-sm font-medium shadow-lg shadow-[#2563eb]/30 transition-all active:scale-95 uae-shine">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
