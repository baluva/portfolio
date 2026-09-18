import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLang } from "../../i18n";

function AboutCard() {
  const { lang } = useLang();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {lang === "fr" ? (
            <>
              <p style={{ textAlign: "justify" }}>
                Salut, moi c'est <span className="purple">Louey</span>.
                <br />
                Je suis étudiant en IA & Data Science à Ynov. Ce qui me plaît, c'est prendre des données brutes et en tirer quelque chose d'utile — une analyse, un modèle, un dashboard.
                <br />
                Je viens de terminer mon <span className="purple">stage chez trITon</span> (avril – juillet 2026).
                <br />
                Avant ça, j'ai fait de l'analyse de sécurité (projet Thales) et de la BI chez Novogel.
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
            </>
          ) : (
            <>
              <p style={{ textAlign: "justify" }}>
                Hi, I'm <span className="purple">Louey</span>.
                <br />
                I'm an AI & Data Science student at Ynov. What I enjoy is taking raw data and turning it into something useful: an analysis, a model, a dashboard.
                <br />
                I just finished my <span className="purple">internship at trITon</span> (April – July 2026).
                <br />
                Before that, I did security analysis (a Thales project) and BI at Novogel.
                <br />
                What interests me is the whole product: its <span className="purple">scalability</span>, its <span className="purple">maintenance</span>, its <span className="purple">performance</span> and its <span className="purple">security</span>, down to the infrastructure. I'm versatile and comfortable with dev tools and AI assistants; I learned prompt engineering by building my own products.
                <br />
                I'm looking for a <span className="purple">data / AI apprenticeship</span>, 2 weeks at the company / 1 week at school, and I'm <span className="purple">available immediately</span>.
                <br />
                <br />
                Outside of code and data analysis, here's what I like to do:
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Cooking & trying new recipes
                </li>
                <li className="about-activity">
                  <ImPointRight /> Reading tech articles & AI research
                </li>
                <li className="about-activity">
                  <ImPointRight /> Sports & staying active
                </li>
                <li className="about-activity">
                  <ImPointRight /> Gaming & strategy games
                </li>
              </ul>
            </>
          )}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
