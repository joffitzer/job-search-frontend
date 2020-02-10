import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'

class EmployerLogin extends React.Component {
    state = {
        email: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (employerInfo) => {
        fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify(employerInfo)
        })
          .then(resp => resp.json())
          .then(response => {
            if (response.token && response.employer) {
              localStorage.setItem("token", response.token)
              this.props.logInUser(response.employer)
              this.props.history.push("/employerhome")
            } else {
              alert('Invalid Username or Password')
            }
          })
      }

    submitHandler = (e) => {
        e.preventDefault()
        this.login(this.state)
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {

        return (
            <div>
                <h3>login form to sign in an existing employer</h3>
                <form onSubmit={this.submitHandler}>
                    <label>Email<input type="text" name="email" value={this.state.email} placeholder="enter email" onChange={this.changeHandler} /></label>
                    <label>Password<input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} /></label>
            
                    <input type="submit" value="submit" />

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser } = state;
    return {
        loggedInUser
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      logInUser: (user) => dispatch(logInUser(user)),
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerLogin);