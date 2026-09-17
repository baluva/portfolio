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
            Ce qui m'intéresse, c'est le produit en entier : sa <span className="purple">scalabilité</span>, sa <span className="purple">maintenance</span>, ses <span className="purple">performances</span> et sa <span className="purple">sécurité</span>, jusqu'à l'infrastructure. Je suis polyvalent et à l'aise avec les outils de dev et les assistants IA ; le prompt engineering, je l'ai appris en construisant mes propres produits.
            <br />
            Je cherche une <span className="purple">alternance en data / IA</span>, au rythme 2 semaines en entreprise / 1 semaine à l'école, et je suis <span className="purple">disponible immédiatement</span>.
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
