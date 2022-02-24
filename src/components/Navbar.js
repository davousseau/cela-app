import LanguageToggle from './LanguageToggle';

/**
 * Navbar.js
 * Navbar for this app.
 * @author davousseau
 */
function Navbar(props) {

  return (
    <nav className="navbar navbar-light bg-white justify-content-between">
      <div className='logo-text'>
        cela
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