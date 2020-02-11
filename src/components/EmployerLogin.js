import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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
            if (response.errors) {
              alert('Invalid Username or Password')
            } else {
              localStorage.setItem("token", response.token)
              this.props.logInUser(response.employer)
              this.props.history.push('/employerhome')
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

                
                  {/* <h3>login form to sign in an existing employer</h3> */}
                  {/* <form onSubmit={this.submitHandler}>
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
                              <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name="email" placeholder="Enter email" id={this.state.email} onChange={this.changeHandler}/>
                              </Form.Group>

                              <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" id={this.state.password} onChange={this.changeHandler}/>
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
    let { loggedInUser, isLoggedIn } = state;
    return {
        loggedInUser, isLoggedIn
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      logInUser: (user) => dispatch(logInUser(user)),
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerLogin);