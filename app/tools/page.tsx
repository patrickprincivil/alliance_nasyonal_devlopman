export default function ToolsPage() {
  const tools = [
    "VS Code",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GitHub",
    "Canva",
    "OBS Studio",
    "Stripe",
    "PayPal",
    "Shopify",
    "Meta Business",
    "Google Workspace",
    "Microsoft 365",
    "ChatGPT",
  ];

  return (
    <main style={{ padding: "60px", color: "white" }}>
      <h1 style={{ fontSize: "48px" }}>
        Development Tools
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h2>{tool}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

