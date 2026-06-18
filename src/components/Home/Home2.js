import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";

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
              Je suis un étudiant en IA & Data Science passionné par la transformation des données en solutions intelligentes.
              <br />
              <br />
              Mon expertise inclut la programmation en
              <i>
                <b className="purple"> Python, R, et SAS</b>
              </i>
              <br />
              <br />
              Je me spécialise en
              <i>
                <b className="purple"> Data Science, Machine Learning, et solutions IA</b>
              </i>
              , avec une expérience pratique en analyse de sécurité chez Thales et en business intelligence chez Novogel.
              <br />
              <br />
              Je suis actuellement à la recherche d'une <b className="purple">alternance</b> où je pourrai appliquer mes compétences analytiques et continuer à évoluer dans le domaine de l'IA et de l'innovation data-driven.
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
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter </span> 
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn /> 
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
