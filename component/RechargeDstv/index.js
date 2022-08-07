import React from "react";
import styles from "../../styles/Modal.module.css";
// import green from "../../images/switch.png";

export default function DSTVModal({name}){
    return(
        <>
        <div className={styles.everything}>
      <h6 className={`${styles.modalHeading}`}>Recharge {name}</h6>
      <div className={`${styles.label}`}>
      <p className={`${styles.inputText}`}>Smart Card Number</p>
      <input className={`${styles.cardInput}`} type="text" placeholder="Enter Smart Card Number"/>
      </div>
      <div className={`${styles.label}`}>
        <p className={`${styles.inputText}`}>Amount</p>
        <input className={`${styles.cardInput}`} type="text" placeholder="Amount" />
      </div>
      <div className={`${styles.label}`}>
        <p className={`${styles.inputText}`}>Phone Number</p>
        <input className={`${styles.cardInput}`} type="text" placeholder="Phone Number" />
      </div>
      <div className="beneficiary">
        {/* <img className="green" src={green} alt="" /> */}
        <button className={`btn px-5 mt-3 ${styles.buy}`} type="button">Buy</button>
      </div>
    </div>
        </>
    )
}