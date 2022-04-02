import React from "react";

import "./style.css";

const secondContent = () => {
    return (
        <div class="row h-100 p-0 my-4">
            <div class="card cardHowTo">
                <div class="card-body">
                    <h5 class="card-title">First</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Find the best event/sponsor</h6>
                    <p class="card-text">
                        Find and explore the best event or sponsor from our website that fit your target
                    </p>
                </div>
            </div>
            <div class="card cardHowTo">
                <div class="card-body">
                    <h5 class="card-title">Second</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Make A Contract</h6>
                    <p class="card-text">
                        Make a contact with event organizer or bussinesses to make a contract
                    </p>
                </div>
            </div>
            <div class="card cardHowTo">
                <div class="card-body">
                    <h5 class="card-title">Third</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Finish and rate your experience</h6>
                    <p class="card-text">
                        Finish your contract with submitting application and rate your experience for better upcoming contract
                    </p>
                </div>
            </div>
        </div>
    );
};

export default secondContent;
