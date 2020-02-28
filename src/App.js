import React from 'react';
import MainContainer from './containers/MainContainer'
import Navbars from './containers/Navbars'
import LoggedOutNav from './components/LoggedOutNav'
import { connect as cnx } from 'react-redux';
import { logInUser } from './actionCreators'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { getJobs, getEmployers } from './actionCreators' 
// Move these fetches to app??

class App extends React.Component {

  componentDidMount(){
    if (localStorage.token) {
      let token = localStorage.token
      fetch("http://localhost:3000/api/v1/autologin", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => {
          this.props.logInUser(user)
        })
    }
  }

  render(){
    
    return (
      <div>
        {this.props.isLoggedIn ? <Navbars /> : <LoggedOutNav />}
        <MainContainer />
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  let { isLoggedIn } = state;
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => dispatch(logInUser(user))
    // getJobs: (jobs) => dispatch(getJobs(jobs)),
    // getEmployers: (employers) => dispatch(getEmployers(employers))
  }
}

export default cnx(mapStateToProps, mapDispatchToProps)(App);
