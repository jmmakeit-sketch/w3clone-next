export interface SubStrandSchema {
  id: string;
  title: string;
  lessons: number;
  inquiryQuestion: string;
  objectives: string[];
  experiences: string[];
  coreCompetencies: { name: string; description: string };
  values: { name: string; description: string };
  crossSubjectLink: string;
}

export interface StrandSchema {
  id: string;
  title: string;
  subStrands: Record<string, SubStrandSchema>;
}

export const grade4AgriNutritionContent: Record<string, StrandSchema> = {
  "conservation-of-resources": {
    id: "1.0",
    title: "Conservation of Resources",
    subStrands: {
      "soil-conservation": {
        id: "1.1",
        title: "Soil Conservation via Organic Matter",
        lessons: 8,
        inquiryQuestion: "How can we use organic materials to protect our soils from erosion?",
        objectives: [
          "Identify materials used to make compost manure locally",
          "Demonstrate preparation of a simple organic compost heap or pit",
          "Appreciate the role of organic matter in improving soil moisture retention"
        ],
        experiences: [
          "Gathering dry leaves, crop remains, and animal manure around the school garden",
          "Constructing a functional school compost pit under teacher guidance",
          "Applying prepared organic compost to weak garden beds"
        ],
        coreCompetencies: { name: "Collaboration", description: "Learners work in organized groups to collect organic waste and build functional compost layers safely." },
        values: { name: "Responsibility", description: "Caring for the environment by safely recycling organic resources rather than burning them." },
        crossSubjectLink: "Science and Technology (Properties of matter and decomposition cycles)"
      },
      "water-conservation": {
        id: "1.2",
        title: "Water Conservation via Mulching",
        lessons: 6,
        inquiryQuestion: "Why do we cover the soil around crops with dry materials?",
        objectives: [
          "Define mulching within agricultural practice",
          "Identify local materials suitable for mulching garden beds",
          "Demonstrate correct application of mulch around young vegetable crops"
        ],
        experiences: [
          "Observing moisture retention differences between uncovered soil and mulched soil profiles",
          "Sourcing clean dry grass, banana leaves, or wood shavings safely",
          "Placing mulch materials around nursery crops while leaving adequate stem clearance"
        ],
        coreCompetencies: { name: "Critical Thinking", description: "Evaluating which organic materials decompose effectively versus those that attract pests." },
        values: { name: "Unity", description: "Sharing available dry mulching materials across collective class plots." },
        crossSubjectLink: "Mathematics (Measuring uniform mulch depth layers across crop beds)"
      },
      "fuel-conservation": {
        id: "1.3",
        title: "Fuel Conservation & Charcoal Briquettes",
        lessons: 10,
        inquiryQuestion: "How can we create alternative cooking fuel from charcoal dust and organic waste?",
        objectives: [
          "Explain the importance of saving wood fuel resources locally",
          "Collect charcoal dust and mix it with safe organic binders like soil or starch paste",
          "Mould and dry functional charcoal briquettes for home cooking trials"
        ],
        experiences: [
          "Discussing the negative impacts of deforestation caused by over-reliance on firewood",
          "Mixing charcoal dust, water, and soil binder into a thick, uniform paste mixture",
          "Using simple hand-moulding processes to form compact briquettes and sun-drying them"
        ],
        coreCompetencies: { name: "Creativity and Imagination", description: "Designing optimal geometric shapes for briquettes to maximize airflow during combustion." },
        values: { name: "Patriotism", description: "Preserving Kenyan forest cover by adopting sustainable, clean alternative household fuel alternatives." },
        crossSubjectLink: "Social Studies (Ecosystem protection, mapping forest covers, and reducing logging)"
      },
      "conserving-wild-animals": {
        id: "1.4",
        title: "Conserving Wild Animals & Crop Safety",
        lessons: 6,
        inquiryQuestion: "How do we stop birds and small rodents from damaging our farm seeds without harming them?",
        objectives: [
          "Identify common small wild animals that interfere with crops (birds, moles, squirrels)",
          "Construct simple non-destructive scarecrows or netting structures",
          "Appreciate the ecological value of wild animals while protecting local food supplies"
        ],
        experiences: [
          "Walking around the crop patch to spot signs of bird or rodent damage on newly sprouted seeds",
          "Using recycled clothing, sticks, and old containers to build simple, creative scarecrows",
          "Installing protective perimeter nets over small seed nursery configurations"
        ],
        coreCompetencies: { name: "Problem Solving", description: "Devising low-cost, humane deterrents that drive away birds without poisoning local wildlife food chains." },
        values: { name: "Respect", description: "Valuing animal life by using non-fatal, purely preventative deterrent frameworks on the farm." },
        crossSubjectLink: "Art and Craft (Designing and sculpting balanced scarecrow physical frames)"
      }
    }
  }
};

export const grade4FoodAndHygieneContent: Record<string, StrandSchema> = {
  "food-production-processes": {
    id: "2.0",
    title: "Food Production Processes",
    subStrands: {
      "direct-sowing-of-tiny-seeds": {
        id: "2.1",
        title: "Direct Sowing of Tiny Seeds",
        lessons: 8,
        inquiryQuestion: "How do we plant very small seeds directly into a container garden bed?",
        objectives: [
          "Prepare a fine tilth inside a localized container or small garden bed",
          "Demonstrate the correct method of thin sowing and row drilling for tiny seeds",
          "Water the sown container seeds using a fine spray to avoid washing them away"
        ],
        experiences: [
          "Crushing soil clods manually to create a smooth, fine tilth seedbed surface",
          "Making shallow straight furrows (drills) with a small stick at recommended distances",
          "Mixing tiny seeds with clean dry sand to ensure uniform distribution when sowing"
        ],
        coreCompetencies: { name: "Digital Literacy", description: "Learners look at short digital image guides to recognize the difference between direct row drills and broadcasting." },
        values: { name: "Responsibility", description: "Taking daily care to water the fragile seeds without creating structural runoff channels." },
        crossSubjectLink: "Mathematics (Measuring strict centimetre grid spacing between shallow seed rows)"
      },
      "balanced-diet": {
        id: "2.2",
        title: "Understanding a Balanced Diet",
        lessons: 6,
        inquiryQuestion: "What makes up a healthy, balanced plate of food for our bodies?",
        objectives: [
          "Name the three primary food groups (Energy-giving, Body-building, Protective foods)",
          "Classify locally available food items into their correct nutritional groups",
          "Appreciate the importance of consuming clean water along with balanced meals"
        ],
        experiences: [
          "Drawing a classic 'balanced plate' diagram split into energy, protective, and body-building zones",
          "Sorting local items like maize, beans, kales, and eggs into their matching functional groups",
          "Discussing why processed junk snacks lack the critical values of a balanced farm plate"
        ],
        coreCompetencies: { name: "Critical Thinking", description: "Analyzing daily home meals to spot which critical nutritional groups might be missing." },
        values: { name: "Responsibility", description: "Choosing nutrient-rich local whole foods over sugary processed alternatives." },
        crossSubjectLink: "Science and Technology (Human nutrition, health preservation, and body growth)"
      },
      "cooking-methods": {
        id: "2.3",
        title: "Basic Cooking Methods: Boiling & Baking",
        lessons: 10,
        inquiryQuestion: "How does boiling or baking make local foods safe and delicious to eat?",
        objectives: [
          "Distinguish between boiling and baking as foundational heat treatment methods",
          "Identify local foods that are traditionally boiled (potatoes, cassava) or baked (maize, tubers)",
          "Observe basic kitchen safety protocols to prevent scalds or thermal accidents"
        ],
        experiences: [
          "Boiling sweet potatoes or green maize in a secured school kitchen setting",
          "Improvising a simple local earth-oven container using hot charcoal layers to bake root tubers",
          "Listing critical cleanup procedures for cooking pots to maintain high baseline safety standards"
        ],
        coreCompetencies: { name: "Problem Solving", description: "Improvising low-cost baking setups using available metal tins and charcoal heat vectors." },
        values: { name: "Cooperation", description: "Sharing hot kitchen duties safely and dividing the prepared food items equally." },
        crossSubjectLink: "Home Science / Science (Heat transfer dynamics, conduction, and water boiling points)"
      }
    }
  },
  "hygiene-practices": {
    id: "3.0",
    title: "Hygiene Practices & Production",
    subStrands: {
      "personal-hygiene": {
        id: "3.1",
        title: "Personal Hygiene & Grooming",
        lessons: 6,
        inquiryQuestion: "How does cleaning our footwear and washing our hands keep us safe from farm germs?",
        objectives: [
          "Demonstrate the correct multi-step handwashing technique after handling soil manure",
          "Clean different types of school and farm footwear using local scraping tools",
          "Relate high personal grooming standards to the prevention of parasitic worm transfers"
        ],
        experiences: [
          "Practicing thorough hand scrubbing with running water and soap before touching food blocks",
          "Scraping caked mud off farm boots using flat wooden sticks and wiping them dry",
          "Creating a classroom poster illustrating optimal personal safety checkpoints"
        ],
        coreCompetencies: { name: "Communication", description: "Explaining basic hygienic rules confidently to peers during group maintenance sessions." },
        values: { name: "Responsibility", description: "Forming regular habits of personal tool and gear cleaning without requiring constant monitoring." },
        crossSubjectLink: "Health Education (Pathogen cross-contamination mechanics and skin protection profiles)"
      },
      "domestic-hygiene": {
        id: "3.2",
        title: "Domestic Hygiene: Cleaning Utensils",
        lessons: 6,
        inquiryQuestion: "What is the safest sequence to wash household kitchen utensils?",
        objectives: [
          "Identify safe local materials used for scrubbing pots and plates (sisal fiber, charcoal ash)",
          "Demonstrate washing utensils starting from the cleanest items (glasses) to the greasiest (pots)",
          "Store washed kitchen utensils upside down on a clean, elevated drying rack"
        ],
        experiences: [
          "Sorting dirty plates, glasses, and frying pans into a logical washing queue line",
          "Using warm water, soap, and local scratch pads to strip grease off deep pots completely",
          "Arranging wet items onto a raised wooden plate rack to dry thoroughly under solar rays"
        ],
        coreCompetencies: { name: "Critical Thinking", description: "Deducing why washing highly greasy pots first ruins the cleanliness of the wash basin water." },
        values: { name: "Honesty", description: "Ensuring all items are deeply sanitized rather than just rinsing off visible surface layer mud." },
        crossSubjectLink: "Social Studies (Family roles, home resource management, and communal order)"
      },
      "cleaning-ppe": {
        id: "3.3",
        title: "Cleaning Personal Protective Equipment (PPE)",
        lessons: 4,
        inquiryQuestion: "Why must we wash our farming aprons and gloves separately from everyday clothes?",
        objectives: [
          "Identify basic farming PPE items requiring routine care (aprons, dustcoats, gumboots)",
          "Remove surface dust and chemical stains from farming aprons safely after field use",
          "Store dry protective wear items securely away from household food supply zones"
        ],
        experiences: [
          "Brushing off loose field soil particles from a protective apron before soaking it",
          "Washing farm aprons using soap solutions to remove organic plant odor indicators",
          "Hanging up heavy aprons on secure hangers to dry under open outdoor shade spaces"
        ],
        coreCompetencies: { name: "Problem Solving", description: "Recognizing chemical vs organic residue on work uniforms and selecting correct pre-rinse steps." },
        values: { name: "Responsibility", description: "Protecting household family members by not mixing contaminated farm garments with regular family laundry cycles." },
        crossSubjectLink: "Science and Technology (Understanding toxic pesticide drift and protective barriers)"
      }
    }
  },
  "production-techniques": {
    id: "4.0",
    title: "Production Techniques",
    subStrands: {
      "tacking-stitches": {
        id: "4.1",
        title: "Introductory Tacking Stitches",
        lessons: 8,
        inquiryQuestion: "How do temporary hand-sewing stitches help us hold pieces of fabric straight?",
        objectives: [
          "Identify basic hand-sewing tools safely (needles, threads, thimbles, fabric pieces)",
          "Demonstrate making even, temporary straight tacking stitches on a sample textile surface",
          "Appreciate precision and finger safety when pushing needles through dense canvas layers"
        ],
        experiences: [
          "Threading a handheld needle safely and tying a functional anchor tail knot",
          "Guiding a needle up and down across an open fabric edge line to make clean, visible lines",
          "Gently pulling out temporary tacking threads after a permanent machine or lock line is applied"
        ],
        coreCompetencies: { name: "Creativity and Imagination", description: "Forming perfectly uniform stitch lines that keep dual textile edges aligned without shifting." },
        values: { name: "Patience", description: "Taking deliberate time to untangle thread knots cleanly rather than ripping the test canvas material." },
        crossSubjectLink: "Art and Craft (Fine motor skill coordination, textile designs, and functional aesthetics)"
      }
    }
  }
};
