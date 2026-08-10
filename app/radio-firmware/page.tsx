import Navbar from "../components/Navbar";

export default function RadioFirmwarePage() {
  const broadcastingSoftware = [
    "SAM Broadcaster Pro",
    "RadioDJ",
    "Mixxx",
    "BUTT Encoder",
    "OBS Studio",
    "Rocket Broadcaster",
    "PlayIt Live",
    "StationPlaylist Studio",
    "ProppFrexx ONAIR",
    "Rivendell",
    "LibreTime",
    "AzuraCast",
  ];

  const streamServers = [
    "Icecast",
    "Shoutcast",
    "AzuraCast",
    "Radio.co",
    "Live365",
    "VosCast",
    "Citrus3",
    "RadioKing",
    "CloudRadio",
    "Airtime Pro",
  ];

  const hardwareFirmware = [
    "Router Firmware",
    "Audio Interface Firmware",
    "Digital Mixer Firmware",
    "USB Microphone Firmware",
    "IP Camera Firmware",
    "Encoder Box Firmware",
    "Smart TV Firmware",
    "Android Box Firmware",
    "Raspberry Pi OS Firmware",
    "NAS Storage Firmware",
  ];

  const operatingSystems = [
    "Windows 11",
    "Windows 10",
    "macOS",
    "Ubuntu Linux",
    "Debian Linux",
    "Raspberry Pi OS",
    "Android",
    "iOS",
    "ChromeOS",
  ];

  const encoders = [
    "MP3 Encoder",
    "AAC Encoder",
    "AAC+ Encoder",
    "Opus Encoder",
    "FLAC Encoder",
    "OBS RTMP Encoder",
    "FFmpeg Encoder",
    "BUTT Encoder",
    "AltaCast Encoder",
  ];

  const videoBroadcasting = [
    "OBS Studio",
    "Streamlabs",
    "vMix",
    "Wirecast",
    "YouTube Live",
    "Facebook Live",
    "RTMP Server",
    "WebRTC Streaming",
    "IP Camera Streaming",
    "Capture Card Streaming",
  ];

  const websiteTools = [
    "Next.js Radio Page",
    "HTML Audio Player",
    "HTML Video Player",
    "WordPress Radio Page",
    "IONOS Website",
    "Embedded YouTube Live",
    "Embedded Facebook Live",
    "Podcast Archive",
    "Schedule Page",
    "Donation Page",
  ];

  const mobileTvApps = [
    "Progressive Web App",
    "Android App",
    "iPhone App",
    "Tablet App",
    "Android TV App",
    "Fire TV App",
    "Roku Channel",
    "Smart TV Browser",
  ];

  const securityTools = [
    "SSL Certificate",
    "Firewall",
    "Router Password",
    "Admin Login Protection",
    "Two-Factor Authentication",
    "Stream Key Protection",
    "Backup Internet",
    "Backup Power",
    "Cloud Backup",
  ];

  const integrations = [
    "PayPal",
    "Stripe",
    "Square",
    "WhatsApp",
    "YouTube",
    "Facebook",
    "Zoho",
    "Google Workspace",
    "Microsoft 365",
    "Mailchimp",
    "Canva",
    "OBS",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Internet Radio Firmware, Software, and Tools</h1>

        <p>
          This page organizes all firmware, software, stream servers, encoders,
          operating systems, broadcasting tools, video tools, website tools,
          mobile apps, TV apps, security tools, and integrations that can work
          with an internet radio and video broadcasting system.
        </p>

        <p>
          Use this as the technical structure for building a professional radio,
          video, podcast, worship, education, news, music, and public media
          network.
        </p>
      </section>

      <section className="hero">
        <h1>Broadcasting Software</h1>
      </section>

      <section className="grid">
        {broadcastingSoftware.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Broadcasting software for live radio, Auto DJ, music rotation,
              playlists, scheduling, encoding, and station automation.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Stream Servers</h1>
      </section>

      <section className="grid">
        {streamServers.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Stream server or radio hosting platform for delivering live audio
              to listeners through web players, mobile phones, and apps.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Hardware Firmware</h1>
      </section>

      <section className="grid">
        {hardwareFirmware.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Firmware or device system used by hardware that supports radio,
              video, streaming, recording, networking, storage, and broadcasting.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Operating Systems</h1>
      </section>

      <section className="grid">
        {operatingSystems.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Operating system that can run broadcasting software, encoders,
              media tools, recording tools, or web-based radio dashboards.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Audio Encoders</h1>
      </section>

      <section className="grid">
        {encoders.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Encoder technology used to convert live audio into stream formats
              for internet radio listeners.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Video Broadcasting Tools</h1>
      </section>

      <section className="grid">
        {videoBroadcasting.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Video broadcasting tool for live shows, worship services,
              interviews, lessons, conferences, news, and public programming.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Website Radio Tools</h1>
      </section>

      <section className="grid">
        {websiteTools.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Website feature for live listening, live viewing, donations,
              schedules, podcasts, replays, and public media pages.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Mobile and TV Apps</h1>
      </section>

      <section className="grid">
        {mobileTvApps.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              App option for listeners on phones, tablets, TVs, streaming
              devices, and smart screens.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Security and Backup Tools</h1>
      </section>

      <section className="grid">
        {securityTools.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Security and backup feature to protect the station, stream keys,
              admin access, files, internet connection, and broadcasting system.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Integrations</h1>
      </section>

      <section className="grid">
        {integrations.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Integration for payments, donations, social broadcasting,
              communication, design, productivity, marketing, and automation.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Recommended System Diagram</h1>

        <p>
          Microphone / Music / Camera → Broadcasting Software → Encoder →
          Icecast / Shoutcast / AzuraCast → Website Player → Mobile Apps →
          Listeners.
        </p>
      </section>

      <section className="hero">
        <h1>Starter Setup</h1>

        <p>
          Laptop or desktop • USB microphone • Headphones • Mixxx or SAM
          Broadcaster • Icecast or Shoutcast • Website player • Donation button.
        </p>
      </section>

      <section className="hero">
        <h1>Professional Setup</h1>

        <p>
          Studio computer • Audio interface • Mixer • Microphones • Cameras •
          OBS Studio • SAM Broadcaster Pro • AzuraCast • Stream server • Website
          player • Video player • Podcast archive • Analytics • Donation system.
        </p>
      </section>
    </main>
  );
}

