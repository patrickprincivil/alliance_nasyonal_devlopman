"use client";
import { useMemo, useState } from "react";
import { EDUCATION_INSTITUTIONS, EDUCATION_SUBJECTS, EDUCATION_SERVICES } from "@/lib/silveroak/education-catalog";
type View = "institutions" | "subjects" | "services";
export default function GlobalEducationPage() {
  const [view, setView] = useState<View>("institutions");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const countries = useMemo(() => [...new Set(EDUCATION_INSTITUTIONS.map(i => i.country_or_scope))].sort(), []);
  const find = (s: string) => s.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
  const institutions = EDUCATION_INSTITUTIONS.filter(x =>
    (!country || x.country_or_scope === country) &&
    [x.name, x.country_or_scope, x.focus, x.provider_type].some(find));
  const subjects = EDUCATION_SUBJECTS.filter(x => [x.field, x.subject].some(find));
  const services = EDUCATION_SERVICES.filter(x => [x.department, x.service].some(find));
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Education</p>
    <h1>Silveroak Global Education & Professional Training</h1>
    <p>Integrated read-only catalog from the Silveroak offline prototype: {EDUCATION_INSTITUTIONS.length} institutions/directories, {EDUCATION_SUBJECTS.length} subject classifications and {EDUCATION_SERVICES.length} service categories. This is not a complete worldwide directory or an accreditation/tuition verifier. No user data is saved.</p>
    <nav aria-label="Education categories" style={{display:"flex",gap:12,flexWrap:"wrap",margin:"22px 0"}}>
      {(["institutions","subjects","services"] as const).map(key =>
        <button type="button" key={key} aria-pressed={view===key} onClick={()=>{setView(key);setQuery("");}} style={{padding:"10px 16px",border:"1px solid #607d8b",borderRadius:8,cursor:"pointer",background:view===key?"#d8ece9":"white",color:"#17313b"}}>{key==="institutions"?"Institutions":key==="subjects"?"Professional subjects":"University services"}</button>)}
    </nav>
    <label htmlFor="education-search">Search directory</label>
    <input id="education-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name, location, field or service" style={{display:"block",margin:"12px 0",padding:12,width:"min(100%,600px)",border:"1px solid #889"}} />
    {view==="institutions" && <><label htmlFor="education-country">Country or scope</label><select id="education-country" value={country} onChange={e=>setCountry(e.target.value)} style={{margin:12,padding:10}}><option value="">All locations</option>{countries.map(c=><option value={c} key={c}>{c}</option>)}</select>
    <p>{institutions.length} matching entries</p><section className="gridSection">{institutions.map(x=><article className="card" key={x.name}><h2>{x.name}</h2><p>{x.country_or_scope} — {x.provider_type}</p><p>{x.focus}</p><p>{x.access_note}</p><a href={x.website} target="_blank" rel="noopener noreferrer">Official/provider website ↗</a></article>)}</section></>}
    {view==="subjects" && <><p>{subjects.length} subject categories found. These are curriculum topics, not verified enrollable courses.</p><section className="gridSection">{subjects.map(x=><article className="card" key={x.field+":"+x.subject}><h2>{x.subject}</h2><p>{x.field}</p><p>{x.status}</p></article>)}</section></>}
    {view==="services" && <><p>{services.length} typical service categories. Actual availability varies by institution.</p><section className="gridSection">{services.map(x=><article className="card" key={x.department+":"+x.service}><h2>{x.service}</h2><p>{x.department}</p><p>{x.availability}</p></article>)}</section></>}
  </main>;
}
