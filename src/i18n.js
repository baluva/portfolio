import React, { createContext, useContext, useEffect, useState } from "react";

// Langue du site (fr / en), partagée par tous les composants.
// Choix mémorisé dans le navigateur ; à la première visite on suit la langue du navigateur.
const STORAGE_KEY = "portfolio-lang";
const LANGS = ["fr", "en"];

function initialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (e) {}
  const nav = (navigator.language || "fr").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

const LangContext = createContext({ lang: "fr", setLang: () => {}, t: (v) => v.fr });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }, [lang]);

  // t({ fr: "...", en: "..." }) renvoie la version de la langue active
  const t = (v) => v[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function LangSwitch({ className = "" }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Language / Langue">
      {LANGS.map((key) => (
        <button
          key={key}
          type="button"
          className={lang === key ? "active" : ""}
          aria-pressed={lang === key}
          onClick={() => setLang(key)}
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
