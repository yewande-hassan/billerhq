import React, { useState } from "react";
import Logo from "../../public/images/billerHQ-logo.png";
import Link from "next/link";
import SignIn from "../signIn";
import HomePage from "../../styles/homePage.module.css";
import SignInModal from "../../styles/signInModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function navbar() {
  // const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [close, setClose] = useState("");

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setShow(true);
  // }
  // function clicked(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setDisplay(true);
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg py-5">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src={Logo.src}
              alt="biller-logo"
              className={`${HomePage.logo}`}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={`"navbar-nav" ${HomePage.signInSignUp}`}>
              {/* modal signin */}
              <Link
                className={`"nav-link active" ${HomePage.signInButton}`}
                aria-current="page"
                href="/"
                _hover={{ textDecor: "none" }}
              >
                <a
                  onClick={() => {
                    console.log("hello");
                    setShow(true);
                  }}
                >
                  Sign In
                </a>
              </Link>
              onHide=
              {() => {
                console.log("hello");
                setClose(true);
              }}
              {/* modal signup */}
              <Link class={`nav-link ps-3 `} href="#">
                <button
                  className={`${HomePage.signUpButton}`}
                  onClick={() => {
                    console.log("hello");
                    setDisplay(false);
                  }}
                >
                  Sign Up With Email
                </button>
              </Link>
            </div>
            {/* <SignIn /> */}
          </div>
        </div>
      </nav>
      {/* <div
        className={` d-flex justify-content-between ${HomePage.home_page_nav}`}
      >
        <div>
          <Link className="navbar-brand" href="/">
            <img src={Logo.src} alt="biller-logo" className="logo" />
          </Link>
        </div>
        <div className={`"d-flex"`}>
          <Link className={`${HomePage.signInButton}`} href="/signIn">
            Sign in
          </Link>

          <Link href="/signUp">
            <button className={` btn ${HomePage.signUpButton}`}>
              Sign Up With Email
              </button>
              </Link>
              </div>
            </div> */}
    </div>
  );
}
{
  // SIGN IN MODAL
  //  <Button
  //                 className={` "me-2 mb-2 b" ${SignInModal.signInNavButton}`}
  //                 onClick={() => handleShow("")}
  //               >
  //                 Sign In
  //               </Button>
  //               <Modal
  //                 show={show}
  //                 fullscreen={fullscreen}
  //                 onHide={() => setShow(false)}
  //                 className={`${SignInModal.modalContent}`}
  //               >
  //                 {/* <Modal.Header closeButton> */}
  //                 {/* <Modal.Title></Modal.Title> */}
  //                 {/* </Modal.Header> */}
  //                 <Modal.Body className={`${SignInModal.modalBody}`}>
  //                   <div className={``}>
  //                     <div
  //                       className={` container-fluid ${SignInModal.signInModal}`}
  //                     >
  //                       <p className="fw-bold fs-1 text-center pt-5 mt-5">
  //                         Sign In
  //                       </p>
  //                       <button
  //                         href=""
  //                         className={`${SignInModal.signInModalGoogleButton}, ${SignInModal.otherElements}`}
  //                       >
  //                         Sign In using <b>Google</b>
  //                       </button>
  //                       <p className="text-center">
  //                         <Link href="">or sign in with your email</Link>
  //                       </p>
  //                       <div>
  //                         <p className={`mb-0 pb-0 ${SignInModal.labelsEmail}`}>
  //                           Email Address
  //                         </p>
  //                         <input
  //                           type="Email Address"
  //                           placeholder="Email Address"
  //                           className={`mb-3 ${SignInModal.inputFields} `}
  //                         />
  //                       </div>
  //                       <div>
  //                         <p className={`mb-0 pb-0 ${SignInModal.labels}`}>
  //                           Password
  //                         </p>
  //                         <input
  //                           type="password"
  //                           placeholder="Password"
  //                           className={`${SignInModal.inputFields} `}
  //                         />
  //                       </div>
  //                       <button
  //                         className={`${SignInModal.signInModalButton} ${SignInModal.otherElements}`}
  //                       >
  //                         Sign In
  //                       </button>
  //                       <p className="text-center justify-content-center">
  //                         <Link href="/signUp">
  //                           New to Uniswitch? Sign up here
  //                         </Link>
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </Modal.Body>
  //               </Modal>
  // SIGN UP MODAL
  /* <Button
                className={` "me-2 mb-2 b" ${SignInModal.signUpNavButton}`}
                onClick={() => clicked("")}
              >
                Sign Up With Email
              </Button>
              <Modal
                display={display}
                fullscreen={fullscreen}
                onHide={() => setDisplay(false)}
                className={`${SignInModal.modalContent}`}
              >
                <Modal.Body className={`${SignInModal.modalBody}`}>
                  <div
                    className={` container-fluid ${SignInModal.signUpModal}`}
                  >
                    <p
                      className={` "fw-bold fs-1 text-center pt-5" ${SignInModal.signUpText}`}
                    >
                      Sign Up
                    </p>
                    <button
                      href=""
                      className={`${SignInModal.signInModalGoogleButton}, ${SignInModal.signUpotherElements}`}
                    >
                      Sign Up using <b>Google</b>
                    </button>
                    <p className="text-center">
                      <Link href="">or sign Up with your email</Link>
                    </p>
                    <div className={` ${SignInModal.nameSurname}`}>
                      <div>
                        <p className={`mb-0 pb-0 ${SignInModal.fname}`}>Name</p>
                        <input
                          type="Name"
                          placeholder="Name"
                          className={`${SignInModal.name} `}
                        />
                      </div>
                      <div>
                        <p className={`mb-0 pb-0 ${SignInModal.fname}`}>
                          Surname
                        </p>
                        <input
                          type="lastname"
                          placeholder="Surname"
                          className={`${SignInModal.name} `}
                        />
                      </div>
                    </div>
                    <div>
                      <p
                        className={`mb-0 pb-0 ${SignInModal.signUplabelsEmail}`}
                      >
                        Phone Number
                      </p>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={`${SignInModal.signUpinputFields} `}
                      />
                    </div>
                    <div>
                      <p
                        className={`mb-0 pb-0 ${SignInModal.signUplabelsEmail}`}
                      >
                        Email Address
                      </p>
                      <input
                        type="Email Address"
                        placeholder="Email Address"
                        className={`${SignInModal.signUpinputFields} `}
                      />
                    </div>
                    <div>
                      <p
                        className={`mb-0 pb-0 ${SignInModal.signUplabelsEmail}`}
                      >
                        Password
                      </p>
                      <input
                        type="password"
                        placeholder="Password"
                        className={`${SignInModal.signUpinputFields} `}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <input type="checkbox" className="" />
                      <p className="mt-3">
                        By Signing Up I agree with Terms & Conditions
                      </p>
                    </div>
                    <button
                      href=""
                      className={`${SignInModal.signInModalButton} ${SignInModal.signUpotherElements}`}
                    >
                      Sign Up
                    </button>
                    <p className="text-center justify-content-center">
                      Already have and Account?
                      <Link href="/signIn">Sign In</Link>
                    </p>
                  </div>
                </Modal.Body>
              </Modal> */
}
