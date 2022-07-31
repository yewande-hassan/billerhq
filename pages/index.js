import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import HomePage from "../styles/homePage.module.css";

export default function home() {
  return (
    <>
      <div className={` ${HomePage.body}`}>
        <Navbar />
        <Header />
        <Footer />
      </div>
    </>
  );
}
