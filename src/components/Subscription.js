/**
 * Subscription.js
 * Subscription for this app.
 * @author davousseau
 */
function Subscription(props) {

  return (
    <div className="subscription">
      <div className="row">
        <p className='stay-tuned'>{props.localization.stayTuned} <span className="launch-date">{props.localization.launchDate}</span>.</p>
      </div>
      <div className="row">
          <input type="text" className="form-control form-rounded" placeholder={props.localization.email + "@cela.ca"}/>
          <button type="button" className="btn btn-dark">{props.localization.subscribe}</button>
      </div>
    </div>
  );
}

export default Subscription;