import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'

class Login extends React.Component {

    state = {
        user: []
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/users')
            .then(res => res.json())
            .then(userObj => {
                this.setState({
                    user: userObj
                })
            })
    }
    
    render(){

        let user

        if (this.state.user.data) {
            console.log('login page this.state: ', this.state.user.data[0])
            user = this.state.user.data[0]
        }

        return(
            <div>
                <h1>Login</h1>
                <button onClick={() => this.props.logInUser(user)}>Log In</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logInUser: (user) => dispatch(logInUser(user))
    }
  }

export default cnx(null, mapDispatchToProps)(Login);