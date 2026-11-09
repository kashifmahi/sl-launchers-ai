// Build-time script: injects the Google Search Console verification meta tag
// from the GOOGLE_SITE_VERIFICATION vault secret into index.html.
// The token value never appears in source — it's read from the environment.
import { readFileSync, writeFileSync } from "fs";

const token = process.env.GOOGLE_SITE_VERIFICATION;
if (!token) {
  console.warn("GOOGLE_SITE_VERIFICATION not set — skipping meta tag injection");
  process.exit(0);
}

const htmlPath = new URL("../index.html", import.meta.url).pathname;
let html = readFileSync(htmlPath, "utf8");

const tag = `<meta name="google-site-verification" content="${token}" />`;

if (html.includes('name="google-site-verification"')) {
  // replace existing
  html = html.replace(/<meta name="google-site-verification" content="[^"]*" \/>/, tag);
} else if (html.includes("<!-- GOOGLE_SITE_VERIFICATION -->")) {
  html = html.replace("<!-- GOOGLE_SITE_VERIFICATION -->", tag);
} else {
  console.warn("Injection point not found in index.html");
  process.exit(0);
}

writeFileSync(htmlPath, html);
console.log("Google site verification meta tag injected.");
