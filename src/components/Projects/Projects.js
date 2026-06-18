import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heartAttack from "../../Assets/Projects/heart_attack.png";
import messiAnalytics from "../../Assets/Projects/messi_analytics.png";
import segmentationClient from "../../Assets/Projects/spotifapi.png";
import gestionStock from "../../Assets/Projects/boutique.png";
import insightHub from "../../Assets/Projects/insight_hub.png";
import tradeWithAI from "../../Assets/Projects/trade_with_ai.png";
import dbugHunter from "../../Assets/Projects/dbug_hunter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques-uns de mes projets récents en IA & Data Science
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dbugHunter}
              isBlog={false}
              title="DBug Hunter - Détecteur de Bugs SQL"
              description="Application web Python (FastAPI) qui analyse une base de données SQLite et détecte automatiquement les bugs : intégrité référentielle rompue, doublons, types de données incohérents, e-mails et dates invalides, valeurs aberrantes et problèmes de schéma. Rapport classé par gravité avec un score de santé sur 100, interface glisser-déposer et démo en ligne déployée via Docker sur Hugging Face."
              ghLink="https://github.com/baluva/dbug-hunter"
              demoLink="https://louey9999-dbug-hunter.hf.space"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={heartAttack}
              isBlog={false}
              title="Prédiction d'Attaque Cardiaque"
              description="Application de Machine Learning pour prédire le risque d'attaque cardiaque. Développée en Python, cet outil d'analyse santé utilise les données patient (âge, cholestérol, pression artérielle, IMC et facteurs de style de vie) pour évaluer le risque cardiovasculaire. Interface intuitive en mode sombre avec prédictions en temps réel et scoring ROC-AUC."
              ghLink="https://github.com/baluva/heart_attack_Prediction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={messiAnalytics}
              isBlog={false}
              title="Analyse Football - Messi WC 2022"
              description="Projet de visualisation de données et d'analyse de la performance de Lionel Messi lors de la Coupe du Monde 2022. Visualisation des dribbles, trajectoires de balle, passes réussies, tirs et fautes obtenues avec Python. Mon premier projet data science partagé publiquement sur LinkedIn !"
              demoLink="https://www.linkedin.com/posts/louey-barbirou-2b97a828b_cest-mon-tout-premier-projet-que-je-partage-activity-7404512770836156416-1NfQ"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={segmentationClient}
              isBlog={false}
              title="Segmentation Client Intelligente"
              description="Algorithme de Machine Learning (K-Means Clustering) pour segmenter une base de données clients. Analyse des habitudes d'achat et profilage pour des campagnes marketing ciblées. Utilisation de Python, Scikit-Learn et Seaborn pour la visualisation des clusters."
              ghLink="https://github.com/lucabarb/customer-segmentation"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={gestionStock}
              isBlog={false}
              title="Gestion de Stock Prédictive"
              description="Système d'IA basé sur des séries temporelles (Prophet/LSTM) pour prédire la demande future et optimiser les niveaux de stock. Réduction des ruptures de stock et des surplus. Dashboard interactif pour le suivi des prévisions."
              ghLink="https://github.com/lucabarb/predictive-inventory"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={insightHub}
              isBlog={false}
              title="Insight Hub - Analyse de la Dépression Étudiante"
              description="Plateforme d'analyse et de prédiction de la dépression chez les étudiants basée sur un dataset de 100 000 entrées. Exploration des facteurs de style de vie (sommeil, GPA, heures d'étude) via un dashboard interactif (Plotly.js & Tailwind CSS) et un modèle de régression logistique pour la prédiction en temps réel."
              ghLink="https://github.com/baluva/student_depression"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tradeWithAI}
              isBlog={false}
              title="Crypto Vision - Trading avec IA"
              description="Application de trading assistée par IA pour l'analyse et la prédiction des marchés crypto. Intègre des indicateurs techniques avancés et des modèles de machine learning pour fournir des signaux de trading (Achat/Vente/Neutre). Visualisation interactive des données avec des graphiques en chandelier et support de plusieurs paires de devises."
              ghLink="https://github.com/baluva/Trade-with-AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

