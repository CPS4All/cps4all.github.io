import Image from "next/image";

const schedule = [
  ["9:00 - 9:45", "Opening + Icebreaker"],
  ["9:45 - 10:30", "Keynote 1", "Speaker to be announced"],
  ["10:30 - 11:00", "Coffee Break"],
  ["11:00 - 12:00", "Panel Discussion"],
  ["13:45 - 14:30", "Keynote 2", "Speaker to be announced"],
  ["14:30 - 15:30", "Demo & Poster Session"],
  ["15:30 - 16:15", "Mixed-Group Design & Discussion"],
  ["16:15-17:00", "Closing"],
];

const organizers = [
  { name: "Shuchang Xu*", affiliation: "HKUST" },
  { name: "Riku Arakawa*", affiliation: "Carnegie Mellon University", image: "/organizers/riku.jpg" },
  { name: "Mina Huh*", affiliation: "University of California, Berkeley", image: "/organizers/mina.png" },
  { name: "Nandi Zhang*", affiliation: "University of Rochester", image: "/organizers/nandi.jpeg" },
  { name: "Tianyu Zhang*", affiliation: "University of Rochester" },
  { name: "Wazeer Zulfikar*", affiliation: "MIT Media Lab" },
  { name: "Ruei-Che Chang*", affiliation: "University of Michigan" },
  { name: "Yotam Sechayk*", affiliation: "University of Tokyo" },
  { name: "Huamin Qu", affiliation: "HKUST" },
  { name: "Amy Pavel", affiliation: "University of California, Berkeley", image: "/organizers/amy.png" },
  { name: "Franklin Mingzhe Li", affiliation: "UNC-Chapel Hill", image: "/organizers/franklin.jpg" },
  { name: "Yukang Yan", affiliation: "University of Rochester", image: "/organizers/yukang.png" },
  { name: "Brian A. Smith", affiliation: "Columbia University" },
  { name: "Pattie Maes", affiliation: "MIT Media Lab" },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="badge">UIST 2026 Workshop | Detroit, MI USA</p>
          <h1>Cyber-Physical Systems for Accessibility and Ability Augmentation</h1>
          <p className="date">November 2, 2026</p>
          <p className="location">Location: <strong>Detroit Marriott at the Renaissance Center</strong></p>
          <div className="cta-row">
            <span className="btn" aria-disabled="true">Register (Google Form)</span>
            <a className="btn" href="https://uist.acm.org/2026/workshops/" target="_blank" rel="noreferrer">
              UIST 2026 Main Site
            </a>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section aria-labelledby="about-title">
          <h2 id="about-title">About the Workshop</h2>
          <div className="content-card about-copy">
            <p>
              The powerful convergence of wearables, robotics, extended reality, and smart environments is expanding the design space for cyber-physical systems (CPS) that support and augment human abilities in daily life. By sensing real-world contexts, modeling user needs, and providing situated assistance, these systems can improve accessibility for people with disabilities while enhancing broader human abilities such as perception, memory, learning, and mobility. However, realizing this potential requires addressing key challenges in context sensing, user modeling, adaptive interaction, privacy, and evaluation to ensure that CPS are reliable and effective in real-world contexts. This workshop will bring together researchers and practitioners across HCI, AI, wearables, robotics, XR, smart environments, accessibility, and ability augmentation to examine shared strategies and challenges for designing accessibility- and ability-centered CPS. Through panel discussions, interactive demos, and mixed-group design activities, participants will identify recurring design principles, technical challenges, and future directions for CPS that support and augment human abilities in real-world settings.
            </p>
          </div>
          <Image
            className="workshop-figure"
            src="/figure1.png"
            width="3140"
            height="3023"
            alt="Smart environments, wearables, extended reality, and robotics connected through transferable insights."
          />
        </section>

        <section aria-labelledby="schedule-title">
          <h2 id="schedule-title">Schedule</h2>
          <div className="content-card table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Content</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map(([time, title, note]) => (
                  <tr key={time}>
                    <td><strong>{time}</strong></td>
                    <td>
                      <strong>{title}</strong>
                      {note && <span>{note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="announcement-grid" aria-label="Workshop participants and presentations">
          <article className="content-card">
            <h2>Keynote Speakers</h2>
            <p>To be Announced</p>
          </article>
          <article className="content-card">
            <h2>Panelists</h2>
            <p>To be Announced</p>
          </article>
          <article className="content-card">
            <h2>Demo & Poster Presentations</h2>
            <p>To be Announced</p>
          </article>
        </section>

        <section aria-labelledby="organizers-title">
          <h2 id="organizers-title">Organizers</h2>
          <div className="people">
            {organizers.map((organizer) => (
              <article className={`person${organizer.image ? " has-image" : ""}`} key={organizer.name}>
                {organizer.image && (
                  <Image src={organizer.image} alt="" width="320" height="320" />
                )}
                <div>
                  <h3>{organizer.name}</h3>
                  <p>{organizer.affiliation}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="questions-title">
          <h2 id="questions-title">Questions?</h2>
          <div className="content-card">
            <p>
              If you have any questions about the workshop or registration, or have any accessibility needs, please email:{" "}
              <a href="mailto:xsc14thu@gmail.com">Contact Us</a> (xsc14thu@gmail.com).
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>@ 2026 UIST workshop.</p>
        </div>
      </footer>
    </>
  );
}
