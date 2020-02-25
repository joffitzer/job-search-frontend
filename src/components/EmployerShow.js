import React from 'react'
import { connect as cnx } from 'react-redux';
import JobCard from './JobCard'
import Container from 'react-bootstrap/Container'


class EmployerShowPage extends React.Component {

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

export default cnx(mapStateToProps, null)(EmployerShowPage);