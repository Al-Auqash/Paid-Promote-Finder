import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SearchBar from "./sub/SearchBar";

import "../App.css";
import loggedIn from "../authentication/LoggedIn";
import { Pane } from "./sub/Pane";
import JoinNow from "./sub/JoinNow";
import YourAds from "./sub/YourAds";
import CreateAds from "./sub/CreateAds";
import EditAds from "./sub/EditAds";
import Result from "./sub/Result";

const index = () => {
    return (
        <div className="container-fluid row m-0 second-font-family">
            <div className="col-2 formContent">
                {loggedIn() ? <Pane /> : <JoinNow />}
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<SearchBar />}>
                        <Route path="result/:id" element={<Result />}></Route>
                    </Route>
                    <Route path="your-ads" element={<YourAds />}></Route>
                    <Route
                        path="create-your-ads"
                        element={<CreateAds />}
                    ></Route>
                    <Route
                        path="edit-your-ads/:id"
                        element={<EditAds />}
                    ></Route>
                </Routes>
            </div>
        </div>
    );
};

export default index;
