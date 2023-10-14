import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./context/theme";

export default function App() {
  const [darkTheme, toggleTheme] = useState(false);

  return (
    <ThemeProvider value={{ darkTheme, toggleTheme }}>
      <div className={darkTheme ? "dark" : ""}>
        <Header />
      </div>
    </ThemeProvider>
  );
}
