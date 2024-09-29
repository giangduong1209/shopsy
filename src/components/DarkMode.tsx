import { useEffect, useState } from "react";
import Light from "../assets/light.png";
import Dark from "../assets/dark.png";

const DarkMode = () => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element.classList]);

  return (
    <div className="relative">
      <img
        src={Light}
        alt="Light Mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-16 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={Dark}
        alt="Dark Mode"
        onClick={() => setTheme(theme === "light" ? "light" : "light")}
        className="w-16 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
