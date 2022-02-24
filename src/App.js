/** Resources */
import languageEn from './localization/language-en.json'
import languageFr from './localization/language-fr.json'

/** Styles */
import './App-fonts.css'
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

  /** Public folder URL */
  const PUBLIC_URL = process.env.PUBLIC_URL;

  return (
    <div>
      <Navbar localization={LOCALIZATION} setLanguage={setLanguage}></Navbar>
      <div className='row'>
        <div className='col-lg'>
          {/* TODO: */}
        </div>
        <div className='col-lg'>
          <img className="brand-image" src={PUBLIC_URL + '/images/five-assorted-breed-dogs.png'} alt="Germain Shepherd Puppy" />
        </div>
      </div>
      <SocialFooter></SocialFooter>
    </div>
  );
}

export default App;