import React, { useState } from "react";
import { BaseLayout } from "../../component/common/ui";
import Phone from "../../public/images/Phone.svg";
import Flag from "../../public/images/Flag.svg";
import PayBillsArrowIcons from "../../public/images/paybillsarrows.png";
import Search from "../../component/common/ui/common/Search";
import styles from "../../styles/payBills.module.css";
import EverythingBuy from "../../component/RechargeAirtime/EverythingBuy";

export default function AirtimeandData() {
  const [showDropdown1, setShowDropdown1] =useState(false);
  const [showDropdown2, setShowDropdown2] =useState(false);
  const [showDstv, setShowDstv] = useState(null);
  return (
    <div className={`container-fluid d-flex ${styles.sendMoneyDashboard}`}>
      <div className={`${styles.sendMoneyPopup}`}>
        <div className={`d-flex flex-direction-row justify-content-between mb-3 ${styles.line}`}
        >
          <img src={Phone.src} />
          <h6 className="pt-2">Buy Airtime & Mobile Data</h6>
          <img src={Flag.src} />
        </div>
        <div>
            <p className={`${styles.alignment}`} onClick={()=>setShowDropdown1(true)}>
              Buy Airtime
              <a href="" className={`${styles.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
            {showDropdown1 ? (
                  <div className={`${styles.cableDropdown}`}>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("Mtn")}}>Mtn</p>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("Globacom")}}>Globacom</p>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("Airtel")}}>Airtel</p>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("9mobile")}}>9mobile</p>
                  </div>
            ):null}
          </div>
          <div>
            <p className={`${styles.alignment}`} onClick={()=>setShowDropdown2(true)}>
              Buy Mobile Data
              <a href="" className={` ${styles.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
            {showDropdown2 ? (
                  <div>
                    <p>Mtn</p>
                    <p>Airtel</p>
                    <p>Globacom</p>
                    <p>9mobile</p>
                  </div>
            ):null}
          </div>
        </div>
        <div className={`${styles.backgroundImage}`}>
          {
            showDstv != null ? <EverythingBuy name={showDstv} /> : null
          }
        </div>
      </div>

  );
       
}
AirtimeandData.Layout = BaseLayout;