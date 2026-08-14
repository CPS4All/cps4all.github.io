import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://cps4all.github.io/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

let cachedHtml;

async function html() {
  if (!cachedHtml) {
    const response = await render();
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    cachedHtml = await response.text();
  }

  return cachedHtml;
}

const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("renders the masthead, hero, and event details", async () => {
  const page = await html();

  assert.match(page, /class="skip-link" href="#main"/);
  assert.match(page, /class="brand-name">CPS for All</);
  assert.match(page, /class="brand-sub">UIST 2026 Workshop</, "the masthead names the venue");
  assert.doesNotMatch(page, /class="eyebrow"/, "date and place replaced the hero eyebrow");
  assert.ok(
    page.indexOf('class="meta-row"') < page.indexOf("<h1>"),
    "date and place sit above the hero title",
  );
  // The hero title carries its own line break, so the two halves are adjacent
  // rather than contiguous.
  assert.match(page, /<h1>Cyber-Physical Systems<br\/?>for Accessibility and Ability Augmentation<\/h1>/);
  assert.match(page, /Nov(ember)? 2, 2026/);
  assert.match(page, /Detroit/);
  assert.doesNotMatch(page, /Venue Map|maps\.google|google\.com\/maps/);
  assert.match(page, /class="brand-mark" aria-hidden="true"/, "the masthead carries the CPS badge");

  // Hero calls to action, in order.
  assert.ok(
    page.indexOf("forms.gle/sQSKbdvGa99BGCcB6") <
      page.indexOf("/CPS4All_Proposal.pdf", page.indexOf("hero-foot")) &&
      page.indexOf("hero-foot") < page.indexOf('id="about"'),
    "hero should lead with the registration form",
  );

  // Title, then the work strip, then the calls to action.
  assert.ok(
    page.indexOf("<h1>") < page.indexOf("hero-marquee") &&
      page.indexOf("hero-marquee") < page.indexOf('class="actions"'),
    "the work strip sits between the hero title and its buttons",
  );
  assert.doesNotMatch(page, /stat-strip|stat-grid/, "the at-a-glance stat strip is gone");
  assert.match(page, /href="https:\/\/uist\.acm\.org\/2026\/workshops\/"/);
  assert.doesNotMatch(page, /aria-disabled="true"/);
});

test("renders every content section in order", async () => {
  const page = await html();
  const order = [
    'id="top"',
    'id="about"',
    'id="program"',
    'id="topics"',
    'id="outcomes"',
    'id="organizers"',
    'id="participate"',
    'id="history"',
    "</main>",
  ];

  let cursor = -1;
  for (const marker of order) {
    const at = page.indexOf(marker);
    assert.ok(at > cursor, `${marker} should appear after the previous section`);
    cursor = at;
  }

  for (const id of ["about", "program", "topics", "outcomes", "organizers", "participate", "history"]) {
    assert.match(page, new RegExp(`aria-labelledby="${id}-title"`), `${id} section needs a labelled heading`);
    assert.match(page, new RegExp(`id="${id}-title"`), `${id} heading needs a matching id`);
  }
});

test("renders the relevant-work marquee", async () => {
  const page = await html();

  assert.equal((page.match(/class="marquee-track"/g) ?? []).length, 2, "a duplicate track makes the loop seamless");
  assert.match(page, /class="marquee-track" aria-hidden="true"/, "the duplicate is hidden from assistive tech");
  assert.match(page, /\/works\/research_2\.webp/);
  assert.doesNotMatch(page, /research_1\.|Cooking/, "the cooking work was pulled");
  assert.match(page, /href="https:\/\/arxiv\.org\/abs\/2407\.13515"/);
  assert.match(page, /Context Sensing/);
  assert.equal((page.match(/class="work-card"/g) ?? []).length, 24, "twelve works, rendered twice");
  assert.match(page, /href="https:\/\/ceal\.cs\.columbia\.edu\/streetnav\/"/);
  // The work with no link is a plain card, never an empty anchor.
  assert.doesNotMatch(page, /<a[^>]*class="work-card"(?![^>]*href=)/);
  assert.match(page, /<div class="work-card"><img src="\/works\/10_AR_Guidance\.webp"/);

  // The loop must stop for reduced-motion users, and pause on hover or focus.
  assert.match(css, /@keyframes marquee/);
  assert.match(css, /prefers-reduced-motion[\s\S]*\.marquee-track\s*\{\s*animation:\s*none/);
  assert.match(css, /\.marquee:focus-within \.marquee-track[\s\S]*?animation-play-state:\s*paused/);
});

test("renders the five workshop topics with their guiding questions", async () => {
  const page = await html();
  const topics = [
    ["Sensing and User Modeling", "robustly sense, interpret, and model users"],
    ["Interaction Paradigms", "preserving user agency"],
    ["End-User Adaptation", "needs, abilities, preferences, and physical environments"],
    ["Real-World Evaluation", "real-world usability and long-term impact"],
    ["Privacy and Ethics", "bystander consent"],
  ];

  for (const [title, question] of topics) {
    assert.match(page, new RegExp(title));
    assert.match(page, new RegExp(question));
  }

  assert.equal((page.match(/class="topic-card"/g) ?? []).length, topics.length);
  assert.doesNotMatch(page, /class="topic-num"/, "topic cards are unnumbered");
});

test("renders the full-day schedule as a timeline", async () => {
  const page = await html();
  const times = [
    "9:00 - 9:30",
    "9:30 - 10:15",
    "10:15 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:45",
    "13:45 - 14:45",
    "14:45 - 15:30",
    "15:30 - 16:15",
    "16:15 - 17:00",
  ];

  let cursor = page.indexOf('id="program"');
  for (const time of times) {
    const at = page.indexOf(time, cursor);
    assert.ok(at > cursor, `${time} should appear in schedule order`);
    cursor = at;
  }

  assert.equal((page.match(/class="rail-item/g) ?? []).length, times.length);
  assert.equal((page.match(/class="rail-item rail-break"/g) ?? []).length, 1, "lunch is the one break");
  assert.match(page, /Demo &amp; Poster Session/);
  assert.match(page, /Mixed-Group Design and Discussion/);

  assert.doesNotMatch(page, /tba-card|To be announced/, "the to-be-announced cards are pulled for now");
});

test("renders participation, outcomes, and workshop lineage", async () => {
  const page = await html();

  assert.equal(
    (page.match(/href="https:\/\/forms\.gle\/sQSKbdvGa99BGCcB6"/g) ?? []).length,
    4,
    "form linked from the header bar, the drawer, the hero, and the register section",
  );
  // Register and contact share one card.
  assert.match(page, /accessibility needs, please contact us/);
  assert.match(page, /class="band-actions"/);
  assert.match(page, /href="mailto:xsc14thu@gmail\.com"/);
  assert.match(page, /class="chip-row"/);
  assert.match(page, /Ubiquitous Computing/);

  assert.equal((page.match(/class="output-card"/g) ?? []).length, 4);
  assert.match(page, /class="output-num">01</);
  assert.match(page, /class="output-num">04</);
  assert.match(page, /Workshop Report/);
  // The title sits beside the number, and the category pill is gone.
  assert.match(page, /class="output-num">01<\/span><h3>Shared Insights<\/h3>/);
  assert.doesNotMatch(page, /output-tag/);

  assert.match(page, /href="https:\/\/accessible-cps\.github\.io"/);
  assert.match(page, /Accessible Cyber-Physical Activities/);
  assert.ok(
    page.indexOf("Accessible Cyber-Physical Activities") > page.indexOf('id="history"'),
    "the lineage note lives in the workshop history section",
  );
  assert.doesNotMatch(page, /\[https:\/\/accessible-cps\.github\.io\]/);
});

test("renders all fourteen organizers with links and portraits", async () => {
  const page = await html();

  assert.equal((page.match(/class="person"/g) ?? []).length, 14);
  assert.equal((page.match(/class="person-star">\*/g) ?? []).length, 8, "eight equal-contribution organizers");
  assert.match(page, /\* equal contributions/);
  assert.match(
    css,
    /\.band-head:has\(\.people-note\)\s*\{[^}]*display:\s*flex/s,
    "the note sits beside the organizers title, not under it",
  );

  assert.match(page, /href="https:\/\/shuchangxu\.github\.io\/"[^>]*class="person"|class="person"[^>]*href="https:\/\/shuchangxu\.github\.io\/"/);
  assert.match(page, /Pattie Maes/);
  assert.match(page, /\/organizers\/riku\.webp/);
  assert.match(page, /\/organizers\/shuchang\.webp/);
  assert.match(page, /\/organizers\/nandi\.webp/);
  assert.match(page, /alt="Portrait of Brian A\. Smith"/);
  assert.doesNotMatch(page, /\/_next\/image\?/);
  // Every in-page image ships as WebP; only the social card stays a PNG.
  assert.doesNotMatch(page, /src="[^"]+\.(png|jpe?g)"/);
});

test("keeps the figure, contact route, and social metadata intact", async () => {
  const page = await html();

  assert.match(page, /\/figure1\.webp/);
  assert.ok(
    page.indexOf("/figure1.webp") > page.indexOf('id="about"') &&
      page.indexOf("/figure1.webp") < page.indexOf('id="topics"'),
    "the workshop figure belongs in the about section",
  );
  assert.match(page, /alt="Four illustrated scenes/);

  assert.match(page, /href="mailto:xsc14thu@gmail\.com"/);
  assert.match(page, /https:\/\/cps4all\.github\.io\/og\.png/);
  assert.match(page, /name="theme-color" content="#6b3fc9"/);
  assert.doesNotMatch(page, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("styles the purple design system accessibly", () => {
  assert.match(css, /--brand:\s*#6b3fc9/);
  assert.match(css, /--brand-deep:\s*#532aa3/);
  assert.doesNotMatch(css, /#008190|#00a0b2|#00646f|#04343c/i, "the teal palette should be gone");

  // The masthead badge is a circle.
  assert.match(css, /\.brand-mark\s*\{[^}]*border-radius:\s*50%/s);

  assert.match(css, /\.site-head\s*\{[^}]*position:\s*sticky/s);
  assert.match(css, /scroll-padding-top:\s*calc\(var\(--head-h\)/);
  assert.match(css, /:focus-visible\s*\{[^}]*outline:\s*3px solid/s);
  assert.match(css, /\.sr-only/);
  assert.match(css, /prefers-reduced-motion/);
  // The drifting gradients must stop for reduced-motion users.
  assert.match(css, /@keyframes hero-flow/);
  assert.match(css, /@keyframes cta-flow/);
  assert.match(css, /prefers-reduced-motion[\s\S]*\.hero,\s*\.band-cta\s*\{\s*animation:\s*none/);

  // The timeline rail and the mobile fallback that hides it. The empty mark
  // column must stretch or the connecting line collapses to the row gap.
  assert.match(css, /\.rail-mark\s*\{[^}]*align-self:\s*stretch/s);
  assert.match(css, /\.rail-mark::after\s*\{[^}]*border-radius:\s*50%/s);
  assert.match(css, /@media \(max-width: 680px\)[\s\S]*\.rail-mark\s*\{\s*display:\s*none/);
  // Nav collapses into the details drawer on narrow screens.
  assert.match(css, /@media \(max-width: 900px\)[\s\S]*\.nav\s*\{\s*display:\s*none/);
});
