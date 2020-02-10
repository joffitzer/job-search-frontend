import React from 'react'
import { connect as cnx } from 'react-redux';
import { setFilterValue } from '../actionCreators'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Home extends React.Component {

    state = {
        jobType: "All"
        // location: "Any Location"
    }

    handleJobTypeChange = (e) => {
        this.setState({
            jobType: e.target.value
        })
    }

    // handleLocationChange = (e) => {
    //     this.setState({
    //         location: e.target.value
    //     })
    // }

    render(){

        return(
            <div>
                <Container>
            
                    <Row>
                        <Col></Col>

                        <Col>
                        
                            <h3> I'm looking for 
            
                                        <select value={this.state.jobType} onChange={this.handleJobTypeChange}>
                                        <option value="All">All</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="UX/UI Design">UX/UI Design</option>
                                        </select>
                                
                                {"  "}jobs 
                                {/* in{"  "} 
                                
                                        <select value={this.state.location} onChange={this.handleLocationChange}>
                                        <option value="Any Location">Any Location</option>
                                        <option value="New York City">New York City</option>
                                        <option value="San Francisco">San Francisco</option>
                                        <option value="Chicago">Chicago</option>
                                        </select> */}
                            </h3>

                                    <Link to={`/jobs`}>
                                        <Button variant="primary" onClick={() => this.props.setFilterValue(this.state.jobType)}>Search Jobs</Button>
                                    </Link>
                           
                        </Col>

                        <Col></Col>

                    </Row>


                </Container>
            </div>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      setFilterValue: (filterValue) => dispatch(setFilterValue(filterValue))
    }
}

export default cnx(null, mapDispatchToProps)(Home);