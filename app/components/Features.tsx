export default function Features() {
  const items = [
    "Education",
    "Infrastructure",
    "Emergency Systems",
    "Healthcare",
    "Technology",
    "Logistics",
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#111827",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Core Systems
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "14px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

