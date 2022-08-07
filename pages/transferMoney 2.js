import TransferMoney from "../styles/transferMoney.module.css";

export default function transferMoney() {
  return (
    <>
      <div className={` pt-5 ${TransferMoney.formBody}`}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Account Number"
              className={` ${TransferMoney.inputFields}`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Bank"
              className={` ${TransferMoney.inputFields}`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Beneficiary’s Name"
              className={`${TransferMoney.inputFields}`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="₦"
              className={`${TransferMoney.currency}`}
            />
            <input
              type="text"
              placeholder="Amount"
              className={`${TransferMoney.amount} `}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Beneficiary’s Mobile Number"
              className={`${TransferMoney.inputFields}`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Remark (e.g Tranfer to ABC)"
              className={` ${TransferMoney.inputFields}`}
            />
          </div>
          <div className={`"d-flex" `}>
            <p className={`${TransferMoney.saveBeneficiary}`}>
              <input type="checkbox" className="toggle-buttons"></input>
              Save Beneficiary
            </p>
          </div>
          <div>
            <button className={`${TransferMoney.payButton}`}>Pay</button>
          </div>
        </div>
      </div>
    </>
  );
}
