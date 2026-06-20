import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiant en IA & Data Science à Ynov",
          "Plutôt du genre à livrer qu'à théoriser",
          "Je code des petites apps qui servent vraiment",
          "Dispo pour une alternance en data / IA",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
