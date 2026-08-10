import Navbar from "../components/Navbar";

export default function AIBibleRadioPage() {
  const voiceRoles = [
    {
      title: "Male Voice 1: Sabbath School Lesson Reader",
      text: "Reads the lesson introduction, main lesson, spiritual theme, and daily study notes.",
    },
    {
      title: "Female Voice 1: Question Reader",
      text: "Reads every Sabbath School question clearly for listeners, families, students, and churches.",
    },
    {
      title: "Male Voice 2: Bible Reader",
      text: "Reads KJV Bible verses connected to Genesis, Matthew, Psalms, prayers, prophets, and lesson questions.",
    },
    {
      title: "Female Voice 2: Answer Reader",
      text: "Reads simple answers from Scripture, lesson notes, blank spaces, and Bible-based discussion.",
    },
    {
      title: "Prayer Voice",
      text: "Reads prayers at 6 AM, 12 PM, 3 PM, 6 PM, 9 PM, and midnight.",
    },
    {
      title: "Station Announcer",
      text: "Introduces programs, station identity, Bible readings, Sabbath School, prayer times, and the next broadcast.",
    },
  ];

  const aiVoiceTools = [
    "ElevenLabs",
    "OpenAI Audio",
    "Amazon Polly",
    "Microsoft Azure AI Speech",
    "Google Cloud Text-to-Speech",
    "Murf AI",
    "NaturalReader",
    "Piper TTS",
    "Coqui TTS",
  ];

  const dailySchedule = [
    {
      time: "5:00 AM",
      title: "Sabbath School Lesson",
      text: "Four-reader format: lesson reader, question reader, Bible reader, and answer reader.",
    },
    {
      time: "6:00 AM",
      title: "Morning Prayer",
      text: "Prayer, Psalm reading, Bible promise, dedication, protection, and thanksgiving.",
    },
    {
      time: "8:00 AM",
      title: "KJV Bible Reading",
      text: "Genesis chapter, then Matthew chapter, alternating one by one.",
    },
    {
      time: "12:00 PM",
      title: "Noon Prayer",
      text: "Prayer for families, children, churches, schools, Haiti, leaders, justice, and protection.",
    },
    {
      time: "3:00 PM",
      title: "Afternoon Prayer",
      text: "Psalms, forgiveness, repentance, healing, wisdom, and service prayer.",
    },
    {
      time: "6:00 PM",
      title: "Evening Prayer",
      text: "Family worship, Sabbath School review, Bible discussion, and thanksgiving.",
    },
    {
      time: "9:00 PM",
      title: "Night Prayer",
      text: "Protection prayer, Psalms, Bible promises, and spiritual reflection.",
    },
    {
      time: "12:00 AM",
      title: "Midnight Prayer",
      text: "Midnight prayer, prophecy reading, Psalms, and quiet worship.",
    },
  ];

  const readingPlan = [
    {
      title: "Day 1",
      text: "Genesis 1, Matthew 1, Psalms 1–7.",
    },
    {
      title: "Day 2",
      text: "Genesis 2, Matthew 2, Psalms 8–14.",
    },
    {
      title: "Day 3",
      text: "Genesis 3, Matthew 3, Psalms 15–21.",
    },
    {
      title: "Old Testament Rotation",
      text: "Continue Genesis chapter by chapter, then continue through the Old Testament.",
    },
    {
      title: "New Testament Rotation",
      text: "Continue Matthew chapter by chapter, then continue through the New Testament.",
    },
    {
      title: "Seven Psalms Daily",
      text: "Read seven Psalms every day with prayers and worship blocks.",
    },
    {
      title: "Prayers of David",
      text: "Add prayers of repentance, praise, deliverance, protection, thanksgiving, and trust in God.",
    },
    {
      title: "Prayers of Solomon",
      text: "Add prayers for wisdom, leadership, dedication, worship, justice, and national blessing.",
    },
  ];

  const prophetsPlan = [
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
  ];

  const automationFeatures = [
    "Automatic Bible reading",
    "Multiple AI voices",
    "Male and female voice roles",
    "Genesis and Matthew alternating plan",
    "Seven Psalms per day",
    "Prayer-time programming",
    "Sabbath School question and answer format",
    "Bible verse reading",
    "Prophets reading series",
    "MP3 audio generation",
    "Auto DJ playlist",
    "Podcast replay archive",
    "Website audio player",
    "Mobile listening",
  ];

  const softwareSetup = [
    {
      title: "Best Simple Setup",
      text: "ElevenLabs or OpenAI Audio for voices, Next.js for the website, and MP3 files for Auto DJ.",
    },
    {
      title: "Best Developer Setup",
      text: "Amazon Polly or Azure Speech for scheduled audio generation with reliable APIs.",
    },
    {
      title: "Best Low-Cost Local Setup",
      text: "Piper TTS or Coqui TTS to generate voices locally and save files to your computer.",
    },
    {
      title: "Best Broadcasting Setup",
      text: "Generated MP3 files → AzuraCast or Icecast → internet radio player → listeners.",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Vessel AI Bible Radio Automation</h1>

        <p>
          AI-powered Bible radio that reads the King James Bible automatically,
          rotates Genesis and Matthew chapter by chapter, reads seven Psalms per
          day, schedules prayer times, and creates Sabbath School programs with
          multiple male and female voices.
        </p>

        <p>
          This system can generate MP3 files, organize playlists, feed Auto DJ,
          publish audio archives, and broadcast through your internet radio
          station.
        </p>

        <a className="button" href="/internet-radio">
          Internet Radio
        </a>

        <a className="button" href="/bible-radio">
          Bible Radio
        </a>
      </section>

      <section className="hero">
        <h1>AI Voice Roles</h1>
      </section>

      <section className="grid">
        {voiceRoles.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>AI Voice Software</h1>

        <p>
          These tools can create voices for Bible reading, Sabbath School,
          prayers, Psalms, announcements, and radio automation.
        </p>
      </section>

      <section className="grid">
        {aiVoiceTools.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              AI voice software option for narration, Bible lessons, questions,
              answers, prayer programs, and station announcements.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Daily AI Radio Schedule</h1>
      </section>

      <section className="grid">
        {dailySchedule.map((item) => (
          <div className="card" key={item.time}>
            <h2>{item.time}</h2>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>KJV Bible Reading Plan</h1>
      </section>

      <section className="grid">
        {readingPlan.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Prophets Reading Series</h1>

        <p>
          Add all Bible prophets into the station schedule for prophecy,
          repentance, revival, judgment, mercy, and restoration studies.
        </p>
      </section>

      <section className="grid">
        {prophetsPlan.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Prophet reading series for Bible radio, Sabbath School support,
              prayer study, and spiritual teaching.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Automation Features</h1>
      </section>

      <section className="grid">
        {automationFeatures.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Automation feature for Bible radio, AI voices, Sabbath School,
              prayers, Psalms, lessons, audio replay, and listener access.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Software Setup Options</h1>
      </section>

      <section className="grid">
        {softwareSetup.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Automation Flow</h1>

        <p>
          KJV Bible text → Sabbath School summary → questions → Bible references
          → AI voices → MP3 audio → playlist → Auto DJ → internet radio stream →
          website player → listeners.
        </p>
      </section>

      <section className="hero">
        <h1>Folder Structure</h1>

        <p>
          data/bible-radio for reading plans and schedules. public/audio/bible-radio
          for generated MP3 files. app/ai-bible-radio for this page.
        </p>
      </section>

      <section className="hero">
        <h1>Copyright Rule</h1>

        <p>
          Use public-domain KJV text. For Sabbath School quarterlies and Ellen
          White materials, use official links, licensed content, short
          summaries, or your own original study notes unless you have permission
          to reproduce full text.
        </p>
      </section>
    </main>
  );
}

