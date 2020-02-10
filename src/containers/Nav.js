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
                {this.props.loggedInUser ? 
                    <div>
                        {(this.props.loggedInUser.logo || this.props.loggedInUser.employer) ? 
                            <div>
                                <div>Employer Nav</div>
                                    {/* <Link to="/employersignup"><div>Employer Sign Up</div></Link>
                                    <Link to="/employerlogin"><div>Employer Log In</div></Link> */}
                                    <Link to="/employerhome"><div>Employer Home</div></Link>
                                    <Link to="/postjob"><div>Post a job</div></Link>
                                    <Link to="/myjobs"><div>My Jobs</div></Link> 
                                    <Link to="/"><div onClick={this.logout}>Log Out</div></Link> 
                            </div>
                        : 
                            <div>
                                <div>User Nav</div>
                                    {/* <Link to="/signup"><div>Sign Up</div></Link>
                                    <Link to="/login"><div>Log In</div></Link> */}
                                    <Link to="/home"><div>Home</div></Link>
                                    <Link to="/employers"><div>All Employers</div></Link>
                                    <Link to="/jobs"><div>All Jobs</div></Link>
                                    <Link to="/myapps"><div>My Applications</div></Link>
                                    <Link to="/profile"><div>My Profile</div></Link>
                                    <Link to="/"><div onClick={this.logout}>Log Out</div></Link>
                            </div>}
                    </div>

                    : ""}
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