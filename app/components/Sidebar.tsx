"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ grade, subject }: { grade?: string; subject?: string }) {
  const pathname = usePathname();

  if (!grade) {
    return (
      <aside className="sidebar">
        <Link href="/" className="sidebar-header">CBC Kenya Schools</Link>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About CBC</Link>
        <Link href="/kicd" className={pathname === "/kicd" ? "active" : ""}>KICD Framework</Link>
        <div className="sidebar-section">Pathways</div>
        <Link href="/pathway/early-years" className={pathname.startsWith("/pathway/early-years") ? "active" : ""}>Early Years (PP1-PP2)</Link>
        <Link href="/pathway/lower-primary" className={pathname.startsWith("/pathway/lower-primary") ? "active" : ""}>Lower Primary (Gr 1-3)</Link>
        <Link href="/pathway/upper-primary" className={pathname.startsWith("/pathway/upper-primary") ? "active" : ""}>Upper Primary (Gr 4-6)</Link>
        <Link href="/pathway/junior-secondary" className={pathname.startsWith("/pathway/junior-secondary") ? "active" : ""}>Junior Secondary (Gr 7-9)</Link>
        <Link href="/pathway/senior-secondary" className={pathname.startsWith("/pathway/senior-secondary") ? "active" : ""}>Senior Secondary (Gr 10-12)</Link>
        <div className="sidebar-section">Resources</div>
        <Link href="/exercises" className={pathname === "/exercises" ? "active" : ""}>Exercises</Link>
        <Link href="/quizzes" className={pathname === "/quizzes" ? "active" : ""}>Quizzes</Link>
        <Link href="/certificates" className={pathname === "/certificates" ? "active" : ""}>Certificates</Link>
      </aside>
    );
  }

  if (!subject) {
    const displayGrade = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    return (
      <aside className="sidebar">
        <Link href={`/${grade}`} className="sidebar-header">{displayGrade}</Link>
        <Link href={`/${grade}`} className={pathname === `/${grade}` ? "active" : ""}>Overview</Link>
      </aside>
    );
  }

  return null;
}