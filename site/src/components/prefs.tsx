"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CONTENT, type Lang } from "@/lib/content";

type Theme = "light" | "dark";
type Prefs = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof CONTENT)["es"];
  theme: Theme;
  toggleTheme: () => void;
};

const PrefsContext = createContext<Prefs | null>(null);

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function PrefsProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [theme, setTheme] = useState<Theme>("light");

  // Lee las preferencias guardadas tras hidratar. El tema ya se aplicó antes de pintar (script en layout).
  useEffect(() => {
    try {
      const l = localStorage.getItem("dyl-lang");
      if (l === "es" || l === "en") setLangState(l);
      const th = localStorage.getItem("dyl-theme");
      setTheme(th === "light" || th === "dark" ? th : systemTheme());
    } catch {
      setTheme(systemTheme());
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("dyl-lang", l); } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("dyl-theme", next); } catch {}
  }, [theme]);

  return (
    <PrefsContext.Provider value={{ lang, setLang, t: CONTENT[lang], theme, toggleTheme }}>
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs debe usarse dentro de PrefsProvider");
  return ctx;
}
