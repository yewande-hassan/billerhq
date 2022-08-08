import Navbar from "./LandingPage/navbar";
import Header from "./LandingPage/homeHeader";
import Footer from "./LandingPage/footer";
import HomePage from "../styles/homePage.module.css";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
// import SignInModal from "../styles/signInModal.module.css";

export default function home({ children, show, display }) {
  return (
    <>
      {show != false ? <SignIn /> : null}
      {display != false ? <SignUp /> : null}

      <div>
        <div className={` container-fluid ${HomePage.body}`}>
          <div className={``}>
            <Navbar />
            <Header />
          </div>
        </div>
        <div className={`${HomePage.footerBody}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}
