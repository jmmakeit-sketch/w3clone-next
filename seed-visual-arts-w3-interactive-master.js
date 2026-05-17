const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strandsMasterData = [
  {
    name: "Strand 1.0: The Arts and Entrepreneurship",
    description: "Direct definitions, structural categories of arts, presentation metrics, and career clusters with interactive widgets.",
    order_index: 1,
    content: `# Strand 1.0: The Arts and Entrepreneurship

<div class="w3-panel w3-leftbar w3-light-grey" style="padding:16px; border-left:6px solid #4CAF50;">
  <p><i>"The arts can be experienced through our human faculties: Sight, Hearing, Touch, Smell, and Taste."</i></p>
</div>

## The 4 Core Branches of Art

#### 1. Visual Arts
These are art forms appreciated through the sense of sight, valued for their emotional power and beauty (e.g., Drawing, painting, montage, collage).

#### 2. Applied Arts
Involves making and decorating everyday items for practical use or utilitarian purposes.

#### 3. Performing Arts
Involves a live performance or presentation using body movement, facial expression, and voice.

#### 4. Written or Literary Art
The writing of stories, poems, or texts that display the beauty of speech and language to convey cultural meaning.

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Branch Explorer</h3>
  <p>Click a branch to see its practical marketplace category:</p>
  <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:15px;">
    <button class="w3-btn w3-white w3-border" onclick="alert('Visual Arts -> Painting and Collages')">Visual</button>
    <button class="w3-btn w3-white w3-border" onclick="alert('Applied Arts -> Pottery and Decorated Furnishings')">Applied</button>
    <button class="w3-btn w3-white w3-border" onclick="alert('Performing Arts -> Live Theatre and Vocal Solos')">Performing</button>
    <button class="w3-btn w3-white w3-border" onclick="alert('Literary Arts -> Poetry and Folk Novel Writing')">Literary</button>
  </div>
</div>

---

## Entrepreneurship and Presentations
**Entrepreneurship** is the process of setting up, developing, and running a business with the aim of getting a profit by marketing goods, services, and new ideas.

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> Which branch of art is explicitly created for practical use or utilitarian purposes?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! Applied arts focus on everyday utility.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s1_o1" name="opt" value="wrong"> <label for="s1_o1">Visual Arts</label><br>
    <input type="radio" id="s1_o2" name="opt" value="correct"> <label for="s1_o2">Applied Arts</label><br>
    <input type="radio" id="s1_o3" name="opt" value="wrong"> <label for="s1_o3">Literary Arts</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  },
  {
    name: "Strand 2.1: One-Point Perspective Drawing",
    description: "Direct layout elements, structural rules, eye levels, and step-by-step cuboid compositions.",
    order_index: 2,
    content: `# Strand 2.0: Picture Making\n## Lesson 2.1: One-Point Perspective Drawing

**Perspective Drawing** is a technique used to create an illusion of three-dimensional depth (3D) on a flat two-dimensional (2D) surface.

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Viewpoint Simulator</h3>
  <p>Select an Eye Level View to see how the Horizon Line shifts position:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px;">
    <button class="w3-btn w3-blue" onclick="alert('Bird\\'s Eye View: Horizon line is HIGH. You look DOWN and see the TOP of the object.')">Bird's Eye</button>
    <button class="w3-btn w3-green" onclick="alert('Normal Eye View: Horizon line is CENTERED. You see the front and sides of the object.')">Normal Eye</button>
    <button class="w3-btn w3-red" onclick="alert('Worm\\'s Eye View: Horizon line is LOW. You look UP and see the BOTTOM of the object.')">Worm's Eye</button>
  </div>
</div>

---

## Elements of Perspective Drawing
- **Horizon Line:** The line where sky and ground meet, representing the observer's eye level.
- **Vanishing Point (VP):** The point on the horizon line where all lines appear to disappear.
- **Projection Lines:** Converging guidelines extending from corners towards the VP.

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> Where is the Vanishing Point (VP) always situated in a one-point perspective setup?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! It rests squarely on the Horizon Line.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s2_o1" name="opt" value="wrong"> <label for="s2_o1">On the Base Plane</label><br>
    <input type="radio" id="s2_o2" name="opt" value="correct"> <label for="s2_o2">On the Horizon Line</label><br>
    <input type="radio" id="s2_o3" name="opt" value="wrong"> <label for="s2_o3">At the edge of the page</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  },
  {
    name: "Strand 2.2: Painting, Color Wheels and Scales",
    description: "Color classifications, dimensions of color, and step-by-step gradation chart construction.",
    order_index: 3,
    content: `# Strand 2.2: Painting, Color Wheels and Scales

## Classifications of Colors

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Interactive Palette Mixer</h3>
  <p>Click two Primary Colors to calculate the resulting Secondary Color:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px;">
    <button class="w3-btn" style="background-color:#ff4d4d; color:white;" onclick="alert('Red + Yellow = ORANGE')">Red + Yellow</button>
    <button class="w3-btn" style="background-color:#33b5e5; color:white;" onclick="alert('Blue + Yellow = GREEN')">Blue + Yellow</button>
    <button class="w3-btn" style="background-color:#aa66cc; color:white;" onclick="alert('Blue + Red = VIOLET / PURPLE')">Blue + Red</button>
  </div>
</div>

---

## Dimensions of Color
- **Hue:** The pure name of the color itself.
- **Value:** The lightness or darkness of a color. Controlled via **Tinting** (+ White) and **Shading** (+ Black).
- **Intensity:** The brightness or saturation of a color. Dulleed down by mixing in **chromatic gray**.

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> What is the correct term for modifying a pure color's value by adding black paint?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! Adding black is called Shading, while adding white is Tinting.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s3_o1" name="opt" value="wrong"> <label for="s3_o1">Tinting</label><br>
    <input type="radio" id="s3_o2" name="opt" value="correct"> <label for="s3_o2">Shading</label><br>
    <input type="radio" id="s3_o3" name="opt" value="wrong"> <label for="s3_o3">Intensity scale</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  },
  {
    name: "Strand 2.3: Drawing Human Forms and Proportions",
    description: "Mastering the head fraction method, sketching armatures, and geometric bulking techniques.",
    order_index: 4,
    content: `# Strand 2.3: Drawing Human Forms and Proportions

## The Head Fraction Method
To draw human bodies without stretching limbs out of proportion, artists use the height of the individual's **head** as a basic scale metric.

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Proportion Scale Reader</h3>
  <p>Click a joint position to see its alignment height in standard head units:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px; flex-wrap:wrap;">
    <button class="w3-btn w3-white w3-border" onclick="alert('Total Body: Measures roughly 7 to 7.5 head units tall.')">Total Figure</button>
    <button class="w3-btn w3-white w3-border" onclick="alert('Waist & Elbows: Align at the base of the 3rd head unit.')">Waistline / Elbows</button>
    <button class="w3-btn w3-white w3-border" onclick="alert('Hips & Pelvis: Split the body height in half at the 4th head unit.')">Hips / Pelvis</button>
    <button class="w3-btn w3-white w3-border" onclick="alert('Knees: Positioned at the bottom of the 6th head unit.')">Knee Joints</button>
  </div>
</div>

---

## Production Steps
1. **The Armature:** Sketching a stick figure frame to establish stance balance.
2. **Geometric Mass:** Layering ovals, cylinders, and blocks around the frame.
3. **Contours:** Sweeping soft skin contour outlines over the layout structure.

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> What is the underlying internal stick figure or skeleton frame called in anatomy drawing?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! It is an Armature.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s4_o1" name="opt" value="correct"> <label for="s4_o1">Armature</label><br>
    <input type="radio" id="s4_o2" name="opt" value="wrong"> <label for="s4_o2">Contour</label><br>
    <input type="radio" id="s4_o3" name="opt" value="wrong"> <label for="s4_o3">Value chart</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  },
  {
    name: "Strand 3.0: Indigenous Kenyan Crafts and Basketry",
    description: "Fiber sourcing, processing cycles, and comparative twining versus coiling mechanics.",
    order_index: 5,
    content: `# Strand 3.0: Indigenous Kenyan Crafts and Basketry

## Basketry Weaving Systems
Traditional Kenyan crafts rely on distinct configurations of natural fibers (sisal, banana bark, palm fronds).

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Technique Analyzer</h3>
  <p>Compare the structural mechanics of Twining vs. Coiling:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px;">
    <button class="w3-btn w3-dark-grey" onclick="alert('Twining: Horizontal moving threads (Weft) twist over and under static vertical lines (Warp).')">Analyze Twining</button>
    <button class="w3-btn w3-dark-grey" onclick="alert('Coiling: A thick core fiber bundle spirals around continuously, sewn rows together using binding stitches.')">Analyze Coiling</button>
  </div>
</div>

---

## Sourcing & Preparing Fibers
- **Decortication:** Scraping wet fleshy tissue off stalks to uncover pristine, strong inner fibers.
- **Sun-Drying:** Bleaching and drying out residual moisture.

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> What is the step called where soft, green fleshy outer layers are scraped away to expose clean plant fibers?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! Decortication is the scraping step.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s5_o1" name="opt" value="wrong"> <label for="s5_o1">Twining</label><br>
    <input type="radio" id="s5_o2" name="opt" value="correct"> <label for="s5_o2">Decortication</label><br>
    <input type="radio" id="s5_o3" name="opt" value="wrong"> <label for="s5_o3">Appliqué</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  },
  {
    name: "Strand 4.0: Ornaments and Traditional Beadwork",
    description: "Assembly methodologies and the cultural color matrix of Kenyan beadwork.",
    order_index: 6,
    content: `# Strand 4.0: Ornaments and Traditional Beadwork

## Assembly Styles
1. **Single-Strand Stringing:** Pushing beads sequentially down one piece of thread.
2. **Multi-Strand Weaving:** Interlocking lines together horizontally and vertically to form rigid chest bands.
3. **Surface Appliqué:** Stitching lines of beads flat onto a heavy background like treated leather or cloth shields.

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Bead Color Code Guide</h3>
  <p>Click a color token to reveal its symbolic message in Kenyan culture:</p>
  <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:15px;">
    <button class="w3-btn" style="background-color:red; color:white;" onclick="alert('Red: Represents bravery, community strength, and unity.')">Red</button>
    <button class="w3-btn" style="background-color:white; color:black; border:1px solid #ccc;" onclick="alert('White: Represents peace, absolute purity, and milk nourishment.')">White</button>
    <button class="w3-btn" style="background-color:blue; color:white;" onclick="alert('Blue: Represents the open sky, clean rainwater, and divine blessings.')">Blue</button>
    <button class="w3-btn" style="background-color:green; color:white;" onclick="alert('Green: Represents the earth pastures, fertility, and growth.')">Green</button>
  </div>
</div>

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> Which color in traditional Kenyan beadwork symbolizes peace, purity, and nourishment?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! White represents peace and milk nourishment.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s6_o1" name="opt" value="wrong"> <label for="s6_o1">Red</label><br>
    <input type="radio" id="s6_o2" name="opt" value="correct"> <label for="s6_o2">White</label><br>
    <input type="radio" id="s6_o3" name="opt" value="wrong"> <label for="s6_o3">Black</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  },
  {
    name: "Strand 5.0: Graphic Design and Typography",
    description: "Lettering classifications, mechanical versus optical spacing rules, and step-by-step layout design instructions.",
    order_index: 7,
    content: `# Strand 5.0: Graphic Design and Typography

## Styles of Typography
- **Roman Lettering:** Classical look with thin and thick strokes and small decorative "feet" (**serifs**).
- **Gothic Lettering:** Bold, modern, uniform layout stroke widths completely lacking serifs (**sans-serif**).

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Layout Spacing Tester</h3>
  <p>Compare the visual rules for letter kerning:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px;">
    <button class="w3-btn w3-teal" onclick="alert('Mechanical Spacing: Measuring equal exact physical distance in mm. Leaves awkward, uneven visual gaps.')">Mechanical Spacing</button>
    <button class="w3-btn w3-indigo" onclick="alert('Optical Spacing: Spacing based on visual volume and negative space. Gives uniform legibility.')">Optical Spacing</button>
  </div>
</div>

<div class="w3-panel w3-card" style="padding:16px; background-color:#fff; border-top:4px solid #009688; margin:20px 0;">
  <h3>Test Yourself Exercise</h3>
  <p><b>Question:</b> Which font family uses completely equal stroke widths and has no serifs (projecting feet)?</p>
  <form onsubmit="event.preventDefault(); if(this.opt.value==='correct'){alert('✅ Correct! Gothic lettering represents uniform sans-serif structures.');}else{alert('❌ Try again!');}">
    <input type="radio" id="s7_o1" name="opt" value="wrong"> <label for="s7_o1">Roman Lettering</label><br>
    <input type="radio" id="s7_o2" name="opt" value="correct"> <label for="s7_o2">Gothic Lettering</label><br>
    <input type="radio" id="s7_o3" name="opt" value="wrong"> <label for="s7_o3">Script Lettering</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`
  }
];

async function seedW3InteractiveMaster() {
  console.log("Locating core Creative/Visual Arts subject paths for master sync...");
  const { data: subjects, error: sError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (sError || !subjects || subjects.length === 0) {
    console.error("❌ Critical: Subject entries matching filters missing.", sError);
    return;
  }

  console.log(`\nFound ${subjects.length} active subject rows. Executing master interactive deployment...`);

  for (const subjectRow of subjects) {
    console.log(` -> Injecting 7 responsive strands into row ID: [${subjectRow.id}] (${subjectRow.name})`);
    
    for (const strand of strandsMasterData) {
      await supabase.from('topics').upsert({
        subject_id: subjectRow.id,
        name: strand.name,
        description: strand.description,
        order_index: strand.order_index,
        content: strand.content
      }, { onConflict: 'subject_id,name' });
    }
  }

  console.log("\n🚀 MASTER RE-DEPLOYMENT CLEAN AND FULLY INTERACTIVE!");
}

seedW3InteractiveMaster();