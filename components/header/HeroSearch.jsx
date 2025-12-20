import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function HeroSearch() {
  return (
    <div className="w-full ">
      <div className="relative">
        {/* Search container */}
        <div className="relative flex items-center bg-card rounded-xl border-2 border-border shadow-lg shadow-primary/10 hover:border-primary/30 focus-within:border-primary/50 focus-within:shadow-primary/20 transition-all duration-300">
          <Search className="absolute left-4 h-4 w-4 text-slate-400 pointer-events-none" />
          <Input
            type="text"
            placeholder="Hanapin: iPhone 16, Samsung Galaxy S24..."
            className="flex-1 h-11 w-full pl-11 pr-4 rounded-xl border-0 bg-transparent text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0"
          />
          <Button className="absolute right-1 h-9 px-4 rounded-lg bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 text-white text-sm font-medium shadow-lg shadow-primary/30 transition-all active:scale-95 uae-shine">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
