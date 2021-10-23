import React, { Component } from "react"
import http from "./httpService"
import { Link } from "react-router-dom"
import queryString from "query-string"

class Person extends Component {
    state = { data: {} }

    async componentDidMount() {
        let { id } = this.props.match.params
        let response = await http.get(`/personApp/persons/${id}`)
        let { data } = response
        this.setState({ data: data })
    }

    render() {
        let { data } = this.state
        return (
            <div className="container">
                <h4>Details of Person</h4>
                <p>Id : {data.id}</p>
                <p>Name : {data.name}</p>
                <p>Age : {data.age}</p>
                <p>City : {data.city}</p>
                <p>Company : {data.company}</p>
            </div>
        )
    }
}

export default Person