import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heartAttack from "../../Assets/Projects/heart_attack.png";
import messiAnalytics from "../../Assets/Projects/messi_analytics.png";
import spotifApi from "../../Assets/Projects/spotifapi.png";
import insightHub from "../../Assets/Projects/insight_hub.png";
import tradeWithAI from "../../Assets/Projects/trade_with_ai.png";
import dbugHunter from "../../Assets/Projects/dbug_hunter.png";
import promptBooster from "../../Assets/Projects/prompt_booster.png";
import videoInsight from "../../Assets/Projects/videoinsight.svg";
import obesityEda from "../../Assets/Projects/obesity_eda.svg";
import puissance4 from "../../Assets/Projects/puissance4.svg";
import cryptoTracker from "../../Assets/Projects/crypto_tracker.svg";
import redRpg from "../../Assets/Projects/red_rpg.svg";
import ymmersionWeb from "../../Assets/Projects/ymmersion_web.svg";
import olist from "../../Assets/Projects/olist.svg";
import swarmPrediction from "../../Assets/Projects/swarm_prediction.svg";
import bacQuiz from "../../Assets/Projects/bac_quiz.svg";
import ytechDocbase from "../../Assets/Projects/ytech_docbase.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Une sélection de mes projets en IA &amp; Data Science, puis mes projets
          de développement (Go, Python, jeux).
        </p>

        {/* ---------- IA & Data Science ---------- */}
        <h3 className="purple" style={{ marginTop: "10px", marginBottom: "20px" }}>
          IA &amp; Data Science
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptBooster}
              isBlog={false}
              title="Prompt Booster — Optimiseur de Prompts IA"
              description="Application web qui restructure un prompt brut selon les bonnes pratiques (rôle, contexte, format de sortie, contraintes, raisonnement étape par étape) pour que l'IA comprenne mieux la demande. Moteur 100 % Python à base de règles — sans clé API, hors-ligne — avec détection automatique de la tâche et de la langue, et un score qualité avant/après. Interface web sur-mesure en Streamlit."
              ghLink="https://github.com/baluva/prompt-booster"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbugHunter}
              isBlog={false}
              title="DBug Hunter — Détecteur de Bugs SQL"
              description="Application web Python (FastAPI) qui analyse une base SQLite et détecte automatiquement les problèmes : intégrité référentielle, doublons, types incohérents, e-mails/dates invalides, valeurs aberrantes. Rapport classé par gravité avec score de santé sur 100, interface glisser-déposer et démo en ligne déployée via Docker sur Hugging Face."
              ghLink="https://github.com/baluva/dbug-hunter"
              demoLink="https://louey9999-dbug-hunter.hf.space"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoInsight}
              isBlog={false}
              title="VideoInsight — Analyse Vidéo IA"
              description="Module d'analyse vidéo intelligente développé en stage : transcription audio (Whisper), traduction, génération de sous-titres et synthèse vocale (TTS). Pipeline Python avec intégration continue (GitHub Actions) et architecture modulaire."
              ghLink="https://github.com/baluva/subtitles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartAttack}
              isBlog={false}
              title="Prédiction d'Attaque Cardiaque"
              description="Application de Machine Learning prédisant le risque d'attaque cardiaque à partir de données cliniques et de style de vie (âge, cholestérol, pression, IMC). Pipeline ML complet (prétraitement, scaling, entraînement), interface en mode sombre et scoring ROC-AUC."
              ghLink="https://github.com/baluva/heart_attack_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insightHub}
              isBlog={false}
              title="Insight Hub — Dépression Étudiante"
              description="Plateforme d'analyse et de prédiction de la dépression étudiante sur un dataset de 100 000 entrées. Exploration des facteurs (sommeil, GPA, heures d'étude) via un dashboard interactif (Plotly.js & Tailwind) et un modèle de régression logistique pour la prédiction en temps réel."
              ghLink="https://github.com/baluva/student_depression"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradeWithAI}
              isBlog={false}
              title="Trade With AI — Vision Crypto"
              description="Outil de prédiction des marchés crypto basé sur les mathématiques et les séries temporelles (Prophet). Signaux de trading (Achat/Vente/Neutre), indicateurs techniques et visualisation interactive en chandeliers via une API Python (FastAPI)."
              ghLink="https://github.com/baluva/Trade-with-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={obesityEda}
              isBlog={false}
              title="Analyse Obésité & Mode de vie"
              description="Analyse exploratoire de données (EDA) sur les niveaux d'obésité et les habitudes de vie. Projet Ynov en Jupyter Notebook : nettoyage des données, visualisations et étude des corrélations entre alimentation, activité physique et IMC."
              ghLink="https://github.com/baluva/Data-Analysis-Obesity-Levels-Lifestyle-Habits"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={messiAnalytics}
              isBlog={false}
              title="Analyse Football — Messi WC 2022"
              description="Visualisation de données et analyse de la performance de Lionel Messi lors de la Coupe du Monde 2022 : dribbles, trajectoires de balle, passes réussies, tirs et fautes obtenues, avec Python. Mon tout premier projet data partagé publiquement sur LinkedIn."
              demoLink="https://www.linkedin.com/posts/louey-barbirou-2b97a828b_cest-mon-tout-premier-projet-que-je-partage-activity-7404512770836156416-1NfQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olist}
              isBlog={false}
              title="Dashboard Olist — Business Intelligence"
              description="Tableau de bord décisionnel sur les données e-commerce brésiliennes Olist, construit avec Apache Superset. Modélisation SQL, indicateurs de vente, délais de livraison et satisfaction client ; restitution évaluée sur les principes de dataviz de Few et Tufte."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swarmPrediction}
              isBlog={false}
              title="Swarm Prediction — Rendement Agricole"
              description="Prédiction du rendement agricole à partir de données FAO et World Bank, structurées en couches (agriculture, démographie, épidémiologie). Modèles de régression (Ridge, Random Forest, XGBoost) alimentant un moteur de simulation. Projet en binôme."
              ghLink="https://github.com/2Alexis/Swarm_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bacQuiz}
              isBlog={false}
              title="Bac Quiz — App Mobile de Révision"
              description="Application mobile de QCM pour le bac tunisien. Pipeline Python convertissant des sujets PDF en JSON grâce à Claude (vision), back-end Supabase et application développée avec Expo / React Native."
            />
          </Col>
        </Row>

        {/* ---------- Développement ---------- */}
        <h3 className="purple" style={{ marginTop: "30px", marginBottom: "20px" }}>
          Développement (Go, Python, jeux)
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puissance4}
              isBlog={false}
              title="Puissance 4 Online"
              description="Système de matchmaking en ligne pour le jeu Puissance 4 : serveur multi-clients en Python (sockets) gérant les parties, et interface client en Tkinter. Projet de développement réseau."
              ghLink="https://github.com/baluva/projetdev_loueyBarbirou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoTracker}
              isBlog={false}
              title="Crypto Tracker"
              description="Application web en Go (net/http) pour suivre les cryptomonnaies : recherche, affichage des prix, capitalisation et variation 24h, et gestion d'une liste de favoris. Projet Ynov."
              ghLink="https://github.com/baluva/louey-barbirou-groupietracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redRpg}
              isBlog={false}
              title="RED — RPG en Terminal"
              description="Jeu de rôle en ligne de commande développé en Go sur le thème CS:GO : création de personnage, combats au tour par tour et menu interactif. Projet en binôme."
              ghLink="https://github.com/baluva/Barbirou-Tichit-Red"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifApi}
              isBlog={false}
              title="TP API Spotify (Go)"
              description="Site web en Go consommant l'API Spotify (authentification client credentials) pour afficher des données d'artistes. Réécrit en v2 avec le framework Gin et une architecture plus propre (v1 en net/http également disponible)."
              ghLink="https://github.com/baluva/Rendue-TP-exploitation-API-Spotify-v2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ymmersionWeb}
              isBlog={false}
              title="Ymmersion Web"
              description="Application web développée en Go dans le cadre des projets Ymmersion à Ynov : serveur HTTP et rendu de pages côté serveur."
              ghLink="https://github.com/baluva/Ymmrsion2"
            />
          </Col>
        </Row>

        {/* ---------- DevOps & Cloud ---------- */}
        <h3 className="purple" style={{ marginTop: "30px", marginBottom: "20px" }}>
          DevOps &amp; Cloud
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytechDocbase}
              isBlog={false}
              title="Y-Tech DocBase — Plateforme DevOps"
              description="Plateforme de documentation auto-hébergée : Wiki.js et PostgreSQL conteneurisés avec Docker, pipeline d'intégration et de déploiement continus (CI/CD GitLab) et mise en production sur un VPS Debian."
              ghLink="https://gitlab.com/loueybarbirou/ytechdocbase"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
