import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ThemeProvider } from "./context/Theme";

export default function App() {
  const [darkTheme, toggleTheme] = useState(false);

  return (
    <ThemeProvider value={{ darkTheme, toggleTheme: toggleTheme }}>
      <div className={`${darkTheme ? "dark" : ""} `}>
        <div className="bg-slate-200 dark:bg-slate-800 dark:text-white">
          <Header />
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}
