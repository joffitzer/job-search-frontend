import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class LandingPage extends React.Component {

    render() {
        return(
            <div>
                <Container className="center">    
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            <Link to="/employersignup"><Button variant="primary">Employer Sign Up</Button></Link>
                            <Link to="/employerlogin"><Button variant="primary">Employer Log In</Button></Link>
                        </Col>
                        <Col md="auto"></Col>
                        <Col xs lg="2">
                            <Link to="/signup"><Button variant="primary">Job Seeker Sign Up</Button></Link>
                            <Link to="/login"><Button variant="primary">Job Seeker Log In</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LandingPage;