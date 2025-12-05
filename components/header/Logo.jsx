import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center mt-1 ">
      <Image src="/logo2.png" alt="pinoymobiles logo" width={130} height={20} />
    </div>
  );
}
