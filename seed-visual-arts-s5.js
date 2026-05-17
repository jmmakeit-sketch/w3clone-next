const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand5Content = `## Introduction to Indigenous Kenyan Crafts
**Indigenous Crafts** refer to traditional handmade functional items created by local communities using techniques passed down through generations. These crafts rely entirely on locally sourced materials and reflect the deep cultural identity, heritage, and functional needs of Kenyan societies.

A primary category of indigenous craft is **Basketry**—the ancient art of weaving, interlacings, or sewing unspun vegetable fibers into three-dimensional utility containers such as baskets, mats, trays, and hats.

### Required Sourcing Materials
Traditional craftspeople source fibers from local flora depending on the geographical region:
- **Sisal Fibers:** Stripped from the leaves of the sisal plant, prized for tensile strength.
- **Banana Fibers:** Harvested from dried banana pseudostems, providing flexible structural strips.
- **Palm Fronds (Makuti):** Collected from palm trees along coastal zones.
- **Reeds and Rushes:** Sourced from riverbanks and marshy wetlands for rigid frameworks.

---

## Core Construction Techniques in Basketry
While there are many custom methods, two primary structural weaving methodologies dominate traditional Kenyan basketry:

### 1. The Twining Technique
In **Twining**, two or more flexible weaving strands (called the **weft**) are actively twisted around a set of stationary, parallel structural strands (called the **warp**). 
- **The Warp:** These are the rigid vertical structural spokes that act as the backbone.
- **The Weft:** These are the flexible horizontal fibers that cross over and twist under each warp thread sequentially.
- **Visual Pattern:** Twining produces a tight, highly secure, and durable texture that prevents small grains or items from slipping out.

### 2. The Coiling Technique
**Coiling** is fundamentally a sewing methodology rather than a pure weaving technique. It builds up a three-dimensional container continuously from the center outwards.
- **The Core Foundation:** A thick, continuous bundle of fiber (the coil core) is wound tightly in a spiral configuration.
- **The Stitch Thread:** A flexible binding fiber wraps around each new outer row of the coil, stitching and locking it securely to the previous inner row.
- **Visual Pattern:** This produces distinctive thick ridges running horizontally or spirally around the finished basket body.

---

## Processing and Dyeing Craft Fibers
To make indigenous basketry visually appealing and market-ready, raw vegetable fibers undergo systematic preparation:

### Dyeing Methodologies
1. **Natural/Indigenous Dyeing:** Utilizing organic materials harvested directly from nature. For example, boiling roots, tree barks, unique soil minerals, or crushed leaves to extract earthy tones like rich browns, deep yellows, and charcoal blacks.
2. **Synthetic Dyeing:** Utilizing commercial chemical dyes (like fabric powders) dissolved in boiling water to achieve bright, vibrant neon pigments.

### Step-by-Step Preparation Cycle:
- **Harvesting:** Cutting ripe, mature sisal leaves or banana stalks safely.
- **Decortication/Extraction:** Scraping away the pulpy green plant flesh to isolate clean, unblemished raw structural fibers.
- **Washing & Sun-Drying:** Thoroughly rinsing the fibers to remove sticky sap, then bleaching them naturally under open sunlight.
- **Dyeing Bath:** Submerging fiber bundles into boiling water infused with the dye agent, then letting them dry completely in shaded areas to avoid pigment fading.

---

## Market Value and Entrepreneurship
Indigenous Kenyan basketry items (such as the world-renowned *Kiondo* baskets) hold incredible commercial value. 

When presenting or selling these items in modern economic marketplaces, students assess three business metrics:
1. **Functional Design:** Ensure the basket features sturdy handles, balanced bases, and robust rims capable of carrying significant weights without tearing.
2. **Aesthetic Appeal:** Integrating clean, repeating geometric pattern motifs using contrasting colored strands to catch a buyer's attention.
3. **Eco-Friendly Branding:** Marketing the items globally as sustainable, biodegradable alternatives to single-use synthetic plastic carrier bags.`;

async function seedVisualArtsStrand5() {
  console.log("Locating core Creative/Visual Arts subject paths...");
  
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject shells found matching target paths.", subjectError);
    return;
  }

  console.log(`Streaming Strand 3.0 Indigenous Crafts content into ${subjects.length} active platform streams...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "Indigenous Kenyan Crafts and Basketry",
      description: "Discover traditional craft processing, master structural twining or coiling techniques, and evaluate the economic potential of basketry items.",
      order_index: 5, 
      content: strand5Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("❌ Database push failure:", error);
  } else {
    console.log("🚀 Success! Indigenous Crafts content populated across platform shells:", data);
  }
}

seedVisualArtsStrand5();