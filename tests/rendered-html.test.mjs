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
  assert.match(html, /class="title-line">Cyber-Physical Systems for<\/span>/);
  assert.match(html, /class="title-line title-accent">Accessibility and Ability Augmentation<\/span>/);
  assert.match(html, /November 2, 2026/);
  assert.match(html, /Detroit Marriott at the Renaissance Center/);
  assert.match(html, /Register \(Google Form\)/);
  assert.match(html, /Mixed-Group Design &amp; Discussion/);
  assert.match(html, /Pattie Maes/);
  assert.match(html, /xsc14thu@gmail\.com/);
  assert.match(html, /\/figure1\.png/);
  assert.ok(
    html.indexOf("alt=\"Smart environments") < html.indexOf("The convergence of wearables"),
    "workshop figure should appear before the about copy",
  );
  assert.match(html, /\/organizers\/riku\.jpg/);
  assert.match(html, /\/organizers\/shuchang\.png/);
  assert.match(html, /\/organizers\/pattie\.png/);
  assert.match(html, /\* equal contributions/);
  assert.match(html, /HKUST, MIT Media Lab/);
  assert.match(html, /<strong>Motivation:<\/strong>/);
  assert.match(html, /<strong>Challenge:<\/strong>/);
  assert.match(html, /<strong>Goal:<\/strong>/);
  assert.match(html, /<strong>Activities and Outcome:<\/strong>/);
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
  assert.doesNotMatch(css, /gradient\(/);
});
