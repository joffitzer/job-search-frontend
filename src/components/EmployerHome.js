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
                <h1>Employer Home Page</h1>
                    <h3>My Profile Information</h3>
                        <h5>Name: {employer.name}</h5>
                        <h5>Email: {employer.email}</h5>
                        <h5>Description: {employer.description}</h5>
                        <h5>Industry: {employer.industry}</h5>
                        <h5>Logo: {employer.logo}</h5>
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