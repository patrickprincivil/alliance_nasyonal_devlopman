import Navbar from "../components/Navbar";

export default function ArtisansPage() {
  const products = [
    "Haitian handmade products",
    "Canadian artisanal products",
    "Dominican Republic products",
    "Cultural gifts",
    "Home goods",
    "Accessories",
    "Art pieces",
    "Handmade marketplace goods",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Artisanal Products</h1>

        <p>
          Marketplace for artisanal products from Canada, Haiti, and the
          Dominican Republic.
        </p>
      </section>

      <section className="grid">
        {products.map((product) => (
          <div className="card" key={product}>
            <h2>{product}</h2>
            <p>Artisanal marketplace product category.</p>
          </div>
        ))}
      </section>
    </main>
  );
}