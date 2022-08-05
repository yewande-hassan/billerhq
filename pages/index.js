import Navbar from "./LandingPage/navbar";
import Header from "./LandingPage/homeHeader";
import Footer from "./LandingPage/footer";
import HomePage from "../styles/homePage.module.css";

export default function home() {
  return (
    <>
      <div className={` ${HomePage.body}`}>
        <div>
          <Navbar />
          <Header />
        </div>
        <Footer />
      </div>
    </>
  );
}
