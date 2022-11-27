import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React, { createContext, useState } from 'react';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [input, setInput] = useState();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <textarea
          className="textarea"
          id={theme}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellcheck="false"
          placeholder="Markdown code..."/>
        <div className="mark" id={theme}>
          <ReactMarkdown children={input} className="markdown" remarkPlugins={[remarkGfm]}/>
        </div>
        <div className="themeBtn">
          <button onClick={toggleTheme} id={theme}>{theme === "light" ? "Light Mode" : "Dark Mode"}</button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;