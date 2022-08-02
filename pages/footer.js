import AppStore from "../public/images/applestore.png";
import GooglePlay from "../public/images/googleapp.png";
import Link from "next/link";
import HomePage from "../styles/homePage.module.css";

export default function footer() {
  return (
    <div>
      <div className={` ${HomePage.footer}`}>
        <div className={`${HomePage.stores}`}>
          <p className="text-muted">Download the App:</p>
          <Link href="#">
            <img
              src={AppStore.src}
              alt="appStoreButton"
              className={`${HomePage.appStore}`}
            />
          </Link>
          <Link href="#">
            <img
              src={GooglePlay.src}
              alt="googlePlayButton"
              className={`${HomePage.googleStore}`}
            />
          </Link>
        </div>
        <div className="d-flex ">
          <div>
            <p className={` text-muted ${HomePage.emailSubscriptionText}`}>
              Subscribe to get new updates
            </p>
            <input
              type="text"
              placeholder="Your Email Address..."
              className={`${HomePage.emailInput}`}
            />
            </div>
            <div>
            <button
              type="submit"
              className={`${HomePage.emailSubscriptionButton}`}
            >
              SUBSCRIBE
            </button>
            </div>
          </div>
        </div>
      </div>

  );
}
