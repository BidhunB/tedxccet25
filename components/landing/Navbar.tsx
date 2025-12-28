import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/logo1.svg"
            alt="TEDxCCET Logo"
            width={150}
            height={40}
            className="h-4 w-auto "
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
        <Link href="#" className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <Link href="#" className="hover:text-red-600 transition-colors">
          About
        </Link>
        <Link href="#" className="hover:text-red-600 transition-colors">
          Theme
        </Link>
        <Link href="#" className="hover:text-red-600 transition-colors">
          Speakers
        </Link>
        <Link href="#" className="hover:text-red-600 transition-colors">
          Sponsors
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="px-6 py-2 text-sm font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          Get Tickets
        </Link>
      </div>
    </nav>
  );
}
