import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Main from "./main/index";
import HowTo from "./main/howTo";

function App() {
    return (
        <div className="container vh-100">
            <Router>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/main/me" element={<HowTo />} />
                    {/* <Main />
                                <HowTo /> */}
                    {/* </Route> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
