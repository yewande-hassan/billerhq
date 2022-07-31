import React from "react";
import { BaseLayout } from "../../component/common/ui";
import styles from "../../styles/AirtimeandData.module.css";

export default function AirtimeandData() {
  return (
    <div className={`${styles.contain}`}>
        <div className={styles.flex1}>
            <div>
            <img />
            <h6>Buy Aititme & Mobile Data</h6>
            <img />
            </div>
        </div>
        <div className={styles.flex2}>
            <h2>Hello world</h2>
        </div>
    </div>
  )
}
AirtimeandData.Layout = BaseLayout;