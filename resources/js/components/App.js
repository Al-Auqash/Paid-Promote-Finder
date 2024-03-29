import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import "./App.css";

import Main from "./main/Index";
import Browse from "./browse/Index";
import Authentication from "./authentication/Index";
import About from "./about/About";

function App() {
    return (
        <div className="container-fluid vh-100 m-0 p-0">
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/browse/*" element={<Browse />} />
                    <Route path="/authentication/*" element={<Authentication />} />
                    <Route path="/about/*" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
