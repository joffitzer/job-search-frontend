import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


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
            <Container className="center">
                {/* <h3>signup form to create a new employer</h3>
                <form onSubmit={this.submitHandler}>
                    <label>Email<input type="text" name="email" value={this.state.email} placeholder="enter email" onChange={this.changeHandler} /></label>
                    <label>Password<input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} /></label>
                    <label>Company Name<input type="text" name="name" value={this.state.name} placeholder="enter company name" onChange={this.changeHandler} /></label>
                    <label>Company Description<input type="text" name="description" value={this.state.description} placeholder="enter company description" onChange={this.changeHandler} /></label>
                    <label>Company Logo<input type="text" name="logo" value={this.state.logo} placeholder="enter logo" onChange={this.changeHandler} /></label>
                    <label>Industry<input type="text" name="industry" value={this.state.industry} placeholder="enter industry" onChange={this.changeHandler} /></label>
                   
                    <input type="submit" value="submit" /> */}

                  
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

                            <Form.Group>
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" name="name" placeholder="Name" id={this.state.name} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text" name="description" placeholder="Description" id={this.state.description} onChange={this.changeHandler}/>
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