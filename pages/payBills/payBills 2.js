import React from "react";
import Navheader from "../../component/common/ui/common/Header/index.js";
import SendMoney from "../styles/sendMoney.module.css";
import PagesBackground from "../public/images/pagesbackground.png";
import { SideNav } from "../../component/common/ui/common";
import PayBillsArrowIcons from "../public/images/paybillsarrows.png";

export default function payBills() {
  return (
    <>
      <Navheader />
      <div className={` "d-flex" ${SendMoney.sendMoneyDashboard}`}>
        <div className={`${SendMoney.sidenav}`}>
          <SideNav />
        </div>
        <div className={` ${SendMoney.sendMoneyPopup}`}>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Aid Grants and Donations
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Airtime and Data
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Airtime Top up
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Associations and Societies
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Cable Tv
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Credit and Loans
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Associations and Societies
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Event Ticket
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Internet Sevices
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
            </p>
          </div>
          <div>
            <p className={`${SendMoney.alignment}`}>
              Utilities
              <a href="" className={` ${SendMoney.flagImg}`}>
                <img src={PayBillsArrowIcons.src} alt="" className="ps-3" />
              </a>
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
