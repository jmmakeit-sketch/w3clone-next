const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand2Content = `## Introduction to Perspective Drawing
**Perspective** refers to the visual manner in which objects appear relative to each other based on their specific distance and position from the viewer[cite: 53]. 

**Perspective Drawing** is a structured artistic technique used to create an illusion of three-dimensional depth and distance on a completely flat, two-dimensional surface[cite: 54, 57]. This makes technical and observational renderings appear significantly more realistic[cite: 58]:
- **Proximity Scale:** Objects drawn near the viewer appear larger and clearer than those placed further away[cite: 55].
- **Versatility:** Perspective techniques apply universally across all categories of drawing, including expansive landscapes and structured still-life arrangements[cite: 56].

### Required Materials and Tools
To execute perspective drawings accurately, ensure the following core drawing instruments are prepared[cite: 58]:
- **Pencils:** For plotting initial layout paths and applying tonal values[cite: 58].
- **Rulers:** For maintaining perfectly straight structural paths and vector grids[cite: 58].
- **Paper:** Clean white drawing media or grid material[cite: 58].
- **Erasers:** For clearing convergence lines and structural guidelines[cite: 58].

## Structural Components of Perspective
Building a mathematically sound perspective layout requires mapping three foundational guidelines[cite: 59]:

### 1. Projection or Convergence Lines
These are straight parallel lines running along the edges of an object that appear to lean inward and converge as they recede further back from the viewer's field of vision[cite: 60]. If tracked continuously, they intersect perfectly at a singular focus[cite: 61].

### 2. Vanishing Point
The singular location where all projected convergence lines meet and completely disappear from view[cite: 62]. **Note:** The vanishing point is always locked precisely along the line of the horizon[cite: 63].

### 3. Horizon Line
In physical geography, the horizon represents the natural boundary line where the sky appears to meet the ground[cite: 64]. In technical perspective artwork, it refers to a perfectly straight horizontal axis established along the viewer's immediate eye level containing the vanishing points[cite: 64].

**Note**
A **One-Point Perspective** configuration is created inside a drawing frame that uses exactly one vanishing point[cite: 65]. The planes of objects directly facing the viewer remain flat, constructed strictly out of standard horizontal and vertical lines[cite: 66].

## Understanding Viewpoints and Eye Levels
The precise location of the horizon line and vanishing point is determined entirely by the physical position of the observer[cite: 71]. Drawings are mapped using three distinct eye-view categories[cite: 72]:

### 1. Normal Eye View
The target object sits at the exact same vertical level as the observer's eyes[cite: 75]. From this perspective, the viewer primarily sees the direct front and exposed vertical sides of the object, with neither the top nor bottom visible[cite: 76].

### 2. Bird's Eye View
The observer looks down at the object from a high vantage point above[cite: 77]. In a bird's eye view mapping, the viewer sees the absolute top plane of the target form[cite: 78].

### 3. Worm's Eye View
The observer looks up at an object from a low vantage point underneath[cite: 73]. In a worm's eye setup, the target sits completely above the viewer's head, showing primarily its bottom plane[cite: 74, 88].

## Step-by-Step Cuboid Mapping
A **cuboid** is a solid three-dimensional structure containing six rectangular faces (or four rectangular sides paired with two square bases)[cite: 80, 81]. Common real-world examples include packaging boxes, books, suitcases, and structural building blocks[cite: 82].

### Drawing a Cuboid from Normal Eye View
1. Use your ruler to draw a perfectly straight horizontal **Horizon Line** across your paper[cite: 58, 64].
2. Place a single dot on this line to establish your **Vanishing Point**[cite: 63].
3. Draw a flat rectangle or square representing the front face of your cuboid either directly to the left or right of your vanishing point[cite: 66, 82].
4. Using a light pencil stroke, trace straight lines from every corner of your rectangle directly back to the vanishing point[cite: 58, 67]. These form your **Projection Lines**[cite: 60].
5. Draw a vertical line between your top and bottom projection paths to define the physical depth of your cuboid.
6. Darken the final visible outlines and erase any remaining lines leading back to the vanishing point to complete your solid form[cite: 58].

## Still Life Compositions with Cuboids
A **still life** is an artistic rendering of non-living objects arranged purposefully on a display surface[cite: 89]. A **composition** involves strategically balancing and positioning these distinct elements together within your drawing frame to create visual harmony[cite: 91].

### Setting Up an Optimized Still Life Composition:
- **Surface Prep:** Establish a stable baseline table or counter surface to anchor your objects[cite: 92].
- **Object Selection:** Collect local everyday environmental items built out of fundamental cuboid structures (such as storage boxes, text books, mathematical sets, or wooden blocks)[cite: 92, 93].
- **Focal Point:** Position objects with varied dimensions, sizes, and colors to create an explicit center of interest for the eye[cite: 93].
- **Overlapping Techniques:** Intentionally place elements with slight overlapping layers to build true physical depth within the frame[cite: 94].
- **Alignment:** Arrange your large items centrally and ensure cuboid planes remain parallel to one another so they resolve cleanly to your single vanishing point layout[cite: 94].`;

async function seedVisualArtsStrand2() {
  console.log("Locating core Creative/Visual Arts subject paths...");
  
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("No active subject shells found matching target routes.", subjectError);
    return;
  }

  console.log(`Streaming Strand 2 content into ${subjects.length} active platform streams...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "One-Point Perspective Drawing",
      description: "Master picture making using horizons, vanishing points, eye levels, and structured cuboid still life compositions.",
      order_index: 2, // Sorts cleanly right after Strand 1
      content: strand2Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("❌ Database push failure:", error);
  } else {
    console.log("🚀 Success! Strand 2.0 populated across platform shells:", data);
  }
}

seedVisualArtsStrand2();