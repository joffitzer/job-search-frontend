import React from 'react'
import { connect as cnx } from 'react-redux';
// import { logInUser } from '../actionCreators'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        this.props.history.push('/jobposted')
    )
        // .then(formattedItem => this.setState({
        //     allPortfolioItems: [...this.state.allPortfolioItems, formattedItem],
        //     showForm: !this.state.showForm,
        //     titleValue: "",
        //     blurbValue: "",
        //     urlValue: ""
        // }))
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
                      
                        <Form onSubmit={this.handleSubmit}> 
                          <Form.Group controlId={this.state.title}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter job title" onChange={this.changeHandler}/>
                          </Form.Group>

                          <Form.Group controlId={this.state.location}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" name="location" placeholder="Location" onChange={this.changeHandler}/>
                          </Form.Group>

                          <Form.Group controlId={this.state.category}>
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" name="category" placeholder="Job Category" onChange={this.changeHandler}>
                              <option>Software Engineering</option>
                              <option>Data Science</option>
                              <option>UX/UI Design</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group controlId={this.state.summary}>
                            <Form.Label>Job Summary</Form.Label>
                            <Form.Control type="text" name="summary" placeholder="Job Summary" onChange={this.changeHandler}/>
                          </Form.Group>

                          <Form.Group controlId={this.state.description}>
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Job Description" onChange={this.changeHandler}/>
                          </Form.Group>

                          <Form.Group controlId={this.state.sal_range_low}>
                            <Form.Label>Salary Range (low)</Form.Label>
                            <Form.Control type="text" name="sal_range_low" placeholder="Salary Range (low)" onChange={this.changeHandler}/>
                          </Form.Group>

                          <Form.Group controlId={this.state.sal_range_high}>
                            <Form.Label>Salary Range (high)</Form.Label>
                            <Form.Control type="text" name="sal_range_high" placeholder="Salary Range (high)" onChange={this.changeHandler}/>
                          </Form.Group>
                          
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//       logInUser: (user) => dispatch(logInUser(user)),
//     }
//   }

export default cnx(mapStateToProps, null)(PostJob);