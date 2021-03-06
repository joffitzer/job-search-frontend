import React from 'react'
import { connect as cnx } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class PostJob extends React.Component {

    state = {
        title: "",
        location: "",
        category: "Software Engineering",
        summary: "",
        description: "",
        sal_range_low: "",
        sal_range_high: "",
        active: true
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user 
        if (this.props.loggedInUser.employer) {
            user = this.props.loggedInUser.employer
        } else {
            user = this.props.loggedInUser
        }
        fetch ('http://localhost:3000/api/v1/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                location: this.state.location,
                category: this.state.category,
                summary: this.state.summary,
                description: this.state.description,
                sal_range_low: this.state.sal_range_low,
                sal_range_high: this.state.sal_range_high,
                active: true,
                employer_id: user.id
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(() => 
        this.props.history.push('/jobposted'))
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return(
            <div>

              <Container>
                    <Row>
                      <Col></Col>
                      <Col>
                      
                        <h1>Post a Job</h1>

                        <Card bg="primary" text="white" style={{ width: '30rem' }}>
                          <Form onSubmit={this.handleSubmit}> 
                            <Form.Group>
                              <Form.Label>Title</Form.Label>
                              <Form.Control type="text" name="title" placeholder="Enter job title" id={this.state.title} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Location</Form.Label>
                              <Form.Control type="text" name="location" placeholder="Location" id={this.state.location} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Category</Form.Label>
                              <Form.Control as="select" name="category" placeholder="Job Category" id={this.state.category} onChange={this.changeHandler}>
                                <option>Software Engineering</option>
                                <option>Data Science</option>
                                <option>UX/UI Design</option>
                              </Form.Control>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Job Summary (1-3 sentences)</Form.Label>
                              <Form.Control as="textarea" rows="2" type="text" name="summary" placeholder="Job Summary" id={this.state.summary} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Job Description</Form.Label>
                              <Form.Control as="textarea" rows="5" type="text" name="description" placeholder="Job Description" id={this.state.description} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Salary Range (low)</Form.Label>
                              <Form.Control type="text" name="sal_range_low" placeholder="Salary Range (low)" id={this.state.sal_range_low} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group>
                              <Form.Label>Salary Range (high)</Form.Label>
                              <Form.Control type="text" name="sal_range_high" placeholder="Salary Range (high)" id={this.state.sal_range_high} onChange={this.changeHandler}/>
                            </Form.Group>
                            
                            <Button className="button-spacing" variant="outline-light" type="submit">
                              Post Job
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

export default cnx(mapStateToProps, null)(PostJob);