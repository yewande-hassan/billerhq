import React from "react";
import styles from "../../../../../styles/SideNav.module.css";
import { Logo } from "../../common";
import Search from "../../../../../component/common/ui/common/Search";
import Avatar from "../../../../../public/images/Avatar.svg";
import ArrowUp from "../../../../../public/icons/ArrowUp.svg";

export default function Header() {
  return (
<div className={`d-flex flex-row justify-content-between ${styles.dashboardhorizontalWidth}`}>
<Logo height={100} width={200} /> 
<Search height={18} width={20}/>
<div className={`d-flex flex-row ${styles.AvatarSection}`}>
  <img className={`${styles.avatar}`} src={Avatar.src} alt="Avatar" />
  <div>
    <h5>Laguda Temitayo</h5>
    <p>Chief Manager</p>
  </div>
  <img className={`${styles.arrowUp}`} src={ArrowUp.src} alt="Arrow up" />
</div>
</div>
  );
}