import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useLang } from "../../i18n";

function About() {
  const { t } = useLang();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t({ fr: "Qui ", en: "Who " })}
              <strong className="purple">{t({ fr: "suis-je ?", en: "am I?" })}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t({ fr: "Compétences ", en: "Technical " })}
          <strong className="purple">{t({ fr: "techniques", en: "skills" })}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t({ fr: "Outils", en: "Tools" })}</strong>
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
