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
            <form method="post">
                <div className="row">
                    <div className="col-2">
                        <p>Filter</p>
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
                        <div className="row">
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
                        </div>
                    </div>
                    <div className="col-8 mx-0 my-0">
                        <div className="form-group">
                            <input
                                name="browse"
                                className="form-control"
                                placeholder="Try to Type 'Anniversary'"
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn searchBtn px-4"
                            type="submit"
                            name="save"
                            value="Cari"
                        >
                            Find
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default SearchBar;
