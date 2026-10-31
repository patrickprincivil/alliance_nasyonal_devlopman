export const ACADEMY_PROGRAMS = [
  { id: "computing", title: "Computing", modules: ["Data Mining", "Cloud Computing", "Information Security", "Web Development", "Technology Entrepreneurship", "Computing Project"] },
  { id: "business", title: "Business Management", modules: ["Business Transformation Capstone Project"] },
  { id: "health", title: "Health and Care Management", modules: ["Global Health", "Health Analytics", "Quality Management", "Project Management", "Leadership", "Independent Study"] },
  { id: "research", title: "Research Training", modules: ["Research Project"] },
] as const;
export const EDUCATION_NOTICE = "Independent Silveroak educational reference. No affiliation with Arden University, university credits, or accredited qualifications is implied.";
export const LIBRARY_AREAS = [
  "Public Libraries", "Universities", "Open Education", "Professional Training",
  "Books and Research", "Languages", "Examinations", "Offline Learning",
] as const;

// Proposed academic departments; these are not accredited degree programs.
export const ACADEMY_DEPARTMENTS = [
  ["business","Business & Entrepreneurship","Business planning, management and entrepreneurship"],
  ["finance","Finance & Accounting","Accounting, financial planning and reporting"],
  ["ai","AI & Computer Science","Software, AI, data science and security"],
  ["engineering","Engineering & Manufacturing","Mechanical, electrical and industrial production"],
  ["automotive","Automotive & Heavy Equipment","Vehicles, forklifts, mechanics and maintenance"],
  ["robotics","Robotics & Autonomous Systems","Mechatronics, sensing, GPS and safety engineering"],
  ["aviation","Aviation & Drone","Flight systems and drone safety"],
  ["maritime","Maritime & Logistics","Ports, shipping and supply chains"],
  ["agriculture","Agriculture & Food Technology","Agronomy and food processing"],
  ["trades","Construction & Skilled Trades","Welding, electrical, plumbing and construction"],
  ["health","Health & Medical","Healthcare education and hospital operations"],
  ["law","Law & Government","Public administration and regulatory literacy"],
  ["energy","Energy & Telecommunications","Solar, batteries, fiber and satellite networking"],
  ["tourism","Tourism & Hospitality","Hospitality management and services"],
  ["research","Research & Innovation","Research methods, labs and inventions"],
] as const;

export const EDUCATION_PARTNER_CANDIDATES = [
  { name: "Arden University", country: "United Kingdom", type: "University", partnership: "Not verified", admissions: "Institution confirmation required", url: "https://arden.ac.uk/" },
] as const;

export const MANUFACTURING_LEARNING_PATH = [
  ["1","Core trades","Welding, mechanics, electricity, industrial safety"],
  ["2","Advanced technical","Automotive electronics, CAD, CNC, GPS, mechatronics"],
  ["3","Engineering","Mechanical, electrical, manufacturing engineering"],
  ["4","Intelligent systems","AI, robotics, computer vision, autonomous safety"],
  ["5","Management","Engineering, project and supply-chain management"],
  ["6","Research & validation","Materials labs, vehicle tests, certification"],
] as const;
