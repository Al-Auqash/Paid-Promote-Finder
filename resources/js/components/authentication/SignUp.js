import React from "react";

import "./../App.css";

const signUp = () => {
    return (
        <div className="container">
            <form method="post" className="form-group p-4 w-75">
                <div className="form-group py-2">
                    <label className="form-check-label">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
                    />
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Email</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Password</label>
                    <input
                        className="form-control"
                        type="text"
                        name="password"
                        id="password"
                    />
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Confirm Password</label>
                    <input
                        className="form-control"
                        type="text"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-warning fs-5 py-3">
                        SIGN UP
                    </button>
                </div>
                <div className="form-group py-2 text-center">
                    <a className="text-dark-orange link-form fs-6">
                        Already Have an account?
                    </a>
                </div>
                <div className="form-group py-2">
                    <span className="link-form signUpText">
                        By signing in or creating an account, you agree to our{" "}
                        <a className="text-dark-orange link-form" href="/termsAndCondition">Terms and Conditions</a> &{" "}
                        <a className="text-dark-orange link-form" href="/privacyPolicy">Privacy Policy</a>. We need
                        this information to be able to contact you and to
                        prevent cheating or fraud.
                    </span>
                </div>
            </form>
        </div>
    );
};
export default signUp;
