import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Guest = () => {
    return (
        <ul className="navbar-nav ms-auto">
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
        </ul>
    );
};

const User = (props) => {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
                <a
                    id="navbarDropdown"
                    className="nav-link dropdown-toggle"
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
                        className="dropdown-item"
                        href="/authentication/signOut"
                        onClick={props.onClick}
                    >
                        LogOut
                    </a>

                    <form
                        id="logout-form"
                        action="/authentication/signOut"
                        method="POST"
                        className="d-none"
                    ></form>
                </div>
            </li>
        </ul>
    );
};

const Navbar = () => {
    // const navigate = useNavigate();

    const signOut = (event) => {
        event.preventDefault();
        document.getElementById("logout-form").submit();

        axios
            .post("/authentication/signOut")
            .then((response) => {
                console.log(response);
                // navigate("/");
            })
            .catch((error) => {
                //assign error to state "validation"
                console.log(error.response.data);
                console.log(email);
                console.log(password);
            });
    };

    const loggedIn = () => {
        if (localStorage.getItem("username")) {
            return true;
        } else {
            return false;
        }
    };

    const [user, setUser] = useState([]);
    useEffect(() => {
        loggedIn();
        if (localStorage.getItem("username")) {
            setUser(localStorage.getItem("username"));
        }
        console.log(loggedIn());
    }, [user]);

    console.log(user);

    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-base-background shadow-sm">
            <div className="container">
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
                    className="collapse navbar-collapse"
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
                    </ul>
                    {loggedIn() ? (
                        <User username={user} onClick={signOut} />
                    ) : (
                        <Guest />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

if (document.getElementById("navbar")) {
    ReactDOM.render(<Navbar />, document.getElementById("navbar"));
}
