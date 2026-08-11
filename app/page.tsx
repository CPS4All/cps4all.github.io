import Image from "next/image";

const schedule = [
  ["9:00 - 9:45", "Opening + Icebreaker"],
  ["9:45 - 10:30", "Keynote 1"],
  ["10:30 - 11:00", "Coffee Break"],
  ["11:00 - 12:00", "Panel Discussion"],
  ["13:45 - 14:30", "Keynote 2"],
  ["14:30 - 15:30", "Demo & Poster Session"],
  ["15:30 - 16:15", "Mixed-Group Discussion"],
  ["16:15-17:00", "Closing"],
];

const organizers = [
  { name: "Shuchang Xu*", affiliation: "HKUST, MIT Media Lab", image: "/organizers/shuchang.png" },
  { name: "Riku Arakawa*", affiliation: "Carnegie Mellon University", image: "/organizers/riku.jpg" },
  { name: "Mina Huh*", affiliation: "University of California, Berkeley", image: "/organizers/mina.png" },
  { name: "Nandi Zhang*", affiliation: "University of Rochester", image: "/organizers/nandi.jpeg" },
  { name: "Tianyu Zhang*", affiliation: "University of Rochester", image: "/organizers/tianyu.png" },
  { name: "Wazeer Zulfikar*", affiliation: "MIT Media Lab", image: "/organizers/wazeer.png" },
  { name: "Ruei-Che Chang*", affiliation: "University of Michigan", image: "/organizers/rueiche.png" },
  { name: "Yotam Sechayk*", affiliation: "University of Tokyo", image: "/organizers/yotam.png" },
  { name: "Huamin Qu", affiliation: "HKUST", image: "/organizers/huamin.png" },
  { name: "Amy Pavel", affiliation: "University of California, Berkeley", image: "/organizers/amy.png" },
  { name: "Franklin Mingzhe Li", affiliation: "UNC-Chapel Hill", image: "/organizers/franklin.png" },
  { name: "Yukang Yan", affiliation: "University of Rochester", image: "/organizers/yukang.png" },
  { name: "Brian A. Smith", affiliation: "Columbia University", image: "/organizers/brian.png" },
  { name: "Pattie Maes", affiliation: "MIT Media Lab", image: "/organizers/pattie.png" },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="badge">UIST 2026 Workshop | Detroit, MI USA</p>
          <h1>
            <span className="title-line">Cyber-Physical Systems</span>
            <span className="title-line title-accent">for Accessibility and Ability Augmentation</span>
          </h1>
          <p className="date">November 2, 2026</p>
          <p className="location">Location: <strong>Renaissance Center</strong></p>
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
              The convergence of wearables, robotics, extended reality, and smart environments is expanding the design space for cyber-physical systems (CPS) that support and augment human abilities in daily life. By sensing real-world contexts, modeling user needs, and providing situated assistance, these systems can improve accessibility for people with disabilities while enhancing broader human abilities such as perception, memory, learning, and mobility.
            </p>
            <Image
              className="workshop-figure"
              src="/figure1.png"
              width="3140"
              height="3023"
              unoptimized
              alt="Smart environments, wearables, extended reality, and robotics connected through transferable insights."
            />
            <p>
              However, realizing this potential requires addressing key challenges in context sensing, user modeling, adaptive interaction, privacy, and evaluation to ensure CPS are reliable and effective in real-world settings.
            </p>
            <p>
              This workshop will bring together researchers and practitioners across HCI, AI, wearables, robotics, XR, smart environments, accessibility, and ability augmentation to examine shared strategies and challenges for designing accessibility- and ability-centered CPS.
            </p>
            <p>
              Through panel discussions, interactive demos, and mixed-group design activities, participants will identify design principles, technical challenges, and future directions for CPS that support and augment human abilities in real-world settings.
            </p>
          </div>
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
                {schedule.map(([time, title]) => (
                  <tr key={time}>
                    <td><strong>{time}</strong></td>
                    <td>
                      <strong>{title}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="announcement-section" aria-labelledby="keynote-speakers-title">
          <h2 id="keynote-speakers-title">Keynote Speakers</h2>
          <p>To be Announced</p>
        </section>

        <section className="announcement-section" aria-labelledby="panelists-title">
          <h2 id="panelists-title">Panelists</h2>
          <p>To be Announced</p>
        </section>

        <section className="announcement-section" aria-labelledby="presentations-title">
          <h2 id="presentations-title">Demo & Poster Presentations</h2>
          <p>To be Announced</p>
        </section>

        <section aria-labelledby="organizers-title">
          <h2 id="organizers-title">Organizers</h2>
          <p className="organizer-note">* equal contributions</p>
          <div className="people">
            {organizers.map((organizer) => (
              <article className={`person${organizer.image ? " has-image" : ""}`} key={organizer.name}>
                {organizer.image && (
                  <Image src={organizer.image} alt="" width="320" height="320" unoptimized />
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
              <a href="mailto:xsc14thu@gmail.com">Contact Us</a>.
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
