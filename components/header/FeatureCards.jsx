import { TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Prices",
    description: "Updated hourly from verified sellers across the UAE",
    bgColor: "bg-[#F7F7F7]",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Price Tracking",
    description: "Get instant alerts when prices drop on your wishlist",
    bgColor: "bg-[#F7F7F7]",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Trusted Sellers",
    description: "All sellers verified, rated, and backed by buyer protection",
    bgColor: "bg-[#F7F7F7]",
    iconColor: "text-primary",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-7">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, bgColor, iconColor }) {
  return (
    <div className="rounded-xl bg-card border border-border shadow-sm hover:shadow-md p-5 transition-all duration-300 group hover:border-muted-foreground">
      <div className="flex items-start gap-4 mb-3">
        <div
          className={`h-12 w-12 rounded-xl ${bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="font-semibold text-foreground text-sm leading-snug mt-0.5">
          {title}
        </h3>
      </div>
      <p className="text-sm text-foreground leading-relaxed pl-16 -mt-6">
        {description}
      </p>
    </div>
  );
}
