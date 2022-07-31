import React from "react";
import { BaseLayout } from "../../component/common/ui";
import illustration1 from "../../public/images/illustration1.svg";
import mainCard from "../../public/images/mainCard.svg";
import bars from "../../public/images/bars.svg";
import Airtime from "../../public/images/Airtime.svg";
import Bill from "../../public/images/Bills.svg";
import Transfer from "../../public/images/Transfer.svg";
import Bills from "../../public/images/Bills.svg";
import CheckStatus from "../../public/images/CheckStatus.svg";
import Transaction from "../../public/images/Transaction.svg";
import Card from "../../public/images/Card.svg";
import Bank from "../../public/images/Bank.svg";
import styles from "../../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h5>Welcome Back Laguda!</h5>
          <p>Phasellus dui nunc, finibus vitae tincidunt egetconvallis non dolor. Donec tortor ex.</p>
        </div>
        <div>
          <img className={styles.image} src={illustration1.src} alt="illustration1"/>
        </div>
      </header>
      <main>
        <section className={styles.section}>
      <div className={styles.section1}>
        <img src={mainCard.src}/>
        <img src={bars.src}/>
      </div>
      <div className={styles.section2}>
        <div className="d-flex flex-row justify-content-between">
        <div className="me-5 bg-light p-4 rounded">
          <h6 className={`styles.texth6`}>Frequent Payments</h6>
          <div  className={styles.FrequentPayments}>
          <img src={Airtime.src}/>
          <img src={Bills.src}/>
          <img src={Transfer.src}/>
          </div>
        </div>
        <div className="bg-light p-4 rounded">
        <h6 className={`styles.texth6`}>Transaction History</h6>
          <div className="d-flex flex-row justify-content-between">
          <img src={CheckStatus.src}/>
          <img src={Transaction.src}/>
          </div>
        </div>
        </div>
        <div className="d-flex flex-row justify-content-between mt-3">
        <div className="me-5 bg-light p-4 rounded">
        <h6 className={`styles.texth6`}>Payment Methods</h6>
          <div className="d-flex flex-row justify-content-between mt-3">
          <img className={`styles.img`} src={Card.src}/>
          <img src={Bank.src}/>
          </div>
        </div>
        <div className="bg-light p-4 rounded">
        <h6 className={`styles.texth6`}>Recurring Transactions</h6>
          <div>
          <img src={Airtime.src}/>
          <img src={Bills.src}/>
          <img src={Transfer.src}/>
          </div>
        </div>
        </div>
      </div>
      </section>
      <h6>Payment History</h6>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <section>
      <table className={`table mx-5 bg-light ${styles.tables}`}>
  <thead>
    <tr>
      <th scope="col">Payment ID</th>
      <th scope="col">Date</th>
      <th scope="col">Bank</th>
      <th scope="col">Account Name</th>
      <th scope="col">Account No</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Jason Peras</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Samantha Cool</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Pending
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Moenaroh</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Rudy Tabuti</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Alex Johnson</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Historia Fritzz</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Klernium Store</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
    <tr>
      <th scope="row">#123412451</th>
      <td>June 1,2020,08:22 AM</td>
      <td>Grounded ID</td>
      <td>Laguda Temitayo Rahmon</td>
      <td>00655511003</td>
      <td><button>
        Canceled
        </button></td>
    </tr>
  </tbody>
</table>
      </section>
      </main>
    </div>
  )
}
Dashboard.Layout = BaseLayout;