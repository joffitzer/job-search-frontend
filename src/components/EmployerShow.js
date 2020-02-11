import React from 'react'
import { connect as cnx } from 'react-redux';
import { getJobs } from '../actionCreators'
import JobCard from './JobCard'
import Container from 'react-bootstrap/Container'


class EmployerShowPage extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
    }

    render() {


        let allJobsArray
        let currentEmployerJobsArray
        let employerJobs

        if(this.props.allJobs){
            allJobsArray = this.props.allJobs
            currentEmployerJobsArray = allJobsArray.filter(jobObj => parseInt(this.props.employerToShow.id) === jobObj.attributes.employer.id)
            employerJobs = currentEmployerJobsArray.map(empJob => {
                return <JobCard key={empJob.id} job={empJob} />
            })
        }
    
        return(
            <Container>
                <h5>{this.props.employerToShow.attributes.name}</h5>
                <h5><i>{this.props.employerToShow.attributes.industry}</i></h5>
                <h5><sub>{this.props.employerToShow.attributes.description}</sub></h5>

                <hr></hr>

                <h5>All Jobs from this employer:</h5>
                {employerJobs}
            </Container>
        )

    }

}

const mapStateToProps = (state) => {
    let { employerToShow, allJobs } = state;
    return {
        employerToShow, allJobs
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: (jobs) => dispatch(getJobs(jobs))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerShowPage);