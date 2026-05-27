import Navbar from "../Navbar";

export default function ToolsPage() {
  const tools = [
    "VS Code",
    "Next.js",
    "React",
    "TypeScript",
    "Git",
    "GitHub",
    "Vercel",
    "Canva",
    "Microsoft 365",
    "Google Workspace",
    "OBS Studio",
    "Meta Business Suite",
    "Stripe",
    "PayPal",
    "Shopify",
    "ChatGPT",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Development Tools</h1>

        <p>
          Tools used to build, manage, publish, design, secure, and expand
          the digital platform.
        </p>
      </section>

      <section className="grid">
        {tools.map((tool) => (
          <div className="card" key={tool}>
            <h2>{tool}</h2>
            <p>Platform development and management tool.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

