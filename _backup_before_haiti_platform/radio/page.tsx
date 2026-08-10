import Navbar from "../components/Navbar";

export default function RadioPage() {
  const languages = [
    {
      title: "English Radio",
      text: "Civic education, development updates, business support, public service, and community messages.",
    },
    {
      title: "Radio Français",
      text: "Éducation civique, développement, messages communautaires, archives, médias et service public.",
    },
    {
      title: "Radio Español",
      text: "Educación cívica, desarrollo, apoyo comunitario, medios, archivos y servicio público.",
    },
    {
      title: "Radyo Kreyòl Ayisyen",
      text: "Edikasyon sivik, devlopman, mesaj kominotè, medya, achiv, lafwa, ak sèvis piblik.",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Radio & Public Broadcast</h1>

        <p>
          Multilingual radio section for public education, civic messages,
          development updates, faith encouragement, music, interviews, community
          news, emergency communication, and media broadcasting.
        </p>
      </section>

      <section className="grid">
        {languages.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Broadcast Mission</h1>

        <p>
          This radio platform will support communication in English, French,
          Spanish, and Haitian Creole for education, development, donations,
          announcements, music, public safety, and organized community service.
        </p>
      </section>
    </main>
  );
}

