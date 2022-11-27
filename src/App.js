import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState();
  return (
    <div className="App">
      <textarea
        className="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellcheck="false"
        placeholder="Markdown code..."/>
      <ReactMarkdown children={input} className="markdown"/>
    </div>
  );
}

export default App;
