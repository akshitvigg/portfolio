"use client"
import { createContext, ReactNode, useContext, useState } from "react";

type Language = "en" | "jp"

interface LanguageContextType {
  lang: Language,
  setLang: (lang: Language) => void;
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)


export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  const toggleLang = () => {
    setLang(lang === "en" ? "jp" : "en")
  }

  return (
    < LanguageContext.Provider value={{ lang, setLang, toggleLang }
    }>
      {children}
    </LanguageContext.Provider >

  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}


