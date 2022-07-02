import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import loggedIn from "../../authentication/LoggedIn";
// import AsPdf from "./../../download/AsPdf";

// import { PDFDownloadLink } from "@react-pdf/renderer";

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

    console.log(result);

    useEffect(() => {
        getResult();
    }, []);

    return (
        <>
            <div className="row m-0 mb-3 justify-content-end">
                {loggedIn() ? (
                    <button className="btn btn-outline-warning px-4 w-50 btnNav">
                        Make a Contract
                    </button>
                ) : (
                    <button
                        className="btn btn-outline-warning px-4 w-50 btnNav"
                        onClick={redirectToLogin}
                    >
                        Make a Contract
                    </button>
                )}
            </div>
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
                                        <td className="w-20 text-nowrap pe-4">Start Date - Finish Date</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">{ads.start_date} - {ads.finish_date}</td>
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
