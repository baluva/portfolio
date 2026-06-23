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
import supplyPulse from "../../Assets/Projects/supplypulse.png";
import videoInsight from "../../Assets/Projects/videoinsight.svg";
import obesityEda from "../../Assets/Projects/obesity_eda.svg";
import puissance4 from "../../Assets/Projects/puissance4.svg";
import cryptoTracker from "../../Assets/Projects/crypto_tracker.svg";
import redRpg from "../../Assets/Projects/red_rpg.svg";
import ymmersionWeb from "../../Assets/Projects/ymmersion_web.svg";
import olist from "../../Assets/Projects/olist.svg";
import swarmPrediction from "../../Assets/Projects/swarm_prediction.svg";
import bacQuiz from "../../Assets/Projects/bac_quiz.svg";
import codeRouteTn from "../../Assets/Projects/code_route_tn.png";
import frostDays from "../../Assets/Projects/frost_days.png";
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
              imgPath={supplyPulse}
              isBlog={false}
              title="SupplyPulse — Supply Chain Analytics"
              description="Mon projet data le plus poussé. J'ai pris 180 000 commandes réelles (dataset DataCo) pour analyser une chaîne logistique de bout en bout. J'ai monté un entrepôt en couches avec DuckDB (du brut aux tables prêtes à l'analyse), ajouté des tests de qualité des données qui tournent en CI, et un dashboard Streamlit avec les bons KPIs (retards, OTIF, marge, performance par marché). Résultat qui parle : 55 % des livraisons arrivent en retard."
              ghLink="https://github.com/baluva/supplypulse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptBooster}
              isBlog={false}
              title="Prompt Booster — Optimiseur de Prompts IA"
              description="Tu colles un prompt écrit vite fait, l'appli le réécrit proprement (rôle, contexte, format attendu, contraintes) pour que l'IA comprenne mieux ta demande. Tout est en Python, à base de règles : pas de clé API, ça marche hors-ligne. Ça repère le type de tâche et la langue, et ça note la qualité avant / après. Interface en Streamlit."
              ghLink="https://github.com/baluva/prompt-booster"
              demoLink="https://prompt-booster.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbugHunter}
              isBlog={false}
              title="DBug Hunter — Détecteur de Bugs SQL"
              description="Tu déposes une base SQLite et l'outil (Python / FastAPI) la passe au peigne fin : doublons, clés cassées, types incohérents, e-mails et dates invalides, valeurs aberrantes. Il sort un rapport trié par gravité avec une note de santé sur 100. Déployé avec Docker sur Hugging Face."
              ghLink="https://github.com/baluva/dbug-hunter"
              demoLink="https://louey9999-dbug-hunter.hf.space"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoInsight}
              isBlog={false}
              title="VideoInsight — Analyse Vidéo IA"
              description="Ce que je développe en stage chez trITon : une appli qui prend une vidéo, la transcrit (Whisper), la traduit, génère les sous-titres et refait la voix (TTS). Pipeline en Python, avec de la CI sur GitHub Actions."
              ghLink="https://github.com/baluva/subtitles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartAttack}
              isBlog={false}
              title="Prédiction d'Attaque Cardiaque"
              description="Un modèle qui estime le risque d'attaque cardiaque à partir de données cliniques et de mode de vie (âge, cholestérol, tension, IMC). J'ai fait toute la chaîne : nettoyage, mise à l'échelle, entraînement, puis évaluation au ROC-AUC."
              ghLink="https://github.com/baluva/heart_attack_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insightHub}
              isBlog={false}
              title="Insight Hub — Dépression Étudiante"
              description="Analyse de la dépression étudiante sur 100 000 entrées : j'ai creusé les facteurs (sommeil, moyenne, heures d'étude) dans un dashboard interactif (Plotly + Tailwind), avec un modèle de régression logistique pour faire la prédiction."
              ghLink="https://github.com/baluva/student_depression"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradeWithAI}
              isBlog={false}
              title="Trade With AI — Vision Crypto"
              description="Un outil qui essaie de prévoir les cours crypto avec des séries temporelles (Prophet) : il sort des signaux achat / vente / neutre, des indicateurs techniques et des graphiques en chandeliers, le tout servi par une API Python (FastAPI)."
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
              description="Tableau de bord sur les ventes e-commerce d'Olist (Brésil), fait avec Apache Superset : modélisation SQL, indicateurs de vente, délais de livraison, satisfaction client. Projet noté sur les principes de dataviz de Few et Tufte."
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
              description="App mobile de QCM pour le bac tunisien. Un script Python transforme les sujets PDF en questions (via une IA vision), avec Supabase derrière et l'appli en Expo / React Native."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeRouteTn}
              isBlog={false}
              title="Code Route TN — Code de la Route Tunisien"
              description="App web d'entraînement au code de la route tunisien, toutes catégories (moto, voiture, poids lourd, bus, remorque…) et bilingue FR / AR. J'ai récupéré ~11 000 questions et leurs corrigés (scraping + une fonction Apps Script pilotée en headless), hébergé 34 000 images sur Cloudflare R2, et construit l'app en React / Vite : quiz visuel, examen blanc chronométré, examens VIP et progression locale. Déployée sur Cloudflare Pages."
              ghLink="https://github.com/baluva/code-route-tn"
              demoLink="https://code-route-tn.pages.dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frostDays}
              isBlog={false}
              title="Frost Days — Jours de gel par commune"
              description="Calcul du nombre de jours de gel pour une commune française, à partir des relevés quotidiens de Météo-France (data.gouv.fr). Je rattache chaque commune à la station valide la plus proche (Haversine), j'écarte les stations trop trouées (plus de 35 % de mesures manquantes), puis je sors le total, la moyenne par an et la saisonnalité du gel. Package Python avec une app Streamlit et une CLI."
              ghLink="https://github.com/baluva/frost-days"
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
