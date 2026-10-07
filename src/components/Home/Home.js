import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Featured from "./Featured";
import Globe3D from "./Globe3D";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import Console from "./Console";
import Stats from "./Stats";
import Reveal from "../Reveal";
import { useLang } from "../../i18n";

function Home() {
  const { lang, t } = useLang();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <div className="arc-grid-bg" />
        <div className="arc-floor" aria-hidden="true" />
        <Container className="home-content arc-hero">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <Reveal>
                <div className="arc-hero-tags">
                  <span className="arc-tag arc-tag--violet">{t({ fr: "// DATA & IA", en: "// DATA & AI" })}</span>
                  <span className="arc-tag arc-tag--accent">
                    <span className="arc-dot" />
                    {t({ fr: "DISPONIBLE IMMÉDIATEMENT", en: "AVAILABLE NOW" })}
                  </span>
                  <span className="arc-tag">
                    {t({ fr: "2 SEM. ENTREPRISE / 1 SEM. ÉCOLE", en: "2 WKS COMPANY / 1 WK SCHOOL" })}
                  </span>
                  <span className="arc-tag">MARSEILLE / AIX</span>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="arc-name">
                  <span>Louey</span>
                  <span className="arc-name-last">Barbirou.</span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                {lang === "fr" ? (
                  <p className="arc-role">
                    Étudiant en M1 Mastère Expert en IA à Ynov Aix, tout juste sorti
                    d'un stage IA chez trITon et disponible tout de suite pour une alternance.
                    Je suis un produit de la donnée jusqu'à la mise en production.
                  </p>
                ) : (
                  <p className="arc-role">
                    First-year Master's student in AI at Ynov Aix, fresh out of an AI
                    internship at trITon and available right now for an apprenticeship.
                    I follow a product from the raw data all the way to production.
                  </p>
                )}
                <div className="arc-typeline">
                  <Type />
                </div>
              </Reveal>

              <Reveal delay={210}>
                <div className="arc-actions">
                  <Link className="arc-btn arc-btn--primary" to="/project">
                    {t({ fr: "▶ VOIR MES PROJETS", en: "▶ SEE MY PROJECTS" })}
                  </Link>
                  <Link className="arc-btn" to="/resume">
                    {t({ fr: "MON CV", en: "MY RESUME" })}
                  </Link>
                  <a
                    className="arc-btn"
                    href="mailto:louey.barbirou@ynov.com?subject=Alternance%20Data%20%2F%20IA"
                    aria-label={t({ fr: "M'écrire par e-mail", en: "Email me" })}
                  >
                    {t({ fr: "ME CONTACTER", en: "CONTACT ME" })}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <Stats />
              </Reveal>
            </Col>

            <Col md={5} className="arc-hero-visual" style={{ paddingBottom: 20 }}>
              <Globe3D />
              <Reveal delay={180}>
                <Tilt
                  className="arc-tilt"
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={9}
                  perspective={1100}
                  glareEnable
                  glareMaxOpacity={0.12}
                  glareColor="#c4f24e"
                  glarePosition="all"
                  glareBorderRadius="3px"
                  transitionSpeed={1200}
                  gyroscope={false}
                >
                  <Console key={lang} />
                </Tilt>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </Container>
      <Featured />
      <Home2 />
    </section>
  );
}

export default Home;
