import Link from "next/link";
import { notFound } from "next/navigation";
import { SATELLITE_SECTIONS } from "@/lib/silveroak/satellite-features";

export function generateStaticParams() {
  return SATELLITE_SECTIONS.map((s) => ({ section: s.slug }));
}

export default async function SatelliteSectionPage({params}: {params: Promise<{section: string}>}) {
  const {section} = await params;
  const item = SATELLITE_SECTIONS.find((s) => s.slug === section);
  if (!item) notFound();
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI / GLOBAL SATELLITE NETWORK</p>
    <h1>{item.title}</h1>
    <p>{item.summary}</p>
    <p><strong>Planning specification only:</strong> No network operator, site deployment, license, contract, billing or monitoring feed is connected to this page.</p>
    <section className="subSection"><h2>Required features and controls</h2>
      <ul>{item.items.map((text) => <li key={text}>{text}</li>)}</ul>
    </section>
    <Link href="/satellite-network">Back to satellite network control page</Link>
  </main>;
}
