import Image from "next/image";

const REGISTER_URL = "https://forms.gle/sQSKbdvGa99BGCcB6";
const PROPOSAL_URL = "/CPS4All_Proposal.pdf";
const UIST_URL = "https://uist.acm.org/2026/workshops/";
const PRIOR_WORKSHOP_URL = "https://accessible-cps.github.io";
const CONTACT_EMAIL = "xsc14thu@gmail.com";

const navLinks = [
  ["Overview", "#about"],
  ["Program", "#program"],
  ["Organizers", "#organizers"],
];

const topics = [
  {
    accent: "var(--a1)",
    icon: "sensing",
    title: "Sensing and User Modeling",
    question: "How can CPS robustly sense, interpret, and model users across diverse real-world contexts?",
  },
  {
    accent: "var(--a2)",
    icon: "interaction",
    title: "Interaction Paradigms",
    question: "How can CPS provide situated assistance while preserving user agency during daily tasks?",
  },
  {
    accent: "var(--a3)",
    icon: "adaptation",
    title: "End-User Adaptation",
    question: "How can CPS adapt to diverse user needs, abilities, preferences, and physical environments?",
  },
  {
    accent: "var(--a4)",
    icon: "evaluation",
    title: "Real-World Evaluation",
    question: "How should CPS be evaluated to assess real-world usability and long-term impact?",
  },
  {
    accent: "var(--a5)",
    icon: "privacy",
    title: "Privacy and Ethics",
    question: "How can CPS protect privacy, safety, and bystander consent in everyday physical spaces?",
  },
];

const keynoteSpeakers = [
  {
    name: "Jeffrey P. Bigham",
    title: "Associate Professor at Carnegie Mellon University",
    url: "https://www.cs.cmu.edu/~jbigham/",
    image: "/keynotes/bigham.webp",
    bio: "Jeffrey P. Bigham is an Associate Professor in the Human-Computer Interaction and Language Technologies Institutes in the School of Computer Science at Carnegie Mellon University. He also leads a Human-Centered Machine Intelligence Group at Apple, which works on research and applied projects in Accessibility, AI Fairness, ML Design, Learning Sciences, InfoVis, and Computational Understanding of UIs.",
  },
  {
    name: "Yuhang Zhao",
    title: "Assistant Professor at University of Wisconsin-Madison",
    url: "https://www.yuhangz.com",
    image: "/keynotes/yuhangzhao.webp",
    bio: "Yuhang Zhao is an Assistant Professor in Computer Sciences at the University of Wisconsin-Madison. Her research interests include Human-Computer Interaction (HCI), accessibility, augmented and virtual reality (AR/VR), and AI-powered interactive systems. She designs and builds embodied intelligence for accessibility: AI-powered XR systems that interpret user context and behavior, and adaptively enhance human abilities.",
  },
  {
    name: "Dhruv Jain",
    title: "Assistant Professor at University of Michigan",
    url: "https://dhruv-jain.com",
    image: "/keynotes/jain.webp",
    bio: "Dhruv Jain is an Assistant Professor of Computer Science and Engineering at the University of Michigan, also affiliated with the School of Information and Michigan Medicine. He builds and studies human-AI systems for accessibility across three research pillars: (1) AI for Sound Accessibility; (2) Accessible AI for the Future of Work; and (3) Reliability in Real-World Accessible AI.",
  },
];

const panelists = [
  {
    name: "Jaylin Herskovitz",
    title: "Assistant Professor, Tufts University",
    url: "https://jayl.in",
    image: "/panelists/jaylin.webp",
    focus: "AI-based assistive technologies, DIY technology, and AR/VR",
  },
  {
    name: "Yaxin Hu",
    title: "Assistant Professor, William & Mary",
    url: "https://edayaxin.github.io",
    image: "/panelists/yaxinhu.webp",
    focus: "Human robot interaction, embodied AI, and accessibility",
  },
  {
    name: "Valdemar Danry",
    title: "PhD Candidate, MIT Media Lab",
    url: "https://valdemardanry.com",
    image: "/panelists/vald.webp",
    focus: "Cognitive Augmentation, AI, and Brain Computer Interfaces",
  },
  {
    name: "Xiaofu Jin",
    title: "Humboldt Research Fellow, University of Stuttgart",
    url: "https://www.collaborative-ai.org/people/jin/",
    image: "/panelists/xiaofu.webp",
    focus: "Artificial Intelligence and Cognitive Science",
  },
  {
    name: "Aziz Zeidieh",
    title: "PhD Candidate, University of Illinois Urbana-Champaign",
    url: "https://zeidieh.com",
    image: "/panelists/aziz.webp",
    focus: "navigation technologies for blind and low-vision explorers",
  },
];

const schedule = [
  {
    time: "9:00 - 9:30",
    title: "Opening & Icebreaker",
    // body: "The organizers will first introduce the workshop's agenda and goals. Participants will then introduce themselves and identify complementary interests.",
  },
  {
    time: "9:30 - 10:15",
    title: "Keynote - Jeffrey P. Bigham",
    // body: "Senior researchers will highlight recent advances in cyber-physical systems (CPS) and human augmentation.",
  },
  {
    time: "10:15 - 11:00",
    title: "Keynote - Yuhang Zhao",
    // body: "Industry perspectives on the challenges and opportunities of designing and deploying CPS in real-world settings.",
  },
  {
    time: "11:00 - 12:00",
    title: "Panel Discussion",
    // body: "Panelists from diverse backgrounds will discuss emerging opportunities, challenges, and directions in CPS and human augmentation.",
  },
  {
    time: "12:00 - 13:45",
    title: "Lunch Break",
    // body: "Participants will connect and continue conversations over lunch.",
  },
  {
    time: "13:45 - 14:45",
    title: "Demo & Poster Session",
    // body: "Participants will present demos and posters in an open session, moving between projects to exchange ideas, gather feedback, and identify potential collaborators.",
  },
  {
    time: "14:45 - 15:30",
    title: "Keynote - Dhruv Jain",
    // body: "Community representatives will share lived experiences and perspectives on accessibility and ability augmentation technologies.",
  },
  {
    time: "15:30 - 16:15",
    title: "Mixed-Group Design and Discussion",
    // body: "Participants will work in mixed groups to design for a specific user scenario, drawing on the workshop's five core topics.",
  },
  {
    time: "16:15 - 17:00",
    title: "Synthesis & Closing",
    // body: "Participants will synthesize key takeaways, identify next steps, and establish a shared communication channel for continued exchange.",
  },
];

const outcomes = [
  {
    id: "01",
    accent: "var(--a1)",
    title: "Shared Insights",
    body: "Key insights from the workshop will be published on this website for continued access.",
  },
  {
    id: "02",
    accent: "var(--a2)",
    title: "Artifacts & Slides",
    body: "Workshop artifacts and slides will be shared with participants to support continued exchange.",
  },
  {
    id: "03",
    accent: "var(--a3)",
    title: "Continuing Channel",
    body: "A dedicated Discord server will help participants stay connected beyond the workshop.",
  },
  {
    id: "04",
    accent: "var(--a5)",
    title: "Workshop Report",
    body: "A public report will synthesize key outcomes for the broader community.",
  },
];

const relevantWork = [
  {
    title: "VR Accessibility",
    image: "/works/research_2.webp",
    url: "https://arxiv.org/abs/2501.13258",
  },
  {
    title: "Context Sensing",
    image: "/works/research_3.webp",
    url: "https://rikky0611.github.io/resource/paper/prism-tracker_imwut2022_paper.pdf",
  },
  {
    title: "Accessibility Robot",
    image: "/works/research_4.webp",
    url: "https://franklin-li.com/Accessible%20Robot.pdf",
  },
  {
    title: "AR Accessibility",
    image: "/works/research_5.webp",
    url: "https://arxiv.org/abs/2407.13515",
  },
  {
    title: "Accessible Navigation",
    image: "/works/6_Accessible_Navigation.webp",
    url: "https://ceal.cs.columbia.edu/streetnav/",
  },
  {
    title: "Multimodal Perception",
    image: "/works/7_Multimodal_Perception.webp",
    url: "https://ceal.cs.columbia.edu/sonicstage/",
  },
  {
    title: "Live Visual Descriptions",
    image: "/works/8_Live_Description.webp",
    url: "https://worldscribe.org",
  },
  {
    title: "Task Guidance",
    image: "/works/9_Task_Guidance.webp",
    url: "https://minahuh.com/Vid2Coach/",
  },
  {
    title: "Behavior Support",
    image: "/works/10_AR_Guidance.webp",
  },
  {
    title: "Memory Support",
    image: "/works/11_Memory_Support.webp",
    url: "https://arxiv.org/pdf/2607.24536",
  },
  {
    title: "Wearable Assistance",
    image: "/works/12_Wearable_Assistance.webp",
    url: "https://www.media.mit.edu/projects/memoro/overview/",
  },
  {
    title: "Augmented Reasoning",
    image: "/works/13_Augmented_Reasoning.webp",
    url: "https://www.media.mit.edu/projects/wearable-reasoner/overview/",
  },
];

const callAreas = [
  "HCI",
  "AI",
  "Sensing",
  "Ubiquitous Computing",
  "Wearables",
  "Robotics",
  "AR/XR",
  "Smart Environments",
  "Accessibility",
  "Human Augmentation",
  "Privacy & Ethics",
  "Real-World Evaluation",
];

const attendees = [
  {
    name: "Ruijie Zheng",
    institution: "University of Michigan Ann Arbor",
    url: "https://ruijiezh67.github.io/",
    intro: "My research sits at the intersection of human-AI interaction and AI for social good. I am broadly interested in how intelligent systems can be designed to preserve human agency and critical thinking—particularly in contexts where AI outputs carry uncertainty or where users are underrepresented in default interface design. This includes questions of how to surface model confidence in ways that build rather than undermine user trust, how adaptive AI systems can serve diverse user needs without requiring explicit configuration, and how the internal dynamics of large language models (such as reasoning depth and hidden-state convergence) relate to the transparency and reliability that end-users experience.",
  },
  {
    name: "Ruijia Chen",
    institution: "University of Wisconsin-Madison",
    url: "https://chenruijia120.github.io/",
    intro: "My research interests lie in augmented reality and accessibility. I design and develop AR technology to automatically recognize surrounding visual information that cannot be easily perceived by people with low vision, and generate suitable multi-modal feedback to enhance their perceptual abilities in various daily tasks.",
  },
  {
    name: "Erwin Wu",
    institution: "Institute of Science Tokyo",
    url: "https://erwinwu.com/",
    intro: "I work on Assistance Systems for Skill Acquisition.",
  },
  {
    name: "Yuta Taguchi",
    institution: "Waseda University",
    url: "",
    intro: "I work on accessibility technology for people with visual impairments in outdoor sports. My project SnowEcho is a blind skiing assistance system that conveys obstacles and course boundaries through spatial audio, allowing skiers to perceive traversable free space and choose their own line rather than following a prescribed route.",
  },
  {
    name: "Yuanyang (YY) Teng",
    institution: "Northwestern University",
    url: "https://www.yyteng.com/",
    intro: "I challenge outcome-driven \"access\" and develop a process-oriented frame: Developmental Flourishing. It reframes assistive technologies not as instruments for reaching task outcomes, but as a means through which blind and low-vision individuals can explore, create, and construct meaning from their experiences. I share an analysis of sensing and AI systems, discussing the extent to which they align with and augment blind people’s perceptual and cognitive processes, while highlighting persistent challenges and future directions.",
  },
  {
    name: "Ujjaini Das",
    institution: "The University of Texas at Austin",
    url: "https://ujjainidas.github.io/",
    intro: "I am broadly interested in making physical experiences accessible. My past work has focused on making dance instruction accessible for blind and low-vision learners using multimodal cues. I have also collaborated on Vid2Coach, a wearable task assistant for BLV individuals, and on designing accessible communication for household robots. This workshop is strongly aligned with my interest in physical systems for accessibility, and I am excited to connect with other researchers about these systems, both within and outside accessibility contexts.",
  },
];

const organizers = [
  { name: "Shuchang Xu", equal: true, affiliation: "HKUST · MIT Media Lab", image: "/organizers/shuchang.webp", url: "https://shuchangxu.github.io/" },
  { name: "Riku Arakawa", equal: true, affiliation: "Carnegie Mellon University", image: "/organizers/riku.webp", url: "https://rikky0611.github.io/" },
  { name: "Mina Huh", equal: true, affiliation: "UC Berkeley", image: "/organizers/mina.webp", url: "https://minahuh.com/" },
  { name: "Nandi Zhang", equal: true, affiliation: "University of Rochester", image: "/organizers/nandi.webp", url: "https://nandi-zhang.github.io/" },
  { name: "Tianyu Zhang", equal: true, affiliation: "University of Rochester", image: "/organizers/tianyu.webp", url: "https://tianyuzhang2001.com/" },
  { name: "Wazeer Zulfikar", equal: true, affiliation: "MIT Media Lab", image: "/organizers/wazeer.webp", url: "https://www.media.mit.edu/people/wazeer/overview/" },
  { name: "Ruei-Che Chang", equal: true, affiliation: "University of Michigan", image: "/organizers/rueiche.webp", url: "https://rueiche.com/" },
  { name: "Yotam Sechayk", equal: true, affiliation: "University of Tokyo", image: "/organizers/yotam.webp", url: "https://tomfluff.github.io/" },
  { name: "Huamin Qu", equal: false, affiliation: "HKUST", image: "/organizers/huamin.webp", url: "http://huamin.org/" },
  { name: "Amy Pavel", equal: false, affiliation: "UC Berkeley", image: "/organizers/amy.webp", url: "https://amypavel.com/" },
  { name: "Franklin Mingzhe Li", equal: false, affiliation: "UNC-Chapel Hill", image: "/organizers/franklin.webp", url: "https://franklin-li.com/" },
  { name: "Yukang Yan", equal: false, affiliation: "University of Rochester", image: "/organizers/yukang.webp", url: "https://rochester-bear-lab.github.io/yukang" },
  { name: "Brian A. Smith", equal: false, affiliation: "Columbia University", image: "/organizers/brian.webp", url: "https://ceal.cs.columbia.edu/people/" },
  { name: "Pattie Maes", equal: false, affiliation: "MIT Media Lab", image: "/organizers/pattie.webp", url: "https://www.media.mit.edu/people/pattie/overview/" },
];

const iconPaths: Record<string, React.ReactNode> = {
  sensing: (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 19.1a10 10 0 0 1 0-14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
    </>
  ),
  interaction: (
    <>
      <path d="M4 5h11a4 4 0 0 1 0 8H8" />
      <path d="m11 10-3 3 3 3" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </>
  ),
  adaptation: (
    <>
      <path d="M5 20V9M12 20V4M19 20v-7" />
      <circle cx="5" cy="6.5" r="2" />
      <circle cx="12" cy="16" r="2" />
      <circle cx="19" cy="10" r="2" />
    </>
  ),
  evaluation: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20v-6M11 20V8M16 20v-9M21 20V5" />
    </>
  ),
  privacy: (
    <>
      <path d="M12 3 4.5 6v6c0 4.4 3.1 8.1 7.5 9 4.4-.9 7.5-4.6 7.5-9V6Z" />
      <path d="m9.5 12 1.8 1.9 3.4-3.8" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6v3H9zM8.5 5.5H6a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 18 5.5h-2.5" />
      <path d="M8.5 11.5h7M8.5 15.5h4.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3.5V6.5M16 3.5V6.5" />
    </>
  ),
  file: (
    <>
      <path d="M13.5 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5Z" />
      <path d="M13.5 3.5v5h5M9 13h6M9 16.5h4" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </>
  ),
  external: (
    <>
      <path d="M18.5 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V7A1.5 1.5 0 0 1 6 5.5h4.5" />
      <path d="M14 4.5h5.5V10M19 5l-8 8" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
};

type Work = { title: string; image: string; url?: string };

/* Entries without a link render as a plain card rather than a dead anchor. */
function WorkCard({ work, clone = false }: { work: Work; clone?: boolean }) {
  const inner = (
    <>
      <Image src={work.image} alt="" width={800} height={560} unoptimized />
      <span>{work.title}</span>
    </>
  );

  if (!work.url) {
    return <div className="work-card">{inner}</div>;
  }

  return (
    <a
      className="work-card"
      href={work.url}
      target="_blank"
      rel="noreferrer"
      tabIndex={clone ? -1 : undefined}
    >
      {inner}
    </a>
  );
}

function Icon({ name, className = "icon" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {iconPaths[name]}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-head">
        <div className="shell head-bar">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              CPS
            </span>
            <span className="brand-copy">
              <span className="brand-name">CPS for All</span>
              <span className="brand-sub">UIST 2026 Workshop</span>
            </span>
          </a>

          <nav className="nav" aria-label="Sections">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a href={PROPOSAL_URL} target="_blank" rel="noreferrer">
              Proposal
            </a>
            <a className="nav-out" href={UIST_URL} target="_blank" rel="noreferrer">
              UIST&rsquo; 26
              <Icon name="external" className="icon icon-sm" />
            </a>
            <a className="nav-cta" href={REGISTER_URL} target="_blank" rel="noreferrer">
              Register
            </a>
          </nav>

          <details className="nav-drawer">
            <summary>
              <Icon name="menu" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="drawer-panel">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
              <a href={PROPOSAL_URL} target="_blank" rel="noreferrer">
                Proposal (PDF)
              </a>
              <a href={UIST_URL} target="_blank" rel="noreferrer">
                UIST 2026 Main Site
              </a>
              <a className="drawer-cta" href={REGISTER_URL} target="_blank" rel="noreferrer">
                Register
              </a>
            </div>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-head">
            <div className="meta-row">
              <span>
                <Icon name="calendar" />
                Nov 2, 2026
              </span>
              <span>
                <Icon name="pin" />
                UIST Workshop
              </span>
            </div>

            {/* The break is explicit so the title reads the same at every
                desktop width instead of re-flowing as the column grows. */}
            <h1>
              <span className="title-lead">Cyber-Physical Systems</span>
              <br />
              for Accessibility and Ability Augmentation
            </h1>
          </div>

          {/* Duplicated once so the track can loop seamlessly; the copy is
              hidden from assistive tech. */}
          <div className="shell">
            <div className="marquee hero-marquee">
              <ul className="marquee-track">
                {relevantWork.map((work) => (
                  <li key={work.title}>
                    <WorkCard work={work} />
                  </li>
                ))}
              </ul>
              <ul className="marquee-track" aria-hidden="true">
                {relevantWork.map((work) => (
                  <li key={`${work.title}-copy`}>
                    <WorkCard work={work} clone />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="shell hero-foot">
            <div className="actions">
              <a className="btn btn-solid" href={REGISTER_URL} target="_blank" rel="noreferrer">
                <Icon name="clipboard" />
                Register (Google Form)
              </a>
              <a className="btn btn-ghost" href={PROPOSAL_URL} target="_blank" rel="noreferrer">
                <Icon name="file" />
                Workshop Proposal
              </a>
            </div>
          </div>
        </section>

        <section className="band band-white" id="about" aria-labelledby="about-title">
          <div className="shell split">
            <div>
              <h2 id="about-title">Workshop Overview</h2>
              <div className="prose">
                <p>
                  The convergence of wearables, robotics, extended reality, and smart environments is expanding the design space for cyber-physical systems (CPS) that support and augment human abilities in everyday life. By sensing real-world contexts, modeling users’ needs, and delivering situated assistance, these systems can enhance capabilities such as perception, memory, learning, and mobility. 
                  They also offer new ways to address long-standing accessibility barriers in areas such as independent living, navigation, and social participation. 
                </p>

                <p>
                  This workshop brings together researchers and practitioners from HCI, AI, wearables, robotics, XR, smart environments, accessibility, and ability augmentation to examine shared strategies and challenges for designing accessibility- and ability-centered CPS. 
                  Through keynotes, panel discussions, interactive demos, and mixed-group design activities, participants will identify emerging design principles, surface shared challenges, and chart future directions for CPS that support and augment human abilities in everyday life. 
                  The organizing committee will synthesize key workshop outcomes into a public report and maintain a participant communication channel to support continued exchange beyond the event.
                </p>
                
              </div>

            </div>

            <figure className="figure-card">
              <Image
                src="/figure1.webp"
                alt="Four illustrated scenes — a smart environment guiding a cooking task, a wearable assisting an arm movement, extended reality overlaying a cutting board, and a robot handing off an item — arranged around the phrase Bridging Diverse Communities, with arrows exchanging insights between them."
                width={1570}
                height={1512}
                unoptimized
                priority
              />

            </figure>
            
          </div>
        </section>

        <section className="band band-paper" id="topics" aria-labelledby="topics-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="topics-title">Five Key Topics</h2>
            </div>

            <div className="topic-grid">
              {topics.map((topic) => (
                <article
                  className="topic-card"
                  key={topic.title}
                  style={{ "--accent": topic.accent } as React.CSSProperties}
                >
                  <Icon name={topic.icon} className="icon" />
                  <h3>{topic.title}</h3>
                  <p className="topic-q">{topic.question}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band-white" id="program" aria-labelledby="program-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="program-title">Program</h2>
              <p></p>
            </div>

            <div className="rail">
              {schedule.map((item) => (
                <article className={`rail-item${item.isBreak ? " rail-break" : ""}`} key={item.time}>
                  <p className="rail-time">{item.time}</p>
                  <div className="rail-mark" aria-hidden="true" />
                  <div className="rail-body">
                    <h3>{item.title}</h3>
                    {item.body ? <p>{item.body}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="band band-paper" id="keynotes" aria-labelledby="keynotes-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="keynotes-title">Keynote Speakers</h2>
            </div>

            <div className="speaker-grid">
              {keynoteSpeakers.map((speaker) => (
                <article className="speaker-card keynote-card" key={speaker.name}>
                  <img
                    className="speaker-image"
                    src={speaker.image}
                    alt={`Headshot of ${speaker.name}`}
                    loading="lazy"
                  />
                  <div className="speaker-body">
                    <h3>
                      <a href={speaker.url} target="_blank" rel="noreferrer">
                        {speaker.name}
                      </a>
                    </h3>
                    <p className="speaker-title">{speaker.title}</p>
                    <p className="speaker-bio">{speaker.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band-white" id="panelists" aria-labelledby="panelists-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="panelists-title">Panelists</h2>
            </div>

            <div className="panel-grid">
              {panelists.map((panelist) => (
                <article className="panel-card" key={panelist.name}>
                  <img
                    className="panel-image"
                    src={panelist.image}
                    alt={`Headshot of ${panelist.name}`}
                    loading="lazy"
                  />
                  <div className="panel-body">
                    <h3>
                      <a href={panelist.url} target="_blank" rel="noreferrer">
                        {panelist.name}
                      </a>
                    </h3>
                    <p className="panel-title">{panelist.title}</p>
                    <p className="panel-focus">{panelist.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band-paper" id="attendees" aria-labelledby="attendees-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="attendees-title">Attendees</h2>
            </div>
            <p className="attendee-note">
              The attendees below have kindly consented to sharing a brief introduction. We hope these introductions help bridge diverse communities and foster meaningful connections.
            </p>

            <div className="attendee-grid">
              {attendees.map((person) => (
                <details className="attendee-card" key={person.name}>
                  <summary className="attendee-summary">
                    <div className="attendee-headline">
                      <span className="attendee-name">
                        {person.url ? (
                          <a href={person.url} target="_blank" rel="noreferrer">
                            {person.name}
                          </a>
                        ) : (
                          person.name
                        )}
                      </span>
                      <span className="attendee-institution">{person.institution}</span>
                    </div>
                    <span className="attendee-toggle" aria-hidden="true" />
                  </summary>
                  <div className="attendee-body">
                    <p className="attendee-intro">{person.intro}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>


        <section className="band band-white" id="organizers" aria-labelledby="organizers-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="organizers-title">
                Organizing Committee
              </h2>
              <p className="people-note">* equal contributions</p>
            </div>

            <div className="people-grid">
              {organizers.map((person) => (
                <a
                  className="person"
                  key={person.name}
                  href={person.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={person.image} alt={`Portrait of ${person.name}`} width={264} height={264} unoptimized />
                  <div className="person-id">
                    <h3>
                      {person.name}
                      {person.equal ? <span className="person-star">*</span> : null}
                    </h3>
                    <p>{person.affiliation}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        
        {/* <section className="band band-white" id="outcomes" aria-labelledby="outcomes-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="outcomes-title">Workshop Outcomes</h2>
            </div>

            <div className="output-grid">
              {outcomes.map((item) => (
                <article
                  className="output-card"
                  key={item.id}
                  style={{ "--accent": item.accent } as React.CSSProperties}
                >
                  <div className="output-top">
                    <span className="output-num">{item.id}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section> */}


        <section className="band band-dark band-cta" id="participate" aria-labelledby="participate-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="participate-title">Register Now!</h2>
              <p>
                If you have any accessibility needs, please contact us. We will do our
                best to accommodate your needs.
              </p>
            </div>

            <div className="band-actions">
              <a className="btn btn-solid" href={REGISTER_URL} target="_blank" rel="noreferrer">
                <Icon name="clipboard" />
                Registration Form
              </a>
              <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
                <Icon name="mail" />
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>

        <section className="band band-white" id="history" aria-labelledby="history-title">
          <div className="shell">
            <div className="band-head">
              <h2 id="history-title">Workshop History</h2>
            </div>

            <p className="lineage">
              This workshop builds on the{" "}
              <a href={PRIOR_WORKSHOP_URL} target="_blank" rel="noreferrer">
                Accessible Cyber-Physical Activities
              </a>{" "}
              workshop at UIST 2025.
            </p>
          </div>
        </section>

      {/* <footer className="site-foot">
        <div className="shell foot-bar">
          <p>
            CPS for All · UIST 2026 Workshop
          </p>
          <a href="#top">
            <Icon name="arrowUp" />
            Back to top
          </a>
        </div>
      </footer> */}
    </>
  );
}
