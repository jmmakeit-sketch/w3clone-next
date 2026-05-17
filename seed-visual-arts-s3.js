const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand3Content = `## Introduction to Painting and Color Theory
**Painting** is the artistic process of applying pigment, color, or paint medium onto a solid surface (such as paper, canvas, or walls) using a variety of application tools like brushes, sponges, or palette knives.

To produce balanced painted compositions, artists master **Color Theory**—the practical guidance mix of colors and the visual impacts of specific color combinations.

### Required Materials and Tools
- **Paints:** Pigments such as watercolours, poster paints, or acrylics.
- **Brushes:** Varying sizes (flat and round brushes) for line work and washes.
- **Palette:** A flat surface used for mixing different pigment quantities.
- **Water Containers & Cloth:** For cleaning brushes between color transitions.

---

## The Structure of the Color Wheel
A **Color Wheel** is an abstract illustrative organization of color hues around a circle, showcasing the structural relationships between primary, secondary, and tertiary colors.

### 1. Primary Colors
Primary colors are fundamental pigments that cannot be created by mixing any other colors together. They form the root source for all other colors on the wheel:
- **Red**
- **Yellow**
- **Blue**

### 2. Secondary Colors
Secondary colors are created by mixing equal parts of two primary colors together:
- **Orange** (Mixed from Red + Yellow)
- **Green** (Mixed from Blue + Yellow)
- **Violet / Purple** (Mixed from Blue + Red)

### 3. Tertiary Colors
Tertiary colors are produced by mixing an equal amount of a primary color with an adjacent secondary color. They use hyphenated names:
- **Red-Orange**
- **Yellow-Orange**
- **Yellow-Green**
- **Blue-Green**
- **Blue-Violet**
- **Red-Violet**

---

## Core Dimensions of Color
Every color observed holds three distinct structural attributes that define its overall appearance:

### 1. Hue
Hue refers to the pure name of the color itself, exactly as it appears on the standard spectrum or color wheel (e.g., pure red, pure blue, pure yellow-green).

### 2. Value
Value refers to the relative lightness or darkness of a color. An artist modifies the value of a color using two key blending techniques:
- **Tinting (Lightening):** Adding white paint to a pure hue to gradually make it lighter.
- **Shading (Darkening):** Adding black paint to a pure hue to gradually make it darker.

### 3. Intensity
Intensity refers to the relative brightness, purity, or saturation of a color. A color is at its highest intensity straight out of the tube. To lower or dull the intensity of a color, an artist mixes it with a small amount of **chromatic gray** or its exact opposite color on the color wheel.

---

## Creating Value and Intensity Charts

### The Value Gradation Strip
A **Value Chart** or value gradation strip is a linear grid showing a single color gradually changing from light to dark or vice versa. 

**Procedure to Paint a Value Chart:**
1. Draw a rectangular strip split into equal boxes (usually 5 to 7 boxes).
2. Paint the center box with a pure, unmixed hue (e.g., pure red).
3. To paint the lighter side (Tints): Add progressive amounts of white to the pure hue for each box moving outward.
4. To paint the darker side (Shades): Add progressive specks of black to the pure hue for each box moving in the opposite direction.

### The Intensity Scale
An **Intensity Scale** is a linear gradation strip showing a color gradually losing its brightness and shifting toward a dull, neutral tone.

**Procedure to Paint an Intensity Scale:**
1. Draw a grid strip of equal consecutive boxes on your layout paper.
2. Paint the starting box with your chosen pure hue at full intensity.
3. In a mixing palette, introduce tiny increments of chromatic gray or the complementary color into your pure hue.
4. Paint each box sequentially with the mixed formula, ensuring each block appears visibly duller than the last until a completely neutral tone is reached.`;

async function seedVisualArtsStrand3() {
  console.log("Locating dynamic Creative/Visual Arts subject paths...");
  
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject shells found matching target paths.", subjectError);
    return;
  }

  console.log(`Streaming Strand 2.2 Painting content into ${subjects.length} active platform streams...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "Painting, Color Wheels and Scales",
      description: "Explore color theory, construct primary/secondary/tertiary wheels, and paint progressive value and intensity charts.",
      order_index: 3, // Sorts right after perspective drawing
      content: strand3Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("❌ Database push failure:", error);
  } else {
    console.log("🚀 Success! Painting content populated across platform shells:", data);
  }
}

seedVisualArtsStrand3();