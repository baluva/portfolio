import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "je nettoie des données pas très propres",
          "je construis des dashboards qu'on ouvre vraiment",
          "je préfère livrer que théoriser",
          "je pense scalabilité, maintenance et sécurité",
          "dispo tout de suite pour une alternance en data / IA",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
