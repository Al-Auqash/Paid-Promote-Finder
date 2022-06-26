import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import DatePicker from "react-datepicker";

import "./Style.css";
import "react-datepicker/dist/react-datepicker.css";

import Result from "./Result";
import Card from "./Card";
import axios from "axios";
import loggedIn from "../../authentication/LoggedIn";

const searchBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [ads, setAds] = useState([]);
    const [region, setRegion] = useState([]);

    const [search, setSearch] = useState([
        {
            keyword: "",
            region_id: "",
        },
    ]);

    const handleChange = (e) => {
        setSearch({
            [e.target.name]: e.target.value,
        });
        // e.preventDefault();
    };

    // const handleSubmit = (e) => {};

    const getAds = async () => {
        await axios
            .get("/api/browse")
            .then((response) => {
                setAds(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getRegion = async () => {
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
            // .get("/api/browse?keyword=" + search.keyword)
            .get("/api/browse", { params })
            .then((response) => {
                setAds(response.data);
                // window.location.href = "/browse/search";
            })
            .catch((error) => {
                console.log(error);
            });
        // window.history.replaceState({}, document.title)
    };

    useEffect(() => {
        loggedIn();
        getAds();
        getRegion();
    }, []);

    return (
        <section className="px-4">
            {/* <p>Find All you need</p> */}
            <form onSubmit={getSearch} className="row formSearch">
                <div className="col-2 formContent">
                    {loggedIn && (
                        <div className="row mb-3 panel">
                            <div className="col pane pb-4">
                                <p  className="mt-2">Panel</p>
                                <div className="form-group subFilterTitle">
                                    <button className="btn btn-warning w-100">
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19.2"
                                            height="19.2"
                                            fill="currentColor"
                                            class="bi bi-plus-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg> */}
                                        <span className="m-2">Create Ads</span>
                                    </button>
                                </div>
                                <div className="form-group subFilterTitle">
                                    <button className="btn btn-warning w-100">
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19.2"
                                            height="19.2"
                                            fill="currentColor"
                                            class="bi bi-card-list"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                        </svg> */}
                                        <span className="m-2">Your Ads</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row filter">
                        <div className="col pane pb-4">
                            <p className="mt-2">Filter</p>
                            <div className="form-group subFilterTitle">
                                <p className="m-0 fs-6">Region</p>
                                <select
                                    className="form-select btn btn-warning"
                                    id="region"
                                    name="region_id"
                                    onChange={handleChange}
                                >
                                    <option selected>Region</option>
                                    {region.map((region) => (
                                        <option
                                            key={region.id}
                                            value={region.id}
                                        >
                                            {region.region_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group subFilterTitle">
                                <p className="m-0 fs-6">Time</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MM/yyyy"
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    className="btn btn-warning dropdown-toggle w-100"
                                    calendarClassName="calendar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 formContent">
                    <div className="row m-0">
                        <div className="col p-0-10 mb-3 p-0">
                            <div className="form-group">
                                <input
                                    name="keyword"
                                    className="form-control searchInput p-2"
                                    placeholder="Try to Type 'Anniversary'"
                                    // value={search.keyword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-2 mb-3 pe-0">
                            <div className="form-group">
                                <button
                                    className="form-control btn searchBtnBrowse p-2"
                                    type="submit"
                                    // name="save"
                                    // value="Search"
                                >
                                    Find
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col p-0">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Card state={ads} />}
                                />
                                <Route
                                    path="/result/:id"
                                    element={<Result state={ads} />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default searchBar;
