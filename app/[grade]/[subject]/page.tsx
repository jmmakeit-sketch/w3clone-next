"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import NavSync from "../../components/NavSync";

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

const PATHWAY_COLORS: Record<string, string> = {
  "Early Years": "#FF9800",
  "Lower Primary": "#2196F3",
  "Upper Primary": "#9C27B0",
  "Junior Secondary": "#F44336",
  "Senior Secondary": "#607D8B",
};

// Static subject content for PP1 and PP2
const STATIC_SUBJECTS: Record<string, Record<string, {
  description: string;
  pathway: string;
  color: string;
  whatYouLearn: string[];
  topics: { name: string; desc: string; strands: string[] }[];
  sbaNote: string;
  prevLabel: string; prevHref: string;
  nextLabel: string; nextHref: string;
}>> = {
  "pp1": {
    "language-activities": {
      description: "Language Activities in PP1 develops foundational communication skills in the child's mother tongue, Kiswahili and English. Through songs, stories, rhymes and conversations, children learn to listen carefully, speak confidently and begin recognising letters and sounds that prepare them for reading and writing in Grade 1.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Listen attentively to stories, songs and instructions",
        "Speak clearly and confidently in their home language",
        "Identify and name all 26 letters of the alphabet",
        "Match letters to their sounds (phonemic awareness)",
        "Recognise common sight words (the, I, a, and, is)",
        "Hold a pencil correctly and trace pre-writing strokes",
        "Retell a simple story in their own words",
        "Sing songs and recite rhymes with correct rhythm",
      ],
      topics: [
        { name: "Listening & Speaking", desc: "Children develop active listening skills through stories, songs and class discussions. They learn to respond to questions, follow two-step instructions and take turns in conversation.", strands: ["Active Listening", "Oral Expression", "Turn-Taking", "Following Instructions"] },
        { name: "Reading Readiness", desc: "Introduces phonemic awareness — the ability to hear and manipulate sounds in words. Children learn letter names, letter sounds and begin blending simple CVC words (cat, dog, sit).", strands: ["Letter Names", "Letter Sounds", "Phonemic Awareness", "Sight Words"] },
        { name: "Writing Readiness", desc: "Develops the fine motor control and pencil grip needed for writing. Children trace pre-writing strokes — lines, curves, circles and zigzags — before progressing to letter formation.", strands: ["Pencil Grip", "Pre-Writing Strokes", "Letter Tracing", "Drawing & Colouring"] },
        { name: "Creative Expression", desc: "Children express ideas through storytelling, drama, puppet play and drawing. This strand builds vocabulary, imagination and confidence in using language creatively.", strands: ["Storytelling", "Drama & Role Play", "Vocabulary Building", "Creative Drawing"] },
      ],
      sbaNote: "Language Activities assessment in PP1 uses observation records, oral participation notes and portfolio samples of pre-writing work. There are no written tests.",
      prevLabel: "PP1 Overview", prevHref: "/pp1",
      nextLabel: "Mathematical Activities", nextHref: "/pp1/mathematical-activities",
    },
    "mathematical-activities": {
      description: "Mathematical Activities in PP1 builds number sense, spatial awareness and logical thinking through hands-on play. Children use real objects — stones, blocks, bottle tops and counters — to explore counting, sorting, shapes and patterns before any abstract notation is introduced.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Count objects from 1 to 20 correctly",
        "Match numerals to quantities (e.g. the digit 5 to 5 objects)",
        "Sort and classify objects by colour, shape and size",
        "Identify basic 2D shapes: circle, square, triangle, rectangle",
        "Understand concepts: more/less, big/small, heavy/light, full/empty",
        "Recognise and continue simple AB and ABC patterns",
        "Arrange objects in order: first, second, third",
        "Understand positional language: on, under, beside, between",
      ],
      topics: [
        { name: "Numbers 1–20", desc: "Children count objects in their environment, match numerals to quantities and practise one-to-one correspondence. Number concepts are always introduced with physical objects before symbols.", strands: ["Counting 1–20", "Numeral Recognition", "One-to-One Correspondence", "Number Order"] },
        { name: "Sorting & Classifying", desc: "Using everyday objects, children sort by one or more attributes: colour, shape, size or texture. Sorting builds the logical thinking foundation for all future mathematics.", strands: ["Sort by Colour", "Sort by Shape", "Sort by Size", "Two-Attribute Sorting"] },
        { name: "Shapes & Space", desc: "Children identify, name and describe 2D shapes in their environment. They explore spatial concepts through building, drawing and positional language games.", strands: ["2D Shapes", "Positional Language", "Building & Construction", "Shape in Environment"] },
        { name: "Patterns", desc: "Recognising and extending patterns is a key mathematical thinking skill. Children identify repeating patterns in colours, shapes, sounds and movement, then create their own.", strands: ["AB Patterns", "ABC Patterns", "Sound Patterns", "Movement Patterns"] },
        { name: "Measurement", desc: "Using non-standard units (hand spans, sticks, cups), children compare length, weight and capacity. Formal units (cm, kg, l) are not introduced until Grade 1.", strands: ["Length Comparison", "Weight Comparison", "Capacity", "Time Concepts"] },
      ],
      sbaNote: "Mathematical Activities SBA uses observation of practical tasks, activity sheets and teacher checklists. Children demonstrate understanding physically — not through written tests.",
      prevLabel: "Language Activities", prevHref: "/pp1/language-activities",
      nextLabel: "Environmental Activities", nextHref: "/pp1/environmental-activities",
    },
    "environmental-activities": {
      description: "Environmental Activities in PP1 explores the world immediately around the child — their body, family, home, school and local community. Through observation, exploration and simple investigations, children develop early science, social studies and health awareness.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Name and point to main parts of the human body",
        "Describe their family members and their roles",
        "Identify common animals and the sounds they make",
        "Name common plants found in their environment",
        "Describe and compare weather: sunny, rainy, windy, cloudy",
        "Distinguish between living and non-living things",
        "Practise basic hygiene: handwashing, teeth brushing, clean clothes",
        "Identify safe and unsafe situations at home and school",
      ],
      topics: [
        { name: "My Body", desc: "Children name external body parts, understand their functions and practise personal hygiene routines. Body awareness is the starting point for health education throughout the CBC.", strands: ["Body Parts", "Body Functions", "Personal Hygiene", "Keeping Safe"] },
        { name: "My Family & Home", desc: "Explores family structure, family roles and the home environment. Children describe their homes, name family members and understand responsibilities within the family.", strands: ["Family Members", "Family Roles", "My Home", "Caring for Each Other"] },
        { name: "Animals & Plants", desc: "Children observe and name common animals and plants in their local environment. They learn what animals eat, where they live and how plants grow from seeds.", strands: ["Common Animals", "Animal Sounds & Homes", "Common Plants", "How Plants Grow"] },
        { name: "Weather & Seasons", desc: "Through daily weather observation, children describe and record weather conditions. They learn how weather affects clothing, food and daily activities in their community.", strands: ["Weather Observation", "Types of Weather", "Weather & Clothing", "Seasonal Changes"] },
        { name: "Health & Safety", desc: "Introduces basic health habits and safety rules. Children learn road safety, stranger danger, fire safety and the importance of reporting unsafe situations to trusted adults.", strands: ["Handwashing", "Road Safety", "Fire Safety", "Staying Safe"] },
      ],
      sbaNote: "Environmental Activities assessment uses observation records during outdoor activities, drawing tasks and oral questioning. Teachers note each child's ability to connect classroom learning to their real environment.",
      prevLabel: "Mathematical Activities", prevHref: "/pp1/mathematical-activities",
      nextLabel: "Psychomotor & Creative", nextHref: "/pp1/psychomotor-and-creative-activities",
    },
    "psychomotor-and-creative-activities": {
      description: "Psychomotor & Creative Activities in PP1 develops physical coordination, creativity and self-expression through movement, art, music and drama. This learning area is critical for brain development and directly prepares children for the fine motor control needed in writing, drawing and practical work.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Run, jump, hop, skip and balance with increasing control",
        "Throw and catch a ball using two hands",
        "Use scissors safely to cut along straight and curved lines",
        "Hold a crayon/pencil correctly and colour within lines",
        "Mould shapes using clay or playdough",
        "Sing simple songs with correct pitch and rhythm",
        "Participate in simple drama and role play activities",
        "Create artwork using paint, crayons, paper and natural materials",
      ],
      topics: [
        { name: "Gross Motor Skills", desc: "Large body movement activities develop strength, balance and coordination. Children run races, play catching games, hop on one foot and navigate obstacle courses built from classroom furniture.", strands: ["Running & Jumping", "Balance & Coordination", "Ball Skills", "Outdoor Play"] },
        { name: "Fine Motor Skills", desc: "Small, precise hand movements are developed through cutting, colouring, threading, moulding and drawing. Fine motor control is directly linked to writing readiness.", strands: ["Cutting & Folding", "Colouring & Drawing", "Moulding & Shaping", "Threading & Lacing"] },
        { name: "Art & Craft", desc: "Children create artwork using a wide variety of materials: paint, crayons, natural materials (leaves, seeds), recycled items and fabric. Art develops creativity, self-expression and visual thinking.", strands: ["Painting", "Collage & Printing", "3D Models", "Nature Art"] },
        { name: "Music & Movement", desc: "Songs, rhymes, clapping rhythms and simple percussion instruments develop musical awareness, listening skills and physical coordination. Music also reinforces language and number learning.", strands: ["Singing", "Rhythm & Clapping", "Simple Instruments", "Action Songs"] },
        { name: "Drama & Role Play", desc: "Through pretend play, storytelling drama and role play, children develop imagination, social skills, language and emotional intelligence. The home corner, market and hospital are common role play environments.", strands: ["Role Play", "Storytelling Drama", "Puppetry", "Mime & Expression"] },
      ],
      sbaNote: "Psychomotor & Creative assessment focuses on participation, effort and development over time — not perfection. Teachers use observation checklists, portfolio photos and activity records.",
      prevLabel: "Environmental Activities", prevHref: "/pp1/environmental-activities",
      nextLabel: "Religious Education", nextHref: "/pp1/religious-education",
    },
    "religious-education": {
      description: "Religious Education in PP1 introduces children to values, morals and spiritual foundations appropriate to their family faith background. The focus is entirely on character development — love, kindness, honesty, respect and sharing — delivered through stories, songs, prayer and simple activities. Schools offer CRE (Christian), IRE (Islamic) or HRE (Hindu) based on the learner's background.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Understand and demonstrate the value of love and kindness",
        "Know the importance of honesty and telling the truth",
        "Practise sharing with classmates and family",
        "Identify religious celebrations relevant to their faith",
        "Say a simple prayer of thanks (CRE/IRE/HRE appropriate)",
        "Respect other children regardless of their faith background",
        "Retell a simple moral story and identify its lesson",
        "Understand that God/the Creator loves and cares for them",
      ],
      topics: [
        { name: "Values & Morals", desc: "Core CBC values — love, responsibility, respect, unity and integrity — are introduced through simple stories, discussions and role play. Children learn to name the value and demonstrate it in daily school life.", strands: ["Love & Kindness", "Honesty & Truthfulness", "Sharing & Generosity", "Respect for Others"] },
        { name: "Stories & Parables", desc: "Age-appropriate moral stories from the relevant religious tradition (Bible stories for CRE, Quranic stories for IRE, Hindu stories for HRE) teach values in engaging, memorable ways.", strands: ["CRE Bible Stories", "IRE Quranic Stories", "HRE Hindu Stories", "Universal Moral Stories"] },
        { name: "Prayer & Worship", desc: "Children learn simple, age-appropriate prayers of thanks and requests appropriate to their faith. Prayer is introduced as a natural, comforting daily practice — not a formal ritual.", strands: ["Morning Prayer", "Prayer of Thanks", "Prayer Before Meals", "Prayer for Others"] },
        { name: "Religious Celebrations", desc: "Children identify and describe celebrations relevant to their faith: Christmas/Easter (CRE), Eid (IRE), Diwali (HRE). They learn what these celebrations mean and how families observe them.", strands: ["Christian Celebrations", "Islamic Celebrations", "Hindu Celebrations", "National Values Days"] },
      ],
      sbaNote: "Religious Education SBA focuses on the child's demonstration of values in daily school life — kindness to classmates, honesty, sharing — rather than religious knowledge tests. Teachers observe and record value-based behaviour throughout the term.",
      prevLabel: "Psychomotor & Creative", prevHref: "/pp1/psychomotor-and-creative-activities",
      nextLabel: "PP2 Overview", nextHref: "/pp2",
    },
  },
  "pp2": {
    "language-activities": {
      description: "Language Activities in PP2 advances from PP1 foundations into phonics, sight word reading, early sentence formation and structured writing. By the end of PP2, children can blend simple words, read short sentences and write their name and simple words — fully prepared for Grade 1 literacy.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Blend consonant-vowel-consonant (CVC) words: cat, sit, dog, run",
        "Read a bank of 30+ common sight words fluently",
        "Read simple 3–5 word sentences independently",
        "Write their full name legibly",
        "Write simple words from dictation",
        "Form all 26 letters correctly (upper and lower case)",
        "Construct a simple spoken sentence of 5+ words",
        "Retell a story with beginning, middle and end",
      ],
      topics: [
        { name: "Phonics & Blending", desc: "Systematic phonics instruction teaches children to map sounds to letters and blend them into words. The CVC pattern (consonant-vowel-consonant) is the entry point: c-a-t = cat.", strands: ["Single Letter Sounds", "CVC Blending", "Digraphs (sh, ch, th)", "Word Families"] },
        { name: "Sight Words & Reading", desc: "High-frequency words that cannot be easily sounded out are learned by sight. Children build a reading vocabulary of 30–50 words and begin reading simple decodable books.", strands: ["Sight Word Recognition", "Decodable Books", "Simple Sentences", "Reading Aloud"] },
        { name: "Writing Development", desc: "From tracing to independent writing. Children form all letters correctly, write their name, copy simple words and begin writing simple sentences with support.", strands: ["Letter Formation", "Name Writing", "Word Copying", "Simple Sentences"] },
        { name: "Oral Language & Vocabulary", desc: "Expands vocabulary across all subject areas. Children learn to use describing words (adjectives), action words (verbs) and connecting words to build more complex sentences.", strands: ["Vocabulary Expansion", "Descriptive Language", "Question & Answer", "Story Retelling"] },
      ],
      sbaNote: "PP2 Language Activities SBA includes reading observation records, writing portfolio samples and oral language checklists. Teachers record each child's phonics progress and reading level monthly.",
      prevLabel: "PP2 Overview", prevHref: "/pp2",
      nextLabel: "Mathematical Activities", nextHref: "/pp2/mathematical-activities",
    },
    "mathematical-activities": {
      description: "Mathematical Activities in PP2 extends counting to 100, introduces simple addition and subtraction using objects, explores measurement with non-standard units and deepens geometry and pattern work. Children move from purely concrete manipulation to beginning semi-abstract representation (pictures and tallies).",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Count forwards and backwards from 1 to 100",
        "Read and write numerals 1 to 50",
        "Add two groups of objects with totals up to 10",
        "Subtract from groups of up to 10 objects",
        "Measure length using hand spans, sticks and strings",
        "Compare weight using a simple balance scale",
        "Identify and describe 3D shapes: sphere, cube, cylinder, cone",
        "Create and extend AABB and ABC repeating patterns",
      ],
      topics: [
        { name: "Numbers 1–100", desc: "Extends PP1 counting to 100. Children count in ones and tens, identify missing numbers in a sequence, and begin understanding place value (tens and ones) using bundles of sticks.", strands: ["Counting to 100", "Skip Counting in 10s", "Number Sequences", "Place Value Introduction"] },
        { name: "Addition & Subtraction", desc: "Using physical objects, children combine groups (addition) and take away from groups (subtraction) with totals up to 10. The + and − symbols are introduced alongside physical manipulation.", strands: ["Adding Groups of Objects", "Taking Away", "Number Bonds to 10", "Simple Word Problems"] },
        { name: "Measurement", desc: "Length, weight, capacity and time are explored using non-standard units. Children compare and order objects, record measurements using tallies and discuss the limitations of non-standard units.", strands: ["Length with Non-Standard Units", "Weight with Balance Scales", "Capacity with Cups", "Ordering by Time"] },
        { name: "Geometry", desc: "Extends 2D shape work to 3D shapes found in the environment. Children identify spheres (balls), cubes (boxes), cylinders (tins) and cones (party hats) and describe their properties.", strands: ["2D Shape Review", "3D Shapes Introduction", "Shapes in Environment", "Shape Properties"] },
        { name: "Patterns & Algebra", desc: "Children create, continue and describe more complex patterns using colours, shapes, sounds and body movements. Pattern work builds the algebraic thinking needed in later grades.", strands: ["AABB Patterns", "Increasing Patterns", "Pattern Rules", "Creating Own Patterns"] },
      ],
      sbaNote: "PP2 Mathematics SBA uses practical task observation, activity sheet portfolios and end-of-term teacher assessments. Children demonstrate addition and subtraction physically with objects.",
      prevLabel: "Language Activities", prevHref: "/pp2/language-activities",
      nextLabel: "Environmental Activities", nextHref: "/pp2/environmental-activities",
    },
    "environmental-activities": {
      description: "Environmental Activities in PP2 expands from the home and family to the school, community and wider natural environment. Children explore weather patterns, food and nutrition, community helpers, living vs non-living things and basic environmental care — developing early science and social studies skills.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Describe the school environment and its different areas",
        "Name and describe the roles of community helpers (doctor, teacher, farmer, police)",
        "Classify things as living or non-living with reasons",
        "Describe how plants grow from seed to mature plant",
        "Name food groups and explain why we need a balanced diet",
        "Explain the water cycle in simple terms",
        "Describe how to care for the environment (no littering, planting trees)",
        "Identify sources of water in their community",
      ],
      topics: [
        { name: "My School & Community", desc: "Children explore the school environment — classrooms, library, playground, office — and the wider community: market, hospital, church/mosque, farm. They identify community helpers and their roles.", strands: ["Parts of the School", "Community Helpers", "Places in the Community", "Community Rules"] },
        { name: "Living & Non-Living Things", desc: "Children classify objects in their environment as living or non-living using three criteria: living things grow, breathe and reproduce. Simple sorting activities reinforce the concept.", strands: ["Characteristics of Living Things", "Sorting: Living vs Non-Living", "Plants as Living Things", "Animals as Living Things"] },
        { name: "Food & Nutrition", desc: "Introduces the three food groups (Go foods, Grow foods, Glow foods) appropriate for the CBC level. Children identify local Kenyan foods in each group and plan a simple balanced meal.", strands: ["Go Foods (Energy)", "Grow Foods (Proteins)", "Glow Foods (Vitamins)", "Balanced Meals"] },
        { name: "Water & Weather", desc: "Children identify sources of water (rain, rivers, wells, taps), describe the water cycle simply and discuss how to keep water clean. Weather observation continues with daily recording.", strands: ["Sources of Water", "Simple Water Cycle", "Clean Water & Health", "Weather Recording"] },
        { name: "Caring for the Environment", desc: "Introduces environmental responsibility. Children learn about littering, planting trees, conserving water and protecting animals. Simple classroom and school garden projects reinforce these values.", strands: ["No Littering", "Planting & Growing", "Water Conservation", "Protecting Animals"] },
      ],
      sbaNote: "PP2 Environmental Activities SBA includes nature walk observation records, drawing tasks, group project portfolios and teacher checklists of science concepts mastered.",
      prevLabel: "Mathematical Activities", prevHref: "/pp2/mathematical-activities",
      nextLabel: "Psychomotor & Creative", nextHref: "/pp2/psychomotor-and-creative-activities",
    },
    "psychomotor-and-creative-activities": {
      description: "Psychomotor & Creative Activities in PP2 builds on PP1 foundations with more structured and complex physical and creative tasks. Children transition from free exploration to guided projects, coordinated team games and more sophisticated art and music activities that prepare them fully for Grade 1.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Perform coordinated movement sequences: skip, gallop, slide",
        "Participate in simple team games with basic rules",
        "Cut complex shapes accurately with scissors",
        "Create a multi-step art project independently",
        "Play a simple rhythm on a percussion instrument",
        "Perform a short drama piece with a beginning, middle and end",
        "Weave, thread or braid using simple materials",
        "Describe their own artwork and that of their classmates",
      ],
      topics: [
        { name: "Coordinated Movement", desc: "Builds on PP1 gross motor skills with more complex, coordinated movement sequences. Children participate in structured games with simple rules, developing teamwork and fair play alongside physical skills.", strands: ["Movement Sequences", "Team Games", "Fair Play & Rules", "Outdoor Circuits"] },
        { name: "Advanced Fine Motor", desc: "More demanding fine motor tasks: weaving, braiding, sewing on card, detailed colouring and cutting complex shapes. These tasks develop the hand control needed for Grade 1 writing.", strands: ["Weaving & Braiding", "Sewing on Card", "Complex Cutting", "Detailed Drawing"] },
        { name: "Art Projects", desc: "Multi-step guided art projects using a wider range of materials and techniques. Children plan their artwork, execute it over multiple sessions and present it to the class, building creative confidence.", strands: ["Mixed Media Art", "3D Sculpture", "Printing Techniques", "Art Appreciation"] },
        { name: "Music & Rhythm", desc: "Children play simple percussion instruments (shakers, drums, xylophones), read simple rhythm patterns and perform songs with actions. Group music-making develops listening, timing and teamwork.", strands: ["Percussion Instruments", "Rhythm Patterns", "Group Performance", "Kenyan Folk Songs"] },
        { name: "Drama & Performance", desc: "From free role play to structured short performances. Children rehearse and perform simple plays, puppet shows or storytelling presentations to classmates and parents.", strands: ["Script Drama", "Puppet Theatre", "Storytelling Performance", "Audience Skills"] },
      ],
      sbaNote: "PP2 Psychomotor & Creative SBA uses portfolio photos of art projects, video/observation of performances, teacher checklists of motor skills and peer appreciation activities.",
      prevLabel: "Environmental Activities", prevHref: "/pp2/environmental-activities",
      nextLabel: "Religious Education", nextHref: "/pp2/religious-education",
    },
    "religious-education": {
      description: "Religious Education in PP2 deepens the values and moral foundations introduced in PP1. Children move from identifying values to making simple moral decisions, understanding religious celebrations more deeply and developing respect for people of different faith backgrounds — essential preparation for life in Kenya's diverse society.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: [
        "Explain why honesty, kindness and respect matter in daily life",
        "Describe a religious celebration from their own faith tradition",
        "Show respect for classmates of different faith backgrounds",
        "Recite a prayer of thanks from their faith tradition",
        "Retell a moral story and explain the lesson it teaches",
        "Identify one way they can show love to family and community",
        "Understand that all people deserve to be treated with dignity",
        "Name at least three core CBC values and give examples",
      ],
      topics: [
        { name: "Making Good Choices", desc: "Children move from knowing values to applying them in real situations. Through scenarios, stories and discussion, they practise choosing honesty over lying, kindness over selfishness, and sharing over greed.", strands: ["Right vs Wrong", "Consequence of Choices", "Being Honest", "Helping Others"] },
        { name: "Religious Celebrations (Deeper)", desc: "Deeper exploration of religious celebrations. Children understand the meaning, symbols and practices of their faith's major celebrations and learn to appreciate celebrations of other faiths respectfully.", strands: ["Christmas & Easter (CRE)", "Eid ul-Fitr & Eid ul-Adha (IRE)", "Diwali & Holi (HRE)", "Respecting Other Faiths"] },
        { name: "Prayer & Gratitude", desc: "Children learn that prayer is communication with God/the Creator. They practise prayers of gratitude, requests and forgiveness appropriate to their faith, and understand why prayer is important.", strands: ["Prayers of Thanks", "Prayers for Help", "Forgiveness", "Gratitude in Daily Life"] },
        { name: "Caring for Creation", desc: "Links religious values to environmental responsibility. Children learn that caring for animals, plants, water and the earth is part of their religious duty and national responsibility.", strands: ["God's Creation", "Caring for Animals", "Environmental Responsibility", "Sharing Resources"] },
      ],
      sbaNote: "PP2 Religious Education SBA focuses on observed value-based behaviour, oral responses to moral scenarios and a simple portfolio of drawings and reflections on values learned.",
      prevLabel: "Psychomotor & Creative", prevHref: "/pp2/psychomotor-and-creative-activities",
      nextLabel: "Grade 1 Overview", nextHref: "/grade-1",
    },
  },
};

function PrevNext({ prev, next, bottom }: { prev: { href: string; label: string }, next: { href: string; label: string }, bottom?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: bottom ? "40px 0 16px 0" : "0 0 28px 0", gap: "10px" }}>
      <Link href={prev.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        &#10094; {prev.label}
      </Link>
      {bottom && (
        <Link href="/signin" style={{ border: "1px solid #ccc", color: "#555", padding: "10px 22px", borderRadius: "3px", fontSize: "13px", textDecoration: "none", background: "#fff" }}>
          Sign in to track progress
        </Link>
      )}
      <Link href={next.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        {next.label} &#10095;
      </Link>
    </div>
  );
}

export default function SubjectPage() {
  const params = useParams();
  const grade = params.grade as string;
  const subject = params.subject as string;
  const [topics, setTopics] = useState<any[]>([]);
  const [subjectData, setSubjectData] = useState<any>(null);

  const staticData = STATIC_SUBJECTS[grade]?.[subject];

  useEffect(() => {
    if (!staticData) fetchData();
  }, [grade, subject]);

  async function fetchData() {
    const subjectDecoded = subject.replaceAll("-", " ");
    const { data } = await supabase
      .from("subjects")
      .select("id, name, description, pathways(name)")
      .ilike("name", subjectDecoded)
      .single();
    if (data) {
      setSubjectData(data);
      const { data: topicsData } = await supabase
        .from("topics")
        .select("id, name, description, order_index")
        .eq("subject_id", data.id)
        .order("order_index", { ascending: true });
      setTopics(topicsData || []);
    }
  }

  const gradeName = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const color = staticData?.color || PATHWAY_COLORS[subjectData?.pathways?.name || ""] || "#04AA6D";
  const subjectName = subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());

  // RICH STATIC PAGE for PP1 and PP2
  if (staticData) {
    const prev = { href: staticData.prevHref, label: staticData.prevLabel };
    const next = { href: staticData.nextHref, label: staticData.nextLabel };
    return (
      <div>
        <NavSync grade={grade} />
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">&rsaquo;</span>
          <Link href="/pathway/early-years">Early Years</Link>
          <span className="breadcrumb-sep">&rsaquo;</span>
          <Link href={`/${grade}`}>{grade.toUpperCase()}</Link>
          <span className="breadcrumb-sep">&rsaquo;</span>
          <span>{subjectName}</span>
        </div>

        <PrevNext prev={prev} next={next} />

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${color} 0%, #e65100 100%)`, color: "#fff", padding: "32px 32px 44px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
          <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 12px", borderRadius: "10px", marginBottom: "10px" }}>
            {grade.toUpperCase()} &bull; {staticData.pathway} &bull; KICD CBC
          </div>
          <h1 style={{ margin: "0 0 10px 0", fontSize: "30px", fontWeight: 700 }}>{subjectName}</h1>
          <p style={{ margin: "0 0 20px 0", opacity: 0.95, fontSize: "15px", maxWidth: "620px", lineHeight: 1.9 }}>{staticData.description}</p>
          <Link href={`/${grade}/${subject}/${slugify(staticData.topics[0].name)}`}
            style={{ background: "#fff", color, padding: "10px 24px", fontWeight: 700, fontSize: "14px", textDecoration: "none", borderRadius: "3px", display: "inline-block" }}>
            Start {subjectName} &rarr;
          </Link>
        </div>

        {/* Green bridge */}
        <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "16px 32px 18px 32px", marginBottom: "28px" }}>
          <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35", lineHeight: 1.7 }}>
            <strong>{staticData.topics.length} topics</strong> &bull; Play-based &bull; KICD aligned &bull; SBA assessed &bull; No written exams
          </p>
        </div>

        {/* What you will learn */}
        <h2>What You Will Learn</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px", margin: "14px 0 28px 0" }}>
          {staticData.whatYouLearn.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", background: "#f9f9f9", border: "1px solid #eee", borderRadius: "3px", padding: "10px 14px" }}>
              <span style={{ background: color, color: "#fff", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: "13px", color: "#333", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Topics */}
        <h2>Topics in {subjectName}</h2>
        <p>Click any topic to start learning. Each topic includes examples, activities and SBA tips.</p>
        <div style={{ marginBottom: "28px" }}>
          {staticData.topics.map((t, i) => (
            <Link key={t.name} href={`/${grade}/${subject}/${slugify(t.name)}`} style={{ textDecoration: "none", display: "block", marginBottom: "12px" }}>
              <div style={{ border: "1px solid #eee", borderLeft: `5px solid ${color}`, borderRadius: "0 4px 4px 0", padding: "16px 20px", background: "#fafafa" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ background: color, color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "2px", fontWeight: 700 }}>Topic {i + 1}</span>
                    <strong style={{ fontSize: "15px", color: "#222" }}>{t.name}</strong>
                  </div>
                  <span style={{ color: "#04AA6D", fontWeight: 700, fontSize: "13px" }}>Start &rarr;</span>
                </div>
                <p style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{t.desc}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {t.strands.map(s => (
                    <span key={s} style={{ background: "#fff", border: `1px solid ${color}`, color, fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Examples box */}
        <div style={{ background: "#f9f9f9", border: "1px solid #ddd", borderRadius: "4px", padding: "20px 24px", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px 0" }}>Examples in Each Topic</h2>
          <p style={{ fontSize: "14px", color: "#444", margin: "0 0 14px 0", lineHeight: 1.7 }}>
            Every topic in <strong>{subjectName}</strong> includes worked examples, classroom activities, SBA tips and assessment ideas — all aligned to the KICD CBC framework for {grade.toUpperCase()}.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["Examples", "Activities", "SBA Tips", "Learning Outcomes"].map(label => (
              <span key={label} style={{ background: color, color: "#fff", padding: "5px 14px", borderRadius: "2px", fontSize: "13px", fontWeight: 700 }}>{label}</span>
            ))}
          </div>
        </div>

        {/* SBA Note */}
        <div className="note-box">
          <strong>Assessment Note:</strong> {staticData.sbaNote}
        </div>

        <PrevNext prev={prev} next={next} bottom />
      </div>
    );
  }

  // Generic fallback for Grade 1–12 (Supabase-powered)
  const pathway = subjectData?.pathways?.name || "";
  const pathwayColor = PATHWAY_COLORS[pathway] || "#04AA6D";
  const displaySubject = subjectData?.name || subjectName;
  const gradeNum = parseInt(grade.replace("grade-", ""));
  const prevHref = `/${grade}`;
  const nextHref = topics[0] ? `/${grade}/${subject}/${slugify(topics[0].name)}` : `/${grade}`;

  return (
    <div>
      <NavSync grade={grade} />
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <Link href={`/${grade}`}>{gradeName}</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{displaySubject}</span>
      </div>

      <PrevNext prev={{ href: prevHref, label: gradeName }} next={{ href: nextHref, label: topics[0]?.name || gradeName }} />

      <div style={{ background: `linear-gradient(135deg, ${pathwayColor} 0%, #036b45 100%)`, color: "#fff", padding: "32px 32px 44px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: 700 }}>{displaySubject}</h1>
        {pathway && <p style={{ margin: "0 0 16px 0", opacity: 0.9, fontSize: "14px" }}>{pathway} &bull; {gradeName}</p>}
        {subjectData?.description && <p style={{ margin: "0 0 20px 0", opacity: 0.92, fontSize: "15px", maxWidth: "560px", lineHeight: 1.7 }}>{subjectData.description}</p>}
        {topics[0] && (
          <Link href={`/${grade}/${subject}/${slugify(topics[0].name)}`}
            style={{ background: "#fff", color: pathwayColor, padding: "10px 22px", fontWeight: 700, fontSize: "14px", textDecoration: "none", borderRadius: "2px", display: "inline-block" }}>
            Start learning now &rarr;
          </Link>
        )}
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "16px 32px 18px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#2d6a4f" }}>
          {topics.length > 0 ? `${topics.length} topics — KICD CBC aligned` : "Content coming soon. Check back shortly."}
        </p>
      </div>

      {topics.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2>Topics in {displaySubject}</h2>
          <div className="subject-grid">
            {topics.map((t: any, i: number) => (
              <Link key={t.id} href={`/${grade}/${subject}/${slugify(t.name)}`} className="subject-card">
                <div className="subject-card-header" style={{ background: pathwayColor }}>
                  <span style={{ fontSize: "11px", opacity: 0.8, display: "block", marginBottom: "2px" }}>Topic {i + 1}</span>
                  {t.name}
                </div>
                {t.description && <div className="subject-card-body">{t.description}</div>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {topics.length === 0 && (
        <div className="note-box">
          <strong>Coming Soon:</strong> Full topic content for {displaySubject} in {gradeName} is being prepared.
        </div>
      )}

      <PrevNext prev={{ href: prevHref, label: gradeName }} next={{ href: nextHref, label: topics[0]?.name || gradeName }} bottom />
    </div>
  );
}
