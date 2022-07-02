import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../../App.css";

const createAds = () => {
    const [ads, setAds] = useState([]);
    const [region, setRegion] = useState([]);
    const [category, setCategory] = useState([]);
    // const [startDate, setStartDate] = useState(new Date());
    // const [finishDate, setFinishDate] = useState(new Date());

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [stringDate, setStringDate] = useState({ start: "", end: "" });

    const [file, setFile] = useState([]);

    const navigate = useNavigate();

    const user_id = localStorage.getItem("user_id");

    const handleChange = (e) => {
        setAds((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
        }));
    };

    const onFileChange = (event) => {
        setFile({ file: event.target.files[0].name });
    };

    if (startDate) {
        stringDate.start =
            startDate.getFullYear() +
            "/" +
            ("0" + (startDate.getMonth() + 1)).slice(-2) +
            "/" +
            ("0" + startDate.getDate()).slice(-2);
    }

    if (endDate) {
        stringDate.end =
            endDate.getFullYear() +
            "/" +
            ("0" + (endDate.getMonth() + 1)).slice(-2) +
            "/" +
            ("0" + endDate.getDate()).slice(-2);
    }

    const formData = new FormData();

    formData.append("user_id", user_id);
    formData.append("title", ads.title);
    formData.append("category_id", ads.category_id);
    formData.append("region_id", ads.region_id);
    formData.append("start_date", stringDate.start);
    formData.append("finish_date", stringDate.end);
    formData.append("description", ads.description);
    formData.append("image_path", file.file);

    const submitCreateAds = (event) => {
        event.preventDefault();
        axios
            .post("/api/browse/create-ads", formData)
            .then((response) => {
                console.log(response);
                navigate("./../your-ads");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getData = async () => {
        await axios
            .get("/api/browse/region")
            .then((response) => {
                setRegion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        await axios
            .get("/api/browse/category")
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <form
                method="post"
                className="form-group p-4 w-50"
                onSubmit={submitCreateAds}
                encType="multipart/form-data"
            >
                <input name="user_id" value={user_id} hidden></input>
                <div className="form-group py-2">
                    <label className="form-check-label">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Category</label>
                    <select
                        className="form-select form-select-lg w-100 btn btn-warning"
                        id="category"
                        name="category_id"
                        onChange={handleChange}
                    >
                        <option hidden selected>
                            Categories
                        </option>
                        {category.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Region</label>
                    <select
                        className="form-select form-select-lg w-100 btn btn-warning"
                        id="region"
                        name="region_id"
                        onChange={handleChange}
                    >
                        <option hidden selected>
                            Region
                        </option>
                        {region.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.region_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">
                        Start Date - Finish Date
                    </label>
                    <div className="form-group">
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            // onChange={handleDateChange}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            isClearable={true}
                            className="btn btn-warning dropdown-toggle w-100"
                            calendarClassName="calendar"
                            dateFormat="dd/MM/yyyy"
                            placeholder="Time"
                        />
                    </div>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Description</label>
                    <input
                        className="form-control"
                        type="textarea"
                        name="description"
                        id="description"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Picture</label>
                    <input
                        className="form-control w-100 btn btn-warning"
                        type="file"
                        name="image"
                        onChange={onFileChange}
                    />
                </div>
                <div className="form-group py-2">
                    <button
                        type="submit"
                        className="form-control btn btn-warning w-25 fs-5"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default createAds;
