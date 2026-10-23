import Link from "next/link";
import { LIBRARY_AREAS } from "@/lib/silveroak/education";
export default function GlobalDigitalLibraryPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Global Education Center</p>
    <h1>Silveroak Global Digital Library</h1>
    <p>Independent library roadmap: academic references, open educational materials and professional training in one place.</p>
    <p><strong>Catalog V2.0 reported 193 references from seven sources.</strong> Those source records have not yet been imported or validated in this website, so this page does not claim 193 searchable records are available here.</p>
    <section className="gridSection">{LIBRARY_AREAS.map(name =>
      <article className="card" key={name}><h2>{name}</h2><p>Collection integration pending source and license verification.</p></article>)}</section>
    <section className="subSection"><h2>Collection policies</h2>
      <p>Respect copyright, licensing and privacy. Download and preserve books only when lawful. Offline access requires the content to be saved locally with appropriate rights.</p>
      <p>Haitian Creole, French, English and Spanish are target languages; complete translation is not yet delivered.</p>
      <p>The described Windows 11 offline ZIP, automated tests and AI Librarian have not been deployed or independently verified on this website.</p>
      <Link href="/global-education-center">Visit Silveroak AI Academy</Link>
    </section>
  </main>;
}
