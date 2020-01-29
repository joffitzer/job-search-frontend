import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import EmployersContainer from '../containers/EmployersContainer'
import EmployerShow from '../components/EmployerShow'
import JobsContainer from '../containers/JobsContainer'
import JobShow from '../components/JobShow'
import ProfileContainer from './ProfileContainer'

const MainContainer = () => {
    return (
        <div>
            <h1>Main Container</h1>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/employers" component={EmployersContainer} />
            <Route exact path="/employers/:id" component={EmployerShow} />
            <Route exact path="/jobs" component={JobsContainer} />
            <Route exact path="/jobs/:id" component={JobShow} />
        </div>
    )
}

export default MainContainer;