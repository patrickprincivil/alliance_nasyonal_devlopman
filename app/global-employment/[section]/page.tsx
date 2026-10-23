import Link from "next/link";
import { notFound } from "next/navigation";
import { RECRUITMENT_MODULES } from "@/lib/silveroak/recruitment";
export function generateStaticParams() { return RECRUITMENT_MODULES.map(m => ({ section: m.slug })); }
export default async function RecruitmentSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const feature = RECRUITMENT_MODULES.find(m => m.slug === section);
  if (!feature) notFound();
  return <main className="page">
    <p className="eyebrow">Silveroak / Global Employment</p>
    <h1>{feature.title}</h1><p>{feature.description}</p>
    <p>Planning stage — no job ingestion, candidate database, matching engine, employer verification or alert automation is active on this page.</p>
    <p><Link href="/global-employment">Back to Global Employment</Link></p>
  </main>;
}
