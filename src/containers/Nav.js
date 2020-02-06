import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect as cnx } from 'react-redux'
import { logOutUser,  } from '../actionCreators'

class Nav extends React.Component {

    logout = () => {
        localStorage.removeItem("token")
        this.props.logOutUser()
        }


    render() {

        return (
            <div>
                {/* <h5>Logged In User: {this.props.isLoggedIn ? this.props.loggedInUser.attributes.first_name : "Nope"}</h5> */}
                <Link to="/signup"><div>Sign Up</div></Link>
                <Link to="/login"><div>Log In</div></Link>
                <Link to="/logout"><div onClick={this.logout}>Log Out</div></Link>
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

const mapDispatchToProps = (dispatch) => {
return {
    logOutUser: () => dispatch(logOutUser()),
}
}

// export default withRouter(mapStateToProps, mapDispatchToProps)(Nav);
export default withRouter(cnx(mapStateToProps, mapDispatchToProps)(Nav))