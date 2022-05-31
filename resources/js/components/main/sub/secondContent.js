import React from "react";

import "./Style.css";

const secondContent = () => {
    return (
        <div>
            <h2 className="w-100 text-center">HOW TO</h2>
            <div className="display-flex-row h-100 p-0 my-4 secondContent">
                <div className="mx-5 card-how-to background-grey">
                    <h5 className="text-dark-orange">Register</h5>
                    <p>Sign Up to get free access to Paid Promote Finder</p>
                </div>
                <div className="mx-5 card-how-to background-grey">
                    <h5 className="text-dark-orange">Share</h5>
                    <p>Post your event or sponsor in the Paid Promote Finder</p>
                </div>
                <div className="mx-5 card-how-to background-grey">
                    <h5 className="text-dark-orange">Contact</h5>
                    <p>
                        Make comunication with your target and start making
                        contract
                    </p>
                </div>
                <div className="mx-5 card-how-to background-grey">
                    <h5 className="text-dark-orange">Finish & rate</h5>
                    <p>
                        finish contract and rate based on your experience for
                        further improvement
                    </p>
                </div>
            </div>
        </div>
    );
};

export default secondContent;
