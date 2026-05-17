const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand4Content = `## Introduction to Drawing Human Forms
Drawing the **human form** is a classic artistic discipline centered on capturing the shapes, physical gestures, and structural patterns of the human body. 

To sketch realistic human figures without distortion, artists rely on **Proportion**—the structural relationship between the size, scale, and positioning of individual body parts compared to the entire body figure.

### Required Materials and Tools
- **Sketching Mediums:** Graphite pencils (2B to 6B), charcoal sticks, or drawing pens.
- **Support Base:** Drawing pads, sketching books, or plain presentation sheets.
- **Measuring Guides:** A transparent ruler or straight-edge tool to establish proportion metrics.

---

## The Rule of Proportions (The Head Fraction Method)
In the standard Kenyan Creative Arts curriculum, human proportions are plotted out using the height of the individual's **head** as the baseline unit of measurement.

**Key Proportional Benchmarks for an Average Human Figure:**
- **Total Height:** An average fully-developed adult figure measures approximately **7 to 7.5 heads tall** from top to bottom.
- **Torso Alignment:** The waistline and elbows generally align near the bottom of the **3rd head unit**.
- **The Hips:** The pelvic midpoint splits the absolute vertical height of the human form completely in half, sitting right at the bottom of the **4th head unit**.
- **Knees Positioning:** The structural joints of the knees align roughly near the bottom of the **6th head unit**.

---

## Step-by-Step Drawing Process using Armatures

### 1. Drawing the Stick Figure (Armature)
An **armature** is an internal underlying skeleton or frame framework used to plan the physical stance, action, and balance lines of a drawing before adding skin and muscle mass.

- **The Core Axis:** Draw a clean vertical line representing the spine.
- **Joint Nodes:** Mark small circular points where major moving joints sit (shoulders, elbows, hips, knees, and ankles).
- **Proportional Verification:** Measure the distances between your nodes using your baseline head scale to confirm the limbs aren't sketched too long or short.

### 2. Bulking with Geometric Shapes
Once your internal armature is balanced, build out structural volume by wrapping basic 2D and 3D geometric shapes around your stick frame lines:
- **Head:** Sketch an inverted egg shape or an oval.
- **Torso & Pelvis:** Wrap rectangular blocks or trapezoid shields to define the upper chest and hip regions.
- **Limbs (Arms & Legs):** Use cylindrical segments or elongated tubes to mimic muscle volumes across the biceps, forearms, thighs, and calves.

### 3. Contouring and Tonal Shading
- **Outline Trapping:** Softly sketch continuous organic contour lines over your geometric blocks to create a realistic, unified skin silhouette.
- **Detail Cleaning:** Erase the internal geometric blocks and underlying armature guidelines safely.
- **Light and Shade:** Identify where your directional light source hits, then apply smooth cross-hatching or blended tonal shading along the opposing edges to give the human form realistic depth.`;

async function seedVisualArtsStrand4() {
  console.log("Locating core Creative/Visual Arts subject paths...");
  
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject shells found matching target paths.", subjectError);
    return;
  }

  console.log(`Streaming Strand 2.3 Human Forms content into ${subjects.length} active platform streams...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "Drawing Human Forms and Proportions",
      description: "Learn body proportion systems using head scale counts, map gesture frames via stick armatures, and build realistic volumetric forms.",
      order_index: 4, 
      content: strand4Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("❌ Database push failure:", error);
  } else {
    console.log("🚀 Success! Human Anatomy Drawing content populated across platform shells:", data);
  }
}

seedVisualArtsStrand4();