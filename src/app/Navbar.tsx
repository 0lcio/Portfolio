"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="grid col-auto gap-2 pt-10 w-56 font-light">
      <Link
        href="/"
        className={
          currentPath === "/"
            ? "underline hover:text-gray-300"
            : "hover:text-gray-300"
        }
      >
        Home
      </Link>
      <Link
        href="/skills"
        className={
          currentPath === "/skills"
            ? "underline hover:text-gray-300"
            : "hover:text-gray-300"
        }
      >
        Skills
      </Link>
      <Link
        href="/projects"
        className={
          currentPath === "/projects"
            ? "underline hover:text-gray-300"
            : "hover:text-gray-300"
        }
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className={
          currentPath === "/contact"
            ? "underline hover:text-gray-300"
            : "hover:text-gray-300"
        }
      >
        Contact
      </Link>
    </nav>
  );
}
