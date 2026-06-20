import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut ! Je suis <span className="purple">Louey Barbirou</span>
            <br />
            Actuellement étudiant en IA & Data Science, passionné par la transformation des données en solutions concrètes.
            <br />
            Je suis en <span className="purple">stage (4 mois) chez trITon</span>, où je développe VideoInsight (analyse vidéo par IA) et où je travaille sur la préparation et l'analyse des données.
            <br />
            J'ai aussi une expérience pratique en analyse de sécurité chez Thales et en business intelligence chez Novogel.
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
