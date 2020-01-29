import React from 'react'
import { Link } from 'react-router-dom';
import { connect as cnx } from 'react-redux'

const Nav = (props) => {

    return (
        <div>
            <h1>Nav Bar</h1>
            <h5>Logged In User: {props.loggedInUser[0] ? props.loggedInUser[0].first_name : ""}</h5>
            <Link to="/login"><div>Log In</div></Link>
            <Link to="/home"><div>Home</div></Link>
            <Link to="/employers"><div>All Employers</div></Link>
            <Link to="/jobs"><div>All Jobs</div></Link>
            <Link to="/profile"><div>My Profile</div></Link>
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