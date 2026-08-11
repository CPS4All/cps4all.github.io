const schedule = [
  { time: "9:00–9:45", title: "Opening + Icebreaker", type: "welcome" },
  { time: "9:45–10:30", title: "Keynote 1", note: "Speaker to be announced", type: "keynote" },
  { time: "10:30–11:00", title: "Coffee Break", type: "break" },
  { time: "11:00–12:00", title: "Panel Discussion", type: "panel" },
  { time: "13:45–14:30", title: "Keynote 2", note: "Speaker to be announced", type: "keynote" },
  { time: "14:30–15:30", title: "Demo & Poster Session", type: "demo" },
  { time: "15:30–16:15", title: "Mixed-Group Design & Discussion", type: "discussion" },
  { time: "16:15–17:00", title: "Closing", type: "closing" },
];

const organizers = [
  ["Shuchang Xu*", "HKUST"],
  ["Riku Arakawa*", "Carnegie Mellon University"],
  ["Mina Huh*", "University of California, Berkeley"],
  ["Nandi Zhang*", "University of Rochester"],
  ["Tianyu Zhang*", "University of Rochester"],
  ["Wazeer Zulfikar*", "MIT Media Lab"],
  ["Ruei-Che Chang*", "University of Michigan"],
  ["Yotam Sechayk*", "University of Tokyo"],
  ["Huamin Qu", "HKUST"],
  ["Amy Pavel", "University of California, Berkeley"],
  ["Franklin Mingzhe Li", "UNC-Chapel Hill"],
  ["Yukang Yan", "University of Rochester"],
  ["Brian A. Smith", "Columbia University"],
  ["Pattie Maes", "MIT Media Lab"],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="CPS for All — back to top">
            <span className="brand-mark" aria-hidden="true">CPS</span>
            <span className="brand-copy">
              <strong>CPS for All</strong>
              <small>UIST ’26 Workshop</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#schedule">Schedule</a>
            <a href="#people">People</a>
            <a className="nav-cta" href="https://uist.acm.org/2026/workshops/" target="_blank" rel="noreferrer">
              UIST 2026 <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="eyebrow">UIST 2026 Workshop · Detroit, MI, USA</p>
              <h1>Cyber-Physical Systems for <span>Accessibility</span> and Ability Augmentation</h1>
              <p className="hero-deck">
                A full-day workshop connecting HCI, AI, wearables, robotics, XR, and smart environments to build more capable and accessible futures.
              </p>
              <div className="hero-actions">
                <span className="button button-disabled" aria-disabled="true">Registration forthcoming</span>
                <a className="button button-secondary" href="https://uist.acm.org/2026/workshops/" target="_blank" rel="noreferrer">
                  UIST 2026 main site <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="hero-poster" aria-label="Workshop details">
              <div className="poster-orbit orbit-one" aria-hidden="true" />
              <div className="poster-orbit orbit-two" aria-hidden="true" />
              <p className="poster-label">One day in Detroit</p>
              <p className="poster-date"><span>NOV</span> 02</p>
              <div className="poster-tags" aria-label="Workshop themes">
                <span>Wearables</span>
                <span>Robotics</span>
                <span>Extended Reality</span>
                <span>Smart Environments</span>
              </div>
            </div>
          </div>

          <div className="event-strip">
            <div className="page-shell event-grid">
              <div><span>When</span><strong>November 2, 2026</strong></div>
              <div><span>Where</span><strong>Detroit Marriott at the Renaissance Center</strong></div>
              <div><span>Format</span><strong>Keynotes · Panel · Demos · Co-design</strong></div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="page-shell about-grid">
            <div className="section-heading">
              <p className="eyebrow">About the workshop</p>
              <h2>Designing systems that move between bodies, spaces, and everyday life.</h2>
            </div>
            <div className="about-copy">
              <p className="lead">
                The powerful convergence of wearables, robotics, extended reality, and smart environments is expanding the design space for cyber-physical systems (CPS) that support and augment human abilities in daily life.
              </p>
              <p>
                By sensing real-world contexts, modeling user needs, and providing situated assistance, these systems can improve accessibility for people with disabilities while enhancing broader human abilities such as perception, memory, learning, and mobility. However, realizing this potential requires addressing key challenges in context sensing, user modeling, adaptive interaction, privacy, and evaluation to ensure that CPS are reliable and effective in real-world contexts.
              </p>
              <p>
                This workshop will bring together researchers and practitioners across HCI, AI, wearables, robotics, XR, smart environments, accessibility, and ability augmentation to examine shared strategies and challenges for designing accessibility- and ability-centered CPS. Through panel discussions, interactive demos, and mixed-group design activities, participants will identify recurring design principles, technical challenges, and future directions for CPS that support and augment human abilities in real-world settings.
              </p>
            </div>
          </div>

          <figure className="figure-card page-shell">
            <div className="figure-topline">
              <span>Figure 01</span>
              <span>Four domains · Transferable insights</span>
            </div>
            <img
              src="/figure1.png"
              width="3140"
              height="3023"
              alt="Illustration connecting smart environments, wearables, extended reality, and robotics through transferable insights."
            />
            <figcaption>
              From sensing and situated assistance to embodied interaction, shared lessons can travel across CPS domains.
            </figcaption>
          </figure>
        </section>

        <section className="section schedule-section" id="schedule">
          <div className="page-shell">
            <div className="section-heading schedule-heading">
              <p className="eyebrow">Workshop program</p>
              <h2>A day built for exchange, demonstration, and synthesis.</h2>
              <p>Program details are preliminary and may be updated closer to the workshop.</p>
            </div>
            <div className="schedule-list" aria-label="Workshop schedule">
              {schedule.map((item, index) => (
                <article className={`schedule-item ${item.type}`} key={item.time}>
                  <span className="schedule-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <time>{item.time}</time>
                  <div>
                    <h3>{item.title}</h3>
                    {item.note && <p>{item.note}</p>}
                  </div>
                  <span className="schedule-dot" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section announcements" id="people">
          <div className="page-shell announcement-grid">
            <article className="announcement-card blue-card">
              <p className="card-index">01</p>
              <h2>Keynote Speakers</h2>
              <p>To be announced</p>
            </article>
            <article className="announcement-card coral-card">
              <p className="card-index">02</p>
              <h2>Panelists</h2>
              <p>To be announced</p>
            </article>
            <article className="announcement-card yellow-card">
              <p className="card-index">03</p>
              <h2>Demo & Poster Presentations</h2>
              <p>To be announced</p>
            </article>
          </div>
        </section>

        <section className="section organizers">
          <div className="page-shell">
            <div className="section-heading organizers-heading">
              <p className="eyebrow">Organizers</p>
              <h2>A cross-disciplinary team spanning accessibility, HCI, and intelligent systems.</h2>
            </div>
            <div className="organizer-grid">
              {organizers.map(([name, affiliation], index) => (
                <article className="organizer" key={name}>
                  <span className="organizer-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{name}</h3>
                    <p>{affiliation}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="organizer-note">* Primary organizers</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-grid">
            <p className="eyebrow">Questions?</p>
            <div>
              <h2>Let’s make the workshop work for everyone.</h2>
              <p>If you have questions about the workshop or registration, or have any accessibility needs, please get in touch.</p>
              <a className="contact-link" href="mailto:xsc14thu@gmail.com">Contact us <span>xsc14thu@gmail.com</span> <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-inner">
          <p>© 2026 UIST Workshop.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
