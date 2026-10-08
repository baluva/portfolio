import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Reveal from "../Reveal";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../i18n";
import { relativeTime, fetchLiveCommits } from "./activity";

function ProjectCards(props) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [commits, setCommits] = useState(props.activity ? props.activity.commits : []);
  const [loading, setLoading] = useState(false);
  const lastUpdate = commits[0] ? commits[0].date : null;
  const gallery = props.gallery || [];
  const [shot, setShot] = useState(null); // index de la capture ouverte

  useEffect(() => {
    if (shot === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setShot(null);
      if (e.key === "ArrowRight") setShot((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setShot((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shot, gallery.length]);

  const toggleChanges = async () => {
    const next = !open;
    setOpen(next);
    if (next && props.repo) {
      setLoading(true);
      const live = await fetchLiveCommits(props.repo);
      if (live) setCommits(live);
      setLoading(false);
    }
  };

  return (
    <Reveal>
    <Tilt
      className="arc-tilt arc-tilt-card"
      tiltMaxAngleX={5}
      tiltMaxAngleY={7}
      perspective={1200}
      glareEnable
      glareMaxOpacity={0.1}
      glareColor="#c4f24e"
      glarePosition="all"
      glareBorderRadius="14px"
      transitionSpeed={1500}
      gyroscope={false}
    >
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      {gallery.length > 0 && (
        <div className="proj-gallery" aria-label={t({ fr: "Captures", en: "Screenshots" })}>
          {gallery.map((g, i) => (
            <button key={g.src} type="button" onClick={() => setShot(i)} title={t(g.caption)}>
              <img src={g.src} alt={t(g.caption)} loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <Card.Body>
        {(props.live || lastUpdate) && (
          <div className="proj-status">
            {props.live && (
              <span className="proj-live">
                <i aria-hidden="true" />
                {t({ fr: "En production", en: "In production" })}
              </span>
            )}
            {lastUpdate && (
              <span className="proj-updated" title={new Date(lastUpdate).toLocaleString(lang)}>
                {t({ fr: "Modifié ", en: "Updated " })}
                {relativeTime(lastUpdate, lang)}
              </span>
            )}
          </div>
        )}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>

        {props.sources && props.sources.length > 0 && (
          <div className="proj-sources">
            <span>{t({ fr: "Sources des données", en: "Data sources" })}</span>
            <ul>
              {props.sources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noreferrer">{t(src.label)}</a>
                  {src.note && <> · {t(src.note)}</>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Afficher le bouton GitHub uniquement si ghLink est fourni */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog
              ? "Blog"
              : props.ghLink.includes("gitlab")
              ? "GitLab"
              : "GitHub"}
          </Button>
        )}

        {/* Afficher le bouton du site web uniquement si demoLink est fourni */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {t({ fr: "Lien vers le site", en: "Live site" })}
          </Button>
        )}

        {/* Historique des derniers commits, dépliable */}
        {props.repo && commits.length > 0 && (
          <div className="proj-changes">
            <button
              type="button"
              className="proj-changes-toggle"
              aria-expanded={open}
              onClick={toggleChanges}
            >
              {open
                ? t({ fr: "Masquer les modifs", en: "Hide changes" })
                : t({ fr: "Dernières modifs", en: "Latest changes" })}
            </button>
            {open && (
              <ol className={`proj-commits${loading ? " is-loading" : ""}`}>
                {commits.map((c) => (
                  <li key={c.sha}>
                    <a href={c.url} target="_blank" rel="noreferrer">{c.message}</a>
                    <span>
                      {relativeTime(c.date, lang)} · <code>{c.sha}</code>
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
    {shot !== null && createPortal(
      <div className="proj-lightbox" role="dialog" aria-modal="true" onClick={() => setShot(null)}>
        <figure onClick={(e) => e.stopPropagation()}>
          <img src={gallery[shot].src} alt={t(gallery[shot].caption)} />
          <figcaption>
            <span>{shot + 1} / {gallery.length}</span>
            {t(gallery[shot].caption)}
          </figcaption>
          <div className="proj-lightbox-nav">
            <button type="button" onClick={() => setShot((shot - 1 + gallery.length) % gallery.length)}>←</button>
            <button type="button" onClick={() => setShot(null)}>{t({ fr: "Fermer", en: "Close" })}</button>
            <button type="button" onClick={() => setShot((shot + 1) % gallery.length)}>→</button>
          </div>
        </figure>
      </div>,
      document.body
    )}
    </Tilt>
    </Reveal>
  );
}

export default ProjectCards;
