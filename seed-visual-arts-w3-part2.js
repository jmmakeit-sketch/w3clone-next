const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const w3Strand3Content = `# Strand 2.2: Painting, Color Wheels and Scales

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
4. Paint each consecutive box with the new mixture, making each block visibly duller than the last until it reaches a completely neutral tone.`;

const w3Strand4Content = `# Strand 2.3: Drawing Human Forms and Proportions

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
- Observe where your light source is located, and apply cross-hatching or blended tonal shading on the opposite side to give the figure 3D volume.`;

async function seedW3Part2() {
  console.log("Searching database for matching subject channels...");
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject channels found.", subjectError);
    return;
  }

  console.log(`Found ${subjects.length} active subject rows. Injecting W3Schools content for Strands 2.2 & 2.3...`);

  for (const subjectRow of subjects) {
    // Upsert Section 2.2 (Painting & Color Scales)
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 2.2: Painting, Color Wheels and Scales",
      description: "Color classifications, dimensions of color, and step-by-step gradation chart construction.",
      order_index: 3,
      content: w3Strand3Content
    }, { onConflict: 'subject_id,name' });

    // Upsert Section 2.3 (Human Forms)
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 2.3: Drawing Human Forms and Proportions",
      description: "Mastering the head fraction method, sketching armatures, and geometric bulking techniques.",
      order_index: 4,
      content: w3Strand4Content
    }, { onConflict: 'subject_id,name' });
  }

  console.log("🚀 Success! Painting and Human Forms modules are now streaming live in W3Schools format.");
}

seedW3Part2();