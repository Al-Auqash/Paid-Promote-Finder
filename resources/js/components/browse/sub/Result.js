import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import loggedIn from "../../authentication/LoggedIn";

import "./Style.css";

const result = () => {
    const params = useParams();

    const [result, setResult] = useState([]);

    const getResult = async () => {
        await axios
            .get("/api/browse/result", { params: { id: params.id } })
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const redirectToLogin = () => {
        window.location.href = "/authentication/signIn";
    };

    const makeContract = () => {
        axios
            .post("/api/browse/make-contract", { params: { id: params.id } })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const makeReport = () => {
        axios
            .post("/api/browse/make-report", { id: params.id, complaint: "report" })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(result);

    useEffect(() => {
        getResult();
    }, []);

    return (
        <>
            {loggedIn() ? (
                <div className="row m-0">
                    <button
                        className="col btn btn-outline-warning px-4 btnNav"
                        onClick={makeReport}
                    >
                        Report this Ads
                    </button>

                    {/* <button
                        className="col-6 btn btn-outline-warning px-4 btnNav"
                        onClick={makeContract}
                    >
                        Make a Contract
                    </button> */}
                </div>
            ) : (
                <div className="row m-0 mb-3 justify-content-center">
                    <button
                        className="col btn btn-outline-warning px-4 w-50 btnNav"
                        onClick={redirectToLogin}
                    >
                        Report this Ads
                    </button>

                    {/* <button
                        className="col-6 btn btn-outline-warning px-4 w-50 btnNav"
                        onClick={redirectToLogin}
                    >
                        Make a Contract
                    </button> */}
                </div>
            )}
            <div className="row m-0">
                <div className="col-8 p-0 p-0">
                    <div>
                        <table className="tableResult w-100">
                            {result.map((ads) => (
                                <tbody key={ads.id}>
                                    <tr>
                                        <td className="w-20">Title</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">{ads.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Category</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">
                                            {ads.category_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Region</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">
                                            {ads.region_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20 text-nowrap pe-4">
                                            Start Date - Finish Date
                                        </td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">
                                            {ads.start_date} - {ads.finish_date}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Author</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">
                                            {ads.created_by}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Description</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">
                                            {ads.description}
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td className="w-20">
                                            Download as PDF
                                        </td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">
                                            <PDFDownloadLink
                                                document={<AsPdf />}
                                            >aa</PDFDownloadLink>
                                        </td>
                                    </tr> */}
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>

                <div className="col-4 p-0">
                    {result.map((ads) => (
                        <img
                            src={
                                ads.image_path?.length
                                    ? "../../images/" + ads.image_path
                                    : "../../images/daph_cat.jpg"
                            }
                            className="w-100 rounded"
                            alt="..."
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default result;
