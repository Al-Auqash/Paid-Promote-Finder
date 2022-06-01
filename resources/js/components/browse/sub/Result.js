import React from "react";

const result = () => {
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="w-20">Title</td>
                                    <td className="w-80">: a</td>
                                </tr>
                                <tr>
                                    <td className="w-20">Category</td>
                                    <td className="w-80">: a</td>
                                </tr>
                                <tr>
                                    <td className="w-20">Region</td>
                                    <td className="w-80">: a</td>
                                </tr>
                                <tr>
                                    <td className="w-20">Time</td>
                                    <td className="w-80">: a</td>
                                </tr>
                                <tr>
                                    <td className="w-20">Author</td>
                                    <td className="w-80">: a</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-4">
                    <img src="/images/daph_cat.jpg" className="w-100" alt="..." />
                </div>
            </div>
            <div className="row">
                <div className="col">Description...</div>
            </div>
        </div>
    );
};

export default result;
