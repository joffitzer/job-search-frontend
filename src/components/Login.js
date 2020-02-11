import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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
            if (response.errors) {
              alert('Invalid Username or Password')
            } else {
              localStorage.setItem("token", response.token)
              this.props.logInUser(response.user)
              this.props.history.push('/home')
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

        console.log('logged in user: ', this.props.loggedInUser)

        return (
            <div>
                {/* <h3>login form to sign in an existing user</h3>
                <form onSubmit={this.submitHandler}>
                    <label>Email<input type="text" name="email" value={this.state.email} placeholder="enter email" onChange={this.changeHandler} /></label>
                    <label>Password<input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} /></label>
            
                    <input type="submit" value="submit" />

                </form> */}


                <Container className="center">
                    <Row>
                      <Col></Col>
                      <Col>
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                          <Form onSubmit={this.submitHandler}> 
                            <Form.Group controlId={this.state.email}>
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="text" name="email" placeholder="Enter email" onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group controlId={this.state.password}>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name="password" placeholder="Password" onChange={this.changeHandler}/>
                            </Form.Group>
                            
                            <Button className="button-spacing" variant="outline-light" type="submit">
                              Submit
                            </Button>
                          </Form>
                        </Card>
                      </Col>
                      <Col></Col>
                    </Row>
                </Container>

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