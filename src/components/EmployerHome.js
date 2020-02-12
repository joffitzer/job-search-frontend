import React from 'react'
import {connect as cnx} from 'react-redux'
import Container from 'react-bootstrap/Container'

class EmployerHome extends React.Component {

    render() {

        let employer
        if (this.props.loggedInUser.employer) {
            employer = this.props.loggedInUser.employer
        } else {
            employer = this.props.loggedInUser
        }

        return(
            <Container>
                <h1 className="form-padding">My Profile Information</h1>
                        <h5>Name: {employer.name}</h5>
                        <div className="form-padding">
                            <img className="employerLogo" src={employer.logo} alt="logo"/>
                        </div>
                        <h5>Email: {employer.email}</h5>
                        <h5>Description: {employer.description}</h5>
                        <h5>Industry: {employer.industry}</h5>
            </Container>
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