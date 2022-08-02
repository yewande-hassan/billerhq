import React from "react";
import styles from "../../../../../styles/SideNav.module.css";
import Header from "../../common/Header";
import Link from "next/link";
export default function SideNav() {
  return (
    <div className={`position-fixed container-fluid top-0 start-0`}>
      <Header />
      <div className={`position-fixed ${styles.dashboardWidth}`}>
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.bg}`}>
          <div className={`d-flex flex-column ${styles.nav}`}>
            <div className={styles.flex}>
              <div className={styles.link1}>
          <Link passHref href="/dashboard" _hover={{ textDecor: "none" }}>
            <div className="d-flex  align-items-baseline  flex-column mx-4">
              <div
                style={{
                  marginRight: "12px",
                }}
              >
             <svg 
             width="47" 
             viewBox="0 0 47 42" 
             fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path 
              d="M44.5531 14.6609C43.3892 11.9059 41.7017 9.40289 39.5844 7.29062C37.4721 5.17326 34.9691 3.48583 32.2141 2.32187C29.3519 1.11074 26.3188 0.5 23.1875 0.5C20.0562 0.5 17.0231 1.11074 14.1609 2.32187C11.4059 3.48583 8.90289 5.17326 6.79062 7.29062C4.67326 9.40289 2.98583 11.9059 1.82187 14.6609C0.610742 17.5231 0 20.5562 0 23.6875C0 30.5558 3.01748 37.0255 8.27607 41.4456L8.36406 41.5181C8.66426 41.7665 9.04209 41.9062 9.43027 41.9062H36.9499C37.3381 41.9062 37.7159 41.7665 38.0161 41.5181L38.1041 41.4456C43.3575 37.0255 46.375 30.5558 46.375 23.6875C46.375 20.5562 45.7591 17.5231 44.5531 14.6609ZM21.6348 6.71094C21.6348 6.4832 21.8211 6.29688 22.0488 6.29688H24.3262C24.5539 6.29688 24.7402 6.4832 24.7402 6.71094V10.8516C24.7402 11.0793 24.5539 11.2656 24.3262 11.2656H22.0488C21.8211 11.2656 21.6348 11.0793 21.6348 10.8516V6.71094ZM10.6621 24.8262C10.6621 25.0539 10.4758 25.2402 10.248 25.2402H6.10742C5.87969 25.2402 5.69336 25.0539 5.69336 24.8262V22.5488C5.69336 22.3211 5.87969 22.1348 6.10742 22.1348H10.248C10.4758 22.1348 10.6621 22.3211 10.6621 22.5488V24.8262ZM15.3565 14.2417L13.7469 15.8514C13.6691 15.9284 13.564 15.9717 13.4544 15.9717C13.3449 15.9717 13.2398 15.9284 13.162 15.8514L10.2325 12.9219C10.1555 12.8441 10.1122 12.739 10.1122 12.6294C10.1122 12.5199 10.1555 12.4148 10.2325 12.337L11.8422 10.7273C12.0026 10.5669 12.2666 10.5669 12.4271 10.7273L15.3565 13.6568C15.517 13.8173 15.517 14.0813 15.3565 14.2417ZM30.4232 18.5687L26.0497 22.9422C26.3085 23.9101 26.0601 24.9814 25.2992 25.7423C25.0302 26.0118 24.7108 26.2256 24.3591 26.3714C24.0074 26.5173 23.6304 26.5924 23.2496 26.5924C22.8689 26.5924 22.4918 26.5173 22.1402 26.3714C21.7885 26.2256 21.469 26.0118 21.2 25.7423C20.9305 25.4733 20.7167 25.1538 20.5708 24.8021C20.425 24.4504 20.3499 24.0734 20.3499 23.6927C20.3499 23.3119 20.425 22.9349 20.5708 22.5832C20.7167 22.2315 20.9305 21.912 21.2 21.6431C21.5594 21.2826 22.0075 21.0234 22.4992 20.8916C22.9909 20.7598 23.5086 20.7602 24.0001 20.8926L28.3736 16.519C28.5341 16.3586 28.798 16.3586 28.9585 16.519L30.4232 17.9838C30.5837 18.1442 30.5837 18.403 30.4232 18.5687ZM32.6488 15.8565L31.0392 14.2469C30.9621 14.1691 30.9189 14.064 30.9189 13.9544C30.9189 13.8449 30.9621 13.7398 31.0392 13.662L33.9687 10.7325C34.1291 10.5721 34.3931 10.5721 34.5535 10.7325L36.1632 12.3422C36.3236 12.5026 36.3236 12.7666 36.1632 12.9271L33.2337 15.8565C33.1559 15.9336 33.0508 15.9768 32.9413 15.9768C32.8317 15.9768 32.7267 15.9336 32.6488 15.8565ZM40.4746 24.8262C40.4746 25.0539 40.2883 25.2402 40.0605 25.2402H35.9199C35.6922 25.2402 35.5059 25.0539 35.5059 24.8262V22.5488C35.5059 22.3211 35.6922 22.1348 35.9199 22.1348H40.0605C40.2883 22.1348 40.4746 22.3211 40.4746 22.5488V24.8262Z" 
              fill="#9BC94A"
              />
            </svg>
              </div>
              <a className={`navbarbrand ml-5 ${styles.link}`}>Dashboard</a>
            </div>
          </Link>

              </div>
              <div className={styles.link1}>
                <Link
                  passHref
                  href="/AirtimeandData"
                  _hover={{ textDecor: "none" }}
                >
                  <div className="d-flex  align-items-baseline flex-column m-4">
                    <div
                      style={{
                        marginRight: "12px",
                      }}
                    >
                      <svg
                        width="33"
                        height="51"
                        viewBox="0 0 33 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.875 6.75C0.875 5.0924 1.53348 3.50269 2.70558 2.33058C3.87768 1.15848 5.4674 0.5 7.125 0.5L25.875 0.5C27.5326 0.5 29.1223 1.15848 30.2944 2.33058C31.4665 3.50269 32.125 5.0924 32.125 6.75V44.25C32.125 45.9076 31.4665 47.4973 30.2944 48.6694C29.1223 49.8415 27.5326 50.5 25.875 50.5H7.125C5.4674 50.5 3.87768 49.8415 2.70558 48.6694C1.53348 47.4973 0.875 45.9076 0.875 44.25V6.75ZM19.625 41.125C19.625 40.2962 19.2958 39.5013 18.7097 38.9153C18.1237 38.3292 17.3288 38 16.5 38C15.6712 38 14.8763 38.3292 14.2903 38.9153C13.7042 39.5013 13.375 40.2962 13.375 41.125C13.375 41.9538 13.7042 42.7487 14.2903 43.3347C14.8763 43.9208 15.6712 44.25 16.5 44.25C17.3288 44.25 18.1237 43.9208 18.7097 43.3347C19.2958 42.7487 19.625 41.9538 19.625 41.125Z"
                          fill="#9BC94A"
                        />
                      </svg>
                    </div>
                    <a className={`navbarbrand ${styles.link} `}>
                      Buy Airtime & Data
                    </a>
                  </div>
                </Link>
              </div>
              <div>
                <Link passHref href="/sendMoney" _hover={{ textDecor: "none" }}>
                  <div className="d-flex  align-items-baseline flex-column m-4">
                    <div
                      style={{
                        marginRight: "12px",
                      }}
                    >
                      <svg
                        width="50"
                        height="40"
                        viewBox="0 0 50 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41.4609 1.03574C42.1806 0.321433 43.3444 0.321433 43.9952 1.03566L48.8952 5.91236C49.3086 6.2553 49.5 6.72094 49.5 7.20563C49.5 7.69108 49.3086 8.15901 48.8952 8.43336L43.9952 13.3107C43.3444 14.0881 42.1806 14.0881 41.4609 13.3107C40.7489 12.663 40.7489 11.5046 41.4609 10.7882L43.2295 8.96682H29.9C28.8817 8.96682 28.0625 8.21235 28.0625 7.20563C28.0625 6.19586 28.8817 5.37661 29.9 5.37661L43.2295 5.30878L41.4609 3.62228C40.7489 2.9082 40.7489 1.74982 41.4609 1.03574ZM8.47016 29.1622L6.77353 30.9836L20.0311 30.915C21.1183 30.915 21.8686 31.7991 21.8686 32.7441C21.8686 33.8186 21.1183 34.5731 20.0311 34.5731L6.7743 34.6417L8.47016 36.3945C9.25109 37.1108 9.25109 38.2692 8.47016 38.917C7.81938 39.6943 6.65562 39.6943 5.93823 38.917L1.03816 34.0396C0.69355 33.7653 0.499923 33.3004 0.5 32.7441C0.5 32.3249 0.693627 31.86 1.03823 31.5171L5.93823 26.6397C6.65562 25.931 7.81938 25.931 8.47016 26.6397C9.25109 27.3561 9.25109 28.5145 8.47016 29.1622ZM7.78109 5.37737H26.3705C26.0795 5.92455 25.9188 6.54642 25.9188 7.1378C25.9188 9.39359 27.7027 11.1007 29.9 11.1007H37.3342C37.5869 12.5029 38.3908 13.6461 39.5009 14.3624C39.6311 14.5453 39.7842 14.7206 39.945 14.8883C41.4992 16.4353 44.0258 16.4353 45.58 14.8883L47.05 13.4174V29.7643C47.05 32.4545 44.8527 34.6417 42.15 34.6417H23.6295C23.9205 34.093 24.0123 33.4757 24.0123 32.7441C24.0123 30.6255 22.2973 28.7812 20.0311 28.7812L12.6658 28.8498C12.4055 27.5161 11.6092 26.373 10.4991 25.6566C10.3689 25.4737 10.2158 25.2984 10.055 25.1308C8.50078 23.5837 5.97728 23.5837 4.4223 25.1308L2.88109 26.6016V10.2548C2.88109 7.56076 5.14352 5.37737 7.78109 5.37737ZM7.78109 15.1321C10.5527 15.1321 12.6811 12.9449 12.6811 10.2548H7.78109V15.1321ZM42.15 29.7643V24.8869C39.4473 24.8869 37.25 27.0741 37.25 29.7643H42.15ZM24.9311 27.3256C29.0578 27.3256 32.35 24.0486 32.35 20.0095C32.35 15.9019 29.0578 12.6934 24.9311 12.6934C20.8733 12.6934 17.5811 15.9019 17.5811 20.0095C17.5811 24.0486 20.8733 27.3256 24.9311 27.3256Z"
                          fill="#9BC94A"
                        />
                      </svg>
                    </div>
                    <a className={`navbarbrand ${styles.link} `}>Send Money</a>
                  </div>
                </Link>
              </div>
              <div>
                <Link passHref href="/payBills" _hover={{ textDecor: "none" }}>
                  <div className="d-flex  align-items-baseline flex-column m-4">
                    <div
                      style={{
                        marginRight: "12px",
                      }}
                    >
                      <svg
                        width="46"
                        height="35"
                        viewBox="0 0 46 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.5835 21.6666V4.99992C37.5835 2.70825 35.7085 0.833252 33.4168 0.833252H4.25016C1.9585 0.833252 0.0834961 2.70825 0.0834961 4.99992V21.6666C0.0834961 23.9583 1.9585 25.8333 4.25016 25.8333H33.4168C35.7085 25.8333 37.5835 23.9583 37.5835 21.6666ZM18.8335 19.5833C15.3752 19.5833 12.5835 16.7916 12.5835 13.3333C12.5835 9.87492 15.3752 7.08325 18.8335 7.08325C22.2918 7.08325 25.0835 9.87492 25.0835 13.3333C25.0835 16.7916 22.2918 19.5833 18.8335 19.5833ZM45.9168 7.08325V29.9999C45.9168 32.2916 44.0418 34.1666 41.7502 34.1666H6.3335V29.9999H41.7502V7.08325H45.9168Z"
                          fill="#9BC94A"
                        />
                      </svg>
                    </div>
                    <a className={`navbarbrand ${styles.link} `}>Pay Bills</a>
                  </div>
                </Link>
              </div>
              <div>
                <Link passHref href="/pay_bills" _hover={{ textDecor: "none" }}>
                  <div className="d-flex  align-items-baseline flex-column m-4">
                    <div
                      style={{
                        marginRight: "12px",
                      }}
                    >
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.2293 22.5833V16.3333C12.2293 11.4583 16.2085 7.47917 21.0835 7.47917H24.6668C24.396 3.41667 21.0418 0.1875 16.9168 0.1875H8.5835C4.271 0.1875 0.770996 3.6875 0.770996 8V33C0.770996 37.3125 4.271 40.8125 8.5835 40.8125H16.9168C21.2293 40.8125 24.7293 37.3125 24.7293 33V31.4375H21.0835C16.2085 31.4375 12.2293 27.4583 12.2293 22.5833ZM14.8335 37.1667H10.6668C9.81266 37.1667 9.10433 36.4583 9.10433 35.6042C9.10433 34.75 9.81266 34.0417 10.6668 34.0417H14.8335C15.6877 34.0417 16.396 34.75 16.396 35.6042C16.396 36.4583 15.6877 37.1667 14.8335 37.1667Z"
                          fill="#9BC94A"
                        />
                        <path
                          d="M33.5837 10.6042H21.0837C17.917 10.6042 15.3545 13.1667 15.3545 16.3334V16.8542H39.3128V16.3334C39.3128 13.1667 36.7503 10.6042 33.5837 10.6042Z"
                          fill="#9BC94A"
                        />
                        <path
                          d="M15.3545 22.5834C15.3545 25.7501 17.917 28.3126 21.0837 28.3126H33.5837C36.7503 28.3126 39.3128 25.7501 39.3128 22.5834V19.9792H15.3545V22.5834Z"
                          fill="#9BC94A"
                        />
                      </svg>
                    </div>
                    <a className={`navbarbrand ${styles.link} `}>Services</a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
