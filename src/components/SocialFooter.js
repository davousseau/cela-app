/**
 * SocialFooter.js
 * Social footer for this app.
 * @author davousseau
 */
function SocialFooter(props) {

  /** Public folder URL */
  const PUBLIC_URL = process.env.PUBLIC_URL;

  return (
    <footer className="social-footer">
      <a href="https://www.facebook.com">
        <img className="social-icon" src={PUBLIC_URL + '/images/facebook-192x192.png'} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com">
        <img className="social-icon" src={PUBLIC_URL + '/images/instagram-192x192.png'} alt="Instagram" />
      </a>
      <a href="https://www.twitter.com">
        <img className="social-icon" src={PUBLIC_URL + '/images/twitter-192x192.png'} alt="Twitter" />
      </a>
    </footer>
  );
}

export default SocialFooter;