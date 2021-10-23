import React, { Component } from "react"
import http from './httpService'

class Addproduct extends Component {

    state = {
        person: { name: '', age: '', city: '', company: '' },
        cities: ['London', 'Paris', 'New Delhi', 'Banglore'],
        companies: ['Apple', 'Google', 'Facebook', 'Microsoft', 'Tesla']
    }

    handleChange = (e) => {
        const { currentTarget: input } = e
        let s1 = { ...this.state }
        s1.person[input.name] = input.value
        this.setState(s1)
    }

    async postData(url, obj) {
        let response = await http.post(url, obj)
        console.log('Response is.....')
        console.log(response.data)
        this.props.history.push('/persons')
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.postData('/personApp/persons', this.state.person)
    }

    render() {
        let { name, age, city, company } = this.state.person
        let { cities, companies } = this.state
        return (
            <div className="container">
                <div className="form-group m-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter Name"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group m-2">
                    <label>Age</label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        name="age"
                        value={age}
                        placeholder="Enter Age"
                        onChange={this.handleChange}
                    />
                </div>


                <div className="form-group m-2">
                    <label>City</label>
                    <select className="form-control" name="city" value={city} onChange={this.handleChange}>
                        <option disabled selected value="">
                            City
                        </option>
                        {cities.map(val => {
                            return (
                                <option value={val}>
                                    {val}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group m-2">
                    <label>Company</label>
                    <select className="form-control" name="company" value={company} onChange={this.handleChange}>
                        <option disabled selected value="">
                            Company
                        </option>
                        {companies.map(val => {
                            return (
                                <option value={val}>
                                    {val}
                                </option>
                            )
                        })}
                    </select>
                </div>


                <button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={(e) => this.handleSubmit(e)}
                >
                    Submit
                </button>

            </div>
        )
    }
}

export default Addproduct