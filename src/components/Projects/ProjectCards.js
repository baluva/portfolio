import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Reveal from "../Reveal";
import { useLang } from "../../i18n";
import { relativeTime, fetchLiveCommits } from "./activity";

function ProjectCards(props) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [commits, setCommits] = useState(props.activity ? props.activity.commits : []);
  const [loading, setLoading] = useState(false);
  const lastUpdate = commits[0] ? commits[0].date : null;

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
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
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
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

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
    </Reveal>
  );
}

export default ProjectCards;
