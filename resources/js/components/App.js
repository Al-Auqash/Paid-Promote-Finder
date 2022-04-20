import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import "./App.css";

import Main from "./main/index";
import Browse from "./browse/index";

function App() {
    return (
        <div className="container-fluid vh-100 m-0">
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/browse" element={<Browse />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
