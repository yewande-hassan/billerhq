import Navbar from "./LandingPage/navbar";
import Header from "./LandingPage/homeHeader";
import Footer from "./LandingPage/footer";
import HomePage from "../styles/homePage.module.css";
// import SignInModal from "../styles/signInModal.module.css";

export default function home() {
  return (
    <>
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
