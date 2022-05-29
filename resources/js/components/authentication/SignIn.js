import React from "react";

import "./../App.css";

const SignIn = () => {
    return (
        <div className="container">
            <form method="post" className="form-group p-4 w-75">
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
                    <a className="text-dark-orange link-form">
                        forgot password?
                    </a>
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-warning">
                        SIGN IN
                    </button>
                </div>
                <div className="form-group py-2">
                    <p className="text-dark-orange p-0 m-0">or</p>
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-outline-warning">
                        SIGN UP FOR FREE
                    </button>
                </div>
                <div className="form-group py-2">
                    <a className="text-dark-orange link-form">
                        terms and conditions
                    </a>
                </div>
            </form>
        </div>
    );
};
export default SignIn;
