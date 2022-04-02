import React from "react";
import ReactDOM from "react-dom";

import "./footer.css";

function Footer() {
    return (
        <div className="container-fluid vh-100 m-0">
            <section id="footer">
                <div className="footerContent">
                    <ul>
                        <li className="contactUs">CONTACT US!</li>
                        <a
                            href="https://www.instagram.com/ilham_tawakhal/"
                            className="contactItem"
                        >
                            <li>Instagram</li>
                        </a>
                        <a
                            href="https://twitter.com/Ilham_tawakhal"
                            className="contactItem"
                        >
                            <li>Twitter</li>
                        </a>
                        <a
                            href="https://www.twitch.tv/itash__"
                            className="contactItem"
                        >
                            <li>Twitch</li>
                        </a>
                    </ul>
                </div>
                <div className="footerContent">
                    <a href="/login">uwu @2022</a>
                </div>
                <div className="footerContent">
                    <ul>
                        <li>CONTACT US!</li>
                        <a
                            href="https://www.instagram.com/ilham_tawakhal/"
                            className="contactItem"
                        >
                            <li>Instagram</li>
                        </a>
                        <a
                            href="https://twitter.com/Ilham_tawakhal"
                            className="contactItem"
                        >
                            <li>Twitter</li>
                        </a>
                        <a
                            href="https://www.twitch.tv/itash__"
                            className="contactItem"
                        >
                            <li>Twitch</li>
                        </a>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Footer;

if (document.getElementById("foot")) {
    ReactDOM.render(<Footer />, document.getElementById("foot"));
}
