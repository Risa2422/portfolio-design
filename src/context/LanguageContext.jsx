import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);
const STORAGE_KEY = "language";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored === "en" || stored === "ja" ? stored : "ja";
    } catch {
      return "ja";
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore write errors (e.g. private browsing)
    }
  };

  const toggleLanguage = () => setLanguage(language === "ja" ? "en" : "ja");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
