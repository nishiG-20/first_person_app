import React, { Component } from "react";

export default class OptionsCB extends Component {

    handleChange = (e) => {
        const { currentTarget: input } = e
        let options = { ...this.props.options }
        if (input.name === "city" || input.name === "company") {
            options[input.name] = this.updateCBs(
                options[input.name],
                input.checked,
                input.value
            )
        } else options[input.name] = input.value
        console.log("options CB ", options)
        this.props.onOptionChange(options)
    }



    updateCBs = (inpvalues, checked, value) => {
        let inpArr = inpvalues ? inpvalues.split(",") : []
        if (checked) inpArr.push(value)
        else {
            let index = inpArr.findIndex(ele => ele === value)
            if (index >= 0) inpArr.splice(index, 1)
        }
        console.log(inpvalues, inpArr)
        return inpArr.join(",")
    }

    makeDropDown = (arr, value, name, label) => {
        return (
            <div className="form-group">
                <select
                    className="form-control"
                    name={name}
                    value={value}
                    onChange={this.handleChange}
                >
                    <option value="">{label}</option>
                    {
                        arr.map((opt) => {
                            return <option value={opt}>{opt}</option>
                        })
                    }
                </select>
            </div>
        )
    }

    makeCheckboxes = (arr, values, name, label) => {
        return (
            <React.Fragment>
                <label className="form-check-label font-weight-bold"> {label}</label>
                {
                    arr.map((opt) => {
                        return (
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    value={opt}
                                    type="checkbox"
                                    name={name}
                                    checked={values.find(val => val === opt)}
                                    onChange={this.handleChange}
                                />
                                <label className="form-check-label">{opt}</label>
                            </div>
                        )
                    })
                }
            </React.Fragment>

        )
    }

    render() {
        let { city = "", company = "", minAge = "" } = this.props.options
        let { cities, companies, ages } = this.props
        return (
            <div className="row border bg-light">

                <div className="row">
                    <div className="col">
                        {
                            this.makeCheckboxes(cities, city.split(","), "city", "Select City")
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        {
                            this.makeCheckboxes(
                                companies,
                                company.split(","),
                                "company",
                                "Select Company"
                            )
                        }
                    </div>
                </div>

                <div className="row">
                    <div>
                        {
                            this.makeDropDown(ages, minAge, "minAge", "Select minimum Age")
                        }
                    </div>
                </div>

            </div>
        )
    }
}
