import React from 'react'
import { Link } from 'react-router-dom';
import { connect as cnx } from 'react-redux'

class Nav extends React.Component {


    render() {

        return (
            <div>
                <h5>Logged In User: {this.props.isLoggedIn ? this.props.loggedInUser.attributes.first_name : "Nope"}</h5>
                <Link to="/login"><div>Log In</div></Link>
                <Link to="/home"><div>Home</div></Link>
                <Link to="/employers"><div>All Employers</div></Link>
                <Link to="/jobs"><div>All Jobs</div></Link>
                <Link to="/myapps"><div>My Applications</div></Link>
                <Link to="/profile"><div>My Profile</div></Link>
                <hr></hr>
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

export default cnx(mapStateToProps, null)(Nav);