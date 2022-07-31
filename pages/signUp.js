import Link from "next/link";
import SignInModal from "../styles/signInModal.module.css";
import "animate.css";
export default function signUp() {
  return (
    <>
      <div className={` container-fluid ${SignInModal.signInModal}`}>
        <p className="fw-bold fs-1 text-center pt-5">Sign Up</p>
        <button
          href=""
          className={`${SignInModal.signInModalGoogleButton}, ${SignInModal.otherElements}`}
        >
          Sign Up using <b>Google</b>
        </button>
        <p className="text-center">
          <Link href="">or sign Up with your email</Link>
        </p>
        <div className="d-flex justify-content-center">
          <div>
            <p className={`mb-0 pb-0 ${SignInModal.fname}`}>Name</p>
            <input
              type="Name"
              placeholder="Name"
              className={`${SignInModal.name} `}
            />
          </div>
          <div>
            <p className={`mb-0 pb-0 ${SignInModal.fname}`}>Surname</p>
            <input
              type="lastname"
              placeholder="Surname"
              className={`${SignInModal.name} `}
            />
          </div>
        </div>
        <div>
          <p className={`mb-0 pb-0 ${SignInModal.labelsEmail}`}>Phone Number</p>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`${SignInModal.inputFields} `}
          />
        </div>
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
        <div className="d-flex justify-content-center">
          <input type="checkbox" className="" />
          <p className="mt-3">By Signing Up I agree with Terms & Conditions</p>
        </div>
        <button
          href=""
          className={`${SignInModal.signInModalButton} ${SignInModal.otherElements}`}
        >
          Sign Up
        </button>
        <p className="text-center justify-content-center">
          Already have and Account? <Link href="/signIn">Sign In</Link>
        </p>
      </div>
    </>
  );
}
