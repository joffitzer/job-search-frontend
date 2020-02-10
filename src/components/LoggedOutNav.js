import React from 'react'
import { connect as cnx } from 'react-redux'
import { logOutUser,  } from '../actionCreators'
import Navbar from 'react-bootstrap/Navbar'

class Navbars extends React.Component {

    logout = () => {
        localStorage.removeItem("token")
        this.props.logOutUser()
        }


    render() {

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Launchpad</Navbar.Brand>
                </Navbar>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    let { loggedInUser, isLoggedIn } = state;
  
    return {
        loggedInUser, isLoggedIn
    }
  }

const mapDispatchToProps = (dispatch) => {
return {
    logOutUser: () => dispatch(logOutUser()),
}
}

export default (cnx(mapStateToProps, mapDispatchToProps)(Navbars))