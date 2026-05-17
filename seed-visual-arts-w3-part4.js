const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const w3Strand7Content = `# Strand 5.0: Graphic Design and Typography

## Introduction to Graphic Design
**Graphic Design** is the art and profession of selecting and arranging visual elements—such as typography, images, symbols, and colors—to communicate a clear, effective message to a targeted audience.

A core foundation of graphic design is **Lettering**—the deliberate art of drawing or constructing individual letterforms systematically, rather than writing them casually. Good lettering ensures that informational media like posters, book covers, and signboards are readable and balanced.

---

## Classifications of Lettering Styles
In graphic design and layout design, letterforms are divided into distinct stylistic families:

### 1. Roman Lettering
Characterized by thin and thick structural strokes accompanied by **serifs**—small decorative cross-lines or "feet" projecting from the ends of the main letter strokes. Roman letters project a formal, classical, and traditional aesthetic.

### 2. Gothic Lettering (Sans-Serif)
Built out of completely uniform, equal stroke widths throughout the entire character shape. They completely lack serifs (hence "sans-serif"). Gothic letters are exceptionally clear, bold, and modern, making them the standard choice for street signs, headlines, and digital screens.

### 3. Script and Creative Lettering
Styles that mimic fluid, handwritten calligraphy, where letters frequently interconnect. These are utilized primarily for decorative certificates, invitations, and artistic branding assets.

---

## Letter Spacing Principles
Legibility in typography depends heavily on how space is distributed between individual letters and entire words.

| Spacing Method | Core Mechanic & Rules | Visual Result |
| :--- | :--- | :--- |
| **Mechanical Spacing** | Measuring the exact same number of millimeters between the outer physical edges of every letter. | Often creates awkward visual gaps (e.g., spacing letters like **A** and **V** mechanically leaves too much empty space). |
| **Optical Spacing** | Spacing letters based on their overall *visual volume* and open negative space rather than rigid measurements. | Irregular letters with open curves or slanted lines are nested slightly closer together to make words look cohesive and uniform. |

---

## Step-by-Step Poster Layout Design
A **Layout** is the strategic structural arrangement of text blocks, headlines, titles, and supporting illustrations within a specific design frame.

### Production Procedure:
1. **Border Plotting:** Use a ruler to draw a clean outer border line at least **1.5 to 2 centimeters** inside the edge of your paper to anchor your content frame securely.
2. **Guideline Grid:** Lightly trace parallel horizontal construction lines using an **HB pencil** to define the exact height of your capital and lowercase letters.
3. **Drafting text:** Softly sketch your characters using optical spacing rules. Always count your characters beforehand to ensure your text fits perfectly within the layout width without spilling over.
4. **Inking and Enhancing:** Trace your final shapes with a dark marker or paint medium, filling in the letters completely. Erase all underlying pencil grid lines once dry to finalize your presentation.`;

async function seedW3Part4() {
  console.log("Searching database for matching subject channels...");
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject channels found.", subjectError);
    return;
  }

  console.log(`Found ${subjects.length} active subject rows. Injecting W3Schools Graphic Design content...`);

  for (const subjectRow of subjects) {
    // Upsert Section 5.0 (Graphic Design & Typography)
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 5.0: Graphic Design and Typography",
      description: "Lettering classifications, mechanical versus optical spacing rules, and step-by-step layout design instructions.",
      order_index: 7,
      content: w3Strand7Content
    }, { onConflict: 'subject_id,name' });
  }

  console.log("🚀 Success! Graphic Design and Typography content module synced in W3Schools format.");
}

seedW3Part4();