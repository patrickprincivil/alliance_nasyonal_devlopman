import Link from "next/link";
const lessons = [
  "Python environment and project setup",
  "Virtual environments, lint and formatting",
  "AI coding assistants and tool safety",
  "Git and GitHub workflow",
  "Architecture and API design",
  "Python CLI automation",
  "Testing and test isolation",
  "Debugging and observability",
  "Reusable AI skills and MCP concepts",
  "CI/CD, human approval and deployment",
];
export default function AiSoftwareAcademyPage() {
  return <main className="page">
    <p className="eyebrow">Silveroak / Education / AI Factory</p>
    <h1>AI Software Development &amp; Automation Academy</h1>
    <p>Original Silveroak training curriculum: Python, software engineering, AI-assisted development and safe deployment.</p>
    <p><strong>Status:</strong> Curriculum outline only. No registration, classes, certificates, or live AI coding agents are active here.</p>
    <section className="subSection"><h2>Ten-module learning path</h2>
      <ol style={{ paddingLeft: "1.4rem", lineHeight: 2 }}>{lessons.map(lesson => <li key={lesson}>{lesson}</li>)}</ol>
    </section>
    <section className="subSection">
      <h2>Capstone — Silveroak AI Software Factory</h2>
      <p>Prepare requirements, architecture, code suggestions, tests and a human-reviewed pull request for a sample app.</p>
      <Link href="/agent-control-center">View AI Agent Control Center</Link>
    </section>
  </main>;
}
