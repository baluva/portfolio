import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useLang } from "../../i18n";
import { repoFromLink, activityFor, lastUpdateOf } from "./activity";
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

// Chaque carte a son titre et sa description en français et en anglais.
// live: true = site réellement en ligne et utilisable (vérifié à la main).
const SECTIONS = [
  {
    title: { fr: "IA & Data Science", en: "AI & Data Science" },
    projects: [
      {
        imgPath: wattcast,
        title: {
          fr: "WattCast — Mon modèle contre RTE",
          en: "WattCast — My model vs. RTE",
        },
        description: {
          fr: "Un modèle qui prévoit chaque jour la consommation électrique française du lendemain, en production, noté contre la prévision officielle de RTE. Pipeline quotidien GitHub Actions, entrepôt dbt + DuckDB, LightGBM, backtest sur 3 ans et demi avec la météo telle qu'elle était prévue la veille, test anti-fuite, drift et réentraînement automatique, API FastAPI. Résultat honnête : 1,90 % d'erreur contre 1,97 % pour RTE, mais RTE rate moins gros les jours difficiles. Et le README raconte le bug qui me faisait croire que je battais RTE de 25 %.",
          en: "A model that forecasts France's electricity consumption for the next day, every day, in production, scored against RTE's official forecast. Daily GitHub Actions pipeline, dbt + DuckDB warehouse, LightGBM, a 3.5-year backtest using the weather as it was forecast the day before, leakage test, drift monitoring and automatic retraining, FastAPI API. Honest result: 1.90% error vs. 1.97% for RTE, but RTE misses by less on the hard days. And the README tells the story of the bug that made me think I was beating RTE by 25%.",
        },
        ghLink: "https://github.com/baluva/wattcast",
      },
      {
        imgPath: supplyPulse,
        title: {
          fr: "SupplyPulse — Supply Chain Analytics",
          en: "SupplyPulse — Supply Chain Analytics",
        },
        description: {
          fr: "Mon projet data le plus poussé. J'ai pris un dataset réel (DataCo) pour analyser une chaîne logistique complète. J'ai monté un entrepôt en couches avec DuckDB (du brut aux tables prêtes à l'analyse), ajouté des tests de qualité des données qui tournent en CI, et un dashboard Streamlit avec les bons KPIs (retards, OTIF, marge, performance par marché).",
          en: "My most in-depth data project. I took a real dataset (DataCo) to analyze a full supply chain. I built a layered warehouse with DuckDB (from raw data to analysis-ready tables), added data quality tests that run in CI, and a Streamlit dashboard with the right KPIs (late deliveries, OTIF, margin, performance by market).",
        },
        ghLink: "https://github.com/baluva/supplypulse",
      },
      {
        imgPath: promptBooster,
        title: {
          fr: "Prompt Booster — Optimiseur de Prompts IA",
          en: "Prompt Booster — AI Prompt Optimizer",
        },
        description: {
          fr: "Tu colles un prompt écrit vite fait, l'appli le réécrit proprement (rôle, contexte, format attendu, contraintes) pour que l'IA comprenne mieux ta demande. Tout est en Python, à base de règles : pas de clé API, ça marche hors-ligne. Ça repère le type de tâche et la langue, et ça note la qualité avant / après. Interface en Streamlit. C'est en construisant cet outil que j'ai appris le prompt engineering, que je réutilise depuis dans mes autres produits.",
          en: "You paste a quickly written prompt and the app rewrites it properly (role, context, expected format, constraints) so the AI better understands what you want. It's all Python and rule-based: no API key, it works offline. It detects the task type and the language, and scores the quality before / after. Streamlit interface. Building this tool is how I learned prompt engineering, which I've reused in my other products since.",
        },
        ghLink: "https://github.com/baluva/prompt-booster",
      },
      {
        imgPath: dbugHunter,
        title: {
          fr: "DBug Hunter — Détecteur de Bugs SQL",
          en: "DBug Hunter — SQL Bug Detector",
        },
        description: {
          fr: "Tu déposes une base SQLite et l'outil (Python / FastAPI) la passe au peigne fin : doublons, clés cassées, types incohérents, e-mails et dates invalides, valeurs aberrantes. Il sort un rapport trié par gravité avec une note de santé sur 100. Déployé avec Docker sur Hugging Face.",
          en: "You upload a SQLite database and the tool (Python / FastAPI) goes through it with a fine-tooth comb: duplicates, broken keys, inconsistent types, invalid emails and dates, outliers. It produces a report sorted by severity with a health score out of 100. Deployed with Docker on Hugging Face.",
        },
        ghLink: "https://github.com/baluva/dbug-hunter",
        demoLink: "https://louey9999-dbug-hunter.hf.space",
        live: true,
      },
      {
        imgPath: videoInsight,
        title: {
          fr: "VideoInsight — Analyse Vidéo IA",
          en: "VideoInsight — AI Video Analysis",
        },
        description: {
          fr: "Ce que j'ai développé en stage chez trITon : une appli qui prend une vidéo, la transcrit, la traduit, génère les sous-titres et refait la voix (TTS). Pipeline en Python, avec de la CI sur GitHub Actions.",
          en: "What I built during my internship at trITon: an app that takes a video, transcribes it, translates it, generates the subtitles and re-creates the voice (TTS). Python pipeline, with CI on GitHub Actions.",
        },
        ghLink: "https://github.com/baluva/subtitles",
      },
      {
        imgPath: heartAttack,
        title: {
          fr: "Prédiction d'Attaque Cardiaque",
          en: "Heart Attack Prediction",
        },
        description: {
          fr: "Un modèle qui estime le risque d'attaque cardiaque à partir de données cliniques et de mode de vie (âge, cholestérol, tension, IMC). J'ai fait toute la chaîne : nettoyage, mise à l'échelle, entraînement, puis évaluation au ROC-AUC.",
          en: "A model that estimates heart attack risk from clinical and lifestyle data (age, cholesterol, blood pressure, BMI). I handled the whole chain: cleaning, scaling, training, then evaluation with ROC-AUC.",
        },
        ghLink: "https://github.com/baluva/heart_attack_Prediction",
      },
      {
        imgPath: insightHub,
        title: {
          fr: "Insight Hub — Dépression Étudiante",
          en: "Insight Hub — Student Depression",
        },
        description: {
          fr: "Analyse de la dépression étudiante sur 100 000 entrées : j'ai creusé les facteurs (sommeil, moyenne, heures d'étude) dans un dashboard interactif (Plotly + Tailwind), avec un modèle de régression logistique pour faire la prédiction.",
          en: "An analysis of student depression across 100,000 records: I dug into the factors (sleep, GPA, study hours) in an interactive dashboard (Plotly + Tailwind), with a logistic regression model for prediction.",
        },
        ghLink: "https://github.com/baluva/student_depression",
      },
      {
        imgPath: tradeWithAI,
        title: {
          fr: "Trade With AI — Vision Crypto",
          en: "Trade With AI — Crypto Vision",
        },
        description: {
          fr: "Un outil qui essaie de prévoir les cours crypto avec des séries temporelles (Prophet) : il sort des signaux achat / vente / neutre, des indicateurs techniques et des graphiques en chandeliers, le tout servi par une API Python (FastAPI).",
          en: "A tool that tries to forecast crypto prices with time series (Prophet): it outputs buy / sell / neutral signals, technical indicators and candlestick charts, all served by a Python API (FastAPI).",
        },
        ghLink: "https://github.com/baluva/Trade-with-AI",
      },
      {
        imgPath: obesityEda,
        title: {
          fr: "Analyse Obésité & Mode de vie",
          en: "Obesity & Lifestyle Analysis",
        },
        description: {
          fr: "Analyse exploratoire de données (EDA) sur les niveaux d'obésité et les habitudes de vie. Projet Ynov en Jupyter Notebook : nettoyage des données, visualisations et étude des corrélations entre alimentation, activité physique et IMC.",
          en: "Exploratory data analysis (EDA) of obesity levels and lifestyle habits. A Ynov project in Jupyter Notebook: data cleaning, visualizations and a study of the correlations between diet, physical activity and BMI.",
        },
        ghLink: "https://github.com/baluva/Data-Analysis-Obesity-Levels-Lifestyle-Habits",
      },
      {
        imgPath: messiAnalytics,
        title: {
          fr: "Analyse Football — Messi WC 2022",
          en: "Football Analysis — Messi WC 2022",
        },
        description: {
          fr: "Visualisation de données et analyse de la performance de Lionel Messi lors de la Coupe du Monde 2022 : dribbles, trajectoires de balle, passes réussies, tirs et fautes obtenues, avec Python. Mon tout premier projet data partagé publiquement sur LinkedIn.",
          en: "Data visualization and analysis of Lionel Messi's performance at the 2022 World Cup: dribbles, ball trajectories, completed passes, shots and fouls won, with Python. The very first data project I shared publicly on LinkedIn.",
        },
        demoLink: "https://www.linkedin.com/posts/louey-barbirou-2b97a828b_cest-mon-tout-premier-projet-que-je-partage-activity-7404512770836156416-1NfQ",
      },
      {
        imgPath: olist,
        title: {
          fr: "Dashboard Olist — Business Intelligence",
          en: "Olist Dashboard — Business Intelligence",
        },
        description: {
          fr: "Tableau de bord sur les ventes e-commerce d'Olist (Brésil), fait avec Apache Superset : modélisation SQL, indicateurs de vente, délais de livraison, satisfaction client. Projet noté sur les principes de dataviz de Few et Tufte.",
          en: "A dashboard on Olist's e-commerce sales (Brazil), built with Apache Superset: SQL modeling, sales metrics, delivery times, customer satisfaction. Graded on Few and Tufte's data visualization principles.",
        },
      },
      {
        imgPath: swarmPrediction,
        title: {
          fr: "Swarm Prediction — De la terre aux gens",
          en: "Swarm Prediction — From the land to the people",
        },
        description: {
          fr: "Notre projet fil rouge : une civilisation modélisée en 5 couches (environnement, démographie, économie, politique, culture) sur 240 pays × 35 ans de données réelles (FAO, World Bank, OMS, NASA). ~170 modèles XGBoost évalués sur des pays jamais vus, puis un moteur récursif qui projette le monde jusqu'en 2100 — avec un skill-score qui dit honnêtement où lui faire confiance. Dashboard Streamlit en forme de récit : globe 3D interactif, photos satellites, simulation par scénarios. Projet en binôme.",
          en: "Our year-long project: a civilization modeled in 5 layers (environment, demographics, economy, politics, culture) across 240 countries × 35 years of real data (FAO, World Bank, WHO, NASA). ~170 XGBoost models evaluated on countries they had never seen, then a recursive engine that projects the world up to 2100, with a skill score that honestly shows where it can be trusted. Story-driven Streamlit dashboard: interactive 3D globe, satellite imagery, scenario simulation. Built as a pair.",
        },
        ghLink: "https://github.com/2Alexis/Swarm_Prediction",
      },
      {
        imgPath: techYnov,
        title: {
          fr: "TechCorp AI Chat — LLM Finance + Audit Sécurité",
          en: "TechCorp AI Chat — Finance LLM + Security Audit",
        },
        description: {
          fr: "Challenge IA Ynov en 7h, en solo : interface de chat pour un LLM financier (Phi-3.5-Financial) servi par Ollama. Le vrai défi était caché : en auditant le modèle hérité, j'ai découvert une backdoor (déclencheur secret dans le fine-tuning) et un dataset compromis — j'ai documenté l'attaque et redéployé une base saine.",
          en: "A 7-hour solo Ynov AI challenge: a chat interface for a financial LLM (Phi-3.5-Financial) served by Ollama. The real challenge was hidden: while auditing the inherited model, I found a backdoor (a secret trigger in the fine-tuning) and a compromised dataset. I documented the attack and redeployed a clean base.",
        },
        ghLink: "https://github.com/baluva/techYnov",
      },
      {
        imgPath: bacQuiz,
        title: {
          fr: "Bac Quiz — Réviser le Bac Tunisien",
          en: "Bac Quiz — Tunisian Baccalaureate Revision",
        },
        description: {
          fr: "App web gratuite pour réviser le bac tunisien : 1 522 épreuves officielles (2010-2025) à télécharger, 959 questions de QCM corrigées classées par spécialité, examens blancs, XP et classement en direct. Un pipeline Python transforme les sujets PDF en questions (IA vision), l'app est en React / Vite avec Supabase (comptes + progression) et les fichiers sur Cloudflare R2. Déployée sur Netlify.",
          en: "A free web app to revise for the Tunisian baccalaureate: 1,522 official exam papers (2010-2025) to download, 959 corrected multiple-choice questions sorted by track, mock exams, XP and a live leaderboard. A Python pipeline turns the PDF papers into questions (vision AI); the app is built with React / Vite and Supabase (accounts + progress), with files on Cloudflare R2. Deployed on Netlify.",
        },
        ghLink: "https://github.com/baluva/bac-quiz",
        demoLink: "https://bacquiz-tn.netlify.app",
        live: true,
      },
      {
        imgPath: codeRouteTn,
        title: {
          fr: "Code Route TN — Code de la Route Tunisien",
          en: "Code Route TN — Tunisian Driving Theory Test",
        },
        description: {
          fr: "App web d'entraînement au code de la route tunisien, toutes catégories (moto, voiture, poids lourd, bus, remorque…) et bilingue FR / AR. J'ai récupéré ~11 000 questions et leurs corrigés (scraping + une fonction Apps Script pilotée en headless), hébergé 34 000 images sur Cloudflare R2, et construit l'app en React / Vite : quiz visuel, examen blanc chronométré, examens VIP et progression locale. Déployée sur Cloudflare Pages.",
          en: "A web app to practice for the Tunisian driving theory test, all license categories (motorcycle, car, truck, bus, trailer…), bilingual FR / AR. I collected ~11,000 questions and their answers (scraping + an Apps Script function driven headless), hosted 34,000 images on Cloudflare R2, and built the app in React / Vite: visual quizzes, timed mock exams, VIP exams and local progress tracking. Deployed on Cloudflare Pages.",
        },
        ghLink: "https://github.com/baluva/code-route-tn",
        demoLink: "https://code-route-tn.pages.dev",
        live: true,
      },
      {
        imgPath: soukBvmt,
        title: {
          fr: "Souk — Trading sur la Bourse de Tunis",
          en: "Souk — Trading on the Tunis Stock Exchange",
        },
        description: {
          fr: "Un jeu de trading branché sur les vrais cours de la Bourse de Tunis. Je récupère le flux officiel de la BVMT (77 valeurs cotées) via un proxy que j'ai écrit pour contourner le CORS, avec un rafraîchissement toutes les 2 secondes pendant la séance et les cours de clôture réels en dehors. On démarre avec 100 DT, on peut acheter des fractions de titres, il y a 9 défis à débloquer et un classement en direct. Tout est fait main en React / TypeScript, sans librairie d'interface — y compris les logos des 77 sociétés.",
          en: "A trading game plugged into real prices from the Tunis Stock Exchange. I pull the official BVMT feed (77 listed stocks) through a proxy I wrote to get around CORS, refreshing every 2 seconds during market hours and showing real closing prices outside of them. You start with 100 TND, can buy fractional shares, unlock 9 challenges and climb a live leaderboard. Everything is hand-built in React / TypeScript with no UI library, including the logos of all 77 companies.",
        },
        ghLink: "https://github.com/baluva/tunis-bourse",
      },
      {
        imgPath: mapsProspector,
        title: {
          fr: "Maps Prospector — Prospection automatisée",
          en: "Maps Prospector — Automated Prospecting",
        },
        description: {
          fr: "Un outil Python qui trouve les établissements français sans site web via l'API Google Places, enrichit les fiches, puis envoie les emails de prospection depuis Outlook et suit les réponses. Pipeline en deux étapes (collecte puis envoi), avec un tableau de bord Streamlit pour piloter les campagnes et un tracker d'ouvertures.",
          en: "A Python tool that finds French businesses without a website through the Google Places API, enriches their listings, then sends prospecting emails from Outlook and tracks the replies. Two-step pipeline (collect, then send), with a Streamlit dashboard to run the campaigns and an open tracker.",
        },
        ghLink: "https://github.com/baluva/maps-prospector",
      },
      {
        imgPath: frostDays,
        title: {
          fr: "Frost Days — Jours de gel par commune",
          en: "Frost Days — Frost days by town",
        },
        description: {
          fr: "Calcul du nombre de jours de gel pour une commune française, à partir des relevés quotidiens de Météo-France (data.gouv.fr). Je rattache chaque commune à la station valide la plus proche (Haversine), j'écarte les stations trop trouées (plus de 35 % de mesures manquantes), puis je sors le total, la moyenne par an et la saisonnalité du gel. Package Python avec une app Streamlit et une CLI.",
          en: "Counts the number of frost days for any French town, based on Météo-France daily records (data.gouv.fr). I match each town to the nearest valid weather station (Haversine), drop stations with too many gaps (over 35% missing readings), then output the total, the yearly average and the seasonality of frost. Python package with a Streamlit app and a CLI.",
        },
        ghLink: "https://github.com/baluva/frost-days",
      },
    ],
  },
  {
    title: { fr: "Développement (Go, Python, jeux)", en: "Development (Go, Python, games)" },
    projects: [
      {
        imgPath: magicAutos,
        title: {
          fr: "Magic Autos Tunisie — Site client",
          en: "Magic Autos Tunisia — Client website",
        },
        description: {
          fr: "Site vitrine pour un vrai client : Magic Autos, un garage à Manouba (Tunisie) qui fait esthétique auto (detailing), mécanique et showroom. Réalisé avec Alexis en React / Vite, avec un back Cloudflare Workers + base D1 : panel admin pour éditer les tarifs de lavage et les stats, devis en un clic via WhatsApp, galerie photos avec zoom plein écran, carte de fidélité « 10ᵉ lavage offert » et badge ouvert / fermé en temps réel. Déployé sur Cloudflare.",
          en: "A showcase website for a real client: Magic Autos, a garage in Manouba (Tunisia) doing car detailing, mechanics and a showroom. Built with Alexis in React / Vite, with a Cloudflare Workers + D1 database backend: admin panel to edit wash prices and stats, one-click quotes via WhatsApp, photo gallery with full-screen zoom, a \"10th wash free\" loyalty card and a real-time open / closed badge. Deployed on Cloudflare.",
        },
        demoLink: "https://magic-autos-tunisie.loueybarbirou12.workers.dev",
        live: true,
      },
      {
        imgPath: sawtna,
        title: {
          fr: "Sawtna — La place publique tunisienne",
          en: "Sawtna — The Tunisian public square",
        },
        description: {
          fr: "Une plateforme où des citoyens vérifiés par leur CIN proposent des projets concrets pour la Tunisie et en débattent : pas de pseudos anonymes, on critique l'idée pas la personne. Projets avec objectifs de soutien et cycle de vie, sondages en direct, ancrage par gouvernorat, notifications, file de modération et espace admin. React / Vite / TypeScript avec deux backends interchangeables — mode local pour la démo, Supabase (RLS + fonctions SQL) en production.",
          en: "A platform where citizens verified by their national ID card propose concrete projects for Tunisia and debate them: no anonymous usernames, you criticize the idea, not the person. Projects with support goals and a lifecycle, live polls, grouping by governorate, notifications, a moderation queue and an admin area. React / Vite / TypeScript with two interchangeable backends: local mode for the demo, Supabase (RLS + SQL functions) in production.",
        },
        ghLink: "https://github.com/baluva/sawtna",
      },
      {
        imgPath: puissance4,
        title: { fr: "Puissance 4 Online", en: "Connect 4 Online" },
        description: {
          fr: "Système de matchmaking en ligne pour le jeu Puissance 4 : serveur multi-clients en Python (sockets) gérant les parties, et interface client en Tkinter. Projet de développement réseau.",
          en: "An online matchmaking system for Connect 4: a multi-client Python server (sockets) that manages the games, and a Tkinter client interface. A network programming project.",
        },
        ghLink: "https://github.com/baluva/projetdev_loueyBarbirou",
      },
      {
        imgPath: cryptoTracker,
        title: { fr: "Crypto Tracker", en: "Crypto Tracker" },
        description: {
          fr: "Application web en Go (net/http) pour suivre les cryptomonnaies : recherche, affichage des prix, capitalisation et variation 24h, et gestion d'une liste de favoris. Projet Ynov.",
          en: "A Go web app (net/http) to track cryptocurrencies: search, prices, market cap and 24h change, plus a favorites list. Ynov project.",
        },
        ghLink: "https://github.com/baluva/louey-barbirou-groupietracker",
      },
      {
        imgPath: redRpg,
        title: { fr: "RED — RPG en Terminal", en: "RED — Terminal RPG" },
        description: {
          fr: "Jeu de rôle en ligne de commande développé en Go sur le thème CS:GO : création de personnage, combats au tour par tour et menu interactif. Projet en binôme.",
          en: "A command-line role-playing game written in Go with a CS:GO theme: character creation, turn-based combat and an interactive menu. Built as a pair.",
        },
        ghLink: "https://github.com/baluva/Barbirou-Tichit-Red",
      },
      {
        imgPath: spotifApi,
        title: { fr: "TP API Spotify (Go)", en: "Spotify API Project (Go)" },
        description: {
          fr: "Site web en Go consommant l'API Spotify (authentification client credentials) pour afficher des données d'artistes. Réécrit en v2 avec le framework Gin et une architecture plus propre (v1 en net/http également disponible).",
          en: "A Go website that consumes the Spotify API (client credentials authentication) to display artist data. Rewritten as v2 with the Gin framework and a cleaner architecture (v1 in net/http also available).",
        },
        ghLink: "https://github.com/baluva/Rendue-TP-exploitation-API-Spotify-v2",
      },
      {
        imgPath: ymmersionWeb,
        title: { fr: "Ymmersion Web", en: "Ymmersion Web" },
        description: {
          fr: "Application web développée en Go dans le cadre des projets Ymmersion à Ynov : serveur HTTP et rendu de pages côté serveur.",
          en: "A web application written in Go for Ynov's Ymmersion projects: HTTP server and server-side page rendering.",
        },
        ghLink: "https://github.com/baluva/Ymmrsion2",
      },
      {
        imgPath: scandiag,
        title: {
          fr: "SCANDIAG × FACOM — Réemploi RSE",
          en: "SCANDIAG × FACOM — CSR Reuse",
        },
        description: {
          fr: "Concours Ynov × FACOM : donner une seconde vie à un outil de diagnostic automobile. Rétro-ingénierie matérielle du SCANDIAG (un TEXA Laser Examiner rebadgé) : identification du microcontrôleur STM32F429, du module Bluetooth WT12 et du pont série FTDI, liaison Bluetooth SPP établie en preuve de concept, puis dossier complet de réemploi. Mon premier projet hardware.",
          en: "Ynov × FACOM competition: giving a second life to a car diagnostic tool. Hardware reverse engineering of the SCANDIAG (a rebadged TEXA Laser Examiner): identified the STM32F429 microcontroller, the WT12 Bluetooth module and the FTDI serial bridge, established a Bluetooth SPP link as a proof of concept, then wrote a full reuse proposal. My first hardware project.",
        },
        ghLink: "https://github.com/baluva/scandiag-facom-reemploi",
      },
    ],
  },
  {
    title: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    projects: [
      {
        imgPath: ytechDocbase,
        title: {
          fr: "Y-Tech DocBase — Plateforme DevOps",
          en: "Y-Tech DocBase — DevOps Platform",
        },
        description: {
          fr: "Plateforme de documentation auto-hébergée : Wiki.js et PostgreSQL conteneurisés avec Docker, pipeline d'intégration et de déploiement continus (CI/CD GitLab) et mise en production sur un VPS Debian.",
          en: "A self-hosted documentation platform: Wiki.js and PostgreSQL containerized with Docker, a continuous integration and deployment pipeline (GitLab CI/CD) and production deployment on a Debian VPS.",
        },
        ghLink: "https://gitlab.com/loueybarbirou/ytechdocbase",
      },
    ],
  },
];

const ALL_PROJECTS = SECTIONS.flatMap((section) => section.projects);
const LIVE_COUNT = ALL_PROJECTS.filter((p) => p.live).length;

function renderCard(p, t) {
  const repo = repoFromLink(p.ghLink);
  return (
    <Col md={4} className="project-card" key={p.title.en}>
      <ProjectCard
        imgPath={p.imgPath}
        isBlog={false}
        title={t(p.title)}
        description={t(p.description)}
        ghLink={p.ghLink}
        demoLink={p.demoLink}
        live={p.live}
        repo={repo}
        activity={activityFor(repo)}
      />
    </Col>
  );
}

function Segmented({ label, value, options, onChange }) {
  return (
    <div className="proj-seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={value === o.value ? "active" : ""}
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Projects() {
  const { t } = useLang();
  const [show, setShow] = useState("all");        // all | live
  const [order, setOrder] = useState("category"); // category | recent

  const visible = ALL_PROJECTS.filter((p) => show === "all" || p.live);
  if (order === "recent") {
    visible.sort((a, b) => lastUpdateOf(repoFromLink(b.ghLink)) - lastUpdateOf(repoFromLink(a.ghLink)));
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <span className="arc-eyebrow" style={{ textAlign: "center" }}>
          {t({ fr: "// TRAVAUX", en: "// WORK" })}
        </span>
        <h1 className="project-heading">
          {t({ fr: "Mes ", en: "My " })}
          <strong className="purple">{t({ fr: "Projets", en: "Projects" })} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t({
            fr: "Une sélection de mes projets en IA & Data Science, puis mes projets de développement (Go, Python, jeux).",
            en: "A selection of my AI & Data Science projects, followed by my development projects (Go, Python, games).",
          })}
        </p>

        <div className="proj-toolbar">
          <Segmented
            label={t({ fr: "Afficher", en: "Show" })}
            value={show}
            onChange={setShow}
            options={[
              { value: "all", label: t({ fr: `Tous (${ALL_PROJECTS.length})`, en: `All (${ALL_PROJECTS.length})` }) },
              { value: "live", label: t({ fr: `En production (${LIVE_COUNT})`, en: `In production (${LIVE_COUNT})` }) },
            ]}
          />
          <Segmented
            label={t({ fr: "Trier", en: "Sort" })}
            value={order}
            onChange={setOrder}
            options={[
              { value: "category", label: t({ fr: "Par catégorie", en: "By category" }) },
              { value: "recent", label: t({ fr: "Modifiés récemment", en: "Recently updated" }) },
            ]}
          />
        </div>
        {show === "live" && (
          <p className="proj-hint">
            {t({
              fr: "Ces sites sont en ligne et utilisables dès maintenant.",
              en: "These sites are live and usable right now.",
            })}
          </p>
        )}

        {/* Filtre ou tri actif : une seule grille ; sinon, les sections par catégorie. */}
        {show === "live" || order === "recent" ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {visible.map((p) => renderCard(p, t))}
          </Row>
        ) : (
          SECTIONS.map((section, si) => (
            <React.Fragment key={section.title.en}>
              <h3
                className="purple"
                style={{ marginTop: si === 0 ? "10px" : "30px", marginBottom: "20px" }}
              >
                {t(section.title)}
              </h3>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {section.projects.map((p) => renderCard(p, t))}
              </Row>
            </React.Fragment>
          ))
        )}
      </Container>
    </Container>
  );
}

export default Projects;
