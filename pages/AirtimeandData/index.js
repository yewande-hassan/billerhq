import React, { useState } from "react";
import { BaseLayout } from "../../component/common/ui";
import Phone from "../../public/images/Phone.svg";
import Flag from "../../public/images/Flag.svg";
import { sendMoney }from "../transferMoney"
import ArrowRight from "../../public/images/ArrowRight.svg";
import styles from "../../styles/AirtimeandData.module.css";

export default function AirtimeandData() {
  // let timeOutId = null;
  // const [selectedMenu, setSelectedMenu] = useState(false);
  // const [toggleBuyAirtime, settoggleBuyAirtime]= useState(false);
  // const [toggleBuyData, settoggleBuyData]= useState(false);

  // const onBlurHandler = () => {
  //   timeOutId = setTimeout(() => {
  //     setSelectedMenu(false);
  //   });
  // };

  // const onFocusHandler = () => {
  //   clearTimeout(timeOutId);
  // };

  // const showBuyAirtime = () =>{
  //   settoggleBuyAirtime(true);
  //   settoggleBuyData(false);
  // }
  // const hideBuyAirtime = () =>{
  //   settoggleBuyAirtime(false);
  // }
  // const renderBuyAirtimeModal = () => {
  //   if (toggleBuyAirtime) {
  //     return <sideNav/>;
  //   }
  // };
  // const showBuyData = () =>{
  //   settoggleBuyData(true);
  //   settoggleBuyAirtime(false);
  // }
  // const hideBuyData = () =>{
  //   settoggleBuyData(false);
  // }
  // const renderBuyDataModal = () => {
  //   if (toggleBuyData) {
  //   }
  // };
  return (
    <div className={`${styles.contain}`}>
      {/* {renderBuyAirtimeModal()} */}
      <div className={`${styles.flex1}`}>
        <div
          className={`d-flex flex-row justify-content-between ${styles.AirtimeandData}`}
        >
          <img src={Phone.src} />
          <h6 className="pt-2">Buy Airtime & Mobile Data</h6>
          <img src={Flag.src} />
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Buy Airtime
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Buy Data
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dflex}>
          <p>Buy Airtime</p>
          <div
            className="dropdown"
            // className={`container-full`}
            // onBlur={() => onBlurHandler()}
            // onFocus={() => onFocusHandler()}
          >
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  MTN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  AIRTEL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  GLO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  9MOBILE
                </a>
              </li>
            </ul>
            {/* <p
                    className={`button --elipses`}
                    onClick={() => showBuyAirtime()}
                    aria-haspopup="true"
                    aria-expanded={selectedMenu}
                  >
              <img src={ArrowRight.src}/>
              </p> */}
          </div>
        </div>
        {/* <div className={styles.dflex}>
          <p>Buy Mobile Data</p>
          <div
            className={`container-full`}
            // onBlur={() => onBlurHandler()}
            // onFocus={() => onFocusHandler()}
          >
            <p
              className={`button --elipses`}
              // onClick={() => showBuyAirtime()}
              // aria-haspopup="true"
              // aria-expanded={selectedMenu}
            >
              <img src={ArrowRight.src} />
            </p>
          </div>
        </div> */}
        <div className={styles.dflex}>
          <p>Buy Data</p>
          <div
            className="dropdown"
            // className={`container-full`}
            // onBlur={() => onBlurHandler()}
            // onFocus={() => onFocusHandler()}
          >
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  MTN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  AIRTEL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  GLO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/EverythingBuy">
                  9MOBILE
                </a>
              </li>
            </ul>
            {/* <p
                    className={`button --elipses`}
                    onClick={() => showBuyAirtime()}
                    aria-haspopup="true"
                    aria-expanded={selectedMenu}
                  >
              <img src={ArrowRight.src}/>
              </p> */}
          </div>
        </div>
      </div>
      <div className={styles.flex2}></div>
    </div>
  );
}
AirtimeandData.Layout = BaseLayout;