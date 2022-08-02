import React from "react";
import Navheader from "../component/common/ui/common/Header/index.js";
import SendMoney from "../styles/sendMoney.module.css";
import PagesBackground from "../public/images/pagesbackground.png";
import { SideNav } from "../component/common/ui/common";
import TransferMoney from "../public/images/transferMoney.png";
import Flag from "../public/images/flag.png";
import DropdownIcon from "../public/images/dropdownicon.png";
import RightDropdownIcon from "../public/images/rightdropdown.png";

import Link from "next/link.js";

export default function sendMoney() {
  return (
    <>
      <Navheader />
      <div className={` "d-flex" ${SendMoney.sendMoneyDashboard}`}>
        <div className={`${SendMoney.sidenav}`}>
          <SideNav />
        </div>
        <div className={` ${SendMoney.sendMoneyPopup}`}>
          <div className={`  d-flex ${SendMoney.line}`}>
            <div>
              <p className={` "d-flex pe-5" ${SendMoney.transfermoney}`}>
                <img
                  src={TransferMoney.src}
                  className={`${SendMoney.moneyIcon}`}
                />
                Transfer Money
              </p>

              <img src={Flag.src} className={` ${SendMoney.flagImg}`} />
              <Link href="">
                <img src={DropdownIcon.src} alt="" className="ps-3" />
              </Link>
            </div>
          </div>
          <div>
            <p>
              Transfer to Account
              <Link href="/transferMoney" className={` ${SendMoney.flagImg}`}>
                <img src={RightDropdownIcon.src} alt="" className="ps-3" />
              </Link>
            </p>
          </div>
        </div>
        <div className={`${SendMoney.backgroundImage}`}>
          <img src={PagesBackground.src} />
        </div>
      </div>
    </>
  );
}
