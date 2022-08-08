import React, { useState } from "react";
import { BaseLayout } from "../../component/common/ui";
import styles from "../../styles/payBills.module.css";
import PayBillsArrowIcons from "../../public/images/paybillsarrows.png";
import Search from "../../component/common/ui/common/Search";
import DstvModal from "../../component/RechargeDstv/index";

const PayBills = () => {
  const [showDropdown1, setShowDropdown1] =useState(false);
  const [showDropdown2, setShowDropdown2] =useState(false);
  const [showDstv, setShowDstv] = useState(null);
  
  return (
    <>
      <div className={`container-fluid d-flex ${styles.sendMoneyDashboard}`}>
        <div className={`${styles.sendMoneyPopup}`}>
          <div>
            <p className={`${styles.alignment}`} onClick={()=>setShowDropdown1(true)}>
              Cable Tv
              <a href="" className={`${styles.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
            {showDropdown1 ? (
                  <div className={`${styles.cableDropdown}`}>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("Dstv")}}>Dstv</p>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("Gotv")}}>GoTV</p>
                    <p className={`${styles.cableList}`} onClick={()=> {setShowDstv("Startime")}}>Startime</p>
                  </div>
            ):null}
          </div>
          <div>
            <p className={`${styles.alignment}`} onClick={()=>setShowDropdown2(true)}>
              Energy
              <a href="" className={` ${styles.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
            {showDropdown2 ? (
                  <div>
                    <p>IKEDC</p>
                    <p>EKEDC</p>
                    <p>IBEDC</p>
                    <p>KEDC</p>
                    <p>KEDCO</p>
                    <p>EEDC</p>
                    <p>AEDC</p>
                    <p>PHED</p>
                  </div>
            ):null}
          </div>
          <div>
            <p className={`${styles.alignment}`}>
             BET
              <a href="" className={` ${styles.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${styles.alignment}`}>
              Exam
              <a href="" className={` ${styles.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
        </div>
        <div className={`${styles.backgroundImage}`}>
          {
            showDstv != null ? <DstvModal name={showDstv}/> :  <Search height={18} width={20}/>
          }
        </div>
      </div>
    </>
  );
}
export default PayBills;
PayBills.Layout = BaseLayout;
