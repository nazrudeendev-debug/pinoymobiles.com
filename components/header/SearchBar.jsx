import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function SearchBar({
  placeholder = "Search phones...",
  className,
  inputClassName,
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] transition-all focus-within:border-[#2563eb] focus-within:bg-[#F7F7F7] focus-within:ring-2 focus-within:ring-[#2563eb]/20",
        className
      )}
    >
      <span className="pointer-events-none flex items-center pl-3.5 text-slate-400">
        <Search className="h-4 w-4" />
      </span>
      <Input
        type="text"
        placeholder={placeholder}
        className={cn(
          "h-10 flex-1 rounded-xl border-0 bg-transparent text-sm font-medium text-[#232323] focus-visible:ring-0",
          "pl-2 pr-4 placeholder:text-slate-400",
          inputClassName
        )}
      />
    </div>
  );
}
