import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ThemeProvider } from "./context/Theme";

export default function App() {
  const [darkTheme, toggleTheme] = useState(false);

  return (
    <ThemeProvider value={{ darkTheme, toggleTheme: toggleTheme }}>
      <div className={darkTheme ? "dark" : ""}>
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}
