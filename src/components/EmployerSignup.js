import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import blue from '../blue.jpg'


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

        return (

          <div>
            <img id="lp-background" src={blue} alt="background" />



            <Container className="center">
                    <Row>
                      <Col></Col>
                      <Col>
                        <Card bg="primary" text="white" style={{ width: '30rem' }}>
                          <Form className="wide-padding" onSubmit={this.submitHandler}> 
                            <Form.Group>
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="text" name="email" placeholder="Enter email" id={this.state.email} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name="password" placeholder="Password" id={this.state.password} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" name="name" placeholder="Name" id={this.state.name} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Description</Form.Label>
                              <Form.Control as="textarea" rows="3" type="text" name="description" placeholder="Description" id={this.state.description} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Logo</Form.Label>
                              <Form.Control type="text" name="logo" placeholder="Logo" id={this.state.logo} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Industry</Form.Label>
                              <Form.Control type="text" name="industry" placeholder="Industry" id={this.state.industry} onChange={this.changeHandler}/>
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

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerSignup);