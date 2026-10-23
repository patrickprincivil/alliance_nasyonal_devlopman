import Link from "next/link";
import { MUSIC_FACTORY_SECTIONS, MUSIC_AGENT_ROLES, SCORE_FORMATS } from "@/lib/silveroak/music";
export default function SilveroakMusicFactoryPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Music & Media</p>
    <h1>Silveroak Global Music Factory</h1>
    <p>V3 planning dashboard. This page does not provide licensed third-party scores, a playable library, active AI agents, music-store purchases or API integrations.</p>
    <section className="gridSection">
      {MUSIC_FACTORY_SECTIONS.map(s => <article className="card" key={s.id} id={s.id}>
        <h2>{s.title}</h2><p>{s.detail}</p><p>Status: Planned / specification</p>
      </article>)}
    </section>
    <section className="subSection"><h2>Supported score formats planned</h2><p>{SCORE_FORMATS.join(" · ")}</p>
      <h2>Proposed specialist agents</h2><p>{MUSIC_AGENT_ROLES.join(" · ")}</p>
      <p>Rights clearance and owner approval are mandatory before publishing, distributing, importing copyrighted scores or initiating paid services.</p>
    </section>
    <Link href="/music">Back to Music & Creative Media</Link>
  </main>;
}
