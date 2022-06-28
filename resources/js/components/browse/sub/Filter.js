import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const filter = ({ handleChange, region }) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="row filter pane rounded m-0 mb-3 p-2">
            {/* <div className="col-2">
                <p>filter</p>
            </div> */}
            <div className="col-3 text-center">
                <div className="form-group">
                    {/* <p className="m-0 fs-6">Region</p> */}
                    <select
                        className="form-select w-50 btn btn-warning rounded-pill"
                        id="status"
                        name="status"
                        onChange={handleChange}
                    >
                        <option hidden selected>Status</option>
                        {region.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.region_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className="form-group">
                    {/* <p className="m-0 fs-6">Region</p> */}
                    <select
                        className="form-select w-50 btn btn-warning rounded-pill"
                        id="region"
                        name="region_id"
                        onChange={handleChange}
                    >
                        <option hidden selected>Categories</option>
                        {region.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.region_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className="form-group">
                    {/* <p className="m-0 fs-6">Region</p> */}
                    <select
                        className="form-select w-50 btn btn-warning rounded-pill"
                        id="region"
                        name="region_id"
                        onChange={handleChange}
                    >
                        <option hidden selected>Region</option>
                        {region.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.region_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-3 text-center">
                <div className="form-group">
                    {/* <p className="m-0 fs-6">Time</p> */}
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                        className="btn btn-warning dropdown-toggle w-50 rounded-pill"
                        calendarClassName="calendar"
                    />
                </div>
            </div>
        </div>
    );
};

export default filter;
