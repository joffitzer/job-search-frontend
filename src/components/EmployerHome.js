import React from 'react'
import {connect as cnx} from 'react-redux'

class EmployerHome extends React.Component {

    render() {

        let employer
        if (this.props.loggedInUser.employer) {
            employer = this.props.loggedInUser.employer
        } else {
            employer = this.props.loggedInUser
        }

        return(
            <div>
                <h1>My Profile Information</h1>
                        <h5>Name: {employer.name}</h5>
                        <img className="employerLogo" src={employer.logo} alt="logo"/>
                        <h5>Email: {employer.email}</h5>
                        <h5>Description: {employer.description}</h5>
                        <h5>Industry: {employer.industry}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser } = state;
    return {
        loggedInUser
    }
  }

export default cnx(mapStateToProps, null)(EmployerHome);