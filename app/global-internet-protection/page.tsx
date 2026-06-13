import Navbar from "../components/Navbar";

export default function GlobalInternetPage() {
  const providerGroups = [
    {
      title: "Canadian Internet Providers",
      text: "Bell Aliant, Bell Internet, Rogers, Fido, Chatr, Eastlink, Telus, Koodo, Virgin Plus, Freedom Mobile, Videotron, Cogeco, SaskTel, Xplore, and regional providers.",
    },
    {
      title: "Satellite Internet Providers",
      text: "Starlink-style satellite internet, Xplore satellite, OneWeb-style systems, geostationary satellite internet, mobile terminals, and emergency satellite kits.",
    },
    {
      title: "Mobile Network Providers",
      text: "4G, 5G, LTE, prepaid mobile data, family plans, roaming SIM cards, eSIM providers, hotspot devices, and mobile backup routers.",
    },
    {
      title: "Fiber and Cable Networks",
      text: "Fiber internet, cable internet, business internet, home internet, dedicated lines, and community internet hubs.",
    },
    {
      title: "Community Internet Networks",
      text: "Church Wi-Fi, school Wi-Fi, nonprofit networks, public libraries, rural community hubs, shelters, clinics, and emergency centers.",
    },
    {
      title: "Global Legal Roaming",
      text: "Authorized roaming, international SIM, eSIM, travel routers, satellite plans, and legal carrier partnerships for international coverage.",
    },
  ];

  const satelliteSystems = [
    "Low Earth Orbit satellite internet",
    "Geostationary satellite internet",
    "Portable satellite terminals",
    "Mobile satellite kits",
    "Maritime satellite connection",
    "Aviation internet support",
    "Rural satellite internet",
    "Disaster-response satellite kits",
    "Solar-powered satellite stations",
    "Backup satellite uplink",
  ];

  const protectionSystems = [
    {
      title: "Automatic Failover",
      text: "If fiber fails, the router switches to cable. If cable fails, it switches to mobile data. If mobile fails, it switches to satellite.",
    },
    {
      title: "Signal Health Detector",
      text: "Monitors speed, latency, packet loss, uptime, router status, satellite connection, and mobile signal strength.",
    },
    {
      title: "Danger Country Mode",
      text: "Emergency mode for countries affected by disaster, war, shutdowns, storms, earthquakes, floods, or communication collapse.",
    },
    {
      title: "Backup Power Protection",
      text: "Uses UPS battery, solar power, generator, and battery banks to keep routers, terminals, radios, and phones online.",
    },
    {
      title: "Cyber Protection",
      text: "Protects the network with firewall, secure Wi-Fi, VPN, admin password protection, 2FA, device monitoring, and safe browsing.",
    },
    {
      title: "Emergency Broadcast Mode",
      text: "Keeps internet radio, live video, public alerts, prayer programs, school lessons, and emergency messages online.",
    },
  ];

  const worldSupport = [
    "Emergency internet for disaster zones",
    "Backup communication for churches",
    "Internet for schools in danger",
    "Emergency Wi-Fi for shelters",
    "Field internet for medical teams",
    "Mobile internet for journalists",
    "Internet radio for public alerts",
    "Satellite internet for rural communities",
    "Backup connection for nonprofits",
    "Portable internet kit for families",
    "Solar-powered communication stations",
    "International support coordination",
  ];

  const dashboard = [
    "Provider list",
    "Country status",
    "Connection status",
    "Satellite status",
    "Mobile signal",
    "Speed test",
    "Failover status",
    "Battery level",
    "Device protection",
    "Emergency alerts",
    "Radio stream status",
    "Support ticket",
  ];

  const equipment = [
    "Main router",
    "Backup router",
    "Satellite terminal",
    "Mobile hotspot",
    "5G/LTE modem",
    "eSIM data plan",
    "Ethernet switch",
    "Wi-Fi access point",
    "UPS battery backup",
    "Solar panel",
    "Power station",
    "Outdoor antenna",
    "Weatherproof box",
    "Laptop control station",
    "Internet radio computer",
    "Microphone and camera",
  ];

  const legalRules = [
    {
      title: "Authorized Networks Only",
      text: "The platform connects only to networks you own, subscribe to, manage, or have legal permission to use.",
    },
    {
      title: "No Signal Theft",
      text: "Do not intercept private Wi-Fi, private satellite links, cellular signals, government signals, or protected communications.",
    },
    {
      title: "Emergency Support Must Be Lawful",
      text: "Emergency connectivity must respect local law, humanitarian rules, provider agreements, and public safety requirements.",
    },
    {
      title: "Privacy Protection",
      text: "Protect user data, location, messages, account details, passwords, and device information.",
    },
  ];

  const platformModules = [
    "Internet provider comparison",
    "Satellite internet setup",
    "Mobile data backup",
    "Automatic failover",
    "Emergency country dashboard",
    "Signal detector",
    "Cyber protection",
    "Backup power system",
    "Radio and video broadcasting",
    "AI Bible radio support",
    "Public alert system",
    "Support center",
    "Donation system",
    "Community internet program",
    "Business internet support",
    "Global disaster response map",
  ];

  const steps = [
    {
      title: "Step 1: Main Internet",
      text: "Connect the strongest legal home or business internet provider available in the area.",
    },
    {
      title: "Step 2: Backup Internet",
      text: "Add mobile data, hotspot, second provider, or satellite internet as backup.",
    },
    {
      title: "Step 3: Failover Router",
      text: "Use a router that can switch automatically when one connection fails.",
    },
    {
      title: "Step 4: Satellite Backup",
      text: "Add a satellite terminal for remote areas, emergencies, storms, and country-level danger situations.",
    },
    {
      title: "Step 5: Power Backup",
      text: "Add UPS, solar, power station, or generator to keep internet running during outages.",
    },
    {
      title: "Step 6: Protection Layer",
      text: "Add firewall, secure passwords, VPN option, 2FA, device control, and monitoring.",
    },
    {
      title: "Step 7: Broadcasting Layer",
      text: "Connect internet radio, live video, emergency alerts, Bible radio, school lessons, and public messages.",
    },
    {
      title: "Step 8: Global Support",
      text: "Create emergency kits for churches, schools, shelters, clinics, communities, and countries in danger.",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Global Internet Protection Network</h1>

        <p>
          An all-in-one internet platform that combines home internet, mobile
          internet, business internet, satellite internet, backup power,
          automatic failover, signal monitoring, cyber protection, emergency
          broadcasting, and support for countries in danger.
        </p>

        <p>
          This platform is inspired by telecom service structures such as Bell,
          Rogers, Fido, Chatr, TELUS-style connected services, and
          Starlink-style satellite systems — but it is your own original global
          connection and protection model.
        </p>

        <a className="button" href="/satellite-internet">
          Satellite Internet
        </a>

        <a className="button" href="/internet-radio">
          Internet Radio
        </a>
      </section>

      <section className="hero">
        <h1>Legal Global Connection Rule</h1>

        <p>
          This system does not steal, hack, intercept, or illegally capture
          private signals. It uses authorized providers, legal subscriptions,
          satellite service, mobile data, roaming, public emergency networks,
          and approved community infrastructure.
        </p>
      </section>

      <section className="hero">
        <h1>Provider Network</h1>
      </section>

      <section className="grid">
        {providerGroups.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Powerful Satellite Systems</h1>

        <p>
          Satellite internet gives backup connection when cable, fiber, mobile
          towers, or local infrastructure fail.
        </p>
      </section>

      <section className="grid">
        {satelliteSystems.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Satellite system option for rural access, global communication,
              emergency support, mobile connection, and backup internet.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Automatic Protector and Detector</h1>
      </section>

      <section className="grid">
        {protectionSystems.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>World Emergency Support</h1>
      </section>

      <section className="grid">
        {worldSupport.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Global support use case for safe communication, humanitarian
              service, public information, education, worship, and emergency
              coordination.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Control Dashboard</h1>
      </section>

      <section className="grid">
        {dashboard.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Dashboard feature for monitoring internet, satellite, mobile,
              devices, power, danger alerts, and emergency broadcasting.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Equipment Kit</h1>
      </section>

      <section className="grid">
        {equipment.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Equipment item for building a reliable internet backup,
              broadcasting, emergency, and protection system.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Platform Modules</h1>
      </section>

      <section className="grid">
        {platformModules.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Module for building the complete global internet protection,
              broadcasting, support, and emergency-response platform.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Legal and Safety Rules</h1>
      </section>

      <section className="grid">
        {legalRules.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Build Steps</h1>
      </section>

      <section className="grid">
        {steps.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>System Diagram</h1>

        <p>
          Provider internet + mobile data + satellite terminal + backup power →
          failover router → protected network → radio/video studio → emergency
          dashboard → churches, schools, shelters, clinics, families, and
          countries in danger.
        </p>
      </section>

      <section className="hero">
        <h1>Radio and Video Protection</h1>

        <p>
          The platform supports internet radio, AI Bible radio, Sabbath School
          lessons, live video, public alerts, school lessons, community reports,
          emergency broadcasts, and international support messages.
        </p>
      </section>
    </main>
  );
}

