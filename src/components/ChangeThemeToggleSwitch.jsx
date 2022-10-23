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
        <label class="switch">
            <input type="checkbox" onChange={() => handleChange()}/>
            <span class="slider round"></span>
        </label>
    </div>
  )
}

export default ChangeThemeToggleSwitch