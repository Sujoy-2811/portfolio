import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ThemeProvider } from "./context/Theme";

export default function App() {
  const [darkTheme, toggleTheme] = useState(true);

  return (
    <ThemeProvider value={{ darkTheme, toggleTheme: toggleTheme }}>
      <div className={`${darkTheme ? "theme-dark " : ""} `}>
        <div className="w-full h-auto bg-skin-fill text-skin-base font-base ">
          <Header />
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}
