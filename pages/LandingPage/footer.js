import AppStore from "../../public/images/applestore.png";
import GooglePlay from "../../public/images/googleapp.png";
import Link from "next/link";
import HomePage from "../../styles/homePage.module.css";

export default function footer() {
  return (
    <div>
      {/* <style>{"body { background-color: #FFF; }"}</style> */}

      <div className={`container-fluid ${HomePage.footer}`}>
        <div className={` pt-5${HomePage.stores}`}>
          <p className="text-muted mb-0 ">Download the App:</p>
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
        <div className="d-flex pt-5 mt-0">
          <div>
            <p className={` text-muted ${HomePage.emailSubscriptionText}`}>
              Subscribe to get new updates
            </p>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                placeholder="Your Email Address..."
                className={`${HomePage.emailInput}`}
              />
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
    </div>
  );
}
