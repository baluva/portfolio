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
import wattcast from "../../Assets/Projects/wattcast.png";
import videoInsight from "../../Assets/Projects/videoinsight.svg";
import obesityEda from "../../Assets/Projects/obesity_eda.svg";
import puissance4 from "../../Assets/Projects/puissance4.svg";
import cryptoTracker from "../../Assets/Projects/crypto_tracker.svg";
import redRpg from "../../Assets/Projects/red_rpg.svg";
import ymmersionWeb from "../../Assets/Projects/ymmersion_web.svg";
import olist from "../../Assets/Projects/olist.svg";
import swarmPrediction from "../../Assets/Projects/swarm_prediction.png";
import bacQuiz from "../../Assets/Projects/bac_quiz.png";
import techYnov from "../../Assets/Projects/tech_ynov.png";
import scandiag from "../../Assets/Projects/scandiag.svg";
import codeRouteTn from "../../Assets/Projects/code_route_tn.png";
import frostDays from "../../Assets/Projects/frost_days.png";
import ytechDocbase from "../../Assets/Projects/ytech_docbase.svg";
import magicAutos from "../../Assets/Projects/magic_autos.png";
import soukBvmt from "../../Assets/Projects/souk_bvmt.png";
import sawtna from "../../Assets/Projects/sawtna.png";
import mapsProspector from "../../Assets/Projects/maps_prospector.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <span className="arc-eyebrow" style={{ textAlign: "center" }}>
          {"// TRAVAUX"}
        </span>
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
              imgPath={wattcast}
              isBlog={false}
              title="WattCast — Mon modèle contre RTE"
              description="Un modèle qui prévoit chaque jour la consommation électrique française du lendemain, en production, noté contre la prévision officielle de RTE. Pipeline quotidien GitHub Actions, entrepôt dbt + DuckDB, LightGBM, backtest sur 3 ans et demi avec la météo telle qu'elle était prévue la veille, test anti-fuite, drift et réentraînement automatique, API FastAPI. Résultat honnête : 1,90 % d'erreur contre 1,97 % pour RTE, mais RTE rate moins gros les jours difficiles. Et le README raconte le bug qui me faisait croire que je battais RTE de 25 %."
              ghLink="https://github.com/baluva/wattcast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplyPulse}
              isBlog={false}
              title="SupplyPulse — Supply Chain Analytics"
              description="Mon projet data le plus poussé. J'ai pris un dataset réel (DataCo) pour analyser une chaîne logistique de bout en bout. J'ai monté un entrepôt en couches avec DuckDB (du brut aux tables prêtes à l'analyse), ajouté des tests de qualité des données qui tournent en CI, et un dashboard Streamlit avec les bons KPIs (retards, OTIF, marge, performance par marché)."
              ghLink="https://github.com/baluva/supplypulse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptBooster}
              isBlog={false}
              title="Prompt Booster — Optimiseur de Prompts IA"
              description="Tu colles un prompt écrit vite fait, l'appli le réécrit proprement (rôle, contexte, format attendu, contraintes) pour que l'IA comprenne mieux ta demande. Tout est en Python, à base de règles : pas de clé API, ça marche hors-ligne. Ça repère le type de tâche et la langue, et ça note la qualité avant / après. Interface en Streamlit. C'est en construisant cet outil que j'ai appris le prompt engineering, que je réutilise depuis dans mes autres produits."
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
              title="Swarm Prediction — De la terre aux gens"
              description="Notre projet fil rouge : une civilisation modélisée en 5 couches (environnement, démographie, économie, politique, culture) sur 240 pays × 35 ans de données réelles (FAO, World Bank, OMS, NASA). ~170 modèles XGBoost évalués sur des pays jamais vus, puis un moteur récursif qui projette le monde jusqu'en 2100 — avec un skill-score qui dit honnêtement où lui faire confiance. Dashboard Streamlit en forme de récit : globe 3D interactif, photos satellites, simulation par scénarios. Projet en binôme."
              ghLink="https://github.com/2Alexis/Swarm_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techYnov}
              isBlog={false}
              title="TechCorp AI Chat — LLM Finance + Audit Sécurité"
              description="Challenge IA Ynov en 7h, en solo : interface de chat pour un LLM financier (Phi-3.5-Financial) servi par Ollama. Le vrai défi était caché : en auditant le modèle hérité, j'ai découvert une backdoor (déclencheur secret dans le fine-tuning) et un dataset compromis — j'ai documenté l'attaque et redéployé une base saine."
              ghLink="https://github.com/baluva/techYnov"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bacQuiz}
              isBlog={false}
              title="Bac Quiz — Réviser le Bac Tunisien"
              description="App web gratuite pour réviser le bac tunisien : 1 522 épreuves officielles (2010-2025) à télécharger, 959 questions de QCM corrigées classées par spécialité, examens blancs, XP et classement en direct. Un pipeline Python transforme les sujets PDF en questions (IA vision), l'app est en React / Vite avec Supabase (comptes + progression) et les fichiers sur Cloudflare R2. Déployée sur Netlify."
              ghLink="https://github.com/baluva/bac-quiz"
              demoLink="https://bacquiz-tn.netlify.app"
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
              imgPath={soukBvmt}
              isBlog={false}
              title="Souk — Trading sur la Bourse de Tunis"
              description="Un jeu de trading branché sur les vrais cours de la Bourse de Tunis. Je récupère le flux officiel de la BVMT (77 valeurs cotées) via un proxy que j'ai écrit pour contourner le CORS, avec un rafraîchissement toutes les 2 secondes pendant la séance et les cours de clôture réels en dehors. On démarre avec 100 DT, on peut acheter des fractions de titres, il y a 9 défis à débloquer et un classement en direct. Tout est fait main en React / TypeScript, sans librairie d'interface — y compris les logos des 77 sociétés."
              ghLink="https://github.com/baluva/tunis-bourse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapsProspector}
              isBlog={false}
              title="Maps Prospector — Prospection automatisée"
              description="Un outil Python qui trouve les établissements français sans site web via l'API Google Places, enrichit les fiches, puis envoie les emails de prospection depuis Outlook et suit les réponses. Pipeline en deux étapes (collecte puis envoi), avec un tableau de bord Streamlit pour piloter les campagnes et un tracker d'ouvertures."
              ghLink="https://github.com/baluva/maps-prospector"
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
              imgPath={magicAutos}
              isBlog={false}
              title="Magic Autos Tunisie — Site client"
              description="Site vitrine pour un vrai client : Magic Autos, un garage à Manouba (Tunisie) qui fait esthétique auto (detailing), mécanique et showroom. Réalisé avec Alexis en React / Vite, avec un back Cloudflare Workers + base D1 : panel admin pour éditer les tarifs de lavage et les stats, devis en un clic via WhatsApp, galerie photos avec zoom plein écran, carte de fidélité « 10ᵉ lavage offert » et badge ouvert / fermé en temps réel. Déployé sur Cloudflare."
              demoLink="https://magic-autos-tunisie.loueybarbirou12.workers.dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sawtna}
              isBlog={false}
              title="Sawtna — La place publique tunisienne"
              description="Une plateforme où des citoyens vérifiés par leur CIN proposent des projets concrets pour la Tunisie et en débattent : pas de pseudos anonymes, on critique l'idée pas la personne. Projets avec objectifs de soutien et cycle de vie, sondages en direct, ancrage par gouvernorat, notifications, file de modération et espace admin. React / Vite / TypeScript avec deux backends interchangeables — mode local pour la démo, Supabase (RLS + fonctions SQL) en production."
              ghLink="https://github.com/baluva/sawtna"
            />
          </Col>

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scandiag}
              isBlog={false}
              title="SCANDIAG × FACOM — Réemploi RSE"
              description="Concours Ynov × FACOM : donner une seconde vie à un outil de diagnostic automobile. Rétro-ingénierie matérielle du SCANDIAG (un TEXA Laser Examiner rebadgé) : identification du microcontrôleur STM32F429, du module Bluetooth WT12 et du pont série FTDI, liaison Bluetooth SPP établie en preuve de concept, puis dossier complet de réemploi. Mon premier projet hardware."
              ghLink="https://github.com/baluva/scandiag-facom-reemploi"
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
