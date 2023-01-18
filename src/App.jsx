import Navbar from "../src/components/Navbar";
import Content from "../src/components/Content";
import Footer from "../src/components/Footer";

import React, { createContext } from "react";
import { useState } from "react";

import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="page--container" id={theme}>
        <div className="content--wrap">
          <Navbar />
          <div className="light-dark-toggle">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <div className="card--wrap">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// ROUTE STUFF IN HERE???
