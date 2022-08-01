import Facebook from "../public/images/icn-facebook.png";
import Twitter from "../public/images/icn-twitter.png";
import Instagram from "../public/images/instagram.png";
import Kickstarter from "../public/images/icn-kickstarter.png";
import Producthunt from "../public/images/icn-producthunt.png";
import HomePage from "../styles/homePage.module.css";
import OnlinePyamentImage from "../public/images/Online-payment woman image.png";
import Link from "next/link";

export default function header() {
  return (
    <div>
      <div className={`d-flex ${HomePage.voucher}`}>
        <p className={`ps-3 ${HomePage.voucherText}`}>You have 5 Vouchers!</p>
        <button className={`${HomePage.claimButton}`}>Claim</button>
      </div>
      {/* BODY */}
      <div className={` ${HomePage.bodySection}`}>
        {/* BODY TEXT */}
        <div className={` ${HomePage.homeImageText}`}>
          <p className={`${HomePage.payBills_title}`}>
            Pay bills from the comfort of your Phone
          </p>
          <p className="paybills_text">
            Want to pay bills from the comfort of your phone? Simply use the
            Uniswitch payment platform to make all recurring online payment. .
          </p>
          <Link href="" className="">
            <button className={`${HomePage.payBills_button}`}>
              GET STARTED
            </button>
          </Link>

          <div className={` ${HomePage.socialMedia_links}`}>
            <Link href="#" className="socials">
              <img src={Facebook.src} alt="biller-logo" className="logo" />
            </Link>
            <Link href="#" className="socials">
              <img src={Twitter.src} alt="biller-logo" className="logo" />
            </Link>
            <Link href="#" className="socials">
              <img src={Instagram.src} alt="biller-logo" className="logo" />
            </Link>
            <Link href="#" className="socials">
              <img src={Kickstarter.src} alt="biller-logo" className="logo" />
            </Link>
            <Link href="#" className="socials">
              <img src={Producthunt.src} alt="biller-logo" className="logo" />
            </Link>
          </div>
        </div>
        {/* BODY IMAGE */}
        <div className={`d-none d-md-block ${HomePage.homeImage}`}>
          <img
            src={OnlinePyamentImage.src}
            alt=""
            className="onlinePayment_img"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
