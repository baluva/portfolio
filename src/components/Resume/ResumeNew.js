import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfFr from "../../Assets/CV_Louey_Barbirou.pdf";
import pdfEn from "../../Assets/CV_Louey_Barbirou_EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const VERSIONS = {
  fr: { file: pdfFr, label: "Français", download: "Télécharger le CV" },
  en: { file: pdfEn, label: "English", download: "Download the resume" },
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [lang, setLang] = useState("fr");
  const { file: pdf, download } = VERSIONS[lang];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="resume-lang" role="group" aria-label="Langue du CV">
            {Object.entries(VERSIONS).map(([key, v]) => (
              <button
                key={key}
                type="button"
                className={lang === key ? "active" : ""}
                aria-pressed={lang === key}
                onClick={() => setLang(key)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{download}
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{download}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
