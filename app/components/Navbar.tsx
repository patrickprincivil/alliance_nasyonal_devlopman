export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        background: "linear-gradient(to right, #065f46, #2563eb)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        🏛️ AND Platform
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>

        <a href="/programs" style={{ color: "white", textDecoration: "none" }}>
          Programs
        </a>

        <a href="/constitution" style={{ color: "white", textDecoration: "none" }}>
          Constitution
        </a>

        <a href="/courts" style={{ color: "white", textDecoration: "none" }}>
          Courts
        </a>

        <a href="/justice" style={{ color: "white", textDecoration: "none" }}>
          Justice
        </a>

        <a href="/justice-system" style={{ color: "white", textDecoration: "none" }}>
          Justice System
        </a>

        <a href="/journal" style={{ color: "white", textDecoration: "none" }}>
          Journal
        </a>

        <a
          href="/journal/sanctions"
          style={{ color: "white", textDecoration: "none" }}
        >
          Sanctions
        </a>

        <a
          href="/softwares"
          style={{ color: "white", textDecoration: "none" }}
        >
          Softwares
        </a>

        <a
          href="/tools"
          style={{ color: "white", textDecoration: "none" }}
        >
          Tools
        </a>

        <a
          href="/ai-assistant"
          style={{ color: "white", textDecoration: "none" }}
        >
          AI Assistant
        </a>

        <a
          href="/media-center"
          style={{ color: "white", textDecoration: "none" }}
        >
          Media Center
        </a>

        <a
          href="/ecommerce"
          style={{ color: "white", textDecoration: "none" }}
        >
          E-Commerce
        </a>

        <a
          href="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </a>

        <a
          href="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

