import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiR,
  SiPlotly,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiDuckdb,
  SiDocker,
  SiGit,
  SiLinux,
  SiFastapi,
  SiStreamlit,
  SiGo,
  SiJavascript,
  SiCsharp,
} from "react-icons/si";

const STACK = [
  { icon: <DiPython />, label: "Python" },
  { icon: <SiR />, label: "R" },
  { icon: <SiGo />, label: "Go" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiCsharp />, label: "C#" },
  { icon: <SiPandas />, label: "Pandas" },
  { icon: <SiNumpy />, label: "NumPy" },
  { icon: <SiScikitlearn />, label: "Scikit-learn" },
  { icon: <SiTensorflow />, label: "TensorFlow" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiPlotly />, label: "Plotly" },
  { icon: <SiJupyter />, label: "Jupyter" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiDuckdb />, label: "DuckDB" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiSupabase />, label: "Supabase" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <SiStreamlit />, label: "Streamlit" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiLinux />, label: "Linux" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {STACK.map(({ icon, label }) => (
        <Col xs={4} md={2} className="tech-icons" key={label}>
          {icon}
          <p style={{ fontSize: "0.3em", marginTop: "10px" }}>{label}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
