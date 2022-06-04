import React from "react";

import "./../App.css";

const signIn = () => {
    return (
        <div className="container">
            <form method="post" action="/" className="form-group p-4 w-75">
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
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <div className="form-group py-2">
                    <a className="text-dark-orange link-form fs-6">
                        forgot password?
                    </a>
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-warning fs-5 py-3">
                        SIGN IN
                    </button>
                </div>
                <div className="form-group py-2 text-center">
                    <p className="text-dark-orange p-0 m-0">or</p>
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-outline-warning fs-5 py-3">
                        SIGN UP FOR FREE
                    </button>
                </div>
                <div className="form-group py-2 text-center">
                    <a className="text-dark-orange link-form fs-6">
                        terms and conditions
                    </a>
                </div>
            </form>
        </div>
    );
};
export default signIn;
