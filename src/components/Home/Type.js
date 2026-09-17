import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../../i18n";

const STRINGS = {
  fr: [
    "je nettoie des données pas très propres",
    "je construis des dashboards qu'on ouvre vraiment",
    "je préfère livrer que théoriser",
    "je pense scalabilité, maintenance et sécurité",
    "dispo tout de suite pour une alternance en data / IA",
  ],
  en: [
    "I clean up messy data",
    "I build dashboards people actually open",
    "I'd rather ship than theorize",
    "I think about scalability, maintenance and security",
    "available now for a data / AI apprenticeship",
  ],
};

function Type() {
  const { lang } = useLang();
  return (
    <Typewriter
      key={lang}
      options={{
        strings: STRINGS[lang],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
