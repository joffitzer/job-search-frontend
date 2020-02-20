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
            <div className="center">
                <Container>
                    <Row>
                        <Col>
                                <h3 className="box"> I'm looking for {"  "}
                                            <select value={this.state.jobType} onChange={this.handleJobTypeChange}>
                                            <option value="All">All</option>
                                            <option value="Software Engineering">Software Engineering</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="UX/UI Design">UX/UI Design</option>
                                            </select>  

                                    {"   "} jobs  

                                        <Link to={`/jobs`}>
                                            <Button variant="primary" onClick={() => this.props.setFilterValue(this.state.jobType)}>Search Jobs</Button>
                                        </Link>
                                </h3>                                                  
                        </Col>
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