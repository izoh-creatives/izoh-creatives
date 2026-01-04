"use client";
import Link from "next/link";
import { CornerRightUp } from "lucide-react";

const Footer = () => {
  // Scroll to top
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen flex justify-between items-center space-x-2 text-[11px] lg:text-xs text-white/70 pl-2 sm:pl-4 pr-6 py-2.5">
      {/* Copyright */}
      <p>
        Copyrights &copy;
        <span className="red-text ml-1">
          <Link href="/">Izoh Creatives</Link>
        </span>
        .All rights reserved
      </p>
      {/* Back to top */}
      <div
        onClick={backToTop}
        className="w-8 h-8 flex justify-center items-center rounded-xl red-bg text-white p-1.5 link group hover:bg-red-800 hover:scale-95 smooth-animation"
      >
        <CornerRightUp className="text-xs p-0.5 group-hover:scale-95 smooth-animation" />
      </div>
    </div>
  );
};

export default Footer;
