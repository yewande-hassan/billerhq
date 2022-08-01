import Navbar from "./navbar";
import Header from "./homeHeader";
import Footer from "./footer";
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
