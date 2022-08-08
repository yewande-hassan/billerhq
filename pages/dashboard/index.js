import React from "react";
import { BaseLayout } from "../../component/common/ui";
import illustration1 from "../../public/images/illustration1.svg";
import mainCard from "../../public/images/cardsBalance.svg";
import Airtime from "../../public/images/Airtime.svg";
import Threedots from "../../public/images/Threedots.svg";
import Transfer from "../../public/images/Transfer.svg";
import Bills from "../../public/images/Bills.svg";
import CheckStatus from "../../public/images/CheckStatus.svg";
import Transaction from "../../public/images/Transaction.svg";
import Card from "../../public/images/Card.svg";
import Bank from "../../public/images/Bank.svg";
import styles from "../../styles/Dashboard.module.css";
import Single from "../../public/images/ic_chevron2.svg";
import Double from "../../public/images/ic_chevron3.svg";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.texthead}>
          <h5>Welcome Back Laguda!</h5>
          <p className={styles.headerparagraph}>
            Phasellus dui nunc, finibus vitae tincidunt egetconvallis non dolor.
            Donec tortor ex.
          </p>
        </div>
        <div>
          <img
            className={styles.image}
            src={illustration1.src}
            alt="illustration1"
          />
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <div className={styles.section1}>
            <img className={styles.card_balance} src={mainCard.src} />
          </div>
          <div className={styles.different_card}>
            <div className={styles.transactions}>
              <div className={styles.frequent_history}>
                <div className={styles.card_head}>
                  <div className={styles.card_tittle}>
                    <p className={styles.header_tittle}>Frequent Payment</p>
                  </div>
                  <div className={styles.frequent_payment}>
                    <div className={styles.airtime_bill}>
                      <div className={styles.airtime}>
                        <img
                          className={styles.icon_dashboard}
                          src={Airtime.src}
                          alt=""
                        />
                        <p className={styles.dashboard_paragraph}> 0 airtime</p>
                      </div>
                      <div className={`${styles.bill} ${styles.airtime}`}>
                        <img
                          className={styles.icon_dashboard}
                          src={Bills.src}
                          alt=""
                        />
                        <p className={styles.dashboard_paragraph}>1 Bill</p>
                      </div>
                    </div>
                    <div className={styles.transfer}>
                      <img
                        className={styles.icon - 1}
                        src={Transfer.src}
                        alt=""
                      />
                      <p className={styles.dashboard_paragraph}> 0 Transfer</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card_head2}>
                  <div className={styles.card_tittle}>
                    <p className={styles.header_tittle}>Frequent Payment</p>
                  </div>
                  <div className={styles.transaction_history}>
                    <div className={styles.check_status}>
                      <img
                        className={styles.icon2}
                        src={CheckStatus.src}
                        alt=""
                      />
                      <p className={styles.dashboard_paragraph}>Check Status</p>
                    </div>

                    <div className={styles.check_status}>
                      <img
                        className={`${styles.icon7} ${styles.icon3}`}
                        src={Transaction.src}
                        alt=""
                      />
                      <p className={styles.dashboard_para}>
                        Transaction July 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.frequent_history}>
              <div className={styles.card_head}>
                <div className={styles.card_tittle}>
                  <p className={styles.header_tittle}>Frequent Payment</p>
                </div>
                <div className={styles.transaction_history}>
                  <div className={styles.check_status}>
                    <img
                      className={`${styles.icon2} ${styles.icon4}`}
                      src={Card.src}
                      alt=""
                    />
                    <p className={styles.dashboard_paragraph}>card</p>
                  </div>
                  <div className={`${styles.bank} ${styles.check_status}`}>
                    <img
                      className={`${styles.icon2} ${styles.icon4}`}
                      src={Bank.src}
                      alt=""
                    />
                    <p className={styles.dashboard_paragraph}>Bank</p>
                  </div>
                </div>
              </div>{" "}
              <div className={styles.card_head2}>
                <div className={styles.card_tittle}>
                  <p className={styles.header_tittle}>Frequent Payment</p>
                </div>
                <div className={styles.frequent_payment}>
                  <div className={styles.airtime_bill}>
                    <div className={styles.airtime}>
                      <img
                        className={styles.icon_dashboard}
                        src={Airtime.src}
                        alt=""
                      />
                      <p className={styles.dashboard_paragraph}> 0 airtime</p>
                    </div>
                    <div className={`${styles.bill} ${styles.airtime}`}>
                      <img
                        className={styles.icon_dashboard}
                        src={Bills.src}
                        alt=""
                      />
                      <p className={styles.dashboard_paragraph}>1 Bill</p>
                    </div>
                  </div>
                  <div className={styles.transfer}>
                    <img
                      className={styles.icon - 1}
                      src={Transfer.src}
                      alt=""
                    />
                    <p className={styles.dashboard_paragraph}> 0 Transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.section2}>
            <div className=" d-flex flex-row justify-content-between">
              <div className="styles.paymentsection -5 bg-light p-4">
                <h6 className={`styles.texth6`}>Frequent Payments</h6>
                <div className={styles.FrequentPayments}>
                  <div className="styles.airtimebill">
                    <div className='styles.airtime'>
                      <img className= {styles.airtimeimg}src={Airtime.src} />
                      <p>Bill</p>
                    </div>
                    <img src={Bills.src} />
                  </div>
                  <div>
                    <img src={Transfer.src} />
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 rounded">
                <h6 className={`styles.texth6`}>Transaction History</h6>
                <div className="d-flex flex-row justify-content-between">
                  <img src={CheckStatus.src} />
                  <img src={Transaction.src} />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between mt-3">
              <div className="me-5 bg-light p-4 rounded">
                <h6 className={`styles.texth6`}>Payment Methods</h6>
                <div className="d-flex flex-row justify-content-between mt-3">
                  <img className={`styles.img`} src={Card.src} />
                  <img src={Bank.src} />
                </div>
              </div>
              <div className="bg-light p-4 rounded">
                <h6 className={`styles.texth6`}>Recurring Transactions</h6>
                <div>
                  <img src={Airtime.src} />
                  <img src={Bills.src} />
                  <img src={Transfer.src} />
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </section>
        <div className={styles.texts}>
          <h6 className={styles.textsh6}>Payment History</h6>
          <p className={styles.textparagraph}>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <section className={styles.tablesection}>
          <table className={`table mx-5 bg-light ${styles.tables}`}>
            <thead>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="col">Payment ID</th>
                <th scope="col">Date</th>
                <th scope="col">Bank</th>
                <th scope="col">Account Name</th>
                <th scope="col">Account No</th>
                <th scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={`table-body`}>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Jason Peras</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-secondary border border-2 border-secondary">
                    Canceled
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Samantha Cool</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-danger border border-2 border-danger">
                    Pending
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Moenaroh</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-secondary border border-2 border-secondary">
                    Canceled
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Rudy Tabuti</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-danger border border-2 border-danger">
                    Pending
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Alex Johnson</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-danger border border-2 border-danger">
                    Pending
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Historia Fritzz</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-secondary border border-2 border-secondary">
                    Canceled
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Klernium Store</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-success border border-2 border-success">
                    Completed
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" />
                </th>
                <th scope="row">#123412451</th>
                <td>June 1,2020,08:22 AM</td>
                <td>Grounded ID</td>
                <td>Laguda Temitayo Rahmon</td>
                <td>00655511003</td>
                <td>
                  <button className="rounded-pill px-2 bg-success border border-2 border-success">
                    Completed
                  </button>
                </td>
                <td>
                  <div>
                    <img src={Threedots.src} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.pagination_flex}>
            <div className={styles.flex}>
              <p>Showing 10 from 46 data</p>
            </div>
            <div className={styles.pagination}>
              <img src={Double.src} alt="" />
              <p className={styles.pagination_number}>1</p>
              <p className={styles.pagination_number}>2</p>
              <p className={styles.pagination_number}>3</p>
              <p className={styles.pagination_number}>4</p>
              <img src={Single.src} alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
Dashboard.Layout = BaseLayout;