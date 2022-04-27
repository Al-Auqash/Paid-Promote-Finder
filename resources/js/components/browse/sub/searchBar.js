import React from "react";
import Select from "react-select";
import "./style.css";

const categoryOptions = [
    { value: "sponsor", label: "Sponsor" },
    { value: "event", label: "Event" },
];

const categoryOptionsStyles = {
    
}

const SearchBar = () => {
    return (
        <section class="px-4">
            <p>Find All you need</p>
            <form method="post">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <input
                                name="browse"
                                class="form-control"
                                placeholder="Try to Type 'Anniversary'"
                            />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <Select
                                type="text"
                                class="form-control text-orange"
                                placeholder="Category"
                                options={categoryOptions}
                            />
                        </div>
                    </div>
                    {/* <div class="col-sm-2">
                        <div class="form-group">
                            <div class="input-group">
                                <input
                                    autocomplete="off"
                                    type="text"
                                    class="form-control"
                                    data-plugin="datepicker"
                                    data-option="{literal}{format: 'yyyy', viewMode: 'years', minViewMode: 'years', orientation: 'bottom', clearBtn: true, autoclose: true}{/literal}"
                                    name="tahun"
                                    placeholder="Pilih Tahun"
                                />
                                <span class="input-group-addon">
                                    <span class="fa fa-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div> */}
                    <div class="col-2">
                        <button
                            class="btn searchBtn"
                            type="submit"
                            name="save"
                            value="Cari"
                        >
                            Find
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default SearchBar;
