"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { STARTER_TEMPLATES } from "@/lib/silveroak/templates";
import { createWebsiteDraft, type WebsiteDraft } from "@/lib/silveroak/website-draft";

export default function WebsiteFactoryPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [templateId, setTemplateId] = useState<string>(STARTER_TEMPLATES[0].id);
  const [locale, setLocale] = useState("en");
  const [draft, setDraft] = useState<WebsiteDraft | null>(null);
  const [error, setError] = useState("");
  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try { setDraft(createWebsiteDraft({ businessName: name, description, templateId, locale })); setError(""); }
    catch { setDraft(null); setError("Please enter a name, description and valid template."); }
  }
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Silveroak AI Factory</p>
    <h1>Website Factory — Draft Studio</h1>
    <p>Early local-only website draft prototype. This is not AI-generated content, a persistent editor or a published website. Nothing is sent to a server.</p>
    <form onSubmit={generate} className="card" style={{display:"grid",gap:12,maxWidth:720}}>
      <label>Business name <input required maxLength={100} value={name} onChange={e=>setName(e.target.value)} style={{display:"block",padding:10,width:"100%"}} /></label>
      <label>Business description <textarea required maxLength={500} value={description} onChange={e=>setDescription(e.target.value)} rows={4} style={{display:"block",padding:10,width:"100%"}} /></label>
      <label>Template <select value={templateId} onChange={e=>setTemplateId(e.target.value)} style={{display:"block",padding:10}}>
        {STARTER_TEMPLATES.map(t=><option key={t.id} value={t.id}>{t.name}</option>)}
      </select></label>
      <label>Draft language <select value={locale} onChange={e=>setLocale(e.target.value)} style={{display:"block",padding:10}}>
        <option value="en">English</option><option value="fr">Français</option><option value="ht">Kreyòl</option><option value="es">Español</option>
      </select></label>
      <button type="submit" style={{padding:12}}>Generate local draft preview</button>
      {error ? <p role="alert">{error}</p> : null}
    </form>
    {draft ? <section className="subSection" aria-live="polite">
      <p className="eyebrow">DRAFT — not saved or published</p><h2>{draft.title}</h2>
      <p>{draft.tagline}</p><p>Template: {draft.template} · Language selection: {draft.locale} (text remains English placeholders)</p>
      {draft.sections.map(s=><article className="card" key={s.heading}><h3>{s.heading}</h3><p>{s.body}</p></article>)}
    </section> : null}
    <p><Link href="/silveroak-app-launch/templates">See planned reusable templates</Link></p>
  </main>;
}
