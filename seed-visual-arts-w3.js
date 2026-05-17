const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const w3Strand1Content = `# Strand 1.0: The Arts and Entrepreneurship

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
| **Education & Heritage** | Art Teacher, Developer of Educational Resources, Art Curator, Museum Art Director, Art Dealer, Manager of Art Programs |`;

const w3Strand2Content = `# Strand 2.0: Picture Making
## Lesson 2.1: One-Point Perspective Drawing

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
- Ensure the sides of the cuboid shapes match up with your single vanishing point setup.`;

async function seedW3Content() {
  console.log("Searching database for matching subject channels...");
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject entries found to attach content packages.", subjectError);
    return;
  }

  console.log(`Found ${subjects.length} active subject rows. Overwriting placeholder shells with clean, literal text...`);

  for (const subjectRow of subjects) {
    // 1. Injected Literal Strand 1
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 1.0: The Arts and Entrepreneurship",
      description: "Direct definitions, structural categories of arts, presentation metrics, and career clusters.",
      order_index: 1,
      content: w3Strand1Content
    }, { onConflict: 'subject_id,name' });

    // 2. Injected Literal Strand 2
    await supabase.from('topics').upsert({
      subject_id: subjectRow.id,
      name: "Strand 2.1: One-Point Perspective Drawing",
      description: "Direct layout elements, structural rules, eye levels, and step-by-step cuboid compositions.",
      order_index: 2,
      content: w3Strand2Content
    }, { onConflict: 'subject_id,name' });
  }

  console.log("🚀 Success! Real-time literal content package synced completely across all page channels.");
}

seedW3Content();