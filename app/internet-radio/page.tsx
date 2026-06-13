import Navbar from "../components/Navbar";

export default function InternetRadioPage() {
  const liveFeatures = [
    "Live Broadcasting",
    "Auto DJ",
    "Music Rotation",
    "Program Scheduler",
    "DJ Console",
    "Playlist Management",
    "Station IDs",
    "Jingles",
    "Voice Tracking",
    "Emergency Announcements",
  ];

  const studioTools = [
    "Microphone Input",
    "Audio Mixer",
    "Stream Encoder",
    "Recording System",
    "Metadata Display",
    "Sound Effects",
    "Live Chat",
    "Listener Messages",
  ];

  const contentCategories = [
    "Gospel Radio",
    "Bible Study",
    "Haiti News",
    "Civic Education",
    "Music Lessons",
    "Youth Programs",
    "Community Announcements",
    "Public Accountability Reports",
  ];

  const adminTools = [
    "Upload Music",
    "Manage Shows",
    "Manage DJs",
    "Schedule Programs",
    "Track Listeners",
    "Manage Donations",
    "Podcast Archive",
    "Reports",
  ];

  const listenerFeatures = [
    "Web Player",
    "Mobile Player",
    "Request a Song",
    "Send a Message",
    "Subscribe",
    "Donate",
    "Share Station",
    "Listen Again",
  ];

  const integrations = [
    "SAM Broadcaster",
    "Mixxx",
    "RadioDJ",
    "OBS Studio",
    "Icecast",
    "Shoutcast",
    "AzuraCast",
    "PayPal",
    "Stripe",
    "WhatsApp",
    "YouTube",
    "Facebook",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Vessel Internet Radio Platform</h1>

        <p>
          A complete internet radio system for live broadcasting, Auto DJ,
          music rotation, programs, sermons, Bible study, Haiti news, civic
          education, music lessons, community announcements, donations, and
          listener engagement.
        </p>

        <p>
          Build a professional radio station like a full broadcasting platform:
          studio tools, live player, program schedule, DJs, podcasts, analytics,
          and mobile listening.
        </p>

        <a className="button" href="/contact">
          Start Radio Project
        </a>

        <a className="button" href="/donations">
          Support Radio
        </a>
      </section>

      <section className="hero">
        <h1>Live Radio Player</h1>

        <p>
          Replace the stream URL below with your Icecast, Shoutcast, AzuraCast,
          or radio hosting stream link when your station is ready.
        </p>

        <audio controls style={{ width: "100%", maxWidth: "700px" }}>
          <source src="https://example.com/live-stream.mp3" type="audio/mpeg" />
          Your browser does not support the audio player.
        </audio>
      </section>

      <section className="hero">
        <h1>Broadcasting System</h1>
      </section>

      <section className="grid">
        {liveFeatures.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Radio automation and broadcasting feature for live shows,
              scheduled programs, music, messages, and public communication.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Studio Tools</h1>
      </section>

      <section className="grid">
        {studioTools.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Studio tool for recording, mixing, streaming, publishing,
              monitoring, and communicating with listeners.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Radio Content Categories</h1>
      </section>

      <section className="grid">
        {contentCategories.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Program category for education, faith, news, music, public
              service, and community development.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Admin Dashboard</h1>
      </section>

      <section className="grid">
        {adminTools.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Admin control for radio content, scheduling, uploads, DJs,
              listener activity, donations, and reports.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Listener Features</h1>
      </section>

      <section className="grid">
        {listenerFeatures.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Listener feature for easy access, engagement, donations,
              subscriptions, messages, and replay.
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
              Tool or platform that can connect to your internet radio system.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Program Schedule Example</h1>

        <p>
          6:00 AM Prayer and Devotion • 8:00 AM Haiti News • 10:00 AM Civic
          Education • 12:00 PM Gospel Music • 2:00 PM Youth Training • 4:00 PM
          Music Lessons • 6:00 PM Public Accountability Journal • 8:00 PM Bible
          Study • 10:00 PM Auto DJ.
        </p>
      </section>

            <section className="hero">
        <h1>Video Broadcasting Platform</h1>

        <p>
          Add live video broadcasting for worship services, interviews, news,
          teaching, conferences, music lessons, community meetings, and public
          accountability programs.
        </p>

        <p>
          This turns the radio platform into a full audio, video, podcast,
          streaming, and media network.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Live Video Streaming</h2>
          <p>
            Broadcast live video programs from your studio, church, school,
            office, or event location using OBS Studio, webcam, camera, or phone.
          </p>
        </div>

        <div className="card">
          <h2>Video Player</h2>
          <p>
            Add a website video player for live broadcasts, recorded programs,
            interviews, courses, sermons, music lessons, and community updates.
          </p>
        </div>

        <div className="card">
          <h2>OBS Studio Integration</h2>
          <p>
            Use OBS Studio to mix camera, microphone, screen sharing, slides,
            lower thirds, logos, videos, and live scenes before broadcasting.
          </p>
        </div>

        <div className="card">
          <h2>Multi-Camera Studio</h2>
          <p>
            Support one camera, two cameras, phone camera, webcam, DSLR,
            capture card, or church camera system for professional video.
          </p>
        </div>

        <div className="card">
          <h2>Simulcasting</h2>
          <p>
            Send one live show to your website, YouTube, Facebook, radio page,
            and future mobile apps at the same time.
          </p>
        </div>

        <div className="card">
          <h2>Video Program Schedule</h2>
          <p>
            Schedule live shows, recorded premieres, Bible study, music lessons,
            interviews, public reports, youth programs, and training events.
          </p>
        </div>

        <div className="card">
          <h2>Recorded Video Archive</h2>
          <p>
            Store past broadcasts as an archive for members, students, donors,
            churches, communities, and future viewers.
          </p>
        </div>

        <div className="card">
          <h2>Podcast Conversion</h2>
          <p>
            Convert live video programs into audio podcasts, radio replays,
            downloadable files, and course lessons.
          </p>
        </div>

        <div className="card">
          <h2>Member-Only Video</h2>
          <p>
            Create private videos for paid members, students, donors, church
            members, leadership training, and professional courses.
          </p>
        </div>

        <div className="card">
          <h2>Video Donations</h2>
          <p>
            Add donation buttons during live broadcasts for mission projects,
            children support, radio ministry, school programs, and community aid.
          </p>
        </div>

        <div className="card">
          <h2>Live Chat and Questions</h2>
          <p>
            Let viewers send questions, prayer requests, comments, interview
            questions, song requests, and public feedback.
          </p>
        </div>

        <div className="card">
          <h2>Video Analytics</h2>
          <p>
            Track viewers, watch time, replay views, live attendance, donations,
            comments, shares, and popular programs.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Video Broadcasting Equipment</h1>

        <p>
          Start simple, then upgrade step by step as the station grows.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Starter Setup</h2>
          <p>
            Laptop or desktop, webcam, USB microphone, headphones, OBS Studio,
            internet connection, and your website player.
          </p>
        </div>

        <div className="card">
          <h2>Church / Studio Setup</h2>
          <p>
            Camera, tripod, audio mixer, microphone, lighting, capture card,
            OBS Studio, stream server, and website embed.
          </p>
        </div>

        <div className="card">
          <h2>Professional Setup</h2>
          <p>
            Multiple cameras, switcher, audio interface, wireless microphones,
            studio lights, green screen, backup internet, and recording storage.
          </p>
        </div>

        <div className="card">
          <h2>Mobile Field Setup</h2>
          <p>
            Phone, wireless microphone, tripod, mobile data, portable light,
            power bank, and live streaming app.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Video Streaming Diagram</h1>

        <p>
          Camera / Phone / Screen Share → OBS Studio → Encoder → YouTube,
          Facebook, Stream Server, or Website Player → Viewers.
        </p>
      </section>

      <section className="hero">
        <h1>Video Player Example</h1>

        <p>
          Replace the demo video link with your real YouTube live link, Vimeo
          link, private stream link, or self-hosted video file.
        </p>

        <video controls style={{ width: "100%", maxWidth: "800px" }}>
          <source src="/demo-video.mp4" type="video/mp4" />
          Your browser does not support the video player.
        </video>
      </section>

      <section className="hero">
        <h1>Full Media Network Features</h1>

        <p>
          Internet Radio • Live Video • Auto DJ • Podcasts • Courses • Sermons •
          Interviews • Music Lessons • News • Civic Education • Public Reports •
          Donations • Memberships • Analytics • Mobile Listening • TV Viewing.
        </p>
      </section>
    </main>
  );
}

