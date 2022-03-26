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
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div class="card cardHowTo">
                <div class="card-body">
                    <h5 class="card-title">Second</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default secondContent;
