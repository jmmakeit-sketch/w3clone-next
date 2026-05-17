const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const quizQuestions = [
  {
    topic_name: "Strand 1.0: The Arts and Entrepreneurship",
    question: "Which category of art is specifically characterized by live performances to an audience utilizing voice, body movements, and expressions?",
    options: ["Visual Arts", "Applied Arts", "Performing Arts", "Literary Arts"],
    correct_answer: "Performing Arts",
    explanation: "Performing arts involve live expressions via voice and movement like drama and music, while applied arts focus on decorating everyday functional items."
  },
  {
    topic_name: "Strand 2.1: One-Point Perspective Drawing",
    question: "When a drawing features a horizon line that sits low on the canvas, showing the bottom surfaces of objects, what is this specific viewpoint called?",
    options: ["Bird's Eye View", "Normal Eye View", "Worm's Eye View", "Aerial View"],
    correct_answer: "Worm's Eye View",
    explanation: "A Worm's eye view looks from the ground up, placing the horizon line low and revealing the bottom structures of drawn objects."
  },
  {
    topic_name: "Strand 2.2: Painting, Color Wheels and Scales",
    question: "What color is produced by mixing equal amounts of the primary colors Blue and Red together?",
    options: ["Green", "Orange", "Violet / Purple", "Red-Orange"],
    correct_answer: "Violet / Purple",
    explanation: "Mixing primary Blue and primary Red yields the secondary color Violet/Purple. Blue + Yellow makes Green, and Red + Yellow makes Orange."
  },
  {
    topic_name: "Strand 3.0: Indigenous Kenyan Crafts and Basketry",
    question: "Which basketry technique is characterized by twisting moving horizontal weft strands around fixed vertical warp strands?",
    options: ["Coiling", "Twining", "Appliqué", "Decortication"],
    correct_answer: "Twining",
    explanation: "Twining uses moving horizontal horizontal lines (wefts) wrapped around straight vertical support paths (warps) to establish tight fiber walls."
  },
  {
    topic_name: "Strand 4.0: Ornaments and Traditional Beadwork",
    question: "In the traditional color symbolism of Kenyan beadwork, what core message is conveyed by the color White?",
    options: ["Bravery and unity", "Peace, health, and milk nourishment", "Rainwater and spiritual blessings", "Fertility and growth"],
    correct_answer: "Peace, health, and milk nourishment",
    explanation: "White represents peace, pure health, and milk nourishment in local communities. Red stands for bravery, and Blue signifies water blessings."
  }
];

async function seedW3QuizEngine() {
  console.log("Searching database for matching Grade 7 subject tracks...");
  const { data: subjects, error: sError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (sError || !subjects || subjects.length === 0) {
    console.error("No target records found.", sError);
    return;
  }

  console.log(`Found ${subjects.length} active subject records. Syncing question matrix rows...`);

  // Verify if a quizzes schema table exists, if not we fall back to embedding into dynamic metadata extensions
  for (const subjectRow of subjects) {
    const { data: topics, error: tError } = await supabase
      .from('topics')
      .select('id, name')
      .eq('subject_id', subjectRow.id);

    if (tError || !topics) continue;

    for (const q of quizQuestions) {
      const matchedTopic = topics.find(t => t.name.startsWith(q.topic_name.substring(0, 10)));
      if (!matchedTopic) continue;

      // Update the topics table metadata block to append explicit question payloads cleanly
      const quizBlock = `\n\n--- \n\n## 📝 Interactive Course Exam Checkpoint\n\n<div class="w3-card w3-padding" style="padding:20px; border-radius:6px; background-color:#fff; border:1px solid #dfdfdf;">\n  <h4><b>Exam Challenge:</b> ${q.question}</h4>\n  <form onsubmit="event.preventDefault(); if(this.q_ans.value==='correct'){alert('🎉 Correct! ${q.explanation.replace(/'/g, "\\'")}');}else{alert('❌ Incorrect. Please check the reference notes above and try again.');}">\n    ${q.options.map((opt, idx) => `<input type="radio" id="opt_${matchedTopic.id}_${idx}" name="q_ans" value="${opt === q.correct_answer ? 'correct' : 'wrong'}"> <label for="opt_${matchedTopic.id}_${idx}">${opt}</label><br>`).join('\n    ')}\n    <br><button type="submit" class="w3-btn w3-green">Check My Answer</button>\n  </form>\n</div>`;

      // Fetch current content to append without destruction
      const { data: currentRecord } = await supabase
        .from('topics')
        .select('content')
        .eq('id', matchedTopic.id)
        .single();

      if (currentRecord && !currentRecord.content.includes("Interactive Course Exam Checkpoint")) {
        await supabase.from('topics').update({
          content: currentRecord.content + quizBlock
        }).eq('id', matchedTopic.id);
      }
    }
  }

  console.log("🚀 Success! Dynamic quiz banks injected cleanly into topic nodes.");
}

seedW3QuizEngine();