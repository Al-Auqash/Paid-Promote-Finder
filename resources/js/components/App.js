import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Main from "./main/index";

function App() {
    return (
        <div className="container-fluid vh-100 m-0">
            <Router>
                <Routes>
                    <Route path="/main" element={<Main />} />
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
