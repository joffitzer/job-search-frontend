import React from 'react'
import { Route } from 'react-router-dom'
import Thanks from '../components/Thanks'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Home from '../components/Home'
import EmployersContainer from '../containers/EmployersContainer'
import EmployerShow from '../components/EmployerShow'
import JobsContainer from '../containers/JobsContainer'
import JobShow from '../components/JobShow'
import ProfileContainer from '../containers/ProfileContainer'
import UserAppsContainer from '../containers/UserAppsContainer'

const MainContainer = () => {
    return (
        <div>
            <h1>Main Container</h1>
            <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps}/>} />
            <Route exact path="/login" render={(routerProps) => <Login {...routerProps}/>} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/employers" component={EmployersContainer} />
            <Route exact path="/employers/:id" component={EmployerShow} />
            <Route exact path="/jobs" component={JobsContainer} />
            <Route exact path="/jobs/:id" render={(routerProps) => <JobShow {...routerProps} />}/>
            <Route exact path="/myapps" component={UserAppsContainer} />
        </div>
    )
}

export default MainContainer;