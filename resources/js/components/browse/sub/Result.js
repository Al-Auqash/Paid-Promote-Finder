import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    useEffect(() => {
        getResult();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <div>
                        <table>
                            {result.map((ads) => (
                                <tbody key={ads.id}>
                                    <tr>
                                        <td className="w-20">Title</td>
                                        <td className="w-80">: {ads.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Category</td>
                                        <td className="w-80">
                                            : {ads.category_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Region</td>
                                        <td className="w-80">
                                            : {ads.region_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Time</td>
                                        <td className="w-80">: {ads.time}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Author</td>
                                        <td className="w-80">
                                            : {ads.created_by}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">Description</td>
                                        <td className="w-80">
                                            : {ads.description}
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>

                <div className="col-4">
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
        </div>
    );
};

export default result;
