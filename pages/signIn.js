import Link from "next/link";
import React, { useState } from "react";
import SignInModal from "../styles/signInModal.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function signIn() {
  const [clicked, setClicked] = useState("");
  return (
    <>
      {/* /* SIGN IN */
      /* */}
      <div className={`${SignInModal.modalBody}`}>
        <div className={``}>
          <div className={` container-fluid ${SignInModal.signInModal}`}>
            <p className="fw-bold fs-1 text-center pt-5 mt-5">Sign In</p>
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
              <p className={`mb-0 pb-0 ${SignInModal.labels}`}>Password</p>
              <input
                type="password"
                placeholder="Password"
                className={`${SignInModal.inputFields} `}
              />
            </div>
            <a href="/dashboard">
              <button
                className={`${SignInModal.signInModalButton} ${SignInModal.otherElements}`}
              >
                Sign In
              </button>
            </a>
            <p className="text-center justify-content-center">
              <Link href="/signUp">New to Uniswitch? Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-light">
        <div className={` container-fluid ${SignInModal.signInModal}`}>
          <p className="fw-bold fs-1 text-center pt-5">Sign In</p>
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
              className={`${SignInModal.inputFields} `}
            />
          </div>
          <div>
            <p className={`mb-0 pb-0 ${SignInModal.labels}`}>Password</p>
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
            <Link href="/signUp">New to Uniswitch? Sign up here</Link>
          </p>
        </div>
      </div>{" "} */}
      */
    </>
  );
}
