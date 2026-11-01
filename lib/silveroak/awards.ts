export const AWARD_STAGES = ["DRAFT","OPEN","ELIGIBILITY","JUDGING","REVIEW","APPROVED","PUBLISHED","CLOSED"] as const;
export type AwardStage = (typeof AWARD_STAGES)[number];
export const AWARD_EVALUATION_METHODS = [
  { id:"qualifying", name:"Qualifying", description:"Eligibility screening against published criteria" },
  { id:"top-pick", name:"Top Pick", description:"Individual judge preferences (reviewed and documented)" },
  { id:"voting", name:"Public Voting", description:"Public voting with anti-abuse safeguards" },
  { id:"scoring", name:"Independent Scoring", description:"Criterion-based judge evaluations" },
] as const;
export const AWARD_MODULES = [
 "Program & Category Management","Applications & Nominations","Eligibility Checks",
 "Independent Judge Assignments","Conflict-of-Interest Declarations",
 "Scoring & Ranking","Human Approval","Public Voting Safeguards",
 "Certificates","Ceremony Planning","Sponsorship & Reporting","Audit & Security"
] as const;
const transitions: Record<AwardStage,readonly AwardStage[]> = {
 DRAFT:["OPEN"],OPEN:["ELIGIBILITY","CLOSED"],ELIGIBILITY:["JUDGING","OPEN"],
 JUDGING:["REVIEW"],REVIEW:["JUDGING","APPROVED"],APPROVED:["PUBLISHED"],
 PUBLISHED:["CLOSED"],CLOSED:[]
};
export function canAdvanceAward(from:AwardStage,to:AwardStage):boolean{
 return transitions[from].includes(to);
}
// Pure helper; backend MUST independently enforce authentication, consent,
// judge conflicts, stage deadlines, tenant boundaries and approval.
export function weightedScore(ratings:readonly {score:number,weight:number}[]):number{
 if(!ratings.length || ratings.some(r=>!Number.isFinite(r.score)||r.score<0||r.score>100||!Number.isFinite(r.weight)||r.weight<=0))
   throw new Error("Invalid scoring criteria");
 const denominator=ratings.reduce((n,r)=>n+r.weight,0);
 if(!Number.isFinite(denominator)||denominator<=0)throw new Error("Invalid weights");
 return ratings.reduce((n,r)=>n+r.score*r.weight,0)/denominator;
}
