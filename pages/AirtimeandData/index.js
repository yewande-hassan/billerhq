import React from "react";
import { BaseLayout } from "../../component/common/ui";
import Phone from "../../public/images/Phone.svg";
import Flag from "../../public/images/Flag.svg";
import styles from "../../styles/AirtimeandData.module.css";

export default function AirtimeandData() {
  return (
    <div className={`${styles.contain}`}>
        <div className={`${styles.flex1}`}>
          <div className={`d-flex flex-row justify-content-between ${styles.AirtimeandData}`}>
            <img src={Phone.src}/>
            <h6>Buy Airtime & Mobile Data</h6>
            <img src={Flag.src}/>
            </div>
        </div>
        <div className={styles.flex2}>
            <h2>Hello world</h2>
        </div>
    </div>
  )
}
AirtimeandData.Layout = BaseLayout;