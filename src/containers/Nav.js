import React from 'react'
import { Link } from 'react-router-dom';
import { connect as cnx } from 'react-redux'

const Nav = (props) => {

    return (
        <div>
            <h5>Logged In User: {props.loggedInUser.attributes ? props.loggedInUser.attributes.first_name : ""}</h5>
            <Link to="/login"><div>Log In</div></Link>
            <Link to="/home"><div>Home</div></Link>
            <Link to="/employers"><div>All Employers</div></Link>
            <Link to="/jobs"><div>All Jobs</div></Link>
            <Link to="/profile"><div>My Profile</div></Link>
            <hr></hr>
        </div>
    )
}

const mapStateToProps = (state) => {
    let { loggedInUser } = state;
  
    return {
        loggedInUser
    }
  }

export default cnx(mapStateToProps, null)(Nav);