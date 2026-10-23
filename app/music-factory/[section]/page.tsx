import Link from "next/link";
import { notFound } from "next/navigation";
import { MUSIC_FACTORY_SECTIONS } from "@/lib/silveroak/music-factory";
export function generateStaticParams(){return MUSIC_FACTORY_SECTIONS.map(x=>({section:x.slug}));}
export default async function MusicFactorySection({params}:{params:Promise<{section:string}>}){
const {section}=await params;
const selected=MUSIC_FACTORY_SECTIONS.find(x=>x.slug===section);
if(!selected)notFound();
return <main className="page"><p className="eyebrow">Master Devlopman / Music Factory</p>
<h1>{selected.title}</h1><p>{selected.detail}</p>
<p>This module is a planned component; no external music service, rights database or automated agent is currently connected.</p>
{section==="rights"?<p>Only distribute original, verified public-domain, or appropriately licensed works. Keep composer, publisher, source, territory and license evidence.</p>:null}
{section==="games"?<p>Original music theory quizzes can be added here. No MuseScore email game content or copyrighted media has been copied.</p>:null}
<Link href="/music-factory">Back to Music Factory</Link></main>;
}
