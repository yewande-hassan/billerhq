import React from "react";
// import { BaseLayout } from "../component/common/ui";
import Navheader from "../component/common/ui/common/Header/index.js";
import SendMoney from "../styles/sendMoney.module.css";
import PagesBackground from "../public/images/pagesbackground.png";
import { SideNav } from "../component/common/ui/common";

export default function sendMoney() {
  return (
    <>
      <Navheader />
      <div className={` "d-flex" ${SendMoney.sendMoneyDashboard}`}>
        <div className={`${SendMoney.sidenav}`}>
          <SideNav />
        </div>
        <div className={`${SendMoney.sendMoneyPopup}`}>
          <div>
            <p>
              Transfer Money Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reiciendis sequi doloremque quisquam in, illum dolore nemo,
              voluptate quasi dolorum fugiat delectus repellat similique
              assumenda. Voluptatem amet fuga laboriosam fugit dolorem! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              exercitationem reiciendis maiores fugit est quia, deleniti ipsum
              tenetur sapiente harum temporibus voluptas expedita cum saepe
              perspiciatis consectetur aperiam laborum molestiae.
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
// sendMoney.Layout = BaseLayout;

/* <div className={`${SendMoney.contain}`}>
  <div className={SendMoney.flex1}>
    <div>
      <img src={PagesBackgroung.src} />
      <h6>Buy Airtime & Mobile Data</h6>
      <img />
    </div>
  </div>
</div>; */
