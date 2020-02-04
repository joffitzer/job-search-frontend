import React from 'react'
import { connect as cnx } from 'react-redux';
import { getJobs } from '../actionCreators'
import JobCard from './JobCard'


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

        if(this.props.allJobs.data){
            allJobsArray = this.props.allJobs.data
            currentEmployerJobsArray = allJobsArray.filter(jobObj => parseInt(this.props.employerToShow.id) === jobObj.attributes.employer.id)
            employerJobs = currentEmployerJobsArray.map(empJob => {
                return <JobCard key={empJob.id} job={empJob} />
            })
        }
    
        return(
            <div>
                <h5>Employer Show Page</h5>
                <h5>Name: {this.props.employerToShow.attributes.name}</h5>
                <h5>Industry: {this.props.employerToShow.attributes.industry}</h5>
                <h5>Description: {this.props.employerToShow.attributes.description}</h5>

                <hr></hr>

                <h5>All Jobs from this employer:</h5>
                {employerJobs}
                
            </div>
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