// Proposal-only academy catalog. It does not claim accreditation or university affiliation.
export const ACADEMY_DEPARTMENTS = [
"Business & Entrepreneurship","Finance & Accounting","AI & Computer Science",
"Engineering & Manufacturing","Automotive & Heavy Equipment",
"Robotics & Autonomous Systems","Aviation & Drone","Maritime & Logistics",
"Agriculture & Food Technology","Construction & Skilled Trades",
"Health & Medical","Law & Government","Energy & Telecommunications",
"Tourism & Hospitality","Research & Innovation",
] as const;
export const TECHNICAL_PATHWAY = [
{ level:1, title:"Technical foundations", topics:["Welding","Mechanics","Electrical safety","Industrial health and safety"] },
{ level:2, title:"Advanced technician", topics:["Vehicle electronics","GPS","CAD","CNC","Mechatronics"] },
{ level:3, title:"Engineering", topics:["Mechanical engineering","Electrical engineering","Manufacturing processes"] },
{ level:4, title:"Intelligent systems", topics:["AI","Robotics","Computer vision","Autonomy safety"] },
{ level:5, title:"Management", topics:["Engineering management","Projects","Supply chain"] },
{ level:6, title:"Research and certification", topics:["Materials testing","Pilot evaluation","Regulatory conformity"] },
] as const;
export const UNIVERSITY_RECORD_FIELDS = [
"institution","country","officialUrl","program","award","mode","teachingLanguage",
"tuitionCurrency","tuitionAmount","tuitionVerifiedAt","entryRequirements",
"applicationDeadlines","accreditationEvidence","scholarshipTerms",
"partnershipStatus","silveroakAlignment",
] as const;
