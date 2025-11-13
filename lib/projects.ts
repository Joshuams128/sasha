// lib/projects.ts
export type ProjectCategory =
  | "Activity"
  | "Scenario-based"
  | "Simulation"
  | "Course";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  businessProblem?: string;
  learningSolution?: string;
  toolsUsed: string[];
  highlightTags: string[];
  imageAlt: string;
  sampleUrl?: string; // "Experience this eLearning" link
}

export const projects: Project[] = [
  {
    id: "whmis-pictograms",
    title: "Immersive Select to Reveal – WHMIS Pictograms",
    category: "Activity",
    shortDescription:
      "Interactive WHMIS pictogram activity that uses immersive select-to-reveal interactions to reinforce correct hazard identification.",
    toolsUsed: ["Articulate Storyline 360", "Vyond", "Adobe Illustrator"],
    highlightTags: ["Select-to-reveal", "Compliance", "Microlearning"],
    imageAlt:
      "Screenshot of a WHMIS course with containers learners can select to reveal meanings.",
    sampleUrl: "https://example.com" // TODO: replace with real link
  },
  {
    id: "phishing-emails",
    title: "Immersive Learning – Phishing Emails (Cybersecurity)",
    category: "Scenario-based",
    shortDescription:
      "Scenario-based cybersecurity module where learners evaluate realistic emails to decide whether they are phishing or legitimate.",
    toolsUsed: ["Articulate Storyline 360", "Vyond"],
    highlightTags: ["Cybersecurity", "Scenario-based", "Decision-making"],
    imageAlt:
      "Screenshot of an email with buttons for phishing vs legitimate.",
    sampleUrl: "https://example.com"
  },
  {
    id: "statutory-regime",
    title: "Select to Reveal – Statutory Regime (HR Course)",
    category: "Activity",
    shortDescription:
      "Andragogy-informed select-to-reveal interaction teaching key employment legislation.",
    toolsUsed: ["Articulate Storyline 360"],
    highlightTags: ["HR", "Andragogy", "Microlearning"],
    imageAlt:
      "Activity with legislation tiles learners select to explore details.",
    sampleUrl: "https://example.com"
  },
  {
    id: "pcc-simulation",
    title: "Simulation – PointClickCare (Finance Course)",
    category: "Simulation",
    shortDescription:
      "Guided system simulation that walks learners through navigating the Trust Module in PointClickCare.",
    toolsUsed: ["Articulate Storyline 360"],
    highlightTags: ["Software simulation", "Healthcare", "Performance support"],
    imageAlt:
      "Screenshot of a PointClickCare interface with navigation instructions.",
    sampleUrl: "https://example.com"
  },
  {
    id: "dining-scenario",
    title: "Dining Scenario-Based eLearning",
    category: "Scenario-based",
    shortDescription:
      "High-impact dining room scenarios where dietary staff see the consequences of their decisions and practice correct behaviours.",
    businessProblem:
      "Inconsistent dining room setup and service quality across long-term care homes.",
    learningSolution:
      "Scenario-based eLearning that lets staff experience consequences of incorrect behaviour and reinforces best practice.",
    toolsUsed: [
      "Articulate Storyline 360",
      "Vyond",
      "Adobe Audition",
      "AI Text-to-Speech"
    ],
    highlightTags: ["Scenario-based", "Long-term care", "Behaviour change"],
    imageAlt: "Dining plate with cutlery and course title.",
    sampleUrl: "https://example.com"
  },
  {
    id: "effective-performance-management",
    title: "Effective Performance Management",
    category: "Course",
    shortDescription:
      "30-minute Level 4 eLearning course converting a long ILT session into an engaging, gamified digital experience.",
    businessProblem:
      "Two-hour ILT sessions were draining HR resources and not driving desired behaviour change.",
    learningSolution:
      "Modular, badge-based eLearning with animation, branching, and knowledge checks for leaders.",
    toolsUsed: [
      "Articulate Storyline 360",
      "Vyond",
      "Adobe Audition",
      "AI Text-to-Speech"
    ],
    highlightTags: ["Gamification", "Leadership", "Level 4 eLearning"],
    imageAlt:
      "Badge-style graphic representing effective performance management course.",
    sampleUrl: "https://example.com"
  }
];
