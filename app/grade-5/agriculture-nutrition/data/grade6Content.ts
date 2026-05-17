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

export const grade6ContentMatrix: Record<string, StrandSchema> = {
  "conservation-of-resources": {
    id: "1.0",
    title: "Conservation of Resources",
    subStrands: {
      "agroforestry-practices": {
        id: "1.1",
        title: "Agroforestry & Tree Nursery Management",
        lessons: 10,
        inquiryQuestion: "How do multi-purpose trees protect our farm environment and provide food?",
        objectives: [
          "Differentiate between standard forestry and agroforestry",
          "Establish a high-yield container tree nursery for multi-purpose trees",
          "Demonstrate root pruning techniques for potted tree seedlings safely"
        ],
        experiences: [
          "Identifying indigenous multi-purpose trees in the local community zone",
          "Preparing specialized organic seed potting mixtures using topsoil, sand, and compost",
          "Pruning overgrown seedling roots carefully before transplanting phases occur"
        ],
        coreCompetencies: { name: "Critical Thinking", description: "Evaluating optimal tree placements to maximize shade without blocking essential sunlight from shorter food crops." },
        values: { name: "Patriotism", description: "Actively contributing to Kenya's national 15-billion tree planting agenda to restore forest canopy covers." },
        crossSubjectLink: "Social Studies (Climate change mitigation, map tracking, and environmental conservation)"
      },
      "controlling-soil-erosion": {
        id: "1.2",
        title: "Controlling Soil Erosion via Structural Layouts",
        lessons: 12,
        inquiryQuestion: "How do we construct simple barriers to heal deep soil gullies on sloping land?",
        objectives: [
          "Identify structural causes of deep gully formations on sloped farmlands",
          "Construct miniature stone check-dams or trash-line structures across active run-off paths",
          "Appreciate community-led soil conservation drives"
        ],
        experiences: [
          "Mapping local soil erosion channels across the school compound after rainstorms",
          "Piling local rocks or dense crop remains tightly across small channels to slow down water runoff velocities",
          "Planting deep-rooting anchoring grasses on top of repaired barrier zones"
        ],
        coreCompetencies: { name: "Problem Solving", description: "Designing optimal stone placements within check-dams to filter water while preventing structural collapse." },
        values: { name: "Unity", description: "Working as a tight-knit classroom collective to safely lift and position structural barrier stones." },
        crossSubjectLink: "Mathematics (Calculating slope percentages and geometric check-dam alignments)"
      }
    }
  },
  "food-production-processes": {
    id: "2.0",
    title: "Food Production Processes",
    subStrands: {
      "rearing-small-livestock": {
        id: "2.1",
        title: "Rearing Small Livestock: Rabbit & Poultry Care",
        lessons: 14,
        inquiryQuestion: "What are the core requirements to manage a clean, healthy rabbit hutch or poultry house?",
        objectives: [
          "Identify appropriate feeding and watering routines for domestic small stock options",
          "Maintain daily hygiene protocols within a local rabbit hutch or poultry cage environment",
          "Recognize primary behavioral symptoms indicating illness or infestation in farm stock"
        ],
        experiences: [
          "Formulating clean feed portions using local green forage vegetation and supplemental grains",
          "Sweeping out waste structures and applying safe wood shavings to absorb floor wetness",
          "Observing stock groupings to note healthy activity profiles versus drooping postures"
        ],
        coreCompetencies: { name: "Learning to Learn", description: "Keeping organized observation logs tracking daily feed volumes against seasonal weight changes." },
        values: { name: "Responsibility", description: "Consistently delivering fresh, parasite-free water resources daily without missing cycles." },
        crossSubjectLink: "Science and Technology (Vertebrate body structures, animal nutrition profiles, and disease spread dynamics)"
      }
    }
  }
};
