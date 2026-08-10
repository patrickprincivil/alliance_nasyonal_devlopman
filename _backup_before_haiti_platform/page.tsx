import Navbar from "./components/Navbar";

export default function HomePage() {
  const sections = [
    {
      title: "Constitution 1987",
      text: "Archive, study, and organize constitutional education, civic rights, national sovereignty, and legal references.",
      link: "/constitution",
    },
    {
      title: "Justice System",
      text: "Court structure, legal accountability, transparency, public records, and justice reform modules.",
      link: "/justice",
    },
    {
      title: "National Engineering",
      text: "Infrastructure, civil protection, roads, bridges, maritime systems, airports, energy, water, and emergency planning.",
      link: "/national-engineering",
    },
    {
      title: "Programs",
      text: "Education, public service, digital operations, business development, training, and national project planning.",
      link: "/programs",
    },
    {
      title: "Dashboard",
      text: "Track projects, systems, tools, documents, accounts, operations, and development progress.",
      link: "/dashboard",
    },
    {
      title: "Software Tools",
      text: "Organize AI tools, coding platforms, design software, business software, automation, and digital systems.",
      link: "/softwares",
    },
    {
      title: "Music & Creative Media",
      text: "Music, scores, digital products, publishing, recording, creative files, and online media systems.",
      link: "/music",
    },
    {
      title: "Digital Products",
      text: "Online products, downloads, Shopify, marketplaces, e-commerce tools, and monetization systems.",
      link: "/digital-products",
    },
    {
      title: "Journal",
      text: "Daily notes, faith records, research, references, legal notes, civic education, and project history.",
      link: "/journal",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>🏛️ Alliance Nasyonal pou Devlopman</h1>

        <p>
          A national digital platform for civic education, lawful development,
          constitutional archives, justice, engineering, software systems,
          creative media, business tools, and organized public service.
        </p>

        <p>
          Built step by step to support Haiti, Canada, families, communities,
          education, lawful accountability, and long-term development.
        </p>
      </section>

      <section className="grid">
        {sections.map((section) => (
          <a className="card" href={section.link} key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </a>
        ))}
      </section>

      <section className="hero">
        <h1>Mission</h1>

        <p>
          The mission is to organize knowledge, documents, tools, education,
          business systems, and public resources in one clean digital structure.
          This platform is built for development, service, lawful justice,
          transparency, faith, family protection, and future economic growth.
        </p>
      </section>
    </main>
  );
}

