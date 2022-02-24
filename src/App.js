/** Resources */
import languageEn from './localization/language-en.json'
import languageFr from './localization/language-fr.json'
import logo from './images/logo.svg';

/** Styles */
import './App.css';

/** Components and hooks */
import Navbar from './components/Navbar';
import { useState } from 'react';

/**
 * App.js
 * Main coponent for this app.
 * @author davousseau
 */
function App() {

  /** Array containing the current language and its setter. */
  const [language, setLanguage] = useState("en");

  const localization = language === "fr" ? languageFr : languageEn;

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} localization={localization}></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;