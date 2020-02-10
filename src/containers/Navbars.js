import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect as cnx } from 'react-redux'
import { logOutUser,  } from '../actionCreators'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navbars extends React.Component {

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
                                <Navbar bg="primary" variant="dark">
                                    <Navbar.Brand href="/employerhome">Employer Home</Navbar.Brand>
                                        <Nav className="mr-auto">
                                            <Nav.Link href='/postjob'>Post a Job</Nav.Link>
                                            <Nav.Link href='/myjobs'>My Jobs</Nav.Link>
                                            <Nav.Link href='/' onClick={this.logout}>Log Out</Nav.Link>
                                        </Nav>
                                </Navbar>
                                {/* <div>Employer Nav</div>
                                    <Link to="/employerhome"><div>Employer Home</div></Link>
                                    <Link to="/postjob"><div>Post a job</div></Link>
                                    <Link to="/myjobs"><div>My Jobs</div></Link> 
                                    <Link to="/"><div onClick={this.logout}>Log Out</div></Link>  */}
                            </div>
                        : 
                            <div>
                                {/* <div>User Nav</div> */}
                                    {/* <Link to="/home"><div>Home</div></Link>
                                    <Link to="/employers"><div>All Employers</div></Link>
                                    <Link to="/jobs"><div>All Jobs</div></Link>
                                    <Link to="/myapps"><div>My Applications</div></Link>
                                    <Link to="/profile"><div>My Profile</div></Link>
                                    <Link to="/"><div onClick={this.logout}>Log Out</div></Link> */}
                                    <Navbar bg="primary" variant="dark">
                                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                                        <Nav className="mr-auto">
                                            <Nav.Link href='/jobs'>All Jobs</Nav.Link>
                                            <Nav.Link href='/employers'>All Employers</Nav.Link>
                                            <Nav.Link href='/myapps'>My Applications</Nav.Link>
                                            <Nav.Link href='/profile'>My Profile</Nav.Link>
                                            <Nav.Link href='/' onClick={this.logout}>Log Out</Nav.Link>
                                        </Nav>
                                </Navbar>
                            </div>}
                    </div>

                    : ""}
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

export default withRouter(cnx(mapStateToProps, mapDispatchToProps)(Navbars))