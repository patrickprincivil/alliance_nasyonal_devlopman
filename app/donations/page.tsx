import Navbar from "../components/Navbar";

export default function DonationsPage() {
  const donationOptions = [
    {
      amount: "$25",
      title: "Supporter Donation",
      text: "Helps maintain the platform, documents, public education, and digital tools.",
    },
    {
      amount: "$50",
      title: "Community Donation",
      text: "Supports civic education, research, archives, media, and outreach work.",
    },
    {
      amount: "$100",
      title: "Development Donation",
      text: "Helps build stronger digital systems, programs, and public service tools.",
    },
    {
      amount: "$250",
      title: "Major Support Donation",
      text: "Supports larger platform development, documents, technology, and operations.",
    },
    {
      amount: "$500+",
      title: "Strategic Partner Donation",
      text: "For major donors who want to support long-term development and expansion.",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Massive Donation Support</h1>

        <p>
          Support Alliance Nasyonal pou Devlopman with secure donations for
          civic education, public documents, development programs, technology,
          media, research, and community service.
        </p>

        <p>
          Donations help us build lawful, organized, transparent, educational,
          and development-focused digital systems for families, communities,
          Haiti, Canada, and the wider public.
        </p>
      </section>

      <section className="grid">
        {donationOptions.map((donation) => (
          <div className="card" key={donation.amount}>
            <h2>{donation.amount}</h2>
            <h3>{donation.title}</h3>
            <p>{donation.text}</p>

            <a href="#" className="button">
              Donate Now
            </a>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>English</h1>
        <p>
          Your donation supports civic education, legal archives, public
          research, software tools, media, development programs, and organized
          service for communities.
        </p>
      </section>

      <section className="hero">
        <h1>Français</h1>
        <p>
          Votre don soutient l’éducation civique, les archives juridiques, la
          recherche publique, les outils numériques, les médias, les programmes
          de développement et le service communautaire organisé.
        </p>
      </section>

      <section className="hero">
        <h1>Español</h1>
        <p>
          Su donación apoya la educación cívica, los archivos legales, la
          investigación pública, las herramientas digitales, los medios, los
          programas de desarrollo y el servicio organizado para las comunidades.
        </p>
      </section>

      <section className="hero">
        <h1>Kreyòl Ayisyen</h1>
        <p>
          Don ou a ap ede soutni edikasyon sivik, achiv legal, rechèch piblik,
          zouti dijital, medya, pwogram devlopman, ak sèvis òganize pou kominote
          yo.
        </p>
      </section>

      <section className="hero">
        <h1>Payment Setup</h1>

        <p>
          Connect this page later to Stripe, PayPal, Shopify, or Square payment
          links. Do not place secret API keys directly in this page.
        </p>
      </section>
    </main>
  );
}

