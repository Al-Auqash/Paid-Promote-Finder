import React from "react";
import CardCarousel from "../../custom/CardCarousel";

import "./Style.css";

import register from "/images/register.jpg";
import post from "/images/post.jpg";
import contract from "/images/contract.jpg";
import rating from "/images/rating.jpg";

const secondContent = () => {
    const HowTo = {
        title1: "Sign Up",
        text1: "Sign Up to get free access to Paid Promote Finder",
        title2: "Share & Post",
        text2: "Post your event or sponsor in the Paid Promote Finder",
        title3: "Contact & Contract",
        text3: "Make comunication with your target and start making contract",
        title4: "Finish & rate",
        text4: "finish contract and rate based on your experience for further improvement",
    };

    return (
        <div className="my-5 mx-0 vh-100">
            <h2 className="text-center">HOW PAID PROMOTE FINDER WORKS</h2>
            <CardCarousel
                image1={register}
                title1={HowTo.title1}
                text1={HowTo.text1}
                image2={post}
                title2={HowTo.title2}
                text2={HowTo.text2}
                image3={contract}
                title3={HowTo.title3}
                text3={HowTo.text3}
                image4={rating}
                title4={HowTo.title4}
                text4={HowTo.text4}
            />
        </div>
    );
};

export default secondContent;
