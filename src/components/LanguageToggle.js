/**
 * LanguageToggle.js
 * Language toggle for this app.
 * @author davousseau
 */
function LanguageToggle(props) {

  return (
    <div className="language-toggle">
      <button onClick={() => props.setLanguage("en")}>EN</button>
      |
      <button onClick={() => props.setLanguage("fr")}>FR</button>
    </div>
  );
}

export default LanguageToggle;