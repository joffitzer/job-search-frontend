import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'

class EmployerSignup extends React.Component {
    state = {
        email: "",
        password: "",
        name: "",
        description: "",
        logo: "",
        industry: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = (employerInfo) => {
        fetch("http://localhost:3000/api/v1/employers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify({ employer: employerInfo })
        })
          .then(resp => resp.json())
          .then(response => { 
            localStorage.setItem("token", response.token)
            this.props.logInUser(response)
          })
          .then( () => this.props.history.push("/employerhome"))
      }

    submitHandler = (e) => {
        e.preventDefault()
        this.signup(this.state)
        this.setState({
            email: "",
            password: "",
            name: "",
            description: "",
            logo: "",
            industry: ""
        })
    }

    render() {

        console.log('logged in user: ', this.props.loggedInUser)

        return (
            <div>
                <h3>signup form to create a new employer</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="email" value={this.state.email} placeholder="enter email" onChange={this.changeHandler} />
                    <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
                    <input type="text" name="name" value={this.state.name} placeholder="enter company name" onChange={this.changeHandler} />
                    <input type="text" name="description" value={this.state.description} placeholder="enter company description" onChange={this.changeHandler} />
                    <input type="text" name="logo" value={this.state.logo} placeholder="enter logo" onChange={this.changeHandler} />
                    <input type="text" name="industry" value={this.state.industry} placeholder="enter industry" onChange={this.changeHandler} />
                   
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

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerSignup);