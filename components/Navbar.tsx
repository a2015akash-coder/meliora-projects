"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-6 z-50 flex justify-center px-4">
      
      <header
        className="
        w-full max-w-5xl
        bg-meliora-white/80
        backdrop-blur-md
        border border-meliora-border
        rounded-full
        shadow-sm
      "
      >
        
        <div className="flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold text-meliora-black"
          >
            Meliora Projects
          </Link>

          {/* CTA */}
          <a
            href="#consultation"
            className="
            px-6 py-2.5
            text-sm font-semibold
            text-meliora-white
            bg-meliora-beige
            rounded-full
            hover:opacity-90
            transition
          "
          >
            Request Consultation
          </a>

        </div>

      </header>

    </div>
  );
}