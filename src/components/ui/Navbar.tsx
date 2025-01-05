"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="grid col-auto gap-2 pt-10 w-1 font-light">
      <Link
        href="/"
        className={
          currentPath === "/"
            ? "underline hover:text-gray-300 bg-[#0a0a0a]/85"
            : "hover:text-gray-300 bg-[#0a0a0a]/85"
        }
      >
        Home
      </Link>
      <Link
        href="/skills"
        className={
          currentPath === "/skills"
            ? "underline hover:text-gray-300 bg-[#0a0a0a]/85"
            : "hover:text-gray-300 bg-[#0a0a0a]/85"
        }
      >
        Skills
      </Link>
      <Link
        href="/projects"
        className={
          currentPath === "/projects"
            ? "underline hover:text-gray-300 bg-[#0a0a0a]/85"
            : "hover:text-gray-300 bg-[#0a0a0a]/85"
        }
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className={
          currentPath === "/contact"
            ? "underline hover:text-gray-300 bg-[#0a0a0a]/85"
            : "hover:text-gray-300 bg-[#0a0a0a]/85"
        }
      >
        Contact
      </Link>
    </nav>
  );
}
