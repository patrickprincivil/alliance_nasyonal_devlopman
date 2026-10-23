import Link from "next/link";
export default function MusicPage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Music & Creative Media</h1>
        <p>Digital music, creative media, downloadable products, scores,
          education, publishing, and online entertainment systems.</p>
        <p><Link href="/music/factory">Explore Silveroak Global Music Factory V3</Link></p>
      </section>
      <section className="grid">
        <div className="card"><h2>Music Scores</h2><p>Archive and publish music scores and creative works, subject to rights verification.</p></div>
        <div className="card"><h2>Digital Products</h2><p>Plan licensed downloadable music, media, and creative files.</p></div>
        <div className="card"><h2>Creative Studio</h2><p>Organize recording, production, design, and publishing tools.</p></div>
      </section>
    </main>
  );
}
