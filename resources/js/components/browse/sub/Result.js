import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loggedIn from "../../authentication/LoggedIn";

import "./Style.css";

const result = () => {
    const params = useParams();
    // console.log(params.id);

    // const query = new URLSearchParams([['id', 42]]);

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

    useEffect(() => {
        getResult();
    }, []);

    return (
        <>
            <div className="row m-0 mb-3 justify-content-end">
                {loggedIn() ? (
                    <button class="btn btn-outline-warning px-4 w-50 btnNav">
                        Make a Contract
                    </button>
                ) : (
                    <button
                        class="btn btn-outline-warning px-4 w-50 btnNav"
                        onClick={redirectToLogin}
                    >
                        Make a Contract
                    </button>
                )}
            </div>
            <div className="row m-0">
                <div className="col-8 p-0 p-0">
                    <div>
                        <table class="tableResult">
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
                                        <td className="w-20">Time</td>
                                        <td className="w-10">:</td>
                                        <td className="w-70">{ads.time}</td>
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
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>

                <div className="col-4 p-0">
                    <img
                        src="/images/daph_cat.jpg"
                        className="w-100"
                        alt="..."
                    />
                </div>
            </div>
            {/* <div className="row">
                <div className="col">{ads.description}</div>
            </div> */}
        </>
    );
};

export default result;
