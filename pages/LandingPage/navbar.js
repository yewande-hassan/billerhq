import React, { useState } from "react";
import Logo from "../../public/images/billerHQ-logo.png";
import Link from "next/link";
import HomePage from "../../styles/homePage.module.css";
// import SignInModal from "styles/signInModal.module 2.css";
import SignInModal from "../../styles/signInModal.module.css";
// import SignIn from "../signIn";
// modal

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function navbar() {
  // const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  // const [fullscreenSigUp, setFullscreenSigUp] = useState(true);

  // const [display, setDisplay] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    // }
    // function clicked(breakpoint) {
    //   setFullscreen(breakpoint);
    //   setDisplay(true);
  }
  // const [show, setShow] = useState(false);

  function Example() {
    const [signup, setSignup] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  }
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
              {/* <Link
                className={`"nav-link active" ${HomePage.signInButton}`}
                aria-current="page"
                href="#"
                _hover={{ textDecor: "none" }}
              >
                <button onClick={() => setShow(true)}>Sign In</button>
              </Link> */}
              <Button
                className={` "me-2 mb-2 b" ${SignInModal.signInNavButton}`}
                onClick={() => handleShow("")}
              >
                Sign In
              </Button>
              <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
                className={`${SignInModal.modalContent}`}
              >
                {/* <Modal.Header closeButton> */}
                {/* <Modal.Title></Modal.Title> */}
                {/* </Modal.Header> */}
                <Modal.Body className={`${SignInModal.modalBody}`}>
                  <div className={``}>
                    <div
                      className={` container-fluid ${SignInModal.signInModal}`}
                    >
                      <p className="fw-bold fs-1 text-center pt-5 mt-5">
                        Sign In
                      </p>
                      <button
                        href=""
                        className={`${SignInModal.signInModalGoogleButton}, ${SignInModal.otherElements}`}
                      >
                        Sign In using <b>Google</b>
                      </button>

                      <p className="text-center">
                        <Link href="">or sign in with your email</Link>
                      </p>
                      <div>
                        <p className={`mb-0 pb-0 ${SignInModal.labelsEmail}`}>
                          Email Address
                        </p>
                        <input
                          type="Email Address"
                          placeholder="Email Address"
                          className={`mb-3 ${SignInModal.inputFields} `}
                        />
                      </div>
                      <div>
                        <p className={`mb-0 pb-0 ${SignInModal.labels}`}>
                          Password
                        </p>
                        <input
                          type="password"
                          placeholder="Password"
                          className={`${SignInModal.inputFields} `}
                        />
                      </div>
                      <button
                        className={`${SignInModal.signInModalButton} ${SignInModal.otherElements}`}
                      >
                        Sign In
                      </button>
                      <p className="text-center justify-content-center">
                        <Link href="/signUp">
                          New to Uniswitch? Sign up here
                        </Link>
                      </p>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              {/* modal signup */}
              {/* <Link class={`nav-link ps-3 `} href="#">
                <button className={`${HomePage.signUpButton}`}>
                  Sign Up With Email
                </button>
              </Link> */}
              <Link
                href=""
                className={` "me-2 mb-2 b" ${SignInModal.signUpNavButton}`}
                onClick={() => handleShow(true)}
              >
                Sign Up With Email
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
