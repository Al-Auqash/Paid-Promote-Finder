import React from "react";

import FirstContent from "./sub/FirstContent";
import SecondContent from "./sub/SecondContent";
import ThirdContent from "./sub/ThirdContent";

import "./Index.css";

const Index = () => {
    return (
        <div className="d-flex flex-column first-font-family p-0 m-0">
            <FirstContent />
            <SecondContent />
            <ThirdContent />
        </div>
    );
};

export default Index;
