import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, moi c'est <span className="purple">Louey</span>.
            <br />
            Je suis étudiant en IA & Data Science à Ynov. Ce qui me plaît, c'est prendre des données brutes et en tirer quelque chose d'utile — une analyse, un modèle, un dashboard.
            <br />
            En ce moment, je suis en <span className="purple">stage chez trITon</span> : je développe VideoInsight (analyse vidéo par IA) et je bosse sur la data.
            <br />
            Avant, j'ai fait de l'analyse de sécurité (projet Thales) et de la BI chez Novogel.
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
