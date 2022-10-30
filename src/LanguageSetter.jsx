import React, { useContext } from "react";
import LanguageContext from "./contexts/LanguageContext";
const languageOptions = [{ value: "es" }, { value: "en" }];

const LanguageSetter = () => {
    const { language, setLanguage } = useContext( LanguageContext );

    return (
      <select value={ language } onChange={(e) => setLanguage(e.currentTarget.value)}>
        { languageOptions.map((option, idx) => (
          <option value={option.value} key={idx}>
            {option.value}
          </option>
        ))}
      </select>
    );
}

export default LanguageSetter