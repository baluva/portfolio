import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiant en IA & Data Science à Ynov",
          "Je transforme des données en décisions",
          "Je construis des petites apps qui servent vraiment",
          "Dispo pour une alternance",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
