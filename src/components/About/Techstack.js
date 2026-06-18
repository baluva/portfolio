import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiJupyter,
  SiR,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>R</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>NumPy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>Scikit-learn</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>TensorFlow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p style={{ fontSize: "0.3em", marginTop: "10px" }}>Jupyter</p>
      </Col>
    </Row>
  );
}

export default Techstack;

