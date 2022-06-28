import React from "react";
import { useNavigate } from "react-router-dom";

const joinNow = () => {
    const navigate = useNavigate();

    const toSignIn = () => {
        navigate("/authentication/signIn");
    };

    const toSignUp = () => {
        navigate("/authentication/signUp");
    };

    return (
        <div className="row mb-3 panel h-100">
            <div className="col pane pb-4 rounded">
                <p className="fs-6 mt-4 text-center">
                    To get free access create your own ads and post it in Paid
                    Promote Finder feed, first thing you have to do is to sign
                    in as a user
                </p>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={toSignIn}
                    >
                        <span className="m-2">Sign In</span>
                    </button>
                </div><p className="fs-6 mt-4 text-center">
                    or if you new in this platform you can register for free, and get so many features.
                </p>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={toSignUp}
                    >
                        <span className="m-2">Sign Up</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default joinNow;
