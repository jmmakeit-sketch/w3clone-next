"use client";
import { useEffect } from "react";

const GRADES = [
  { href: "/pp1" }, { href: "/pp2" },
  { href: "/grade-1" }, { href: "/grade-2" }, { href: "/grade-3" },
  { href: "/grade-4" }, { href: "/grade-5" }, { href: "/grade-6" },
  { href: "/grade-7" }, { href: "/grade-8" }, { href: "/grade-9" },
  { href: "/grade-10" }, { href: "/grade-11" }, { href: "/grade-12" },
];

export default function NavSync({ grade }: { grade: string }) {
  useEffect(() => {
    const idx = GRADES.findIndex(g => g.href === `/${grade}`);
    if (idx >= 0) {
      window.dispatchEvent(new CustomEvent("gradenav:switch", { detail: idx }));
    }
  }, [grade]);
  return null;
}
