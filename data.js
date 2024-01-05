////////////////////////////////////////////////////////////////////////
// Data to be read from upload, at some point...
var in_all_levels = [
  {
    "foci": "stats",
    "notes": "The application of statistical methods to data from various fields of biological research. Special emphasis is placed on practical computational procedures.",
    "outcomes": [
      0,
      2,
      0,
      0
    ],
    "timing": "1",
    "title": "841 Biometry I",
    "type": "class"
  },
  {
    "outcomes": [
      1,
      0,
      0,
      0
    ],
    "timing": "2",
    "title": "801 Core Topics in Current EEB Res",
    "type": "class"
  },
  {
    "outcomes": [
      0,
      2,
      0,
      0
    ],
    "timing": "1",
    "title": "805 Scintfc Intgrty Ecol&Evol Biol",
    "type": "class"
  },
  {
    "outcomes": [
      1,
      0,
      1,
      0
    ],
    "title": "985 Advanced Study",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      2,
      0
    ],
    "title": "985 Advanced Study",
    "type": "class"
  },
  {
    "outcomes": [
      0,
      0,
      0,
      0
    ],
    "timing": "FIRST_MONTH",
    "title": "Prelim. Advising Meeting",
    "type": "event"
  },
  {
    "outcomes": [
      0,
      0,
      1,
      0
    ],
    "timing": "START_THIRD_SEMESTER",
    "title": "form RAC",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "poster at regional mtg",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "poster at national mtg",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "poster at international mtg",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "present talk at regional mtg",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "present talk at national mtg",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "present talk at international mtg",
    "type": "event"
  },
  {
    "notes": "EEB genetics;  Ecology Friday Lunch series; BIMOL;  BigMac or other journal club/discussion group.",
    "outcomes": [
      2,
      2,
      0,
      2
    ],
    "title": "lead discussion in journal club",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "poster at EEB",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "present talk to EEB",
    "type": "event"
  },
  {
    "outcomes": [
      2,
      3,
      0,
      2
    ],
    "title": "apply for a fellowship",
    "type": "event"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "600 Introd Biochemistry",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "602 Plant Ecology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "622 Paleontology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "623 Paleontology Laboratory",
    "type": "class"
  },
  {
    "foci": "biodiversity;ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "630 Conservatn and Wildlife Biolgy",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "640 Biolgy&Evoltn of Fossil Plants",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "648 Systematics and Macroevolution",
    "type": "class"
  },
  {
    "foci": "ecology;mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "668 Evolutionary Ecology",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "672 Gene Expression",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "680 Genomics",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 African Biodiversity",
    "type": "class"
  },
  {
    "foci": "biodiversity;ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Biodiversity-Ecosystem Functio",
    "type": "class"
  },
  {
    "foci": "biodiversity;ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Biology of Dispersal",
    "type": "class"
  },
  {
    "foci": "computing",
    "outcomes": [
      0,
      0,
      2,
      0
    ],
    "title": "701 Computer Science for Biology",
    "type": "class"
  },
  {
    "foci": "ecology;mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Ecol&Evol Host Microbiome Intr",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Ecology of Infectious Diseases",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Field Botany",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Genome Biology",
    "type": "class"
  },
  {
    "foci": "ecology;stats",
    "outcomes": [
      2,
      2,
      0,
      0
    ],
    "title": "701 Intro Mathematical Epidemiol",
    "type": "class"
  },
  {
    "foci": "computing;stats",
    "outcomes": [
      0,
      2,
      2,
      0
    ],
    "title": "701 Likelihood Methods in Biology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Lizards",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Measuring Biodiversity",
    "type": "class"
  },
  {
    "foci": "ecology;mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Microbiomes: Data to Insight",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      2,
      0,
      0
    ],
    "title": "701 Native&Western Views of Nature",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Natural Resource Management",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Neotropical Biogeo&Diversifctn",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Population Biology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "701 Principles of Insect Morpholgy",
    "type": "class"
  },
  {
    "foci": "computing",
    "outcomes": [
      0,
      2,
      2,
      0
    ],
    "title": "701 Programming in R",
    "type": "class"
  },
  {
    "foci": "mechanisms;stats",
    "outcomes": [
      2,
      2,
      0,
      0
    ],
    "title": "701 Quantitative Genetics",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      2
    ],
    "title": "701 Rdgs Evlutnry Genetcs&Genomics",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      2
    ],
    "title": "701 Readings in Ecosystem Science",
    "type": "class"
  },
  {
    "foci": "computing;stats",
    "outcomes": [
      2,
      2,
      2,
      0
    ],
    "title": "701 Simulating the Covid Pandemic",
    "type": "class"
  },
  {
    "foci": "computing;stats",
    "outcomes": [
      0,
      2,
      2,
      0
    ],
    "title": "701 Simultn Modlg Biol",
    "type": "class"
  },
  {
    "outcomes": [
      0,
      2,
      0,
      2
    ],
    "title": "701 Writing Scientific Papers",
    "type": "class"
  },
  {
    "outcomes": [
      0,
      2,
      0,
      2
    ],
    "title": "720 Scientific Illustration",
    "type": "class"
  },
  {
    "outcomes": [
      0,
      2,
      0,
      2
    ],
    "title": "735 Scientific Communication",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "743 Population Genetics",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "759 Ecosystems Stewardship",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "782 Principles of Biogeography",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      2
    ],
    "title": "787 Introduction to Museum Exhibts",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "798 Intro Collctns Mgmt & Utiliztn",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "801 Adv Topics in Paleobiology",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "801 Biogeochemistry",
    "type": "class"
  },
  {
    "foci": "computing",
    "outcomes": [
      0,
      2,
      2,
      0
    ],
    "title": "801 Data Carpentry",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      2
    ],
    "title": "801 EEB Genetics",
    "type": "class"
  },
  {
    "foci": "mechanismslbiodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "801 Foundations of Speciation",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "801 Kansas Plants and Landscapes",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "801 Macroevolution",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "801 Molecular Systematics",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "815 Advanced Molecular Genetics",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "816 Careers in the Biomed Sciences",
    "type": "class"
  },
  {
    "foci": "mechanismslbiodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "848 Phylogenetic Methods",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "860 Principles&Practice Chem Biol",
    "type": "class"
  },
  {
    "foci": "stats",
    "outcomes": [
      2,
      2,
      0,
      0
    ],
    "title": "943 Multivariate Data Analysis",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "503 Immunology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "509 Biology of Spiders",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "512 General Virology",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "518 Microbial Genetics",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "520 Marine Biology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "524 Mammalian Paleontology",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "527 Primate Evolutn & Fossil Recrd",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "533 Biology of Fungi",
    "type": "class"
  },
  {
    "foci": "mechanisms",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "545 Evolution of Development",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "546 Mammalian Physiology",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "547 Mammalian Physiology Laboratry",
    "type": "class"
  },
  {
    "foci": "stats",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "570 Introduction to Biostatistics",
    "type": "class"
  },
  {
    "foci": "biodiversity",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "582 Principles of Biogeography",
    "type": "class"
  },
  {
    "foci": "ecology",
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "594 Forest Ecosystems",
    "type": "class"
  },
  {
    "outcomes": [
      2,
      0,
      0,
      0
    ],
    "title": "595 Human Genetics",
    "type": "class"
  }
] ;
var in_ma_nonthesis = [
  {
    "level": "mant",
    "outcomes": [
      3,
      3,
      3,
      3
    ],
    "timing": "FOURTH_SEMESTER",
    "title": "Masters Final Exam",
    "type": "event"
  }
] ;
var in_ma_thesis = [
  {
    "level": "mat",
    "outcomes": [
      3,
      3,
      3,
      0
    ],
    "timing": "3",
    "title": "899 Masters Thesis",
    "type": "class"
  },
  {
    "level": "mat",
    "outcomes": [
      3,
      3,
      2,
      3
    ],
    "timing": "THIRD_SEMESTER",
    "title": "Thesis Writing",
    "type": "event"
  },
  {
    "level": "mat",
    "outcomes": [
      3,
      3,
      3,
      3
    ],
    "timing": "FOURTH_SEMESTER",
    "title": "Masters Defense",
    "type": "event"
  }
] ;
var in_phd = [
  {
    "level": "phd",
    "outcomes": [
      2,
      2,
      2,
      0
    ],
    "timing": "7",
    "title": "999 Doctoral Dissertation",
    "type": "class"
  },
  {
    "level": "phd",
    "outcomes": [
      3,
      3,
      3,
      0
    ],
    "timing": "9",
    "title": "999 Doctoral Dissertation",
    "type": "class"
  },
  {
    "level": "phd",
    "outcomes": [
      2,
      2,
      1,
      0
    ],
    "timing": "THIRD_SEMESTER",
    "title": "Comp. Oral Exam",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      2,
      2,
      2,
      2
    ],
    "timing": "EARLY_FOURTH_SEMESTER",
    "title": "Dissertation Prop. Writing",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      2,
      2,
      2,
      2
    ],
    "timing": "FOURTH_SEMESTER",
    "title": "Dissertation Prop. Defense",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      3,
      3,
      2,
      0
    ],
    "timing": "EARLY_FIFTH_SEMESTER",
    "title": "Dissertation Research",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      3,
      3,
      2,
      3
    ],
    "timing": "FIFTH_SEMESTER",
    "title": "Dissertation Writing",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      3,
      3,
      3,
      3
    ],
    "timing": "BEFORE_DEFENSE_DATE",
    "title": "Finish Dissertation",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      3,
      3,
      3,
      3
    ],
    "timing": "DEFENSE_DATE",
    "title": "Defend Dissertation",
    "type": "event"
  },
  {
    "level": "phd",
    "outcomes": [
      2,
      3,
      2,
      2
    ],
    "title": "write a grant proposal",
    "type": "event"
  },
  {
    "level": "phd",
    "notes": "The research skills to be fulfilled is chosen by the student and their PAM committee and RAC.",
    "outcomes": [
      0,
      0,
      2,
      0
    ],
    "timing": "BEFORE_ORALS",
    "title": "complete Research Skill",
    "type": "event"
  }
] ;

