export const JOB_CATEGORIES = [
  { label: "Healthcare", examples: "Nurses, physicians, pharmacists" },
  { label: "Personal care", examples: "Caregivers, PSWs, senior care" },
  { label: "Transportation", examples: "Class 1/AZ, trucks, buses" },
  { label: "Agriculture", examples: "Agronomists, farm workers" },
  { label: "Public safety", examples: "Police, security guards" },
  { label: "Electrical", examples: "Licensed electricians" },
  { label: "Mechanical", examples: "Mechanics, industrial maintenance" },
  { label: "Construction", examples: "Builders, engineers, trades" },
  { label: "Manufacturing", examples: "Welders, machine operators" },
  { label: "Technology", examples: "IT, programmers, AI" },
  { label: "Finance", examples: "Accountants, analysts" },
  { label: "Education", examples: "Teachers, trainers" },
  { label: "Logistics", examples: "Forklift, warehouses, delivery" },
  { label: "Administration", examples: "Office and clerical" },
  { label: "Government and energy", examples: "Civil service, energy technicians" },
] as const;
export const JOB_SOURCES = [
  { label: "Canada Job Bank", url: "https://www.jobbank.gc.ca/" },
  { label: "Government of Canada Jobs", url: "https://www.canada.ca/en/services/jobs/opportunities/government.html" },
  { label: "Indeed Canada", url: "https://ca.indeed.com/" },
  { label: "USAJOBS", url: "https://www.usajobs.gov/" },
  { label: "Indeed USA", url: "https://www.indeed.com/" },
] as const;
