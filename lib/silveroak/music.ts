export const MUSIC_FACTORY_SECTIONS = [
  { id: "control", title: "Music Control Center", detail: "Projects, artists, credits, budgets and reports" },
  { id: "library", title: "Global Music Library", detail: "Licensed original, educational, sacred and instrumental catalog" },
  { id: "scores", title: "Digital Sheet Music", detail: "PDF, MusicXML, MIDI, lead sheets and guitar tablature" },
  { id: "composition", title: "Music Composition Studio", detail: "Melody, harmony, arrangement and orchestration" },
  { id: "production", title: "Music Production Studio", detail: "Recording, MIDI, mixing, mastering and export" },
  { id: "education", title: "Music Education Center", detail: "Instrument lessons, theory, ear training and exams" },
  { id: "games", title: "Interactive Music Games", detail: "Quizzes, melody and rhythm challenges" },
  { id: "playlists", title: "Playlist Management", detail: "Personal and educational listening lists" },
  { id: "agents", title: "AI Music Agents", detail: "Six proposed specialist agents; no automated actions enabled" },
  { id: "rights", title: "Music Copyright Center", detail: "SOCAN records, credits, licenses and royalties" },
  { id: "distribution", title: "Music Distribution", detail: "Release checklists and distributor workflows" },
  { id: "marketplace", title: "Music Marketplace", detail: "Licensed scores, courses and original recordings" },
  { id: "applications", title: "Music Applications", detail: "Web, Windows, Android, iOS and offline planning" },
  { id: "security", title: "Governance & Security", detail: "Consent, rights verification, filtering and audits" },
] as const;
export const MUSIC_AGENT_ROLES = [
  "AI Composer", "AI Arranger", "AI Music Teacher", "AI Audio Engineer",
  "AI Catalog Manager", "AI Rights Assistant",
] as const;
export const SCORE_FORMATS = ["PDF", "MusicXML", "MIDI", "Lead sheet", "Chord chart", "Tablature"] as const;
