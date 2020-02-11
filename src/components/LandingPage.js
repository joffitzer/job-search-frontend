import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import LaunchpadLogo from '../LaunchpadLogo.png'


class LandingPage extends React.Component {

    render() {
        return(
            <div>
                <Container className="center">  
                        <Row className="justify-content-md-center">
                            <img src={LaunchpadLogo} alt="logo"/>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                                <Card.Header>For Employers</Card.Header>
                                <Card.Body>
                                    <Card.Title>Find your next hire</Card.Title>

                                        <Link to="/employersignup"><Button className="button-spacing" variant="outline-light">Employer Sign Up</Button></Link>
                                        <Link to="/employerlogin"><Button className="button-spacing" variant="outline-light">Employer Log In</Button></Link>
                                </Card.Body>
                            </Card>
                                <Col md="auto">
                                </Col>
                            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                                <Card.Header>For Bootcamp Graduates</Card.Header>
                                <Card.Body>
                                    <Card.Title>Land your first tech job</Card.Title>
                                        <Link to="/signup"><Button className="button-spacing" variant="outline-light">Job Seeker Sign Up</Button></Link>
                                        <Link to="/login"><Button className="button-spacing" variant="outline-light">Job Seeker Log In</Button></Link>
                                </Card.Body>
                            </Card>
                        </Row>
                </Container>
            </div>
        )
    }
}

export default LandingPage;