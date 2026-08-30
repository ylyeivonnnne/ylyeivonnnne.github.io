import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteData } from "../assets/site-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const indexHtml = read("index.html");
const sitemap = read("sitemap.xml");
const robots = read("robots.txt");

const requiredAnchors = [
  "about",
  "news",
  "research",
  "experience",
  "education",
  "awards"
];

requiredAnchors.forEach((anchor) => {
  assert(
    indexHtml.includes(`id="${anchor}"`),
    `Missing section anchor: ${anchor}`
  );
});

const navAnchors = requiredAnchors.filter(
  (anchor) => !["news", "awards"].includes(anchor)
);

navAnchors.forEach((anchor) => {
  const hasNavLink =
    indexHtml.includes(`href="#${anchor}"`) ||
    indexHtml.includes(`data-section="${anchor}"`);
  assert(
    hasNavLink,
    `Missing nav link for #${anchor}`
  );
});

assert(indexHtml.includes("application/ld+json"), "Missing JSON-LD metadata");
assert(indexHtml.includes('name="description"'), "Missing description meta tag");
assert(robots.includes("Sitemap:"), "robots.txt must contain a sitemap reference");
assert(sitemap.includes("https://ylyeivonnnne.github.io/"), "Sitemap must point to the site URL");

const expectedFiles = [
  "assets/images/avatar.jpeg",
  "assets/images/image1.jpg",
  "assets/images/pvis26.png",
  "assets/images/paper-placeholder.svg",
  "assets/files/resume.pdf",
  "assets/images/favicon.ico",
  "404.html",
  ".nojekyll",
  ".github/workflows/deploy.yml"
];

expectedFiles.forEach((relativePath) => {
  assert(fs.existsSync(path.join(root, relativePath)), `Missing file: ${relativePath}`);
});

assert(siteData.profile.name === "YE YILIN", "Unexpected profile name");
assert(Array.isArray(siteData.researchFocus), "Research focus list must be an array");
assert(Array.isArray(siteData.news), "News list must be an array");
assert(Array.isArray(siteData.researchPapers), "Research papers must be an array");
assert(siteData.researchPapers.length >= 1, "Research section needs at least one paper");
assert(siteData.experienceItems.length >= 3, "Experience list must include at least three items");

console.log("Validation passed for static site structure.");
