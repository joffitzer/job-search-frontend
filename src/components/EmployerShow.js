import React from 'react'
import { connect as cnx } from 'react-redux';
import { getJobs, getEmployers } from '../actionCreators'
import JobCard from './JobCard'
import Container from 'react-bootstrap/Container'


class EmployerShowPage extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
            .then (fetch ('http://localhost:3000/api/v1/employers')
                .then(res => res.json())
                .then(employers => {
                    this.props.getEmployers(employers)
                })
            )
    }

    render() {

        let allJobsArray
        let currentEmployerJobsArray
        let employerJobs

        let employer
        if (this.props.allEmployers.data) {
            employer = this.props.allEmployers.data.find(employer => parseInt(employer.id) === parseInt(this.props.match.params.id))
        }

        if(this.props.allJobs && employer){
            allJobsArray = this.props.allJobs
            currentEmployerJobsArray = allJobsArray.filter(jobObj => parseInt(employer.id) === jobObj.attributes.employer.id)
            employerJobs = currentEmployerJobsArray.map(empJob => {
                return <JobCard key={empJob.id} job={empJob} />
            })
        }

        console.log('employerJobs: ', employerJobs)
    
        return(
            <Container>
                {employer && 
                    <div>
                        <h5>{employer.attributes.name}</h5>
                        <h5><i>{employer.attributes.industry}</i></h5>
                        <h5><sub>{employer.attributes.description}</sub></h5>
        
                        <hr></hr>
                    </div>}
        
                    <h5>All Jobs from this employer:</h5>
                    {employerJobs}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    let { employerToShow, allJobs, allEmployers } = state;
    return {
        employerToShow, allJobs, allEmployers
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: (jobs) => dispatch(getJobs(jobs)),
      getEmployers: (employers) => dispatch(getEmployers(employers))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerShowPage);