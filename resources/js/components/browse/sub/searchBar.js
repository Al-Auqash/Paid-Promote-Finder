import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import "./Style.css";

import Result from "./Result";
import Card from "./Card";
import YourAds from "./YourAds";
import axios from "axios";
import loggedIn from "../../authentication/LoggedIn";
import { Pane } from "./Pane";
import Filter from "./Filter";
import JoinNow from "./JoinNow";

const searchBar = () => {
    const [ads, setAds] = useState([]);
    const [region, setRegion] = useState([]);

    const [search, setSearch] = useState([
        {
            keyword: "",
            region_id: "",
        },
    ]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch({
            [e.target.name]: e.target.value,
        });
    };

    const getAds = async () => {
        await axios
            .get("/api/browse")
            .then((response) => {
                setAds(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        await axios
            .get("/api/browse/region")
            .then((response) => {
                setRegion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getSearch = async (e) => {
        e.preventDefault();

        const params = {
            keyword: search.keyword,
            region_id: search.region_id,
        };

        await axios
            .get("/api/browse", { params })
            .then((response) => {
                setAds(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAds();
    }, []);

    return (
        <section>
            {/* <p>Find All you need</p> */}
            <form onSubmit={getSearch} className="row formSearch">
                <div className="col formContent">
                    <div className="row m-0">
                        <div className="col p-0 mb-3 p-0">
                            <div className="form-group">
                                <input
                                    name="keyword"
                                    className="form-control searchInput p-2"
                                    placeholder="Try to Type 'Anniversary'"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-2 mb-3 pe-0">
                            <div className="form-group">
                                <button
                                    className="form-control btn searchBtnBrowse p-2"
                                    type="submit"
                                >
                                    Find
                                </button>
                            </div>
                        </div>
                    </div>

                    <Filter handleChange={handleChange} region={region} />

                    <div className="row m-0">
                        <div className="col p-0">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Card state={ads} />}
                                />
                                <Route
                                    path="/result/:id"
                                    element={<Result />}
                                />
                                {/* <Route
                                    path="/your-ads/"
                                    element={<YourAds state={ads} />}
                                /> */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default searchBar;
