/**
 * LanguageToggle.js
 * Toggle to change the language.
 * @param {*} props Required properties
 * @returns <div> LanguageToggle
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