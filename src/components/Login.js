import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (userInfo) => {
        fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify(userInfo)
        })
          .then(resp => resp.json())
          .then(response => {
            localStorage.setItem("token", response.token)
            this.props.logInUser(response.user)
          })
        .then( () => this.props.history.push("/home"))
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

        console.log('logged in user: ', this.props.loggedInUser)

        return (
            <div>
                <h3>login form to sign in an existing user</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="email" value={this.state.email} placeholder="enter email" onChange={this.changeHandler} />
                    <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
            
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

export default cnx(mapStateToProps, mapDispatchToProps)(Login);



//old one

//     componentDidMount() {
//         fetch ('http://localhost:3000/api/v1/users')
//             .then(res => res.json())
//             .then(userObj => {
//                 console.log(userObj)
//                 this.setState({
//                     user: userObj
//                 })
//             })
//     }
    
//     render(){

//         console.log('state of user: ', this.state.user)

//         let user

//         if (this.state.user.data) {
//             user = this.state.user.data[0]
//         }

//         return(
//             <div>
//                 <h1>Login</h1>
//                 <button onClick={() => this.props.logInUser(user)}>Log In</button>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       logInUser: (user) => dispatch(logInUser(user))
//     }
//   }

// export default cnx(null, mapDispatchToProps)(Login);