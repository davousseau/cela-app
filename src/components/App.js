import Navbar from './Navbar';
import SocialFooter from './SocialFooter';
import Subscription from './Subscription';
import { useState } from 'react';
import languageEn from '../localization/language-en.json';
import languageFr from '../localization/language-fr.json';

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
      <div className='row align-items-center'>
        <div className='col-sm'>
          <Subscription localization={LOCALIZATION}></Subscription>
        </div>
        <div className='col-sm'>
          <img className="brand-image" src={PUBLIC_URL + '/images/five-assorted-breed-dogs.png'} alt="Germain Shepherd Puppy" />
        </div>
      </div>
      <SocialFooter></SocialFooter>
    </div>
  );
}

export default App;