import '../styles/components/theme_toggle_switch.scss'
import React, { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

const ChangeThemeToggleSwitch = () => {
const { theme, setTheme } = useContext(ThemeContext);
const handleChange = () => {
    if (theme === "light"){
        setTheme("dark");
    } 
    else {
        setTheme("light");
    }
}
  return (
    <div>
        <label className = "switch">
            <input type="checkbox" onChange={() => handleChange()}/>
            <span className = "slider round"></span>
        </label>
    </div>
  )
}

export default ChangeThemeToggleSwitch