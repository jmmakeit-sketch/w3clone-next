"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const GRADES = [
  { label: "PP1",      href: "/pp1"      },
  { label: "PP2",      href: "/pp2"      },
  { label: "Grade 1",  href: "/grade-1"  },
  { label: "Grade 2",  href: "/grade-2"  },
  { label: "Grade 3",  href: "/grade-3"  },
  { label: "Grade 4",  href: "/grade-4"  },
  { label: "Grade 5",  href: "/grade-5"  },
  { label: "Grade 6",  href: "/grade-6"  },
  { label: "Grade 7",  href: "/grade-7"  },
  { label: "Grade 8",  href: "/grade-8"  },
  { label: "Grade 9",  href: "/grade-9"  },
  { label: "Grade 10", href: "/grade-10" },
  { label: "Grade 11", href: "/grade-11" },
  { label: "Grade 12", href: "/grade-12" },
];

export default function GradeNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{
      background: "#000",
      position: "sticky",
      top: "84px",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      height: "40px",
      borderBottom: "1px solid #333",
    }}>
      {/* Scroll left */}
      <button
        onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
        style={{ background: "#222", color: "#fff", border: "none", padding: "0 10px", height: "40px", cursor: "pointer", fontSize: "16px", flexShrink: 0 }}>
        &#8249;
      </button>

      {/* HOME link */}
      <Link href="/"
        style={{
          color: pathname === "/" ? "#04AA6D" : "#ccc",
          padding: "0 14px",
          fontSize: "13px",
          fontWeight: 700,
          height: "40px",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          borderRight: "1px solid #333",
          flexShrink: 0,
          borderBottom: pathname === "/" ? "3px solid #04AA6D" : "3px solid transparent",
          background: "#000",
        }}>
        HOME
      </Link>

      {/* Grade buttons — clicking navigates, that is all */}
      <div ref={scrollRef} style={{
        display: "flex",
        alignItems: "center",
        overflowX: "auto",
        scrollbarWidth: "none",
        flex: 1,
        height: "40px",
      }}>
        {GRADES.map(g => {
          const active = pathname === g.href || pathname.startsWith(g.href + "/");
          return (
            <Link key={g.href} href={g.href} style={{
              flexShrink: 0,
              height: "40px",
              padding: "0 14px",
              fontSize: "13px",
              fontWeight: 700,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#fff",
              background: active ? "#04AA6D" : "#000",
              borderBottom: active ? "3px solid #038a58" : "3px solid transparent",
            }}>
              {g.label}
            </Link>
          );
        })}
      </div>

      {/* Scroll right */}
      <button
        onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
        style={{ background: "#04AA6D", color: "#fff", border: "none", padding: "0 12px", height: "40px", cursor: "pointer", fontSize: "16px", flexShrink: 0 }}>
        &#8250;
      </button>
    </div>
  );
}