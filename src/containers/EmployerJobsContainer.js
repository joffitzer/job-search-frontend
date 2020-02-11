import React from 'react';
import { connect as cnx } from 'react-redux';
import EmployerJobCard from '../components/EmployerJobCard'
// import JobShow from '../components/JobShow'
import { getJobs, showJob, deleteJob } from '../actionCreators';
import Container from 'react-bootstrap/Container'


class EmployerJobsContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
            // .then(this.props.setFilterValue("All Jobs"))
    }

    handleDeleteJob = (job) => {
        fetch(`http://localhost:3000/api/v1/jobs/${job.id}`,  {
            method: 'DELETE'
        })
        .then(this.props.deleteJob(job))
    }
   
    render() {

        // let filteredJobs

        // if (this.props.filterValue.length){
        //   switch (this.props.filterValue) {
        //     case "All Jobs":
        //         filteredJobs = this.props.allJobs
        //       break;
        //     case "Software Engineering":
        //         filteredJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.category === "Software Engineering")
        //       break;
        //     case "Data Science":
        //         filteredJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.category === "Data Science")
        //       break;
        //     case "UX/UI Design":
        //         filteredJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.category === "UX/UI Design")
        //       break;
        //     default:
        //       break;
        //   }
        // }

        let myJobs
        let employerJobCards

        if (this.props.allJobs) {
            let user 
            if (this.props.loggedInUser.employer) {
                user = this.props.loggedInUser.employer
            } else {
                user = this.props.loggedInUser
            }
            myJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.employer.id === user.id) 
        }

        if (myJobs) {
            employerJobCards = myJobs.map(jobObj => {
                return <EmployerJobCard key={jobObj.id} job={jobObj} handleDeleteJob={this.handleDeleteJob} />
            })
        }

        // if (this.props.allJobs){
        //   if (this.props.filterValue.length){
        //       if(filteredJobs.length){
        //         jobCards = filteredJobs.map( jobObj => {
        //           return <JobCard key={jobObj.id} job={jobObj} />
        //         })
        //       } else {
        //         jobCards = "No jobs posted in this category yet"
        //       }
        //   } else {
        //     jobCards = this.props.allJobs.map( jobObj => {
        //     return <JobCard key={jobObj.id} job={jobObj} />
        //     })
        //   }
        // } 

        return (
            <div>
                <Container>

                    <h1 className="form-padding">My Jobs</h1>
                        {myJobs.length ?  employerJobCards : "" } 

                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allJobs, jobClicked, loggedInUser } = state;
    return {
      allJobs, jobClicked, loggedInUser
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: (jobs) => dispatch(getJobs(jobs)),
      showJob: (job) => dispatch(showJob(job)),
      deleteJob: (job) => dispatch(deleteJob(job))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(EmployerJobsContainer);