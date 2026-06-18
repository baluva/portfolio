import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Transformer les données en solutions intelligentes",
          "Étudiant en IA & Data Science",
          "En recherche d'alternance",
          "Passionné de Machine Learning",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
