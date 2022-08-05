import Logo from "../../public/images/billerHQ-logo.png";
import Link from "next/link";
import HomePage from "../../styles/homePage.module.css";

export default function navbar() {
  return (
    <div>
      <div
        className={` d-flex justify-content-between ${HomePage.home_page_nav}`}
      >
        <div>
          <Link className="navbar-brand" href="/">
            <img src={Logo.src} alt="biller-logo" className="logo" />
          </Link>
        </div>

        <div className={`"d-flex"`}>
          <Link className={`${HomePage.signInButton}`} href="/signIn">
            Sign in
          </Link>

          <Link href="/signUp">
            <button className={` btn ${HomePage.signUpButton}`}>
              Sign Up With Email
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
