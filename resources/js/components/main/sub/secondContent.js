import React from "react";

import "./style.css";

const secondContent = () => {
    return (
        <div class="display-flex-row h-100 p-0 my-4 secondContent">
            <div class="card cardHowTo text-center mx-5">
                <div class="card-body">
                    <h5 class="card-title text-dark-orange">Find the best event/sponsor</h5>
                    <p class="card-text">
                        Find and explore the best event or sponsor from our
                        website that fit your target
                    </p>
                </div>
            </div>
            <div class="card cardHowTo text-center mx-5">
                <div class="card-body">
                    <h5 class="card-title text-dark-orange">Make A Contract</h5>
                    <p class="card-text">
                        Make a contact with event organizer or bussinesses to
                        make a contract
                    </p>
                </div>
            </div>
            <div class="card cardHowTo text-center mx-5">
                <div class="card-body">
                    <h5 class="card-title text-dark-orange">Finish and rate your experience</h5>
                    <p class="card-text">
                        Finish your contract with submitting application and
                        rate your experience for better upcoming contract
                    </p>
                </div>
            </div>
        </div>
    );
};

export default secondContent;
