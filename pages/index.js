import Navbar from "./LandingPage/navbar";
import Header from "./LandingPage/homeHeader";
import Footer from "./LandingPage/footer";
import HomePage from "../styles/homePage.module.css";
import Signup from "../pages/signUp";

// import SignInModal from "../styles/signInModal.module.css";

export default function home({ show, signup }) {
  return (
    <>
      {show != false ? <Signup /> : false}
      <div className={` container-fluid ${HomePage.body}`}>
        <div className={``}>
          <Navbar />
          <Header />
        </div>
      </div>
      <div className={`${HomePage.footerBody}`}>
        <Footer />
      </div>
    </>
  );
}
