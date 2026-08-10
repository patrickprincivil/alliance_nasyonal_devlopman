import Navbar from "../components/Navbar";

export default function RadioSetupPage() {
  const broadcastSteps = [
    "Download and install Winamp or another audio player",
    "Download and install SHOUTcast Source DSP or use another broadcaster",
    "Prepare microphone, music, sermons, interviews, or live program audio",
    "Connect the broadcaster to a SHOUTcast server or streaming host",
    "Start broadcasting from your computer",
    "Test the live stream link on phone, computer, and mobile data",
    "Add the radio player link to your website",
    "Share the listener link by WhatsApp, Facebook, YouTube, QR code, and email",
  ];

  const systemFlow = [
    {
      title: "Audio Mixer",
      text: "Microphone, computer sound, music, sermons, interviews, and live program audio.",
    },
    {
      title: "Broadcast Software",
      text: "Winamp + SHOUTcast DSP, BUTT, Mixxx, RadioBOSS, OBS, or another legal broadcasting tool.",
    },
    {
      title: "Internet Connection",
      text: "The broadcaster sends your audio from your computer to the streaming server.",
    },
    {
      title: "SHOUTcast Server",
      text: "The server receives your stream and distributes it to listeners around the world.",
    },
    {
      title: "Listeners",
      text: "People listen on your website, phone, tablet, computer, smart TV, or direct stream link.",
    },
  ];

  const testChecklist = [
    "Test microphone input",
    "Test music/audio playback",
    "Test internet upload speed",
    "Test broadcaster connection",
    "Test stream URL",
    "Test website player",
    "Test Android phone",
    "Test iPhone",
    "Test Windows computer",
    "Test outside Wi-Fi using mobile data",
    "Test volume level",
    "Test delay",
    "Test if stream cuts or stops",
  ];

  const pages = [
    "Live Radio",
    "Live TV",
    "Program Schedule",
    "Shows",
    "News",
    "Sermons",
    "Interviews",
    "Music Programs",
    "Listen by Phone",
    "Contact",
    "Donate",
    "Advertise",
  ];

  const tools = [
    "Winamp",
    "SHOUTcast Source DSP",
    "SHOUTcast Server",
    "BUTT Broadcaster",
    "Mixxx",
    "OBS Studio",
    "Audacity",
    "USB Microphone",
    "Headphones",
    "Audio Mixer",
    "Streaming Host",
    "Website Player",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Internet Radio Broadcasting Setup</h1>

        <p>
          Build a live internet radio system where your microphone, music,
          sermons, news, interviews, and programs are sent to a streaming server
          so people can listen from anywhere in the world.
        </p>

        <p>
          This page explains how the radio system works, how to test it, and how
          listeners will hear the station from your website, phone, computer, or
          direct stream link.
        </p>

        <a className="button" href="/radio">
          Listen Live
        </a>

        <a className="button" href="/contact">
          Request Setup Help
        </a>
      </section>

      <section className="hero">
        <h1>How the Radio System Works</h1>

        <p>
          Audio starts from your microphone, mixer, or computer. The broadcast
          software sends the sound through the internet to a SHOUTcast server.
          The server then gives listeners a public link to hear the station.
        </p>
      </section>

      <section className="grid">
        {systemFlow.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Radio Flow Diagram</h1>

        <p>
          Audio Mixer → Broadcast Software → Internet → SHOUTcast Server →
          Internet → Listeners
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>1. Audio Mixer</h2>
          <p>
            Optional mixer for microphone, computer audio, phone audio, music,
            interviews, and live program sound.
          </p>
        </div>

        <div className="card">
          <h2>2. SHOUTcast DSP Plugin</h2>
          <p>
            The DSP plugin takes audio from Winamp and sends it to the
            SHOUTcast streaming server.
          </p>
        </div>

        <div className="card">
          <h2>3. Streaming Server</h2>
          <p>
            The server receives your live audio and creates the listening link
            for your public audience.
          </p>
        </div>

        <div className="card">
          <h2>4. Listeners</h2>
          <p>
            People can listen on your website, browser, phone, app, smart TV, or
            direct streaming link.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Start Broadcasting Steps</h1>
      </section>

      <section className="grid">
        {broadcastSteps.map((item, index) => (
          <div className="card" key={item}>
            <h2>Step {index + 1}</h2>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Testing Checklist</h1>

        <p>
          Before public launch, test the station on different devices and
          different internet connections.
        </p>
      </section>

      <section className="grid">
        {testChecklist.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Complete this test before announcing the radio station publicly.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Website Radio Pages</h1>
      </section>

      <section className="grid">
        {pages.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Website section for your internet radio station, audience,
              programs, communication, and support.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Recommended Tools</h1>
      </section>

      <section className="grid">
        {tools.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Tool or equipment that can help you broadcast, record, test,
              monitor, or publish your radio station.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Listener Instructions</h1>

        <p>
          To listen, visitors press the Listen Live button, open the stream
          link, or scan a QR code. If the player does not start, they can open
          the direct stream link in a browser.
        </p>

        <p>
          Share the listening link on WhatsApp, Facebook, YouTube, email, QR
          code, and your website.
        </p>
      </section>

      <section className="hero">
        <h1>Important Legal Rule</h1>

        <p>
          Broadcast only audio you own, created yourself, received permission to
          use, or are legally allowed to stream. Do not broadcast copyrighted
          music without proper permission or licensing.
        </p>
      </section>
    </main>
  );
}

