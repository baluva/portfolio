// Instantané de l'activité GitHub des projets, pris au moment du build.
// Le site lit src/data/activity.json : aucun appel à l'API pour afficher les
// dates de mise à jour, donc pas de limite de requêtes côté visiteurs.
// Lancer : node scripts/fetch-activity.js  (utilise `gh auth token` s'il est dispo)

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "src/components/Projects/Projects.js");
const OUT = path.join(ROOT, "src/data/activity.json");
const COMMITS_PER_REPO = 5;

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    return execSync("gh auth token", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch (e) {
    return null;
  }
}

// Les dépôts sont lus directement dans la liste des projets : rien à maintenir en double.
function reposFromProjects() {
  const src = fs.readFileSync(SOURCE, "utf8");
  const repos = new Set();
  for (const m of src.matchAll(/ghLink:\s*"https:\/\/github\.com\/([\w.-]+\/[\w.-]+)"/g)) {
    repos.add(m[1]);
  }
  return [...repos];
}

async function main() {
  const auth = token();
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "portfolio-activity" };
  if (auth) headers.Authorization = `Bearer ${auth}`;

  const get = async (url) => {
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res.json();
  };

  let previous = {};
  try {
    previous = JSON.parse(fs.readFileSync(OUT, "utf8")).repos || {};
  } catch (e) {}

  const repos = {};
  for (const repo of reposFromProjects()) {
    try {
      const [info, commits] = await Promise.all([
        get(`https://api.github.com/repos/${repo}`),
        get(`https://api.github.com/repos/${repo}/commits?per_page=${COMMITS_PER_REPO}`),
      ]);
      repos[repo] = {
        pushedAt: info.pushed_at,
        commits: commits.map((c) => ({
          sha: c.sha.slice(0, 7),
          message: c.commit.message.split("\n")[0],
          date: c.commit.author.date,
          url: c.html_url,
        })),
      };
      console.log(`ok   ${repo}`);
    } catch (e) {
      // Dépôt privé ou erreur réseau : on garde l'ancien instantané s'il existe.
      if (previous[repo]) repos[repo] = previous[repo];
      console.warn(`skip ${repo} (${e.message})`);
    }
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), repos }, null, 2) + "\n");
  console.log(`\n${Object.keys(repos).length} dépôts -> ${path.relative(ROOT, OUT)}`);
}

main().catch((e) => {
  // Ne jamais bloquer le déploiement pour ça.
  console.warn("fetch-activity:", e.message);
});
