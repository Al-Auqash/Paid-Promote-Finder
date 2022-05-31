import React from "react";

import FirstContent from "./sub/FirstContent";
import SecondContent from "./sub/SecondContent";

import "./Index.css";

const Index = () => {
    return (
        <div class="d-flex flex-column first-font-family">
            <FirstContent />
            <SecondContent />
        </div>
    );
};

export default Index;
