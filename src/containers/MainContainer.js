import React from 'react'
import EmployersContainer from '../containers/EmployersContainer'
import Home from '../components/Home'
import { Route } from 'react-router-dom'
import EmployerShowPage from '../components/EmployerShow'

const MainContainer = () => {
    return (
        <div>
            <h1>Main Container</h1>
            <Route exact path="/home" component={Home} />
            <Route exact path="/employers" component={EmployersContainer} />
            <Route exact path="/employers/:id" component={EmployerShowPage} />
        </div>
    )
}

export default MainContainer;