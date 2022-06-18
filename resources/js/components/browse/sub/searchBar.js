import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import DatePicker from "react-datepicker";

import "./Style.css";
import "react-datepicker/dist/react-datepicker.css";

import Result from "./Result";
import Card from "./Card";
import axios from "axios";

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
        getAds();
        getRegion();
    }, []);

    return (
        <section className="px-4">
            {/* <p>Find All you need</p> */}
            <form onSubmit={getSearch} className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col filter pb-4">
                            <p>Filter</p>
                            {/* <div className="form-group subFilterTitle">
                                <p className="m-0">Category</p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="category"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault1"
                                    >
                                        Sponsor
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="category"
                                        id="flexRadioDefault2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault2"
                                    >
                                        Event
                                    </label>
                                </div>
                            </div> */}
                            <div className="form-group subFilterTitle">
                                <p className="m-0">Region</p>
                                <select
                                    className="form-select btn btn-outline-warning"
                                    id="region"
                                    name="region_id"
                                    onChange={handleChange}
                                >
                                    <option selected>Choose...</option>
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
                                <p className="m-0">Time</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MM/yyyy"
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    className="btn btn-outline-warning dropdown-toggle w-100"
                                    calendarClassName="calendar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-10 mb-3">
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
                        <div className="col-2 mb-3">
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
                    <div className="container p-0">
                        <div>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Card state={ads} />}
                                />
                                <Route path="/result" element={<Result />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default searchBar;
