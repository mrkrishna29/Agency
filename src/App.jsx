import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Trustedby from "./components/Trustedby";
import Services from "./components/Services";
import Ourwork from "./components/Ourwork";
import Teams from "./components/Teams";
import ContactUs from "./components/Contactus";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trustedby />
      <Services />
      <Ourwork />
      <Teams />
      <ContactUs />
    </div>
  )
}

export default App;
