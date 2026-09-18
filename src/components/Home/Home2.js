import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLang } from "../../i18n";

function Home2() {
  const { lang, t } = useLang();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <span className="arc-eyebrow">{t({ fr: "// PROFIL", en: "// PROFILE" })}</span>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">{t({ fr: "À PROPOS", en: "ABOUT ME" })}</span>
            </h1>
            {lang === "fr" ? (
              <p className="home-about-body">
                Je suis en 3e année <b className="purple">IA &amp; Data Science</b> à Ynov Aix. En clair : je code en Python, je manipule des données et je monte des projets complets, du modèle de machine learning jusqu'au dashboard.
                <br />
                <br />
                Je viens de terminer mon <b className="purple">stage chez trITon</b> (avril – juillet 2026).
                <br />
                <br />
                Avant ça, j'ai touché à l'analyse de sécurité (projet Thales) et à la business intelligence chez Novogel.
                <br />
                <br />
                Sur mes projets, je ne m'arrête pas au code qui marche sur ma machine. Je me pose les questions d'après : est-ce que ça tiendra avec plus d'utilisateurs (<b className="purple">scalabilité</b>), est-ce que quelqu'un d'autre pourra le reprendre (<b className="purple">maintenance</b>), est-ce que c'est rapide (<b className="purple">performance</b>), est-ce que c'est protégé (<b className="purple">sécurité &amp; infrastructure</b>). J'aime toucher à plusieurs domaines, parce que c'est comme ça que je comprends un produit en entier.
                <br />
                <br />
                Je suis à l'aise avec les outils de développement (VS Code, JetBrains, Git, Docker) et les assistants IA (Claude Code, Copilot, Gemini, Ollama). Le <b className="purple">prompt engineering</b>, je l'ai appris en construisant mes propres produits, à commencer par Prompt Booster.
                <br />
                <br />
                Je suis en début de parcours et je cherche une <b className="purple">alternance</b> en data / IA pour prouver ce que je sais faire et progresser, au rythme <b className="purple">2 semaines en entreprise / 1 semaine à l'école</b>. <b className="purple">Disponible immédiatement.</b>
              </p>
            ) : (
              <p className="home-about-body">
                I'm a third-year <b className="purple">AI &amp; Data Science</b> student at Ynov Aix. In plain terms: I code in Python, I work with data and I build complete projects, from the machine learning model all the way to the dashboard.
                <br />
                <br />
                I just finished my <b className="purple">internship at trITon</b> (April – July 2026).
                <br />
                <br />
                Before that, I worked on security analysis (a Thales project) and business intelligence at Novogel.
                <br />
                <br />
                On my projects, I don't stop at code that works on my machine. I ask the next questions: will it hold up with more users (<b className="purple">scalability</b>), can someone else pick it up (<b className="purple">maintenance</b>), is it fast (<b className="purple">performance</b>), is it protected (<b className="purple">security &amp; infrastructure</b>). I like working across several fields, because that's how I understand a product as a whole.
                <br />
                <br />
                I'm comfortable with development tools (VS Code, JetBrains, Git, Docker) and AI assistants (Claude Code, Copilot, Gemini, Ollama). I learned <b className="purple">prompt engineering</b> by building my own products, starting with Prompt Booster.
                <br />
                <br />
                I'm early in my career and I'm looking for a <b className="purple">data / AI apprenticeship</b> to prove what I can do and keep growing, on a <b className="purple">2 weeks at the company / 1 week at school</b> schedule. <b className="purple">Available immediately.</b>
              </p>
            )}
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
            <h1>{t({ fr: "OÙ ME TROUVER", en: "FIND ME" })}</h1>
            <p>
              {lang === "fr" ? (
                <>
                  Écris-moi, appelle-moi au{" "}
                  <a href="tel:+33769638164" className="purple">07 69 63 81 64</a>, ou va{" "}
                  <span className="purple">jeter un œil à mon code</span> sur GitHub
                </>
              ) : (
                <>
                  Email me, call me at{" "}
                  <a href="tel:+33769638164" className="purple">+33 7 69 63 81 64</a>, or{" "}
                  <span className="purple">take a look at my code</span> on GitHub
                </>
              )}
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
