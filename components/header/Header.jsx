import Logo from "@/components/header/Logo";
import NavMenu from "@/components/header/Nav-Menu";
import SearchBar from "@/components/header/SearchBar";

export default function Header() {
  return (
    <header className="w-full h-16 px-4 md:px-32 bg-background flex items-center gap-4 font-mona ">
      <Logo />
      <NavMenu />
      <SearchBar />
    </header>
  );
}
