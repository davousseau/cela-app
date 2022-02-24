import LanguageToggle from './LanguageToggle';

/**
 * Navbar.js
 * Navbar for this app.
 * @author davousseau
 */
function Navbar(props) {

  /** String that matches the selected language. */
  const SUBTITLE_LINE_1 = props.language === "fr" ? "CONSTRUIT PAR VOUS" : "BUILD BY DOG OWNER";
  const SUBTITLE_LINE_2 = props.language === "fr" ? "POUR VOTRE CHIEN" : "FOR DOG OWNER";

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className='logo-text'>
        cela
        <br />
        <p className='logo-subtitle'>
          {SUBTITLE_LINE_1}
          <br />
          {SUBTITLE_LINE_2}
        </p>
      </div>
      <LanguageToggle setLanguage={props.setLanguage}></LanguageToggle>
    </nav>
  );
}

export default Navbar;