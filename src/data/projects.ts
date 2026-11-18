export type Project = {
  label: string;
  title: string;
  repo: string;
  desc: string;
  desc2: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    label: "// Machine Learning",
    title: "Protect While You Farm",
    repo: "Protect-While-You-Farm",
    desc: "An automatic crop leaf disease detection technique for farmers. A VGG16 CNN image classifier reaches 97% accuracy across 9 plant disease classes, deployed as a Django and JavaScript web app.",
    desc2: "Farmers upload a photo of a leaf and get an instant diagnosis, so disease can be caught early, before it spreads across a field. It turns a trained deep learning model into something a non-technical user can use from any browser.",
    tags: ["VGG16 CNN", "Django", "JavaScript", "Computer vision"],
  },
  {
    label: "// Mobile",
    title: "MediCamet",
    repo: "MediCamet",
    desc: "An Android app that finds nearby pharmacies with the medicine you need in stock, based on your current location. Pharmacists update their inventory dynamically.",
    desc2: "It solves the real problem of walking from shop to shop to find a medicine. Location services and a live-updating Firebase backend keep stock information current, so patients see what is actually available nearby.",
    tags: ["Java", "Firebase", "Google Maps API", "Android"],
  },
  {
    label: "// Machine Learning",
    title: "Brain Tumor Detection",
    repo: "Brain-Tumor-Detection",
    desc: "Brain tumor detection from scans using a CNN built on the InceptionResNetV2 model.",
    desc2: "A transfer-learning approach: a pretrained InceptionResNetV2 backbone is fine-tuned on MRI images to flag tumors, showing how deep learning can support faster, more consistent screening. Built and evaluated end to end in a notebook.",
    tags: ["CNN", "InceptionResNetV2", "Jupyter Notebook"],
  },
  {
    label: "// Computer Vision",
    title: "Global Wheat Detection",
    repo: "Global-Wheat-Detection-Using-YOLOv5",
    desc: "Wheat head detection using a YOLOv5 model.",
    desc2: "Counting wheat heads by hand is slow, so this model locates each head in field images with bounding boxes. Estimates like these help growers judge crop density and yield across varied fields and lighting.",
    tags: ["YOLOv5", "Object detection", "Jupyter Notebook"],
  },
  {
    label: "// Web",
    title: "SakecMart",
    repo: "SakecMart",
    desc: "A platform that lets users sell and buy second-hand books and stationery items online.",
    desc2: "Built as a campus marketplace so students can pass on books and stationery they no longer need. It covers the full flow of listing items, browsing, and buying, with a PHP backend behind it.",
    tags: ["PHP", "Marketplace", "Web app"],
  },
  {
    label: "// Front end",
    title: "Groshop",
    repo: "Groshop",
    desc: "A landing page for a grocery website, built to take my front-end skills to the next level.",
    desc2: "A clean, responsive storefront page that focuses on layout, structure and visual polish. It was my practice ground for front-end fundamentals before moving to full-stack and backend work.",
    tags: ["HTML", "Landing page", "Front end"],
  },
];
