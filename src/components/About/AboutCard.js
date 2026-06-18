import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut ! Je suis <span className="purple">Louey Barbirou (LB)</span>
            <br />
            Actuellement étudiant en IA & Data Science avec une passion pour transformer les données en solutions intelligentes.
            <br />
            J'ai une expérience pratique en analyse de sécurité chez Thales et en business intelligence chez Novogel.
            <br />
            <br />
            En dehors du code et de l'analyse de données, voici ce que j'aime faire :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cuisine & Expériences Culinaires
            </li>
            <li className="about-activity">
              <ImPointRight /> Lecture d'articles Tech & Recherche IA
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport & Rester Actif
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming & Jeux de Stratégie
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
