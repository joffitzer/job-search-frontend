import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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
                <Container className="center">
                    <Row>
                      <Col></Col>
                      <Col>
                        <Card bg="primary" text="white" style={{ width: '22rem' }}>
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
                              <Form.Label>First Name</Form.Label>
                              <Form.Control type="text" name="first_name" placeholder="First Name" id={this.state.first_name} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="text" name="last_name" placeholder="Last Name" id={this.state.last_name} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Bootcamp</Form.Label>
                              <Form.Control type="text" name="bootcamp" placeholder="Bootcamp" id={this.state.bootcamp} onChange={this.changeHandler}/>
                            </Form.Group>
                            
                            <Form.Group>
                              <Form.Label>Category</Form.Label>
                              <Form.Control as="select" name="category" placeholder="category" id={this.state.category} onChange={this.changeHandler}>
                                <option>Software Engineering</option>
                                <option>Data Science</option>
                                <option>UX/UI Design</option>
                              </Form.Control>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Grad Month</Form.Label>
                              <Form.Control type="text" name="grad_month" placeholder="Grad Month" id={this.state.grad_month} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Grad Year</Form.Label>
                              <Form.Control type="text" name="grad_year" placeholder="Grad Year" id={this.state.grad_year} onChange={this.changeHandler}/>
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

export default cnx(mapStateToProps, mapDispatchToProps)(Signup);



// <Form onSubmit={this.submitHandler}> 
//                             <Form.Group controlId={this.state.email}>
//                               <Form.Label>Email address</Form.Label>
//                               <Form.Control type="text" name="email" placeholder="Enter email" onChange={this.changeHandler}/>
//                             </Form.Group>

//                             <Form.Group controlId={this.state.password}>
//                               <Form.Label>Password</Form.Label>
//                               <Form.Control type="password" name="password" placeholder="Password" onChange={this.changeHandler}/>
//                             </Form.Group>

//                             <Form.Group controlId={this.state.first_name}>
//                               <Form.Label>First Name</Form.Label>
//                               <Form.Control type="text" name="first_name" placeholder="First Name" onChange={this.changeHandler}/>
//                             </Form.Group>

//                             <Form.Group controlId={this.state.last_name}>
//                               <Form.Label>Last Name</Form.Label>
//                               <Form.Control type="text" name="last_name" placeholder="Last Name" onChange={this.changeHandler}/>
//                             </Form.Group>

//                             <Form.Group controlId={this.state.bootcamp}>
//                               <Form.Label>Bootcamp</Form.Label>
//                               <Form.Control type="text" name="bootcamp" placeholder="Bootcamp" onChange={this.changeHandler}/>
//                             </Form.Group>
                            
//                             <Form.Group controlId={this.state.category}>
//                               <Form.Label>Category</Form.Label>
//                               <Form.Control as="select" name="category" placeholder="category" onChange={this.changeHandler}>
//                                 <option>Software Engineering</option>
//                                 <option>Data Science</option>
//                                 <option>UX/UI Design</option>
//                               </Form.Control>
//                             </Form.Group>

//                             <Form.Group controlId={this.state.grad_month}>
//                               <Form.Label>Grad Month</Form.Label>
//                               <Form.Control type="text" name="grad_month" placeholder="Grad Month" onChange={this.changeHandler}/>
//                             </Form.Group>

//                             <Form.Group controlId={this.state.grad_year}>
//                               <Form.Label>Grad Year</Form.Label>
//                               <Form.Control type="text" name="grad_year" placeholder="Grad Year" onChange={this.changeHandler}/>
//                             </Form.Group>
                            
//                             <Button className="button-spacing" variant="outline-light" type="submit">
//                               Submit
//                             </Button>
//                           </Form>