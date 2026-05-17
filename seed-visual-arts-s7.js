const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand7Content = `## Introduction to Graphic Design and Lettering
**Graphic Design** is the creative art and profession of selecting and arranging visual elements—such as typography, images, symbols, and colors—to communicate a clear message to a targeted audience.

A foundational element of graphic design is **Lettering**—the deliberate art of drawing or constructing individual letterforms systematically, rather than writing them casually. Good lettering ensures that informational media (like posters, book covers, and signboards) is highly legible and visually balanced.

### Required Construction Tools
- **Measuring Instruments:** Rulers, T-squares, and set squares for plotting parallel construction grids.
- **Drawing Tools:** HB pencils for light grid lines; 2B or 4B pencils, markers, or calligraphy pens for final letter filling.
- **Layout Media:** Drawing paper, graph sheets, or heavy cardboards.

---

## Classifications of Lettering Styles
In the creative arts framework, characters are broadly categorized into distinct stylistic families:

### 1. Roman Lettering
Characterized by thin and thick structural strokes accompanied by **serifs**—small decorative cross-lines or "feet" projecting from the ends of the main letter strokes. Roman letters project a formal, classical, and traditional aesthetic.

### 2. Gothic Lettering (Sans-Serif)
Built out of completely uniform, equal stroke widths throughout the entire character shape. They completely lack serifs (hence "sans-serif"). Gothic letters are exceptionally clear, bold, and modern, making them the standard choice for street signs and headlines.

### 3. Script and Creative Lettering
Styles that mimic fluid, handwritten calligraphy, where letters frequently interconnect. These are utilized primarily for decorative certificates, invitations, and artistic branding assets.

---

## Critical Rules of Letter Spacing and Alignment
Legibility in layout design depends directly on how space is distributed between individual letters (**kerning**) and entire words.

### Spacing Methodologies
1. **Mechanical Spacing:** Measuring the exact same number of millimeters between the outer edges of every letter. **Note:** This often creates awkward visual gaps (for example, spacing letters like 'A' and 'V' mechanically leaves too much empty background space).
2. **Optical Spacing:** Spacing letters based on their overall *visual volume* and negative space, rather than strict physical measurements. Letters with open curves or slanted lines are placed slightly closer together to ensure the word looks visually cohesive and uniform to the human eye.

---

## Step-by-Step Layout and Poster Design
A **Layout** is the strategic structural arrangement of text blocks, titles, and supporting illustrations within a specific design frame.

### Constructing a Text Layout:
1. **Border Plotting:** Draw a clean outer border line at least **1.5 to 2 centimeters** inside the edge of your paper to anchor your content frame securely.
2. **Guideline Grid:** Lightly trace parallel horizontal construction lines using an HB pencil to define the exact height of your capital and lowercase letters.
3. **Drafting and Centering:** Softly sketch your characters using optical spacing rules. Always count your letters beforehand to ensure your words are centered perfectly within the layout width.
4. **Inking and Enhancing:** Trace your final shapes with a dark marker or paint medium, and erase all underlying pencil grid lines once dry to finalize your presentation.`;

async function seedVisualArtsStrand7() {
  console.log("Locating core Creative/Visual Arts subject paths...");
  
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject shells found matching target paths.", subjectError);
    return;
  }

  console.log(`Streaming Strand 5.0 Graphic Design content into ${subjects.length} active platform streams...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "Graphic Design and Typography",
      description: "Master Roman and Gothic lettering classifications, learn optical spacing principles, and execute balanced informational layouts.",
      order_index: 7, 
      content: strand7Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("❌ Database push failure:", error);
  } else {
    console.log("🚀 Success! Graphic Design content populated across platform shells:", data);
  }
}

seedVisualArtsStrand7();