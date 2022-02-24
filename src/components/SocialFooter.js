/**
 * SocialFooter.js
 * Social footer for this app.
 * @author davousseau
 */
function SocialFooter(props) {

  /** Public folder URL */
  const PUBLIC_URL = process.env.PUBLIC_URL;

  return (
    <footer>
      <a href="https://www.facebook.com">
        <img src={PUBLIC_URL + '/images/facebook-192x192.png'} alt="Facebook" height="64" width="64" />
      </a>
      <a href="https://www.instagram.com">
        <img src={PUBLIC_URL + '/images/instagram-192x192.png'} alt="Instagram" height="64" width="64" />
      </a>
      <a href="https://www.twitter.com">
        <img src={PUBLIC_URL + '/images/twitter-192x192.png'} alt="Twitter" height="64" width="64" />
      </a>
    </footer>
  );
}

export default SocialFooter;