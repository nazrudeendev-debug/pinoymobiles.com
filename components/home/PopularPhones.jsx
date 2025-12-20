"use client";

import PhoneCarousel from "./PhoneCarousel";
import CarouselPhoneCard from "./CarouselPhoneCard";
import { phones } from "@/lib/data/phones";

export default function PopularPhones() {
  const popular = phones
    .filter((p) => ["Flagship", "Mid-Range"].includes(p.category))
    .slice(0, 6);

  return (
    <PhoneCarousel
      label="💖 UAE Favorites"
      labelIcon=""
      labelColor="text-primary"
      title="Most Loved in UAE"
      viewAllHref="/phones"
      viewAllText="View All"
      mobileViewAllText="View All Favorites"
    >
      {popular.map((phone, index) => (
        <CarouselPhoneCard
          key={phone.slug}
          phone={phone}
          index={index}
          badge="💖 Favorite"
          label="Popular Phones"
          labelColor="text-primary"
          badgeColors="bg-destructive/10 border-destructive/20 text-destructive"
          imageColors="from-secondary to-white"
          hoverColor="group-hover:border-primary/50"
          priceColor="text-success font-bold"
          subtitle="Top Choice"
          showTrustedBadge={true}
        />
      ))}
    </PhoneCarousel>
  );
}
