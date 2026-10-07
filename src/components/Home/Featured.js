import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLang } from "../../i18n";
import { ALL_PROJECTS, renderCard } from "../Projects/Projects";

// Les trois projets mis en avant sur l'accueil, repérés par leur dépôt.
const FEATURED = ["baluva/wattcast", "baluva/supplypulse", "baluva/code-route-tn"];

function Featured() {
  const { t } = useLang();
  const projects = FEATURED.map((repo) =>
    ALL_PROJECTS.find((p) => p.ghLink && p.ghLink.endsWith(repo))
  ).filter(Boolean);

  return (
    <Container fluid className="home-featured">
      <Container>
        <span className="arc-eyebrow" style={{ textAlign: "center" }}>
          {t({ fr: "// SÉLECTION", en: "// SELECTION" })}
        </span>
        <h1 className="project-heading">
          {t({ fr: "Projets ", en: "Featured " })}
          <strong className="purple">{t({ fr: "phares", en: "projects" })}</strong>
        </h1>
        <p className="home-featured-sub">
          {t({
            fr: "Un modèle en production comparé à RTE, un entrepôt de données testé en CI, une appli utilisée en Tunisie.",
            en: "A production model benchmarked against RTE, a data warehouse tested in CI, an app used in Tunisia.",
          })}
        </p>
        <Row style={{ justifyContent: "center" }}>{projects.map((p) => renderCard(p, t))}</Row>
        <div className="home-featured-more">
          <Link className="arc-btn arc-btn--primary" to="/project">
            {t({
              fr: `▶ VOIR LES ${ALL_PROJECTS.length} PROJETS`,
              en: `▶ SEE ALL ${ALL_PROJECTS.length} PROJECTS`,
            })}
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default Featured;
