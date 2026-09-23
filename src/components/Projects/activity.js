import snapshot from "../../data/activity.json";

// Activité GitHub des projets : instantané pris au build (scripts/fetch-activity.js),
// rafraîchi en direct quand on ouvre « Dernières modifs ».

export function repoFromLink(link) {
  const m = link && link.match(/^https:\/\/github\.com\/([\w.-]+\/[\w.-]+)/);
  return m ? m[1] : null;
}

export function activityFor(repo) {
  return repo ? snapshot.repos[repo] || null : null;
}

// Date du dernier commit, pour trier les projets.
export function lastUpdateOf(repo) {
  const a = activityFor(repo);
  return a && a.commits[0] ? new Date(a.commits[0].date).getTime() : 0;
}

const UNITS = [
  ["year", 365 * 24 * 3600],
  ["month", 30 * 24 * 3600],
  ["week", 7 * 24 * 3600],
  ["day", 24 * 3600],
  ["hour", 3600],
  ["minute", 60],
];

export function relativeTime(date, lang) {
  const seconds = (new Date(date).getTime() - Date.now()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  }
  return rtf.format(0, "minute");
}

const CACHE_PREFIX = "portfolio-commits:";

// Renvoie les 5 derniers commits en direct, ou null (hors-ligne, limite d'API…) :
// l'appelant garde alors l'instantané du build.
export async function fetchLiveCommits(repo) {
  try {
    const cached = window.sessionStorage.getItem(CACHE_PREFIX + repo);
    if (cached) return JSON.parse(cached);
  } catch (e) {}
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=5`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const commits = (await res.json()).map((c) => ({
      sha: c.sha.slice(0, 7),
      message: c.commit.message.split("\n")[0],
      date: c.commit.author.date,
      url: c.html_url,
    }));
    try {
      window.sessionStorage.setItem(CACHE_PREFIX + repo, JSON.stringify(commits));
    } catch (e) {}
    return commits;
  } catch (e) {
    return null;
  }
}
