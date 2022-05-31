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

function App() {
    return (
        <div className="container-fluid h-100 m-0">
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/browse/*" element={<Browse />} />
                    <Route path="/authentication/*" element={<Authentication />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
