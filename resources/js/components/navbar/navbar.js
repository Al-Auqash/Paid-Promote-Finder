import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import LoggedIn from "../authentication/LoggedIn";

const Guest = () => {
    return (
        // <ul className="navbar-nav ms-auto">
        <>
            <li className="nav-item">
                <a
                    className="btn btn-outline-warning px-4 mx-2 btnNav"
                    href="/authentication/signIn"
                >
                    Sign In
                </a>
            </li>
            <li className="nav-item">
                <a
                    className="btn btn-warning px-4 mx-2 btnNav"
                    href="/authentication/signUp"
                >
                    Sign Up
                </a>
            </li>
        </>
        // </ul>
    );
};

const User = (props) => {
    return (
        // <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
            <a
                id="navbarDropdown"
                className="nav-link dropdown-toggle px-4 mx-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                // v-pre
            >
                {props.username}
            </a>

            <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
            >
                <a
                    className="dropdown-item btnNav"
                    // href="/authentication/signOut"
                    onClick={props.signOut}
                    // type="submit"
                >
                    LogOut
                </a>
                {/* <form
                        id="logout-form"
                        action="/authentication/signOut"
                        method="POST"
                        className="d-none"
                    ></form> */}
            </div>
        </li>
        // </ul>
    );
};

const Navbar = () => {

    const signOut = () => {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // const csrf = localStorage.getItem("X-CSRF-TOKEN");
        // axios.defaults.headers.common["X-CSRF-TOKEN"] = `${csrf}`;

        axios
            .post("/authentication/signOut")
            .then(() => {
                localStorage.removeItem("token");
                localStorage.clear();
                window.location.href = "/";
                // console.log(response);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    // const LoggedIn = () => {
    //     if (localStorage.getItem("username")) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    const [user, setUser] = useState([]);
    useEffect(() => {
        LoggedIn();
        if (localStorage.getItem("username")) {
            setUser(localStorage.getItem("username"));
        }
        // console.log(LoggedIn());
    });

    // console.log(user);

    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-base-background shadow-sm">
            <div className="container-fluid d-flex flex-row justify-content-space-between m-0">
                <a className="navbar-brand" href="{{ url('/') }}">
                    Paid Promote Finder
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse w-100"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link px-4 mx-2" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 mx-2" href="/browse">
                                Browse
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4 mx-2" href="/about">
                                About
                            </a>
                        </li>
                        {LoggedIn() ? (
                            <User username={user} signOut={signOut} />
                        ) : (
                            <Guest />
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

if (document.getElementById("navbar")) {
    ReactDOM.render(<Navbar />, document.getElementById("navbar"));
}
