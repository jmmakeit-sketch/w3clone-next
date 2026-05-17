const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strandsData = [
  {
    name: "Strand 1.0: The Arts and Entrepreneurship",
    description: "Direct definitions, structural categories of arts, presentation metrics, and career clusters.",
    order_index: 1,
    content: `# Strand 1.0: The Arts and Entrepreneurship

## Categories of Arts
**Arts** is a general term used to describe the expression of creative human skill, feeling, and imagination. This is mainly appreciated for beauty and emotional value.

The arts can be experienced through the following human faculties:
- Sense of sight
- Hearing
- Touch
- Smell
- Taste

### The 4 Core Branches of Art

#### 1. Visual Arts
These are art forms appreciated through the sense of sight. They are appreciated for their emotional power and beauty.
- **Examples:** Drawing, painting, montage, collage.

#### 2. Applied Arts
Applied arts are related to visual arts but involve the making and decorating of everyday items. These items are created for practical use or utilitarian purposes.

#### 3. Performing Arts
Performing arts involve a live performance or presentation to an audience. Artists use the following expressions:
- Body movement
- Facial expression
- Voice artistic expression

**Note:** Performing arts can be done live to an audience or recorded for future use.

#### 4. Written or Literary Art
This involves the writing of stories, poems, or texts that have artistic and cultural value. They display the beauty of speech and language to convey meaning.

---

## Entrepreneurship
**Entrepreneurship** is the process of setting up, developing, and running a business with the aim of getting a profit. It requires marketing goods, services, and new ideas in order to make a profit.

### Research and Presentation in the Arts
Research is carried out to find out new information about an item or a subject matter, or to know what people think about it.

#### Essential Presentation Requirements:
1. **Relevance of Content:** The content must be relevant to the topic. It helps the speaker stay on topic and prevent distraction. Information should move from known to unknown.
2. **Oral Presentation:** Use clear and simple language, use facial expressions, and maintain eye contact with the audience.
3. **Teamwork:** Every member should take part in both research and presentation. Group duties include writing down notes, collecting samples, setting up equipment, and answering questions. Respect and cooperation are mandatory.

#### Presentation Guidelines:
- **Introduction:** Introduce yourself and group members, and state the topic of presentation.
- **Body:** Define terms, give examples, and show samples, charts, or drawings.
- **Conclusion:** Allow the audience to ask questions or give comments. Answer questions appropriately and thank the audience.

---

## Career Pathways in the Arts
A **career pathway** is a cluster of occupations or jobs that are grouped together because they require similar knowledge or skills.

| Pathway Field | Career Opportunities |
| :--- | :--- |
| **Fine Arts** | Painter, Sculptor, Ceramist, Portrait Artist, Craft Artist, Mixed Media Artist |
| **Film & Theatre** | Casting Director, Scriptwriter, Special Effects Artist, Makeup Artist, Animator, Film Director, Stage Designer, Video Editor, Costume Designer, Photographer |
| **Design & Architecture** | Architectural Designer, Landscape Designer, Interior Designer, Draftsman, Graphic Designer, 3D Animator, Restorer |
| **Advertising & Media** | Graphic Designer, Animator, 3D Modeler, Digital Illustrator, Game Designer, Layout Artist, Multimedia Designer, Web Designer |
| **Education & Heritage** | Art Teacher, Developer of Educational Resources, Art Curator, Museum Art Director, Art Dealer, Manager of Art Programs |`
  },
  {
    name: "Strand 2.1: One-Point Perspective Drawing",
    description: "Direct layout elements, structural rules, eye levels, and step-by-step cuboid compositions.",
    order_index: 2,
    content: `# Strand 2.0: Picture Making\n## Lesson 2.1: One-Point Perspective Drawing

**Perspective** is how objects look to our eyes based on their distance and position from the viewer.

**Perspective Drawing** is a technique used to create an illusion of three-dimensional depth (3D) on a flat two-dimensional (2D) surface.
- Objects close to the viewer appear larger and clearer than those far away.
- It is used in all forms of drawing, such as landscapes and still life.

### Materials Required for Perspective Drawing:
- Pencils (for lines and shading)
- Ruler (for straight lines)
- Paper/Drawing book
- Eraser

---

## Elements of Perspective Drawing

### 1. Projection Lines (Convergence Lines)
These are lines on the edges of an object that look like they lean and meet at one point as they go further away.

### 2. Vanishing Point (VP)
This is the single point where all projection lines look like they meet and disappear. 
- **Rule:** The vanishing point is always located on the horizon line.

### 3. Horizon Line
This is the line where the sky and the ground seem to meet. In perspective drawing, the horizon line represents the **eye level** of the observer.

**Note:** **One-point perspective drawing** uses only one vanishing point. The faces of objects facing the viewer are flat, made of horizontal and vertical lines.

---

## Viewpoints and Eye Levels
The position of the horizon line changes based on where the viewer is looking from. There are three primary viewpoints:

### 1. Normal Eye Level View
The object is at the same level as the viewer's eyes. You see the front and sides of the object, but you cannot see the top or the bottom.

### 2. Bird's Eye Level View
The viewer is looking down at the object from a high position. The horizon line is high up, and you can see the top of the object.

### 3. Worm's Eye Level View
The viewer is looking up at the object from a low position. The horizon line is very low, and you can see the bottom plane of the object.

---

## Drawing a Cuboid in One-Point Perspective

A **cuboid** is a solid box-like 3D object that has 6 faces (such as boxes, books, suitcases, bricks, and blocks).

### Step-by-Step Procedure (Normal Eye View):
1. Draw a horizontal line to represent the **Horizon Line**.
2. Place a dot on the line to mark the **Vanishing Point (VP)**.
3. Draw a flat rectangle to represent the front of the cuboid either to the left or right of the VP.
4. Draw light straight lines from each corner of the rectangle to the **Vanishing Point**. These are your projection lines.
5. Draw a vertical line between the top and bottom projection lines to mark the back depth of your cuboid.
6. Make the visible edges dark and erase the remaining guidelines going to the VP.

---

## Still Life Composition with Cuboids

A **still life** is a drawing or painting of non-living objects arranged together on a surface. A **composition** is how these items are arranged within the drawing space.

### Rules for Setting up a Cuboid Still Life Composition:
- Place the objects on a flat, stable surface like a table.
- Choose local items that are cuboid shapes (e.g., matchboxes, text books, geometric boxes, blocks).
- Arrange objects of different sizes and colors to create a clear center of interest.
- Use **overlapping** (placing one object slightly in front of another) to create depth.
- Ensure the sides of the cuboid shapes match up with your single vanishing point setup.`
  },
  {
    name: "Strand 2.2: Painting, Color Wheels and Scales",
    description: "Color classifications, dimensions of color, and step-by-step gradation chart construction.",
    order_index: 3,
    content: `# Strand 2.2: Painting, Color Wheels and Scales

## Introduction to Color Theory
**Painting** is the art of applying pigment or color medium onto a solid surface (such as paper or canvas) to express ideas or feelings. To paint effectively, an artist must understand the structured relationships of colors found on a **Color Wheel**.

---

## Classifications of Colors

### 1. Primary Colors
These are basic or fundamental colors that cannot be created by mixing any other colors together. All other colors are derived from them.
- Red
- Yellow
- Blue

### 2. Secondary Colors
These are colors created by mixing equal amounts of two primary colors.

| Primary Mix | Resulting Secondary Color |
| :--- | :--- |
| Red + Yellow | **Orange** |
| Blue + Yellow | **Green** |
| Blue + Red | **Violet / Purple** |

### 3. Tertiary Colors
These are colors created by mixing an equal amount of a primary color with an adjacent secondary color. They use hyphenated names:
- Red-Orange
- Yellow-Orange
- Yellow-Green
- Blue-Green
- Blue-Violet
- Red-Violet

---

## Dimensions of Color
Every color has three core characteristics that define its appearance and how it behaves when mixed:

### 1. Hue
Hue refers to the pure name of the color itself, as found on the color spectrum or the color wheel (e.g., pure green, pure blue-violet).

### 2. Value
Value refers to the lightness or darkness of a color. It is modified using two distinct techniques:
- **Tinting:** Adding white to a color to make it gradually lighter.
- **Shading:** Adding black to a color to make it gradually darker.

### 3. Intensity
Intensity refers to the brightness, purity, or saturation of a color. A color is at its highest intensity straight out of its container. To lower or dull its intensity, an artist mixes it with **chromatic gray** or its exact opposite color on the wheel.

---

## Step-by-Step Color Exercises

### How to Paint a Value Gradation Strip (Value Chart)
A value gradation strip is a linear grid showing a single color gradually changing in value.

1. Draw a strip of 5 to 7 consecutive, equal boxes on your paper.
2. Paint the exact center box with a pure hue (e.g., pure blue).
3. **To Tint:** Progressively add small increments of white paint to the pure hue for each box moving to the left.
4. **To Shade:** Progressively add small specks of black paint to the pure hue for each box moving to the right.

### How to Paint an Intensity Scale
An intensity scale is a gradation strip showing a color gradually losing its brightness.

1. Draw a linear grid layout of equal boxes.
2. Paint the first box with a chosen pure hue at full intensity.
3. Mix a tiny amount of chromatic gray into your pure hue in your palette.
4. Paint each consecutive box with the new mixture, making each block visibly duller than the last until it reaches a completely neutral tone.`
  },
  {
    name: "Strand 2.3: Drawing Human Forms and Proportions",
    description: "Mastering the head fraction method, sketching armatures, and geometric bulking techniques.",
    order_index: 4,
    content: `# Strand 2.3: Drawing Human Forms and Proportions

## Introduction to Proportions
Drawing the **human form** involves capturing the natural stance, balance, and physical structural guidelines of the human body. To do this accurately without distorting limbs, artists use the system of **Proportion**.

**Proportion** is the relationship between the size, scale, and positioning of individual body parts compared to the whole figure.

---

## The Head Fraction Method
In standard art instruction, human proportions are measured out using the height of the individual's **head** as a baseline unit of scale.

### Proportional Benchmarks for an Average Human Figure:
- **Total Body Height:** An average adult figure measures **7 to 7.5 head units** tall from top to bottom.
- **The Torso & Elbows:** The waistline and elbows generally line up at the bottom of the **3rd head unit**.
- **The Hips & Pelvis:** The pelvic region splits the overall height of the figure exactly in half, resting at the bottom of the **4th head unit**.
- **The Knees:** The joints of the knees align roughly at the bottom of the **6th head unit**.

---

## Step-by-Step Human Drawing Procedure

### Step 1: Draw the Armature (Stick Figure)
An **armature** is an underlying structural frame or simple skeleton used to plan out actions, stance positions, and structural balance lines before drawing skin or volume.
- Sketch a continuous vertical line for the spine.
- Mark small circles or nodes where major joints are placed (shoulders, elbows, wrists, hips, knees, and ankles).
- Verify distances between nodes using your baseline head unit scale to check your limb lengths.

### Step 2: Bulk Out with Geometric Shapes
Build mass and volume by wrapping simplified 2D/3D shapes around your internal armature stick figure:
- **Head:** Draw an oval or inverted egg shape.
- **Torso & Chest:** Draw a large rectangular box or chest block.
- **Hips:** Draw a trapezoid shield or smaller block.
- **Limbs:** Use continuous cylindrical tubes or elongated rectangles to define arms and legs.

### Step 3: Draw Contours and Shading
- Draw smooth, continuous organic contour outlines over your geometric blocks to form a realistic skin silhouette.
- Carefully erase the inner stick figures and geometric box guidelines.
- Observe where your light source is located, and apply cross-hatching or blended tonal shading on the opposite side to give the figure 3D volume.`
  },
  {
    name: "Strand 3.0: Indigenous Kenyan Crafts and Basketry",
    description: "Fiber sourcing, processing cycles, and comparative twining versus coiling mechanics.",
    order_index: 5,
    content: `# Strand 3.0: Indigenous Kenyan Crafts

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
- **Sustainability:** Branding items as organic, plastic-free alternatives for global shoppers.`
  },
  {
    name: "Strand 4.0: Ornaments and Traditional Beadwork",
    description: "Assembly methodologies and the cultural color matrix of Kenyan beadwork.",
    order_index: 6,
    content: `# Strand 4.0: Ornaments and Traditional Beadwork

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
5. **Clasp Attachment:** Tie off your final loop or hook clasp securely and cut away excess string.`
  },
  {
    name: "Strand 5.0: Graphic Design and Typography",
    description: "Lettering classifications, mechanical versus optical spacing rules, and step-by-step layout design instructions.",
    order_index: 7,
    content: `# Strand 5.0: Graphic Design and Typography

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
4. **Inking and Enhancing:** Trace your final shapes with a dark marker or paint medium, filling in the letters completely. Erase all underlying pencil grid lines once dry to finalize your presentation.`
  }
];

async function seedW3Master() {
  console.log("Searching database for target Visual Arts/Creative Arts subject channels...");
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("❌ Critical: No active subject matching records discovered.", subjectError);
    return;
  }

  console.log(`\nFound ${subjects.length} active subject streams. Commencing master full-course deployment...`);

  for (const subjectRow of subjects) {
    console.log(` -> Injecting 7 comprehensive strands into subject ID: [${subjectRow.id}] (${subjectRow.name})`);
    
    for (const topicData of strandsData) {
      const { error } = await supabase.from('topics').upsert({
        subject_id: subjectRow.id,
        name: topicData.name,
        description: topicData.description,
        order_index: topicData.order_index,
        content: topicData.content
      }, { onConflict: 'subject_id,name' });

      if (error) {
        console.error(`    ❌ Error on [${topicData.name}]:`, error.message);
      }
    }
  }

  console.log("\n🚀 MASTER RE-DEPLOYMENT SUCCESSFUL! All 7 sequential strands are fully live in pure W3Schools syntax.");
}

seedW3Master();