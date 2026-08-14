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

test("server-renders the complete workshop page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /class="title-line">Cyber-Physical Systems<\/span>/);
  assert.match(html, /class="title-line title-accent">for Accessibility and Ability Augmentation:<\/span>/);
  assert.match(html, /class="title-line title-sub">Bridging Diverse Communities<\/span>/);
  assert.match(html, /November 2, 2026/);
  assert.match(html, /class="location">Location: Renaissance Center<\/p>/);
  assert.doesNotMatch(html, /Detroit Marriott/);
  assert.match(html, /href="https:\/\/forms\.gle\/sQSKbdvGa99BGCcB6"[^>]*>\s*Register \(Google Form\)\s*<\/a>/);
  assert.doesNotMatch(html, /aria-disabled="true"/);
  assert.match(html, /href="\/CPS4All_Proposal\.pdf"[^>]*>\s*Workshop Proposal\s*<\/a>/);
  assert.ok(
    html.indexOf("forms.gle") < html.indexOf("CPS4All_Proposal.pdf") &&
      html.indexOf("CPS4All_Proposal.pdf") < html.indexOf("uist.acm.org/2026/workshops"),
    "hero buttons should run register, proposal, then UIST main site",
  );
  assert.match(html, /Mixed-Group Discussion/);
  assert.doesNotMatch(html, /Mixed-Group Design &amp; Discussion/);
  assert.match(html, /Pattie Maes/);
  assert.match(html, /xsc14thu@gmail\.com/);
  assert.match(html, /\/figure1\.png/);
  assert.ok(
    html.indexOf("alt=\"Smart environments") > html.indexOf("About the Workshop") &&
      html.indexOf("alt=\"Smart environments") < html.indexOf("Schedule</h2>"),
    "workshop figure should sit inside the about section",
  );
  assert.match(html, /\/organizers\/riku\.jpg/);
  assert.match(html, /\/organizers\/shuchang\.png/);
  assert.match(html, /\/organizers\/pattie\.png/);
  assert.doesNotMatch(html, /\/_next\/image\?/);
  assert.match(html, /\* equal contributions/);
  assert.match(html, /HKUST, MIT Media Lab/);
  assert.match(html, /href="https:\/\/accessible-cps\.github\.io"[^>]*>Accessible Cyber-Physical Activities<\/a>/);
  assert.doesNotMatch(html, /\[https:\/\/accessible-cps\.github\.io\]/);
  assert.match(html, /class="announcement-section" aria-labelledby="keynote-speakers-title"/);
  assert.match(html, /id="keynote-speakers-title">Keynote Speakers<\/h2><p>To be Announced<\/p>/);
  assert.match(html, /id="panelists-title">Panelists<\/h2><p>To be Announced<\/p>/);
  assert.match(html, /id="presentations-title">Demo &amp; Poster Presentations<\/h2><p>To be Announced<\/p>/);
  assert.doesNotMatch(html, /class="announcement-grid"|<article class="content-card">/);
  assert.doesNotMatch(html, /Speaker to be announced/);
  assert.doesNotMatch(html, /Contact Us<\/a> \(xsc14thu@gmail\.com\)/);
  assert.match(html, /https:\/\/cps4all\.github\.io\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("includes accessible section structure and image text", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(html, /aria-labelledby="about-title"/);
  assert.match(html, /scope="col"/);
  assert.match(html, /alt="Smart environments, wearables, extended reality, and robotics connected through transferable insights\."/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /--accent:\s*#0a8c9c/);
  assert.match(css, /\.title-line\s*\{[^}]*white-space:\s*nowrap/s);
  assert.match(css, /font-size:\s*clamp\(32px,\s*5\.2vw,\s*58px\)/);
  assert.match(css, /h1\s*\{[^}]*font-weight:\s*700/s);
  assert.doesNotMatch(css, /\.title-sub\s*\{[^}]*font-size/s);
  assert.match(css, /h1\s*\{[^}]*margin:\s*clamp\(30px,\s*3\.6vw,\s*44px\) auto clamp\(24px,\s*3\.2vw,\s*36px\)/s);
  assert.doesNotMatch(css, /font-family:\s*var\(--font-serif\)/);
  assert.match(css, /\.about-copy p\s*\{[^}]*max-width:\s*68ch/s);
  assert.match(css, /\.about-copy p\s*\{[^}]*line-height:\s*1\.78/s);
  assert.match(css, /@media \(max-width: 1180px\)\s*\{\s*\.title-line\s*\{\s*white-space:\s*normal;/);
  assert.match(css, /@media \(max-width: 760px\)[\s\S]*\.btn\s*\{\s*width:\s*min\(100%,\s*65vw\);/);
  assert.match(css, /width:\s*min\(100%,\s*408px\)/);
  assert.match(css, /\.about-copy\s*\{[^}]*padding:\s*clamp\(36px,\s*6vw,\s*72px\)/s);
  assert.match(css, /\.about-copy\s*\{[^}]*border:\s*2px solid #b6dfe3/s);
  assert.doesNotMatch(css, /\.announcement-section\s*\+\s*\.announcement-section[^}]*border/);
  assert.doesNotMatch(css, /gradient\(/);
});
