export interface SubStrandData {
  id: string;
  title: string;
  lessons: number;
  inquiryQuestion: string;
  objectives: string[];
  experiences: string[];
  coreCompetencies: { name: string; description: string };
  values: { name: string; description: string };
  pci: { name: string; description: string };
  crossSubjectLink: string;
  technicalDetails?: string[];
}

export interface StrandData {
  id: string;
  title: string;
  subStrands: { [key: string]: SubStrandData };
}

export const grade5AgriNutritionContent: { [key: string]: StrandData } = {
  "conservation-of-resources": {
    id: "1.0",
    title: "Conservation of Resources",
    subStrands: {
      "soil-conservation": {
        id: "1.1",
        title: "Soil Conservation",
        lessons: 9,
        inquiryQuestion: "How can organic waste be managed to conserve soil in the community?",
        objectives: [
          "Identify types of organic waste in the locality",
          "Prepare an organic waste pit to conserve soil",
          "Appreciate the importance of organic waste management in soil conservation"
        ],
        experiences: [
          "Brainstorm and categorize degradable versus non-degradable waste materials.",
          "Design and excavate an organic waste pit within the school farm site.",
          "Layer organic debris meticulously to foster fast natural decomposition rates."
        ],
        coreCompetencies: {
          name: "Critical thinking and problem solving",
          description: "Categorizing organic waste and choosing the best placement for the organic waste pit."
        },
        values: {
          name: "Responsibility",
          description: "Managing waste safely to preserve local topsoil structures from pollution and erosion."
        },
        pci: {
          name: "Environmental awareness",
          description: "Promoting waste recycling and local ecosystem safety via decomposition pipelines."
        },
        crossSubjectLink: "Relates to waste management and organic matter decomposition processes studied in Science & Technology.",
        technicalDetails: ["Waste Pits", "Degradable Biomass", "Soil Stratification", "Aerobic Decomposition"]
      },
      "water-conservation": {
        id: "1.2",
        title: "Water Conservation",
        lessons: 8,
        inquiryQuestion: "How can soil moisture be conserved in a crop field?",
        objectives: [
          "Identify soil moisture conservation measures in the locality",
          "Practice soil moisture conservation in a crop field",
          "Appreciate water conservation measures for crop production"
        ],
        experiences: [
          "Investigate structural ways moisture escapes farming soil lines.",
          "Apply dry grass or organic mulch blankets on active garden beds.",
          "Construct temporary low-cost shades and establish dense ground cover crops."
        ],
        coreCompetencies: {
          name: "Learning to learn",
          description: "Acquiring practical skills by experimenting with multiple mulch thicknesses and shading materials."
        },
        values: {
          name: "Responsibility",
          description: "Demonstrating careful resource management to prevent water loss in family gardens."
        },
        pci: {
          name: "Disaster risk reduction",
          description: "Mitigating structural dry spells and crop failure risks through soil water optimization."
        },
        crossSubjectLink: "Links directly to thermal evaporation, condensation cycles, and weather patterns studied in Geography & Science.",
        technicalDetails: ["Organic Mulching", "Shade Construction", "Cover Cropping", "Evaporation Mitigation"]
      },
      "conserving-wild-animals": {
        id: "1.3",
        title: "Conserving Wild Animals",
        lessons: 8,
        inquiryQuestion: "How can wild animals be conserved through deterring them from destroying crops and domestic animals?",
        objectives: [
          "Identify safe deterrents used to protect crops and domestic animals from wild animals",
          "Construct safe deterrents to protect crops and domestic animals",
          "Appreciate safe methods of deterring wild animals without harming them"
        ],
        experiences: [
          "Examine common localized wild animal threats (destructive birds, monkeys, small predators).",
          "Assemble structural deterrents using smoke setups and strong safe organic smell indicators.",
          "Build and position non-injurious visual scarecrows or hanging metallic noise-making shields."
        ],
        coreCompetencies: {
          name: "Creativity and imagination",
          description: "Designing and tailoring safe, innovative deterrents out of locally found scraps."
        },
        values: {
          name: "Social justice",
          description: "Advocating for animal welfare by resolving human-wildlife conflict without executing lethal forces."
        },
        pci: {
          name: "Safety and security",
          description: "Protecting community food structures safely while preserving underlying natural wildlife diversity."
        },
        crossSubjectLink: "Connects cleanly with eco-system interactions and food chain webs maps managed in Science & Technology.",
        technicalDetails: ["Smoke Deterrents", "Smell Repellents", "Scarecrows", "Non-Lethal Wildlife Management"]
      }
    }
  },
  "food-production-processes": {
    id: "2.0",
    title: "Food Production Processes",
    subStrands: {
      "growing-vegetables": {
        id: "2.1",
        title: "Growing Vegetables",
        lessons: 12,
        inquiryQuestion: "How do we establish and manage vegetable crop nurseries successfully?",
        objectives: ["Establish vegetable nurseries", "Manage nursery seedlings", "Transplant young seedlings safely"],
        experiences: ["Prepare fine nursery tilth beds.", "Sow tiny vegetable seeds evenly.", "Execute meticulous watering and thinning workflows."],
        coreCompetencies: { name: "Self-efficacy", description: "Developing real farm operations competence." },
        values: { name: "Hard work", description: "Committing to daily irrigation and shielding schedules." },
        pci: { name: "Food security", description: "Boosting household fresh food yield pipelines." },
        crossSubjectLink: "Links to plant lifecycle and growth dynamics inside Science & Technology.",
        technicalDetails: ["Nursery Beds", "Seedling Pricking out", "Hardening Off", "Transplanting Guidelines"]
      },
      "uses-of-domestic-animals": {
        id: "2.2",
        title: "Uses of Domestic Animals",
        lessons: 10,
        inquiryQuestion: "What are the roles of domestic animals in our production systems?",
        objectives: ["Identify various domestic animals", "Categorize domestic animals by utility products", "Appreciate livestock values"],
        experiences: ["Examine camels, bees, rabbits, and fish roles.", "Map non-food outputs like honey, wax, hide, and wool products.", "Debate livestock contribution to rural economies."],
        coreCompetencies: { name: "Communication", description: "Presenting arguments clearly during collective livestock debates." },
        values: { name: "Responsibility", description: "Providing humane animal care conditions and shelter." },
        pci: { name: "Animal welfare", description: "Enforcing clean, ethical spaces for livestock development." },
        crossSubjectLink: "Links to animal adaptation classifications handled in Science & Technology.",
        technicalDetails: ["Apiculture (Bees)", "Aquaculture (Fish)", "Cuniculture (Rabbits)", "Arid Transport (Camels)"]
      },
      "preservation-of-cereals-pulses": {
        id: "2.3",
        title: "Preservation of Cereals & Pulses",
        lessons: 9,
        inquiryQuestion: "How do we safeguard harvest yields from post-harvest losses?",
        objectives: ["Identify spoilage vectors", "Preserve grains using traditional/modern routes", "Minimize post-harvest waste"],
        experiences: ["Sun dry harvested maize and beans thoroughly.", "Incorporate traditional ash coatings or airtight bags.", "Monitor moisture contents to avoid mold growth."],
        coreCompetencies: { name: "Problem solving", description: "Determining proper preservation methods based on storage options." },
        values: { name: "Responsibility", description: "Preventing nutritional waste through food security practices." },
        pci: { name: "Food security", description: "Maintaining safe grain reserves between farming seasons." },
        crossSubjectLink: "Connects to fungi, moisture molds, and humidity studies in Science & Technology.",
        technicalDetails: ["Sun Drying", "Hermetic Airtight Storage", "Ash Admixture", "Moisture Controls"]
      },
      "food-nutrients": {
        id: "2.4",
        title: "Food Nutrients",
        lessons: 10,
        inquiryQuestion: "Why is the knowledge of food nutrients important in food production?",
        objectives: ["Explain nutrient functions", "Categorize foods by major nutrients", "Appreciate balanced dietary habits"],
        experiences: ["Group local foods into proteins, carbohydrates, vitamins, and fats.", "Present dietary plans for healthy growth.", "Evaluate nutrient deficits in common diets."],
        coreCompetencies: { name: "Digital literacy", description: "Interacting with digital systems to research dietary configurations." },
        values: { name: "Unity", description: "Respecting diverse dietary preferences during group work." },
        pci: { name: "Health promotion", description: "Developing active dietary defenses against lifestyle conditions." },
        crossSubjectLink: "Connects to non-communicable disease modules covered in Science & Technology.",
        technicalDetails: ["Carbohydrates", "Proteins", "Vitamins & Minerals", "Lipids/Fats"]
      },
      "frying-methods": {
        id: "2.5",
        title: "Dry Fat & Deep Frying",
        lessons: 9,
        inquiryQuestion: "How can we cook foods safely using dry fat frying and deep frying methods?",
        objectives: ["Describe frying methods", "Cook using dry fat and deep frying tracks", "Observe explicit kitchen safety rules"],
        experiences: ["Watch practical demonstrations on frying techniques.", "Prepare and cook basic dry-fried and deep-fried samples.", "Practice active first-aid safety regarding hot oils and equipment handling."],
        coreCompetencies: { name: "Learning to learn", description: "Following multi-step culinary recipes with high self-discipline." },
        values: { name: "Responsibility", description: "Maintaining cautious habits around open fires and hot liquids." },
        pci: { name: "Safety and security", description: "Mitigating grease fire risks and severe contact burns." },
        crossSubjectLink: "Relates to thermal transfer states and burn treatment inside Science & Technology.",
        technicalDetails: ["Dry Fat Frying", "Deep Submersion Frying", "Smoke Point Awareness", "Scald First-Aid Procedures"]
      }
    }
  },
  "hygiene-practices": {
    id: "3.0",
    title: "Hygiene Practices",
    subStrands: {
      "good-grooming-practices": {
        id: "3.1",
        title: "Good Grooming Habits",
        lessons: 7,
        inquiryQuestion: "How does good grooming promote personal hygiene?",
        objectives: ["Describe good grooming rules", "Practice appropriate dressing choices", "Adopt correct etiquette across chores"],
        experiences: ["Evaluate clothing styles based on specific social and work activities.", "Demonstrate proper grooming and deportment benchmarks.", "Integrate skin and hair cleanliness routines into daily schedules."],
        coreCompetencies: { name: "Self-efficacy", description: "Building self-confidence through proper personal presentation." },
        values: { name: "Respect", description: "Demonstrating high self-regard and positive regard for community members." },
        pci: { name: "Health promotion", description: "Preventing disease vectors via pristine individual hygiene maintenance." },
        crossSubjectLink: "Links directly to self-identity and self-discovery concepts taught in Social Studies.",
        technicalDetails: ["Occasion-Appropriate Attire", "Task Deportment", "Personal Hygiene Routines"]
      },
      "home-hygiene": {
        id: "3.2",
        title: "Home Hygiene & Surface Care",
        lessons: 9,
        inquiryQuestion: "How do you clean surfaces made from different materials?",
        objectives: ["Identify domestic surface materials", "Clean various floor systems properly", "Value a clean home ecosystem"],
        experiences: ["Distinguish glass, wood, earth, cement, and tiled structures.", "Execute surface-specific sweeping and mopping workflows.", "Select safe, non-abrasive cleaning agents for household maintenance."],
        coreCompetencies: { name: "Communication and collaboration", description: "Articulating ideas clearly during collaborative cleaning tasks." },
        values: { name: "Unity", description: "Taking turns equitably when executing group facility care." },
        pci: { name: "Safety of self and others", description: "Handling waste and wet floors safely to prevent structural accidents." },
        crossSubjectLink: "Connects to environmental sanitation and contaminant containment in Science & Technology.",
        technicalDetails: ["Earthen Floor Maintenance", "Cemented Surface Care", "Tiled Surface Maintenance", "Abrasive Material Identification"]
      },
      "laundering-cotton-items": {
        id: "3.3",
        title: "Laundering Cotton Items",
        lessons: 10,
        inquiryQuestion: "How does laundering cotton items promote hygiene?",
        objectives: ["Describe cotton laundry workflows", "Launder personal white and fast-colored items", "Appreciate regular textile care"],
        experiences: ["Sort garments carefully by color integrity and soil level.", "Wash, rinse, and sun-dry white and colored cotton items.", "Demonstrate proper fabric wringing, finishing, and storage setups."],
        coreCompetencies: { name: "Learning to learn", description: "Applying laundry processes to keep personal belongings fresh." },
        values: { name: "Responsibility", description: "Taking regular care of school uniforms and clothing items independently." },
        pci: { name: "Personal hygiene", description: "Eliminating bacteria, odor, and parasitic vectors from garments." },
        crossSubjectLink: "Links to communicable parasite cycles studied within Science & Technology.",
        technicalDetails: ["White Cotton Bleaching/Boiling", "Fast-Coloured Dye Retention", "Fabric Wringing and Finishing"]
      }
    }
  },
  "production-techniques": {
    id: "4.0",
    title: "Production Techniques",
    subStrands: {
      "repairing-garments": {
        id: "4.1",
        title: "Repairing Garments",
        lessons: 11,
        inquiryQuestion: "How can we repair garments to extend their lifespan?",
        objectives: ["Identify common hand stitches", "Make sewing stitch swatches", "Repair a gapping seam successfully"],
        experiences: ["Examine running and back stitch structural behaviors.", "Sew clear practical test swatches of both stitch models.", "Mend open garment seams to restore garment utility."],
        coreCompetencies: { name: "Critical thinking", description: "Assessing thread selection and tension to match varying fabric structures." },
        values: { name: "Responsibility", description: "Preserving personal clothing independently through regular mending." },
        pci: { name: "Financial literacy", description: "Reducing household expenditures by fixing wearable clothes at home." },
        crossSubjectLink: "Relates to structural color balancing and precision motor patterns in Creative Arts.",
        technicalDetails: ["Running Stitch Mechanics", "Back Stitch Sealing", "Gapping Seam Restoration"]
      },
      "vertical-horizontal-gardens": {
        id: "4.2",
        title: "Innovative Spatial Gardening",
        lessons: 14,
        inquiryQuestion: "How can gardening be done on vertical and horizontal spaces?",
        objectives: ["Distinguish between layout configurations", "Construct gardens using container items", "Grow food crops in tight spaces"],
        experiences: ["Examine wall, bottle, sack, and pipe layout frameworks.", "Assemble container systems with nutrient-rich topsoil.", "Plant vegetables to optimize space utilization."],
        coreCompetencies: { name: "Creativity and imagination", description: "Designing multi-tier micro-gardens using recycled local containers." },
        values: { name: "Unity", description: "Collaborating reliably to assemble heavy container systems safely." },
        pci: { name: "Environmental awareness", description: "Repurposing plastic waste to establish productive urban gardens." },
        crossSubjectLink: "Links to structural craft assembly and engineering layouts in Creative Arts.",
        technicalDetails: ["Sack/Gunny-bag Frameworks", "PVC Pipe Cascades", "Wall-Mounted Bottle Systems", "Lateral Tier Arrays"]
      }
    }
  }
};
