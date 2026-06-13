import Navbar from "../components/Navbar";

export default function SatelliteInternetPage() {
  const services = [
    {
      title: "Home Satellite Internet",
      text: "High-speed internet service concept for homes, rural communities, remote areas, farms, and families without reliable cable or fiber access.",
    },
    {
      title: "Business Satellite Internet",
      text: "Connection support for small businesses, offices, construction sites, farms, warehouses, schools, churches, clinics, and nonprofit centers.",
    },
    {
      title: "Mobile and Travel Internet",
      text: "Internet access concept for travel, mobile work, field teams, emergency support, and temporary locations.",
    },
    {
      title: "Community Internet Hub",
      text: "Shared connection model for churches, schools, villages, community centers, shelters, training centers, and public service locations.",
    },
    {
      title: "Emergency Internet",
      text: "Backup connection for storms, disasters, power outages, public safety support, humanitarian work, and communication recovery.",
    },
    {
      title: "Media and Radio Internet",
      text: "Connection support for internet radio, live video broadcasting, podcasts, online worship, school programs, and public media.",
    },
  ];

  const equipment = [
    "Satellite dish or terminal",
    "Wi-Fi router",
    "Power supply",
    "Mounting stand",
    "Ethernet cable",
    "Backup battery",
    "Solar power option",
    "Weather-safe installation",
    "Mobile case",
    "Signal visibility area",
  ];

  const useCases = [
    "Rural homes",
    "Remote schools",
    "Church media systems",
    "Internet radio stations",
    "Video broadcasting studios",
    "Farms and agriculture",
    "Construction sites",
    "Mobile clinics",
    "Disaster response",
    "Small business offices",
    "Training centers",
    "Community Wi-Fi zones",
  ];

  const dashboard = [
    "Account overview",
    "Service plan",
    "Connection status",
    "Speed test",
    "Usage report",
    "Device list",
    "Billing",
    "Support tickets",
    "Installation guide",
    "Network settings",
  ];

  const installationSteps = [
    {
      title: "Step 1: Choose Location",
      text: "Select a clear outdoor location with open sky visibility and strong signal access.",
    },
    {
      title: "Step 2: Install Terminal",
      text: "Place the satellite terminal on a stand, roof mount, pole mount, or mobile mount.",
    },
    {
      title: "Step 3: Connect Power",
      text: "Connect power supply, router, and Ethernet cable if needed.",
    },
    {
      title: "Step 4: Connect Wi-Fi",
      text: "Create Wi-Fi name, secure password, and connect phones, computers, TVs, and radio systems.",
    },
    {
      title: "Step 5: Test Speed",
      text: "Run a speed test, check stability, and adjust the terminal location if needed.",
    },
    {
      title: "Step 6: Connect Radio",
      text: "Connect internet radio, live video, Auto DJ, website player, and broadcasting tools.",
    },
  ];

  const platformFeatures = [
    "Satellite internet service page",
    "Plan comparison",
    "Equipment information",
    "Installation guide",
    "Coverage request form",
    "Business inquiry form",
    "Support center",
    "Speed test section",
    "Dashboard preview",
    "Radio and video broadcasting support",
    "Community internet program",
    "Emergency connection program",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Satellite Internet Connection Platform</h1>

        <p>
          A Starlink-style internet service structure for rural homes, remote
          communities, businesses, churches, schools, farms, emergency response,
          internet radio, and video broadcasting.
        </p>

        <p>
          This page is not Starlink. It is your own original satellite internet
          service platform structure for education, planning, community support,
          radio streaming, and digital connection projects.
        </p>

        <a className="button" href="/internet-radio">
          Connect Radio
        </a>

        <a className="button" href="/contact">
          Request Setup
        </a>
      </section>

      <section className="hero">
        <h1>How the System Works</h1>

        <p>
          Satellite terminal → router → Wi-Fi network → computers, phones,
          internet radio, live video, smart TVs, schools, churches, and
          businesses.
        </p>
      </section>

      <section className="hero">
        <h1>Internet Services</h1>
      </section>

      <section className="grid">
        {services.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Equipment List</h1>

        <p>
          Basic equipment needed for a satellite internet station, mobile
          connection kit, church media setup, radio station, or emergency
          internet hub.
        </p>
      </section>

      <section className="grid">
        {equipment.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Equipment item used to connect the satellite internet system,
              protect the network, and support reliable online service.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Use Cases</h1>
      </section>

      <section className="grid">
        {useCases.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Satellite internet use case for connection, communication,
              broadcasting, education, business, and community service.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Installation Steps</h1>
      </section>

      <section className="grid">
        {installationSteps.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Customer Dashboard</h1>
      </section>

      <section className="grid">
        {dashboard.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Dashboard feature for managing internet service, account support,
              devices, billing, speed, usage, and installation.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Platform Features</h1>
      </section>

      <section className="grid">
        {platformFeatures.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Website feature for building a professional satellite internet
              service platform, support system, and community connection page.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Internet Radio Connection</h1>

        <p>
          This satellite internet platform can support your internet radio,
          AI Bible radio, live video broadcasting, Sabbath School programs,
          podcasts, online worship, music lessons, and emergency communication.
        </p>

        <p>
          Recommended radio flow: Satellite internet → router → studio computer
          → broadcasting software → stream server → website player → listeners.
        </p>
      </section>

      <section className="hero">
        <h1>Recommended Starter Package</h1>

        <p>
          Satellite terminal • Wi-Fi router • backup power • laptop • microphone
          • OBS Studio • internet radio software • website player • donation
          page • support dashboard.
        </p>
      </section>
    </main>
  );
}

