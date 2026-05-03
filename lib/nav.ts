// lib/nav.ts — single source of truth for all navigation logic
// NEW RULE: Each GradeNav button (PP1, PP2, Grade 1 … Grade 12) is an
// INDEPENDENT navbar. Previous/Next exhausts ALL items in that navbar's
// sequence before crossing into an adjacent navbar.
// HOME button has its own independent sequence too.

export interface NavItem {
  label: string;
  href: string;
  color?: string;
}

export interface NavSection {
  section: string;
  color?: string;
}

export type MenuItem = NavItem | NavSection;

// ── Grade subjects (canonical order) ─────────────────────────────
export const GRADE_SUBJECTS: Record<string, {
  color: string; label: string; pathway: string; subjects: string[]
}> = {
  "pp1":      { color: "#FF9800", label: "PP1",      pathway: "Early Years",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  "pp2":      { color: "#FF9800", label: "PP2",      pathway: "Early Years",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  "grade-1":  { color: "#2196F3", label: "Grade 1",  pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-2":  { color: "#2196F3", label: "Grade 2",  pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-3":  { color: "#2196F3", label: "Grade 3",  pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-4":  { color: "#9C27B0", label: "Grade 4",  pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-5":  { color: "#9C27B0", label: "Grade 5",  pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-6":  { color: "#9C27B0", label: "Grade 6",  pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-7":  { color: "#F44336", label: "Grade 7",  pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-8":  { color: "#F44336", label: "Grade 8",  pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-9":  { color: "#F44336", label: "Grade 9",  pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-10": { color: "#607D8B", label: "Grade 10", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  "grade-11": { color: "#607D8B", label: "Grade 11", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  "grade-12": { color: "#607D8B", label: "Grade 12", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
};

export const GRADE_KEYS = Object.keys(GRADE_SUBJECTS);

export function slugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

// ── HOME flow menu (HOME navbar button sequence) ──────────────────
// This is ONLY used when the user is in the HOME navbar context.
// Grade pages (pp1, grade-1 etc.) are NOT part of this sequence —
// they belong to their own independent navbar sequences.
export const HOME_MENU: MenuItem[] = [
  { label: "CBC Kenya Schools Home", href: "/" },
  { label: "About CBC / CBE",        href: "/about" },
  { label: "KICD Framework",         href: "/kicd" },

  { section: "Pathways", color: "#04AA6D" },
  { label: "Early Years Overview",      href: "/pathway/early-years",         color: "#FF9800" },
  { label: "Lower Primary Overview",    href: "/pathway/lower-primary",        color: "#2196F3" },
  { label: "Upper Primary Overview",    href: "/pathway/upper-primary",        color: "#9C27B0" },
  { label: "Junior Secondary Overview", href: "/pathway/junior-secondary",     color: "#F44336" },
  { label: "Senior Secondary Overview", href: "/pathway/senior-secondary",     color: "#607D8B" },
  { label: "STEM Pathway",              href: "/pathway/senior-stem",          color: "#04AA6D" },
  { label: "Arts & Sports Pathway",     href: "/pathway/senior-arts",          color: "#E91E63" },
  { label: "Social Sciences Pathway",   href: "/pathway/senior-social",        color: "#795548" },

  { section: "Assessment" },
  { label: "Exercises",                 href: "/exercises" },
  { label: "Quizzes",                   href: "/quizzes" },
  { label: "Certificates",              href: "/certificates" },
  { label: "References",                href: "/references" },
];

export const HOME_MENU_LINKS: NavItem[] = HOME_MENU.filter(
  (i): i is NavItem => "href" in i
);

// ── Which paths belong to the HOME navbar (not any grade navbar) ──
// Grade overview pages like /pp1 or /grade-4 belong to their OWN
// grade navbar, NOT to the home flow — even though HOME sidebar
// lists them. This is the key fix.
export function isHomeFlowPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return true;   // /  (home)
  if (parts[0] === "pathway") return true;
  const homeOnlyPages = ["about","kicd","exercises","quizzes","certificates","references","how-to","signin","html-introduction","html-editors"];
  if (homeOnlyPages.includes(parts[0])) return true;
  // /pp1, /grade-1, /grade-1/mathematics, etc → grade navbar, NOT home
  if (GRADE_SUBJECTS[parts[0]]) return false;
  return true;
}

// ── getPrevNext — HOME FLOW only ──────────────────────────────────
// Used by SmartPrevNext on home-flow pages only.
export function getPrevNext(pathname: string): {
  prev: NavItem | null; next: NavItem | null
} {
  const idx = HOME_MENU_LINKS.findIndex(i => i.href === pathname);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? HOME_MENU_LINKS[idx - 1] : null,
    next: idx < HOME_MENU_LINKS.length - 1 ? HOME_MENU_LINKS[idx + 1] : null,
  };
}

// ── getGradeNavSequence ───────────────────────────────────────────
// Builds the FULL flat ordered sequence for a single grade navbar:
//   [grade-overview, subject-1-intro, ...subject-1-topics,
//    subject-2-intro, ...subject-2-topics, ..., last-subject-last-topic]
// topics: pass [] if not yet loaded (prev/next will skip topic level)
export function getGradeNavSequence(
  grade: string,
  topics: { name: string }[],
  subject: string | null
): NavItem[] {
  const g = GRADE_SUBJECTS[grade];
  if (!g) return [];

  const seq: NavItem[] = [];

  // 1. Grade overview page
  seq.push({ label: `${g.label} Overview`, href: `/${grade}` });

  // 2. For each subject: intro page + its topics
  for (const sub of g.subjects) {
    const subSlug = slugify(sub);
    seq.push({ label: `${g.label} — ${sub}`, href: `/${grade}/${subSlug}` });

    // Only expand topics for the currently active subject
    if (subject === subSlug && topics.length > 0) {
      for (const t of topics) {
        seq.push({
          label: t.name,
          href: `/${grade}/${subSlug}/${slugify(t.name)}`
        });
      }
    }
  }

  return seq;
}

// ── getSidebarPrevNext — GRADE FLOW ───────────────────────────────
// NEW BEHAVIOUR:
//   • Prev/Next stays strictly within the current grade's navbar sequence.
//   • At the very first item of this grade → Prev goes to last item of
//     the previous grade's navbar (or null if this is the first grade).
//   • At the very last item of this grade → Next goes to first item of
//     the next grade's navbar (or /exercises if this is the last grade).
//   • Topics are only inserted for the active subject (loaded from DB).
export function getSidebarPrevNext(
  pathname: string,
  grade: string,
  subject: string | null,
  topics: { name: string }[]
): { prev: NavItem | null; next: NavItem | null } {

  const g = GRADE_SUBJECTS[grade];
  if (!g) return { prev: null, next: null };

  const gradeIndex = GRADE_KEYS.indexOf(grade);
  const prevGradeKey = gradeIndex > 0 ? GRADE_KEYS[gradeIndex - 1] : null;
  const nextGradeKey = gradeIndex < GRADE_KEYS.length - 1 ? GRADE_KEYS[gradeIndex + 1] : null;

  // Build this grade's sequence
  const seq = getGradeNavSequence(grade, topics, subject);

  // Find current position
  const idx = seq.findIndex(item => item.href === pathname);

  // If not found in sequence, return nulls
  if (idx === -1) return { prev: null, next: null };

  // ── Prev ──
  let prev: NavItem | null = null;
  if (idx > 0) {
    prev = seq[idx - 1];
  } else if (prevGradeKey) {
    // Cross into previous grade's navbar — go to its LAST item
    const prevG = GRADE_SUBJECTS[prevGradeKey];
    const lastSub = prevG.subjects[prevG.subjects.length - 1];
    const lastSubSlug = slugify(lastSub);
    // We don't know prev grade's topics, so land on last subject intro
    prev = {
      label: `${prevG.label} — ${lastSub}`,
      href: `/${prevGradeKey}/${lastSubSlug}`
    };
  }
  // If idx === 0 and no prevGradeKey → prev stays null (start of all grades)

  // ── Next ──
  let next: NavItem | null = null;
  if (idx < seq.length - 1) {
    next = seq[idx + 1];
  } else if (nextGradeKey) {
    // Cross into next grade's navbar — go to its FIRST item (grade overview)
    const nextG = GRADE_SUBJECTS[nextGradeKey];
    next = {
      label: `${nextG.label} Overview`,
      href: `/${nextGradeKey}`
    };
  } else {
    // Last item of last grade → go to Exercises (end of all content)
    next = { label: "Exercises", href: "/exercises" };
  }

  return { prev, next };
}
