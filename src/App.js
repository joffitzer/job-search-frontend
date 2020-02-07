import React from 'react';
import MainContainer from './containers/MainContainer'
import Nav from './containers/Nav'
import { connect as cnx } from 'react-redux';
import { logInUser } from './actionCreators'

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
          console.log('user: ', user)
          this.props.logInUser(user)
        })
    }
  }

  render(){

    console.log('local storage: ', localStorage)
    
    return (
      <div>
        <Nav />
        <MainContainer />
      </div>
    );

  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => dispatch(logInUser(user)),
  }
}

export default cnx(null, mapDispatchToProps)(App);
