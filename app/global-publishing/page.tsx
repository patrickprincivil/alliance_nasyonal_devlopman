import Link from "next/link";
const departments = [
["Publishing Administration","Title registry, schedules, contracts, ISBN records and publishing finance."],
["Writing & Research","Technical, educational, scientific, business and creative manuscripts."],
["Editorial Quality","Editing, proofreading, fact-checking and human sign-off."],
["Design & Production","Covers, illustrations, diagrams, layouts and print-ready files."],
["Translation & Localization","English, French, Haitian Creole, Spanish and future languages, with human review."],
["Digital Editions","EPUB, accessible PDF, metadata and controlled releases."],
["Print & Manufacturing","Print specifications, proofs, print-on-demand and bulk supplier coordination."],
["Distribution & Bookstore","Distributor delivery, institutional sales and shared marketplace catalog."],
["Audiobooks & Media","Narration rights, audio masters, quality review and distribution."],
["Author Services & Royalties","Author onboarding, agreements, statements and support."],
["Rights & Compliance","Copyright, licenses, permissions, territory, term and takedown records."],
["AI Publishing Tools","Assisted drafting, translation, editing and formatting with human approval."]
];
const steps=["Register title and project","Draft manuscript","Editorial review and fact-check","Author approval","Translation and linguistic review","Cover and interior design","Rights, ISBN and metadata review","Digital and print proof","Release approval","Publish and distribute","Marketing and sales reporting","Royalties and edition maintenance"];
export default function GlobalPublishingPage(){return <main className="page">
<p className="eyebrow">MASTER DEVLOPMAN / Global Publishing & Media</p>
<h1>Silveroak Global Publishing & Media</h1>
<p>One publishing division for books, technical manuals, digital editions, print coordination, translation, audio, distribution and author services.</p>
<p><strong>Status: PROPOSED / FOUNDATION PAGE.</strong> This page records scope. It does not claim a publishing team, printing plant, ISBN account, distributor contract or public bookstore checkout is operational.</p>
<section className="subSection"><h2>One structure — shared services, no duplication</h2>
<p>Publishing owns manuscript production, editorial approvals, editions, rights, print jobs and distribution. The Global Digital Library remains the shared catalog and reading/discovery layer. Marketplace and Revenue/Finance retain product commerce, checkout, invoices, payments and accounting. Shared Core provides identity, documents, permissions, approvals, audit and notifications.</p>
<p><Link href="/global-digital-library">Open the shared Global Digital Library</Link></p><p><Link href="/master-control-center">Return to Master Control Center</Link></p></section>
<section className="gridSection">{departments.map(([title,description])=><article className="card" key={title}><h2>{title}</h2><p>{description}</p></article>)}</section>
<section className="subSection"><h2>Controlled production workflow</h2><ol>{steps.map(step=><li key={step}>{step}</li>)}</ol><p>Every release retains version history, reviewer identity, approval evidence, rights status and final source files.</p></section>
<section className="subSection"><h2>Initial collections</h2><ul><li>Technology: AI, robotics, IT support, electronics and industrial automation.</li><li>National development: agriculture, energy, telecommunications and digital education.</li><li>Business: entrepreneurship, operations, finance and automation.</li><li>Education: computing, mathematics, technician training and learning resources.</li></ul><p>Proposed flagship: <strong>Silveroak AI & Robotics Engineering Center</strong>. Technical claims, diagrams, citations and safety instructions require subject-matter review before publication.</p></section>
<section className="subSection"><h2>Implementation gates</h2><ol><li>Create unique publication and edition records; do not create a second general document library.</li><li>Define manuscript, review, rights, translation, edition, print-job and distribution records.</li><li>Connect existing authentication, organization access, document storage, approvals and audit.</li><li>Build private manuscript and reviewer workflow before public author self-service.</li><li>Generate and validate PDF/EPUB proofs, accessibility and metadata.</li><li>Evaluate ISBN, print suppliers and distributor integrations only after legal and contract review.</li></ol></section>
<section className="subSection"><h2>Commercial safeguards</h2><p>Budgets are estimates, not supplier quotations. Verify platform royalties, print charges, ISBN rules, tax treatment and distribution rights by country and channel. No exclusive rights, print purchase, paid advertising or external release is authorized by this planning page. AI-assisted content requires human review.</p></section>
</main>}
