export const MUSIC_FACTORY_SECTIONS = [
{slug:"library",title:"Global Music Library",detail:"Catalog by genre, composer, instrument and license"},
{slug:"scores",title:"Digital Sheet Music",detail:"MusicXML, MIDI, scores and lead sheets"},
{slug:"composition",title:"Composition Studio",detail:"Arrangement and composition planning"},
{slug:"production",title:"Production Studio",detail:"Recording, mixing, mastering and export workflows"},
{slug:"education",title:"Music Education",detail:"Instrument lessons and theory"},
{slug:"games",title:"Interactive Music Games",detail:"Original quiz and music theory activities"},
{slug:"playlists",title:"Playlists",detail:"Curated and personal playlist planning"},
{slug:"agents",title:"AI Music Agents",detail:"Proposed agents; human approval required"},
{slug:"rights",title:"Copyright Center",detail:"Licenses, SOCAN work records and attribution"},
{slug:"distribution",title:"Music Distribution",detail:"DistroKid and release tracking"},
{slug:"marketplace",title:"Music Marketplace",detail:"Original licensed scores and teaching material"},
{slug:"applications",title:"Music Applications",detail:"Web and offline-first planning"},
{slug:"governance",title:"Governance & Security",detail:"Content filtering, permissions, backup and audits"}
] as const;
export const MUSIC_TOOLS = [
"MuseScore Studio", "MuseScore.com", "Finale PrintMusic",
"Cakewalk SONAR", "FL Studio", "Band-in-a-Box", "Suno AI", "SOCAN", "DistroKid"
] as const;
export type ScoreRights = "ORIGINAL" | "PUBLIC_DOMAIN_VERIFIED" | "LICENSED" | "UNKNOWN";
export function canPublishScore(rights: ScoreRights): boolean {
 return rights === "ORIGINAL" || rights === "PUBLIC_DOMAIN_VERIFIED" || rights === "LICENSED";
}
