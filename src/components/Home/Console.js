import React, { useEffect, useRef, useState } from "react";

// Lignes jouées les unes après les autres, comme une exécution de script.
// Le contenu reprend un vrai run du projet SupplyPulse.
const SCRIPT = [
  { text: "louey@portfolio:~$ python supplypulse/run.py", kind: "prompt" },
  { text: "  [1/4] chargement des commandes ....... 180 000", kind: "dim" },
  { text: "  [2/4] nettoyage & jointures .......... ok", kind: "dim" },
  { text: "  [3/4] marts + tests qualité .......... ok", kind: "dim" },
  { text: "  [4/4] dashboard ...................... prêt", kind: "dim" },
];

const METERS = [
  { name: "PYTHON", level: 9 },
  { name: "SQL", level: 8 },
  { name: "DASHBOARD", level: 8 },
  { name: "ML", level: 7 },
];

const TOTAL_BLOCKS = 10;

function Console() {
  const [lines, setLines] = useState([]);
  const [typed, setTyped] = useState("");
  const [showMeters, setShowMeters] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setLines(SCRIPT);
      setShowMeters(true);
      return;
    }

    let cancelled = false;
    let i = 0;
    const pending = timers.current;

    function playLine() {
      if (cancelled || i >= SCRIPT.length) {
        if (!cancelled) setShowMeters(true);
        return;
      }
      const line = SCRIPT[i];
      let c = 0;
      const speed = line.kind === "prompt" ? 26 : 9;

      const tick = setInterval(() => {
        if (cancelled) return clearInterval(tick);
        c += 1;
        setTyped(line.text.slice(0, c));
        if (c >= line.text.length) {
          clearInterval(tick);
          setLines((prev) => [...prev, line]);
          setTyped("");
          i += 1;
          const gap = setTimeout(playLine, line.kind === "ok" ? 0 : 190);
          timers.current.push(gap);
        }
      }, speed);
      timers.current.push(tick);
    }

    const start = setTimeout(playLine, 700);
    timers.current.push(start);

    return () => {
      cancelled = true;
      pending.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
  }, []);

  const cls = (kind) =>
    kind === "prompt"
      ? "arc-line arc-line-prompt"
      : kind === "ok"
      ? "arc-line arc-line-ok"
      : "arc-line arc-line-dim";

  return (
    <div className="arc-console">
      <div className="arc-console-bar">
        <span className="arc-console-led" style={{ background: "#ff5f57" }} />
        <span className="arc-console-led" style={{ background: "#febc2e" }} />
        <span className="arc-console-led" style={{ background: "#28c840" }} />
        <span className="arc-console-title">supplypulse — run.py</span>
      </div>

      <div className="arc-console-body">
        {lines.map((l, idx) => (
          <span key={idx} className={cls(l.kind)}>
            {l.text}
          </span>
        ))}

        {typed && (
          <span className={cls(SCRIPT[lines.length]?.kind)}>
            {typed}
            <span className="arc-caret" />
          </span>
        )}

        {showMeters && (
          <div className="arc-meter">
            {METERS.map((m, mi) => (
              <div className="arc-meter-row" key={m.name}>
                <span className="arc-meter-name">{m.name}</span>
                <span className="arc-meter-blocks">
                  {Array.from({ length: TOTAL_BLOCKS }).map((_, bi) => (
                    <i
                      key={bi}
                      className={bi < m.level ? "on" : ""}
                      style={{ animationDelay: `${mi * 130 + bi * 32}ms` }}
                    />
                  ))}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Console;
