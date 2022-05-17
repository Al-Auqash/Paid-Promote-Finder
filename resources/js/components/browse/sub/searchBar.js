import React from "react";
import Select from "react-select";
import "./style.css";

const categoryOptions = [
    { value: "sponsor", label: "Sponsor" },
    { value: "event", label: "Event" },
];

const categoryOptionsStyles = {};

const SearchBar = () => {
    return (
        <section className="px-4">
            <p>Find All you need</p>
            <form method="post" className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col filter">
                            <p>Filter</p>
                            <div className="form-group subFilterTitle">
                                <p>Category</p>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexRadioDefault1"
                                    >
                                        Sponsor
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        checked
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexRadioDefault2"
                                    >
                                        Event
                                    </label>
                                </div>
                            </div>
                            <div className="form-group subFilterTitle">
                                <p>Region</p>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-warning dropdown-toggle"
                                        type="button"
                                        id="categoryButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Region
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="categoryButton"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                East Java
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Middle Java
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                West Java
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group subFilterTitle">
                                Time
                            </div>
                            {/* <div className="row">
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-warning dropdown-toggle"
                                    type="button"
                                    id="categoryButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Category
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="categoryButton"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sponsor
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Event
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-10 mx-0 my-0">
                            <div className="form-group">
                                <input
                                    name="browse"
                                    className="form-control searchInput p-2"
                                    placeholder="Try to Type 'Anniversary'"
                                />
                            </div>
                        </div>
                        <div className="col-2 mx-0 my-0">
                            <div className="form-group">
                                <button
                                    className="form-control btn searchBtnBrowse p-2"
                                    type="submit"
                                    name="save"
                                    value="Cari"
                                >
                                    Find
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-3">
                            <div className="searchResult rounded p-2">
                                content
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default SearchBar;
