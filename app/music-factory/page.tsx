import Link from "next/link";
import { MUSIC_FACTORY_SECTIONS, MUSIC_TOOLS } from "@/lib/silveroak/music-factory";
export default function MusicFactoryPage(){
return <main className="page">
<p className="eyebrow">MASTER DEVLOPMAN / Music & Media</p>
<h1>Silveroak Global Music Factory</h1>
<p>Unified planning catalog for education, score management, composition, production, rights and distribution. External music services are not connected. No copyrighted scores are hosted here.</p>
<section className="gridSection">{MUSIC_FACTORY_SECTIONS.map(x=><article className="card" key={x.slug}><h2>{x.title}</h2><p>{x.detail}</p><p>Status: Planned</p><Link href={`/music-factory/${x.slug}`}>Explore</Link></article>)}</section>
<section className="subSection"><h2>Tools in scope</h2><p>{MUSIC_TOOLS.join(" · ")}</p><p>Integration and software licenses require separate verification and permission.</p></section>
</main>;
}
