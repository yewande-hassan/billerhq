import React from "react";
import styles from "../../../../../styles/SideNav.module.css";
import { Logo } from "../../common";
import Search from "../../../../../component/common/ui/common/Search";
import Avatar from "../../../../../public/images/Avatar.svg";
import ArrowUp from "../../../../../public/icons/ArrowUp.svg";
import Link from "next/link";

export default function Header() {
  return (
<div className={`d-flex flex-row justify-content-between ${styles.dashboardhorizontalWidth}`}>
<Link passHref href="/" _hover={{ textDecor: "none" }}>
  <a>
<Logo height={100} width={200} /> 
</a>
</Link>
<Search height={18} width={20}/>
<div className={`d-flex flex-row ${styles.AvatarSection}`}>
  <img className={`${styles.avatar}`} src={Avatar.src} alt="Avatar" />
  <div>
    <h5 className={`${styles.heading5}`}>Laguda Temitayo</h5>
    <h6 className={`${styles.paragraph}`}>Chief Manager</h6>
  </div>
  <img className={`${styles.arrowUp}`} src={ArrowUp.src} alt="Arrow up" />
</div>
</div>
  );
}