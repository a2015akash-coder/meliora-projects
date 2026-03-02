"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-meliora-black border-b border-white/10">

      <div className="px-6 lg:px-12 h-[76px] flex items-center justify-between">


        {/* Logo */}
        <Image
          src="/images/navbar.webp"
          alt="Meliora Projects"
          width={180}
          height={40}
          priority
          className="h-10 w-auto"
        />


        {/* CTA */}
        <a
          href="#contact"
          className="
          px-5 py-2.5
          text-sm font-semibold
          text-white
          bg-meliora-beige
          rounded-md
          hover:bg-[#b3a07c]
          transition-colors
        "
        >
          Request Consultation
        </a>


      </div>

    </header>
  );
}