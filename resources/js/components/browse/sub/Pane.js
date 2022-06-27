import React from "react";
import { useNavigate } from "react-router-dom";

export const Pane = (props) => {
    const navigate = useNavigate();
    const toYourAds = () => {
        navigate("your-ads");
    };

    const toCreateYourAds = () => {
        navigate("create-your-ads");
    };
    return (
        <div className="row mb-3 panel h-100">
            <div className="col pane pb-4 rounded">
                <p className="mt-2">Navigation Pane</p>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={props.toCreateYourAds}
                    >
                        <span className="m-2">Create Ads</span>
                    </button>
                </div>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={props.toYourAds}
                    >
                        <span className="m-2">Your Ads</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
