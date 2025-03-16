"use client";

import Link from "next/link";
import { XLogo } from "@phosphor-icons/react";

export const WaitlistFooter = () => {
  return (
    <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-neutral-400 sm:px-2 md:px-12 md:py-12">
      <Link href="https://x.com/plobboo" target="_blank" rel="noreffer">
        <XLogo size={32} />
      </Link>
      <span>Plobbo inc. © 2025</span>
    </footer>
  );
};
