import LanguageToggle from './LanguageToggle';

/**
 * Navbar.js
 * Simple navigation bar for the language toggle.
 * @param {*} props Required properties
 * @returns <div> Navbar
 */
function Navbar(props) {

  return (
    <nav className="navbar navbar-light bg-white justify-content-between">
      <div className='logo-text'>
        Cela
        <br />
        <p className='logo-subtitle'>
          {props.localization.subtitleLine1}
          <br />
          {props.localization.subtitleLine2}
        </p>
      </div>
      <LanguageToggle setLanguage={props.setLanguage}></LanguageToggle>
    </nav>
  );
}

export default Navbar;