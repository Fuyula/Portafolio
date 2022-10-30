import React from 'react'
import es from '../languages/es';

export const initialLangState = {
    language: "es",
    setLanguage: () => null,
    currentLangData: es,
};

const LanguageContext = React.createContext( initialLangState );
export default LanguageContext;