import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfFr from "../../Assets/CV_Louey_Barbirou.pdf";
import pdfEn from "../../Assets/CV_Louey_Barbirou_EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useLang, LangSwitch } from "../../i18n";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const VERSIONS = {
  fr: { file: pdfFr, download: "Télécharger le CV" },
  en: { file: pdfEn, download: "Download the resume" },
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const { lang } = useLang();
  const { file: pdf, download } = VERSIONS[lang];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <LangSwitch className="resume-lang" />
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
          <Document
            key={lang}
            file={pdf}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from({ length: numPages || 1 }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                scale={width > 786 ? 1.7 : 0.6}
                className="resume-page"
              />
            ))}
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
