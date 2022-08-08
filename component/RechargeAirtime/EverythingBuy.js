import React, { useState } from "react";
import styles from "../../styles/EverythingBuy.module.css";

export default function EverythingBuy({name}) {
  return (
    <>
      <div className={styles.beforeevery}>
        <div className={styles.everything}>
          <h6 className={styles.buytext}>{name}</h6>
          <input
            className={styles.mobile}
            type="number"
            placeholder="Mobile Number"
          />
          <p className={styles.post}>Amount</p>
          <div className={styles.naira}>
            <p className={styles.nig}>&#8358;</p>
            <input
              className={styles.num}
              type="Amount"
              placeholder="Amount"
            />
          </div>
          <div className={styles.beneficiary}>
            {/* <img className={styles.green} src={green} alt="" /> */}
            <button className={styles.green}></button>
            <button className={styles.butt}></button>
            <p className={styles.save}>Save Beneficiary</p>
          </div>
          <div className={styles.pay}>Pay</div>
        </div>
      </div>
    </>
  );
}

// EverythingBuy.Layout = BaseLayout;
