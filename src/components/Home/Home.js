import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Console from "./Console";
import Stats from "./Stats";
import Reveal from "../Reveal";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <div className="arc-grid-bg" />
        <Container className="home-content arc-hero">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <Reveal>
                <div className="arc-hero-tags">
                  <span className="arc-tag arc-tag--violet">{"// DATA & IA"}</span>
                  <span className="arc-tag arc-tag--accent">
                    <span className="arc-dot" />
                    ALTERNANCE · SEPT. 2026
                  </span>
                  <span className="arc-tag">2 SEM. ENTREPRISE / 1 SEM. ÉCOLE</span>
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
                <p className="arc-role">
                  Étudiant en 3<sup>e</sup> année IA &amp; Data Science à Ynov Aix,
                  en stage chez trITon. Je monte des projets de bout en bout —
                  du nettoyage des données jusqu'au dashboard.
                </p>
                <div className="arc-typeline">
                  <Type />
                </div>
              </Reveal>

              <Reveal delay={210}>
                <div className="arc-actions">
                  <Link className="arc-btn arc-btn--primary" to="/project">
                    ▶ VOIR MES PROJETS
                  </Link>
                  <Link className="arc-btn" to="/resume">
                    MON CV
                  </Link>
                  <a
                    className="arc-btn"
                    href="mailto:louey.barbirou@ynov.com?subject=Alternance%20Data%20%2F%20IA"
                    aria-label="M'écrire par e-mail"
                  >
                    ME CONTACTER
                  </a>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <Stats />
              </Reveal>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Reveal delay={180}>
                <Console />
              </Reveal>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
