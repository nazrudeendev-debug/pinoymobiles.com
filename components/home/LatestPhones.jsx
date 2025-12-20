import { phones } from "@/lib/data/phones";
import PhoneCarousel from "./PhoneCarousel";
import CarouselPhoneCard from "./CarouselPhoneCard";

export default function LatestPhones() {
  const latest = phones.slice(0, 6);

  return (
    <PhoneCarousel
      label="🔥 Hot sa TikTok"
      labelIcon=""
      labelColor="text-accent"
      title="Bagong Labas na Phones"
      viewAllHref="/phones"
      mobileViewAllText="Tingnan Lahat ng Bago"
    >
      {latest.map((phone, index) => (
        <CarouselPhoneCard
          key={phone.slug}
          phone={phone}
          index={index}
          label="Latest Phones"
          labelColor="text-primary"
          badgeColors="bg-warning/10 border-warning/20 text-warning"
          imageColors="from-secondary to-white"
          hoverColor="group-hover:border-primary/50"
          priceColor="text-success font-bold"
          subtitle="Dec 2024"
        />
      ))}
    </PhoneCarousel>
  );
}
