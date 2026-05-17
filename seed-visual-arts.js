const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const strand1Content = `## Introduction to the Arts
The term **Arts** refers to the expression of creative human skill, feeling, and imagination. Arts are primarily appreciated for their aesthetic beauty and deep emotional value. 

Human beings experience and interact with the arts through five primary sensory faculties:
- **Sight:** Appreciating visual structures and layouts.
- **Hearing:** Perceiving rhythms, lyrics, and musical tones.
- **Touch:** Experiencing textures, shapes, and structural forms.
- **Smell:** Detecting aromatic artistic designs.
- **Taste:** Engaging culinary expressions and creative arts.

### Understanding Entrepreneurship in Art
**Entrepreneurship** is the intentional process of setting up, developing, and running a business venture with the primary goal of turning a profit. Within the creative ecosystem, it requires strategic marketing of physical goods, specialized services, and innovative creative ideas to build sustainability.

## Core Categories of Arts
The artistic landscape is divided into four distinct operational branches, each serving unique functional or expressive roles:

### 1. Visual Arts
These are art forms explicitly appreciated through the sense of sight. They carry strong emotional power and aesthetic beauty.
- **Examples:** Drawing, Painting, Montage, and Collage.

### 2. Applied Arts
Applied arts are closely related to visual arts but directly involve the making and decorating of everyday operational items. 
- **Utilitarian Focus:** Unlike pure fine art, these items are engineered explicitly for practical use or utilitarian purposes.

### 3. Performing Arts
This category involves live performances or structured presentations delivered directly to an audience. Artists manipulate three core elements for expression:
- **Body Movement:** Physical gestures and dance.
- **Facial Expression:** Conveying nuanced internal emotional states.
- **Voice Artistic Expression:** Spoken word, theatrical speech, or singing.

**Note**
Performing arts can be delivered live to a present audience or recorded for future media distribution.

### 4. Written or Literary Art
This branch involves creating stories, manuscripts, and literature holding deep artistic and cultural value. They showcase the intrinsic beauty of speech and structured language to convey complex thematic meaning.
- **Forms:** Stories, novels, scriptwriting, spoken films, and poetry.

## Research and Presentations in Art
Conducting research in the arts is essential for discovering new information about a specific area and gaining insight into diverse public viewpoints.

### Planning and Preparation Metrics
When preparing a formal art presentation, three critical pillars must be maintained:
1. **Relevance of Content:** Ensure all presented details directly tie back to the core topic. This keeps the speaker and audience aligned and prevents distractions. Organize information sequentially from what the audience already knows to brand-new concepts.
2. **Oral Presentation Delivery:** Use clear, appropriate language and expressions while maintaining consistent eye contact with your audience.
3. **Teamwork Dynamics:** Every group member must actively participate in both research and presentation delivery. Group responsibilities include background preparation, tracking sample artwork, managing audio/visual equipment, and answering audience questions. Always demonstrate mutual respect and unity.

### Presentation Guidelines
- **Introduction:** Introduce yourself and all group members clearly, then state the title of your presentation.
- **Body:** Discuss core definitions, supply varied examples, and showcase actual samples, charts, or drawings to emphasize key points.
- **Conclusion:** Open the floor to audience questions or feedback. Answer confidently, and thank the audience for their cooperation upon wrapping up.

## Career Pathways in the Arts
A **Career Pathway** is a structured area of study chosen to prepare an individual for a specific profession in the world of work. The creative field offers numerous career opportunities ranging from traditional fine arts to emerging digital design fields:

- **Fine Arts:** Professional Painter, Sculptor, Ceramist, Portrait Artist, Craft Artist, or Mixed Media Artist.
- **Film, Television, & Theatre:** Casting Director, Script Writer, Special Effects Artist, Makeup Artist, Animator, Film Director, Set/Stage Designer, Video Editor, Costume Designer, Backdrop Designer, or Photographer.
- **Architecture & Design:** Architectural Designer, Landscape Designer, Interior Designer, Drafter, Graphic Designer, 3D Animation Artist, or Restoration Architect.
- **Advertising & Media:** Graphic Designer, Animator, 3D Modeller, Digital Illustrator, Game Designer, Layout Artist, Multimedia Designer, or Web Designer.
- **Education & Curation:** Art Teacher, Educational Resource Designer, Art Curator, Museum Art Director, Art Dealer, or Art Program Coordinator.`;

async function seedVisualArts() {
  console.log("Querying curriculum paths matching 'Visual Arts' or 'Creative Arts'...");
  
  // Scans for your existing shell rows in the subjects table
  const { data: subjects, error: subjectError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (subjectError || !subjects || subjects.length === 0) {
    console.error("Could not find any matching Visual Arts or Creative Arts subject rows in your database layout.");
    return;
  }

  console.log(`Found ${subjects.length} active matching subject branches. Streaming data into 'topics' table...`);

  const topicsToInsert = [];
  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "The Arts and Entrepreneurship",
      description: "Explore core categories of arts, effective presentation skills, and professional career pathways.",
      order_index: 1,
      content: strand1Content
    });
  }

  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("Error inserting rows into 'topics' table:", error);
  } else {
    console.log("Success! Deep curriculum content populated cleanly across your platform shells:", data);
  }
}

seedVisualArts();