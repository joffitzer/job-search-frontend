import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'

class Signup extends React.Component {
    state = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        bootcamp: "",
        category: "",
        grad_month: "",
        grad_year: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = (userInfo) => {
        fetch("http://localhost:3000/api/v1/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify({ user: userInfo })
        })
          .then(resp => resp.json())
          .then(response => { 
            localStorage.setItem("token", response.token)
            this.props.logInUser(response)
          })
          .then( () => this.props.history.push("/home"))
      }

    submitHandler = (e) => {
        e.preventDefault()
        this.signup(this.state)
        this.setState({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            bootcamp: "",
            category: "",
            grad_month: "",
            grad_year: ""
        })
    }

    render() {

        console.log('logged in user: ', this.props.loggedInUser)

        return (
            <div>
                <h3>signup form to create a new user</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="email" value={this.state.email} placeholder="enter email" onChange={this.changeHandler} />
                    <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
                    <input type="text" name="first_name" value={this.state.first_name} placeholder="enter first name" onChange={this.changeHandler} />
                    <input type="text" name="last_name" value={this.state.last_name} placeholder="enter last name" onChange={this.changeHandler} />
                    <input type="text" name="bootcamp" value={this.state.bootcamp} placeholder="enter bootcamp" onChange={this.changeHandler} />
                    <input type="text" name="category" value={this.state.category} placeholder="enter category" onChange={this.changeHandler} />
                    <input type="text" name="grad_month" value={this.state.grad_month} placeholder="enter grad month" onChange={this.changeHandler} />
                    <input type="text" name="grad_year" value={this.state.grad_year} placeholder="enter year" onChange={this.changeHandler} />

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

export default cnx(mapStateToProps, mapDispatchToProps)(Signup);