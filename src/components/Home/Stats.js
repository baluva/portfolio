import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../../i18n";

const STATS = [
  { to: 26, suffix: "", label: { fr: "projets menés", en: "projects built" } },
  { to: 5, suffix: "", label: { fr: "apps en ligne", en: "live apps" } },
  { to: 3, suffix: "", label: { fr: "langues parlées", en: "languages spoken" } },
];

function useCountUp(to, run) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setN(to);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let raf;

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, run]);

  return n;
}

function Stat({ to, suffix, label, run }) {
  const n = useCountUp(to, run);
  return (
    <div>
      <div className="arc-stat-num">
        {n}
        {suffix}
      </div>
      <div className="arc-stat-label">{label}</div>
    </div>
  );
}

function Stats() {
  const { t } = useLang();
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="arc-stats" ref={ref}>
      {STATS.map((s) => (
        <Stat key={s.to + s.label.en} {...s} label={t(s.label)} run={run} />
      ))}
    </div>
  );
}

export default Stats;
