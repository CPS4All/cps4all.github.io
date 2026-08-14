import Image from "next/image";

const schedule = [
  ["9:00 - 9:45", "Opening + Icebreaker"],
  ["9:45 - 10:30", "Keynote 1"],
  ["10:30 - 11:00", "Coffee Break"],
  ["11:00 - 12:00", "Panel Discussion"],
  ["13:45 - 14:30", "Keynote 2"],
  ["14:30 - 15:30", "Demo & Poster Session"],
  ["15:30 - 16:15", "Mixed-Group Discussion"],
  ["16:15 - 17:00", "Closing"],
];

const organizers = [
  { name: "Shuchang Xu*", affiliation: "HKUST, MIT Media Lab", image: "/organizers/shuchang.png", url: "https://shuchangxu.github.io/" },
  { name: "Riku Arakawa*", affiliation: "Carnegie Mellon University", image: "/organizers/riku.jpg", url: "https://rikky0611.github.io/" },
  { name: "Mina Huh*", affiliation: "University of California, Berkeley", image: "/organizers/mina.png", url: "https://minahuh.com/" },
  { name: "Nandi Zhang*", affiliation: "University of Rochester", image: "/organizers/nandi.jpeg", url: "https://nandi-zhang.github.io/" },
  { name: "Tianyu Zhang*", affiliation: "University of Rochester", image: "/organizers/tianyu.png", url: "https://tianyuzhang2001.com/" },
  { name: "Wazeer Zulfikar*", affiliation: "MIT Media Lab", image: "/organizers/wazeer.png", url: "https://www.media.mit.edu/people/wazeer/overview/" },
  { name: "Ruei-Che Chang*", affiliation: "University of Michigan", image: "/organizers/rueiche.png", url: "https://rueiche.com/" },
  { name: "Yotam Sechayk*", affiliation: "University of Tokyo", image: "/organizers/yotam.png", url: "https://tomfluff.github.io/" },
  { name: "Huamin Qu", affiliation: "HKUST", image: "/organizers/huamin.png", url: "http://huamin.org/" },
  { name: "Amy Pavel", affiliation: "University of California, Berkeley", image: "/organizers/amy.png", url: "https://amypavel.com/" },
  { name: "Franklin Mingzhe Li", affiliation: "UNC-Chapel Hill", image: "/organizers/franklin.png", url: "https://franklin-li.com/" },
  { name: "Yukang Yan", affiliation: "University of Rochester", image: "/organizers/yukang.png", url: "https://rochester-bear-lab.github.io/yukang" },
  { name: "Brian A. Smith", affiliation: "Columbia University", image: "/organizers/brian.png", url: "https://ceal.cs.columbia.edu/people/" },
  { name: "Pattie Maes", affiliation: "MIT Media Lab", image: "/organizers/pattie.png", url: "https://www.media.mit.edu/people/pattie/overview/" },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="badge">UIST 2026 Workshop</p>
          <h1>
            <span className="title-line">Cyber-Physical Systems</span>
            <span className="title-line title-accent">for Accessibility and Ability Augmentation</span>
          </h1>
          <p className="date">November 2, 2026</p>
          <p className="location">Location: Renaissance Center</p>
          <div className="cta-row">
            <a className="btn" href="https://forms.gle/sQSKbdvGa99BGCcB6" target="_blank" rel="noreferrer">
              Register (Google Form)
            </a>
            <a className="btn" href="/CPS4All_Proposal.pdf" target="_blank" rel="noreferrer">
              Workshop Proposal
            </a>
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
              The powerful convergence of wearables, robotics, extended reality, and smart environments is expanding the design space for cyber-physical systems (CPS) that support accessibility and augment human abilities in daily life. This workshop brings together diverse communities to examine shared strategies and challenges in designing accessibility- and ability-centered CPS. Through panels, interactive demos, and mixed-group design activities, participants will identify emerging design principles, surface key challenges, and chart future directions for CPS that support and augment human abilities in real-world settings.
            </p>
            <Image
              className="workshop-figure"
              src="/figure1.png"
              width="3140"
              height="3023"
              unoptimized
              alt="Smart environments, wearables, extended reality, and robotics connected through transferable insights."
            />
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
                  <h3>
                    <a href={organizer.url} target="_blank" rel="noreferrer">
                      {organizer.name}
                    </a>
                  </h3>
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
              If you have any questions about the workshop or registration, or have any accessibility needs, please {" "}
              <a href="mailto:xsc14thu@gmail.com">Contact Us</a>.
            </p>
          </div>
        </section>

        <section aria-labelledby="history-title">
          <h2 id="history-title">Workshop History</h2>
          <div className="content-card">
            <p>
              This workshop builds on the UIST 2025 workshop {" "}
              <a href="https://accessible-cps.github.io" target="_blank" rel="noreferrer">
                Accessible Cyber-Physical Activities
              </a>.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>@ 2026 UIST workshop</p>
        </div>
      </footer>
    </>
  );
}
