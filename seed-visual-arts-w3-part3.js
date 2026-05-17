const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const w3Strand5Content = `# Strand 3.0: Indigenous Kenyan Crafts

## Introduction to Indigenous Crafts
**Indigenous Crafts** are traditional handmade items made by local communities using skills handed down over generations. These crafts use locally available materials and express cultural identity and practical daily utility.

A main branch of indigenous craft is **Basketry**—the art of weaving, twisting, or sewing vegetable fibers to create 3D containers like baskets, trays, and mats.

---

## Sourcing and Preparing Fibers
Fibers are gathered from local plants depending on the environment:
- **Sisal Fibers:** Pulled from sisal leaves, known for being very strong.
- **Banana Fibers:** Stripped from dried banana pseudostems, very flexible.
- **Palm Fronds (Makuti):** Collected from palm trees, popular in coastal areas.
- **Reeds and Rushes:** Gathered from riverbeds and wet marshes.

### The Fiber Processing Cycle
1. **Harvesting:** Cutting mature leaves or plant stalks safely.
2. **Decortication:** Scraping away the soft, green fleshy outer layers to isolate clean, white structural fibers.
3. **Washing & Sun-Drying:** Rinsing out sticky plant sap and hanging them in full sunlight to naturally bleach the strands.
4. **Dyeing Bath:** Submerging dry fibers into boiling water mixed with natural ingredients (roots, bark) or synthetic chemical powder.

---

## Core Basketry Techniques
There are two main physical methods used to build traditional Kenyan baskets:

### 1. The Twining Technique
In twining, two or more flexible horizontal strands (called the **weft**) are twisted around a set of static, parallel vertical strands (called the **warp**).
- **The Warp:** Static structural backbone strands.
- **The Weft:** Moving horizontal strands that twist over and under each warp thread.
- **Result:** Produces a dense, highly durable weave that can hold small items.

### 2. The Coiling Technique
Coiling is a sewing method rather than a pure weave structure. It builds an item from the center outward in a continuous spiral circle.
- **The Coil Core:** A thick bundle of fibers wound around in a circular spiral path.
- **The Stitch Thread:** A single thin binding thread that loops around each outer row, sewing it to the previous inner row.
- **Result:** Produces thick, distinct ridges circling around the basket body.

---

## Market Value and Design Ethics
Traditional baskets (like the Kenyan *Kiondo*) have significant commercial value. When preparing these items for sale, designers focus on:
- **Functional Strength:** Ensuring handles, bases, and rims are reinforced to carry weight.
- **Aesthetic Motifs:** Weaving in clean geometric lines using contrasting dyed strands to create patterns.
- **Sustainability:** Branding items as organic, plastic-free alternatives for global shoppers.`;

const w3Strand6Content = `# Strand 4.0: Ornaments and Traditional Beadwork

## Introduction to Ornaments
An **Ornament** is any decorative object, accessory, or piece of clothing worn to decorate and beautify the human body or immediate living spaces. In traditional Kenyan cultures, ornaments show age sets, marital status, and social position.

A major category of traditional Kenyan ornamentation is **Beadwork**—the art of threading small beads with center holes onto a line or wire to form decorative patterns.

---

## Sourcing Materials
- **Beads:** Sourced locally or commercially. Materials include clay, glass, wood, seeds, seashells, and bones.
- **Filament (Base Line):** Fishing line, nylon threads, fine metallic wire, or thin leather.
- **Fasteners:** Hooks, button loops, or sliding knots to tie the ornament securely.

---

## Beadwork Techniques

### 1. Single-Strand Stringing
Beads are pushed one after another onto a single length of string. Used for flexible bracelets and necklaces.

### 2. Multi-Strand Weaving (Grid Alignment)
Using multiple parallel or interwoven threads. This creates wide bands, rigid headbands, and large ceremonial collars.

### 3. Surface Appliqué
Beads are sewn directly onto a solid fabric background, such as treated animal leather, canvas, or heavy cloth, to decorate belts, shields, and sandals.

---

## Cultural Color Language in Kenyan Beadwork
In communities like the Maasai and Samburu, beadwork colors act as a visual code to share specific messages:

| Bead Color | Cultural Symbolism & Meaning |
| :--- | :--- |
| **Red** | Bravery, strength, unity, and the blood of livestock. |
| **White** | Peace, pure health, and nourishment (associated with milk). |
| **Blue** | The sky, clean rainwater, and spiritual blessings from above. |
| **Green** | The earth, healthy pastures, fertility, and growth. |
| **Black** | The local people, daily struggles, and ancestral harmony. |
| **Yellow / Orange** | Hospitality, warmth, friendship, and the energy of the sun. |

---

## Step-by-Step Beadwork Assembly
1. **Pattern Mapping:** Draw your repeating color boxes on paper before picking up any beads.
2. **Line Measuring:** Cut your wire or nylon string, leaving an extra **5 to 10 cm** at the ends for knots.
3. **Threading Sequence:** Attach a temporary anchor bead at one end, then thread beads in order of your drawing.
4. **Tension Control:** Keep the line firm but flexible. Pulling too hard warps the ornament; leaving it loose creates gaps.
5. **Clasp Attachment:** Tie off your final loop or hook clasp securely and cut away excess string.`;

async function seedW3Part3() {
  console.log("Searching database for matching subject channels...");
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject channels found.", subjectError);
    return;
  }

  console.log(`Found ${subjects.length} active subject rows. Injecting W3Schools content for Strands 3.0 & 4.0...`);

  for (const subjectRow of subjects) {
    // Upsert Section 3.0 (Indigenous Crafts & Basketry)
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 3.0: Indigenous Kenyan Crafts and Basketry",
      description: "Fiber sourcing, processing cycles, and comparative twining versus coiling mechanics.",
      order_index: 5,
      content: w3Strand5Content
    }, { onConflict: 'subject_id,name' });

    // Upsert Section 4.0 (Ornaments & Beadwork)
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 4.0: Ornaments and Traditional Beadwork",
      description: "Assembly methodologies and the cultural color matrix of Kenyan beadwork.",
      order_index: 6,
      content: w3Strand6Content
    }, { onConflict: 'subject_id,name' });
  }

  console.log("🚀 Success! Indigenous Crafts and Beadwork pages updated with literal curriculum content.");
}

seedW3Part3();