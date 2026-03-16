#!/usr/bin/env node

/**
 * Deploys the site to Cloudflare Pages.
 *
 * Usage:
 *   node scripts/deploy-cloudflare.mjs [project-name]
 *
 * Default project name: replicante-website
 *
 * Static assets are built to out/ via Next.js static export.
 * Functions in functions/ are deployed alongside as Cloudflare Pages Functions.
 * D1 bindings are configured via wrangler.toml.
 */

import { execSync } from "child_process";

const projectName = process.argv[2] || "replicante-website";

function run(cmd, opts = {}) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...opts });
}

console.log(`\nDeploying to Cloudflare Pages: ${projectName}\n`);

run("npx next build");

run(
  `npx wrangler pages deploy out --project-name ${projectName} --commit-dirty=true`
);

console.log(`\n✅ Deployed to https://${projectName}.pages.dev\n`);
