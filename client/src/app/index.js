import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { DemoCarousel } from '../components'
import { UserstoriesList, UserstoriesInsert, UserstoriesUpdate, UserstoryShow } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/userstories/list" exact component={UserstoriesList} />
                <Route path="/userstories/create" exact component={UserstoriesInsert} />
                <Route
                    path="/userstories/update/:id"
                    exact
                    component={UserstoriesUpdate}
                />
                <Route
                    path="/userstories/show/:id"
                    exact
                    component={UserstoryShow}
                />
                
            </Switch>
            <DemoCarousel />
        </Router>
    )
}

export default App