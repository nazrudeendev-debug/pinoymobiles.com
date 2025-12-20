import Link from "next/link";
import UAEFlag from "@/components/ui/UAEFlag";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* UAE-Modern Logo Icon (Solid Style) */}
      <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300">
        <svg
          width="28"
          height="28"
          viewBox="0 0 40 40"
          className="text-white"
          fill="currentColor"
        >
          {/* Modern Phone Icon */}
          <g opacity="0.9">
            {/* Decorative elements */}
            <circle cx="20" cy="8" r="2" />
            <circle cx="8" cy="20" r="2" />
            <circle cx="32" cy="20" r="2" />
            <circle cx="20" cy="32" r="2" />
          </g>
          {/* Central Phone Icon */}
          <rect
            x="14"
            y="12"
            width="12"
            height="18"
            rx="2"
            fill="currentColor"
          />
          <rect x="16" y="14" width="8" height="10" rx="1" className="fill-white/90" />
          <circle cx="20" cy="27" r="1.5" className="fill-white/80" />
        </svg>
      </div>

      {/* Logo Wordmark */}
      <div className="flex flex-col leading-tight -space-y-0.5">
        <div className="flex items-center">
          <span className="text-base font-bold text-foreground uppercase tracking-tight">BestMobile</span>
          <span className="text-base font-bold text-primary ml-0.5">
            UAE
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">
            Choose smart. Buy right.
          </span>
        </div>
      </div>
    </Link>
  );
}
