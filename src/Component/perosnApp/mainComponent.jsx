import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from './navabr'
import Persons from "./persons"
import Person from './person'
import AddPerson from './addPerson'

class MainComponent extends Component {

    state = {}

    render() {

        return (
            <div className="fluid-container">
                < Navbar />
                <Switch>
                    <Route path="/persons/add" component={AddPerson} />
                    <Route path="/persons/:id" component={Person} />
                    <Route path="/persons" component={Persons} />
                    <Redirect from="/" to="/persons" />
                </Switch>
            </div>
        )
    }
}

export default MainComponent