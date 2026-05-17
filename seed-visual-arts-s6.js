const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand6Content = `## Introduction to Ornaments and Beadwork
An **Ornament** is any decorative object, accessory, or garment item worn to enhance, beautify, and adorn the human body or immediate living environments. In traditional Kenyan communities, ornaments hold profound social, cultural, and spiritual meaning beyond simple decoration.

A primary category of traditional ornamentation is **Beadwork**—the art of threading small decorative items (beads) with holes through an internal structural filament like string, wire, or sinew to create decorative structural patterns.

### Required Materials and Tools
- **Beads:** Sourced locally or commercially. Materials include clay, glass, plastic, seeds, seashells, and bone beads.
- **Filament (Threading Base):** Fishing lines, nylon strings, metallic wires, or thin leather thongs.
- **Fasteners & Connectors:** Hooks, clasps, buttons, or flexible loops to secure the ends of the ornament.
- **Tools:** Specialized thin beading needles, scissors, and small pliers for bending wire.

---

## Technical Styles and Methods in Beadwork
Artists utilize varying alignment configurations to produce structurally stable and visually appealing ornaments:

### 1. Single-Strand Stringing
The simplest form of beadwork where beads are passed one after the other onto a singular piece of string or line. This method is predominantly used to construct simple necklaces and flexible wrist bracelets.

### 2. Multi-Strand Weaving and Grid Layouts
Using multiple intersecting filaments running parallel or interwoven horizontally and vertically. This builds rigid, wide decorative bands, flat cuffs, and complex ceremonial chest collars.

### 3. Surface Appliqué (Embroidery)
Instead of hanging freely, beads are stitched directly onto a solid backing material, such as treated animal leather, denim fabric, or heavy cloth, to decorate items like sandals, belts, or shields.

---

## Cultural Color Symbolism in Kenyan Beadwork
In indigenous communities (such as the Maasai and Samburu), beadwork acts as a visual language. Specific color patterns convey distinct cultural messages, wealth status, marital transitions, and age groups:

- **Red:** Represents bravery, strength, unity, and the blood of the community's livestock.
- **White:** Symbolizes peace, absolute purity, health, and nourishment (associated directly with milk).
- **Blue:** Represents the sky, clean rainwater, and divine spiritual blessings from the heavens.
- **Green:** Symbolizes the natural earth, fertility, healthy pastures, and agricultural growth.
- **Black:** Represents the local people, collective struggles, and ancestral harmony.
- **Yellow / Orange:** Represents hospitality, warmth, friendship, and the life-giving energy of the sun.

---

## Step-by-Step Production of a Beaded Ornament
To create a standard geometric beaded bracelet or necklace, follow this curriculum layout:

1. **Design Mapping:** Sketch your repeating color pattern motifs clearly on paper before threading any physical beads.
2. **Filament Measuring:** Cut your string or wire, intentionally leaving an extra **5 to 10 centimeters** at both ends to anchor your finishing knots and clasps safely.
3. **Threading Sequence:** Secure one end temporarily with tape or a large temporary "stop-bead", then thread your decorative beads in accordance with your pre-planned design.
4. **Tension Management:** Keep the thread taut but flexible. If pulled too tight, the ornament will warp and buckle; if too loose, gaps will form between the beads.
5. **Clasp Fastening:** Secure your final metallic clasps or knot loops at the ends tightly, trimming away excess thread safely.`;

async function seedVisualArtsStrand6() {
  console.log("Locating core Creative/Visual Arts subject paths...");
  
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject shells found matching target paths.", subjectError);
    return;
  }

  console.log(`Streaming Strand 4.0 Beadwork content into ${subjects.length} active platform streams...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "Ornaments and Traditional Beadwork",
      description: "Analyze the cultural color language of Kenyan ornaments, master assembly steps, and produce structured beaded items.",
      order_index: 6, 
      content: strand6Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("❌ Database push failure:", error);
  } else {
    console.log("🚀 Success! Ornaments and Beadwork content populated across platform shells:", data);
  }
}

seedVisualArtsStrand6();