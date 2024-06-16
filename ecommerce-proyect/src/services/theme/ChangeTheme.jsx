import React from 'react'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ChangeTheme() {

  //theme
  const [theme, setTheme] = useState(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(preveTheme => preveTheme == "light" ? "dark" : "light")
  }

  return (
    <div>
        <button className="absolute top-4 right-4 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700"
        onClick={handleChangeTheme}>
          <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </button>
    </div>
  )
}

export default ChangeTheme
