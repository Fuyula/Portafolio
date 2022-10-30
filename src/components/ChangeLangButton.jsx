import '../styles/components/lang_switcher.scss'
import React, { useContext, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";

const ChangeLangButton = () => {
    const { language, setLanguage } = useContext( LanguageContext );
    const [ changeLanguageText, setChangeLanguageText ] = useState("en");
    const handleChange = () => {
        if (language === "es"){
            setLanguage("en");
            setChangeLanguageText("es");
        } 
        else {
            setLanguage("es");
            setChangeLanguageText("en");
        }
    }
      return (
        <div className='switch-lang'>
            <button onClick={() => handleChange()} className='switch-lang-button'>
                { changeLanguageText.toUpperCase() }
            </button>
        </div>
      )
}

export default ChangeLangButton