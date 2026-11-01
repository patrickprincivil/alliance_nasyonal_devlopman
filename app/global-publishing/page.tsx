const stages = [
["01","Intake & project brief","Create title, author, audience, language, formats and budget."],
["02","Rights clearance","Verify copyright, contributor agreements, permissions and licences."],
["03","Research & manuscript","Maintain source register, outline, drafts and version history."],
["04","Editorial review","Developmental edit, copyedit, proofreading and author approval."],
["05","Translation & localization","Translate approved source; bilingual human review."],
["06","Design & prepress","Cover, interior, EPUB/PDF, print layout and accessibility QA."],
["07","Commercial approval","Confirm ISBN, territories, price, costs, contract and royalty basis."],
["08","Publication approval","Human sign-off on rights, files, metadata, price and release date."],
["09","Distribution & marketing","Submit through authorized accounts and retain listing evidence."],
["10","Sales & royalties","Reconcile statements, fees, printing, refunds and author royalties."]
];
const departments = [
["Editorial & Research","Research, manuscripts, fact-checking and editorial quality."],
["Translation & Localization","English, French, Spanish and Haitian Creole; later languages after review."],
["Design & Production","Covers, interior layouts, EPUB, PDF, print and audiobook production."],
["Rights & Compliance","Copyright, permissions, contracts, ISBN and territory restrictions."],
["Distribution & Marketing","Retailer coordination, launch assets and campaigns using shared Marketing Hub."],
["Finance & Royalties","Costs, sales reconciliation, royalty statements and financial reporting."]
];
const checks = [
["Copyright and source-file ownership","Critical","Contract clause and editable source-file delivery"],
["ISBN and imprint control","Critical","Registrant identity and edition-level ISBN details"],
["Distribution reach","High","Named retailers, territories, formats and takedown rights"],
["Royalty transparency","Critical","Worked calculation after retailer fees, print costs and returns"],
["Complete cost","Critical","Itemized setup, print, shipping, tax and recurring fees"],
["Editorial and translation quality","High","Samples, qualifications, revision limits and human review"],
["Reporting and payment","High","Sample report, schedule, thresholds, currency and fees"],
["Cancellation and exit","Critical","Refund terms, account ownership and file export"]
];
export default function GlobalPublishingPage() {
 return <main className="min-h-screen bg-slate-950 px-5 py-10 text-slate-100"><div className="mx-auto max-w-7xl space-y-10">
  <header className="rounded-3xl border border-cyan-900 bg-slate-900 p-8"><p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Master Devlopman / Silveroak AI Factory</p><h1 className="mt-3 text-3xl font-bold md:text-5xl">Global Publishing Division</h1><p className="mt-4 max-w-3xl text-slate-300">Yon sèl sant pou devlopman liv, koreksyon, tradiksyon, konsepsyon, pwodiksyon, distribisyon, dwa otè ak redevans.</p><div className="mt-6 flex flex-wrap gap-2 text-sm"><span className="rounded-full bg-amber-950 px-3 py-1 text-amber-200">Architecture / MVP planning</span><span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">No live publisher integrations yet</span></div></header>
  <section><h2 className="text-2xl font-semibold">Book production workflow</h2><p className="mt-2 text-slate-400">Chak etap dwe gen responsab, prèv ak apwobasyon.</p><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{stages.map(([n,t,d])=><article key={n} className="rounded-2xl border border-slate-800 bg-slate-900 p-5"><span className="text-sm font-bold text-cyan-300">{n}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{d}</p></article>)}</div></section>
  <section><h2 className="text-2xl font-semibold">Publishing department organization</h2><div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-5"><div className="mx-auto max-w-md rounded-xl border border-cyan-700 bg-cyan-950 p-4 text-center"><strong>Publishing Division Director</strong><p className="mt-1 text-sm text-cyan-200">Strategy • budget • coordination</p></div><div className="mx-auto h-6 w-px bg-slate-600"/><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{departments.map(([n,d])=><div key={n} className="rounded-xl border border-slate-700 p-4"><h3 className="font-semibold text-cyan-200">{n}</h3><p className="mt-2 text-sm text-slate-400">{d}</p></div>)}</div></div></section>
  <section><h2 className="text-2xl font-semibold">Partner evaluation matrix</h2><p className="mt-2 text-slate-400">Ibukku rete yon kandida, pa yon patnè siyen. Pa peye anvan kondisyon kritik yo verifye alekri.</p><div className="mt-5 overflow-x-auto rounded-2xl border border-slate-800"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-slate-800"><tr><th className="p-3">Criterion</th><th className="p-3">Priority</th><th className="p-3">Evidence to request</th></tr></thead><tbody>{checks.map(([a,b,c])=><tr key={a} className="border-t border-slate-800"><td className="p-3 font-medium">{a}</td><td className="p-3 text-amber-200">{b}</td><td className="p-3 text-slate-400">{c}</td></tr>)}</tbody></table></div></section>
  <section className="grid gap-5 lg:grid-cols-2"><article className="rounded-2xl border border-slate-800 bg-slate-900 p-6"><h2 className="text-xl font-semibold">Shared Master Devlopman services</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300"><li>Digital Library and secure document storage</li><li>Identity, roles and permissions</li><li>Human approval and audit logs</li><li>CRM, marketing and customer records</li><li>Billing, finance and analytics</li><li>Existing AI orchestrator and project management</li></ul></article><article className="rounded-2xl border border-amber-900 bg-amber-950/30 p-6"><h2 className="text-xl font-semibold text-amber-200">Implementation status</h2><p className="mt-3 text-sm leading-6 text-slate-300">Paj sa a se yon entèfas planifikasyon. Li poko konekte ak ISBN, Ibukku, Amazon, Apple Books, peman, bazdone oswa ajan AI otomatik. Entegrasyon sa yo mande devlopman ak tès separe.</p></article></section>
  <footer className="border-t border-slate-800 pt-5 text-sm text-slate-500">SILVEROAK • One Master Devlopman • Rights first • Human approval • No duplicate systems</footer>
 </div></main>;
}
