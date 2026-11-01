import Link from "next/link";
import { ADVENTIST_LIBRARY_MODULES, ADVENTIST_REFERENCE_SOURCES } from "@/lib/silveroak/adventist-library";
export default function AdventistLibraryPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Education / Global Digital Library</p>
    <h1>Adventist Library & Education Center</h1>
    <p>Silveroak's proposed 30-part collection framework for Christian education, history, health, sacred music and professional training.</p>
    <p><strong>Planning directory only.</strong> No source catalog has been imported by this page; publisher partnership, redistribution permission and live course delivery are not implied.</p>
    <section className="gridSection">{ADVENTIST_LIBRARY_MODULES.map((name, index) =>
      <article className="card" key={name}><h2>{String(index + 1).padStart(2, "0")}. {name}</h2>
        <p>Planned collection — requires metadata, rights and source review.</p></article>)}</section>
    <section className="subSection"><h2>Publisher and archive references</h2>
      <ul>{ADVENTIST_REFERENCE_SOURCES.map(source =>
        <li key={source.name}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a> — independent external resource; verify current conditions.</li>)}</ul>
      <p>Catalog records are not licensed content. Books may be displayed or downloaded only when rights are verified. Educational and historical analysis is distinct from endorsement.</p>
      <p><Link href="/global-digital-library">Back to Global Digital Library</Link></p>
    </section>
  </main>;
}
