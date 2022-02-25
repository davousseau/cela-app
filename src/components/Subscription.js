import { useState } from 'react';
import { withFirestore } from 'react-firestore';
import { doc, setDoc } from 'firebase/firestore';
import db from '../firebase';

/**
 * Subscription.js
 * Subscription for this app.
 * @author davousseau
 */
function Subscription(props) {

  /** Array containing the current email and its setter. */
  const [email, setEmail] = useState('');

  /** Send the new subscription to Firebase. */
  const addSubscription = async (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '') {
      alert(props.localization.emailEmpty)
    } else if ( !regex.test(email)) {
      alert(props.localization.emailInvalid)
    } else {
      await setDoc(doc(db, "subscriptions", email), {
        timestamp: new Date().toLocaleString()
      }).then(alert(props.localization.subscribeWithSuccess));
    }
  };

  /** Handle change event on the input. */
  const handleChange = event => {
    setEmail(event.target.value);
  };

  /** Handle the click of the button. */
  const handleSubscribe = event => {
    event.preventDefault();
    addSubscription(email);
  };

  return (
    <div className="subscription">
      <div className="row">
        <p className='stay-tuned'>{props.localization.stayTuned} <span className="launch-date">{props.localization.launchDate}</span>.</p>
      </div>
      <div className="row">
        <input className="form-control form-rounded" value={email} type="email" onChange={handleChange} placeholder={props.localization.email + "@cela.ca"} />
        <button className="btn btn-dark" type="button" onClick={handleSubscribe}>{props.localization.subscribe}</button>
      </div>
    </div>
  );
}

export default withFirestore(Subscription);;