import React, { useState, useEffect } from "react";
import LanguageContext, { initialLangState } from "./LanguageContext";
import en from '../languages/en';
import es from '../languages/es';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialLangState.language);
    const [currentLanguage, setCurrentLanguage ] = useState({
        "es": es,
        "en": en
    })

    useEffect(() => {
      const localStorage = window.localStorage;
      const savedLanguageLocal = localStorage.getItem("globalLanguage");
  
      if (!!savedLanguageLocal) {
        setLanguage(savedLanguageLocal);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("globalLanguage", language);
    }, [language]);
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage, currentLangData: currentLanguage[language] }}>
        <div className={`language--${ language }`}>{ children }</div>
      </LanguageContext.Provider>
    );
}

export default LanguageProvider