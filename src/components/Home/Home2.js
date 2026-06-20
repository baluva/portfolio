import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">À PROPOS</span>
            </h1>
            <p className="home-about-body">
              Je suis en 3e année <b className="purple">IA &amp; Data Science</b> à Ynov Aix. En clair : je code en Python, je manipule des données et je monte des projets de bout en bout — du modèle de machine learning jusqu'au dashboard.
              <br />
              <br />
              En ce moment, je suis en <b className="purple">stage chez trITon</b> : je développe <i>VideoInsight</i> (analyse vidéo par IA) et je m'occupe aussi de la partie data.
              <br />
              <br />
              Avant ça, j'ai touché à l'analyse de sécurité (projet Thales) et à la business intelligence chez Novogel.
              <br />
              <br />
              Je cherche une <b className="purple">alternance</b> en data / IA pour mettre tout ça en pratique.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div style={{
                width: "250px",
                height: "250px",
                overflow: "hidden",
                borderRadius: "50%",
                margin: "0 auto",
                boxShadow: "0 0 20px var(--color-glow-cyan)",
              }}>
                <img
                  src={myImg}
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.2)", // Zoom in to hide the original image's border
                  }}
                />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>OÙ ME TROUVER</h1>
            <p>
              N'hésite pas à <span className="purple">me contacter</span> ou à parcourir mon code
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/baluva"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/louey-barbirou-2b97a828b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://huggingface.co/louey9999"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Hugging Face"
                >
                  <span role="img" aria-label="Hugging Face" style={{ fontSize: "0.95em" }}>🤗</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
