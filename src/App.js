/** Resources */
import languageEn from './localization/language-en.json'
import languageFr from './localization/language-fr.json'

/** Styles */
import './App.css';

/** Components and hooks */
import Navbar from './components/Navbar';
import SocialFooter from './components/SocialFooter';
import { useState } from 'react';

/**
 * App.js
 * Main coponent for this app.
 * @author davousseau
 */
function App() {

  /** Array containing the current language and its setter. */
  const [language, setLanguage] = useState("en");

  /** Application language */
  const LOCALIZATION = language === "fr" ? languageFr : languageEn;

  return (
    <div className="App">
      <Navbar localization={LOCALIZATION} setLanguage={setLanguage}></Navbar>
      
      {/* TODO: */}

      <SocialFooter></SocialFooter>
    </div>
  );
}

export default App;