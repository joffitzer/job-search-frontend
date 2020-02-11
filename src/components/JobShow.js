import React from 'react'
import { connect as cnx } from 'react-redux';
import UserAppForm from '../components/UserAppForm'
import { getUserApps, getJobs, showJob } from '../actionCreators' 
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class JobShow extends React.Component {

    state = {
        applyClicked: false
    }

    clickApply = () => {
        this.setState({
            applyClicked: !this.state.applyClicked
        })
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/user_apps')
            .then(res => res.json())
            .then(userApps => {
                this.props.getUserApps(userApps)
            })
            .then( fetch ('http://localhost:3000/api/v1/jobs')
                    .then(res => res.json())
                    .then(jobs => {
                        this.props.getJobs(jobs)
                    }))
    }

    render() {

        let user
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }

        let userJobsAppliedTo
        if (this.props.allUserApps.data) {
            userJobsAppliedTo = this.props.allUserApps.data.filter(userApp => userApp.attributes.user.id === user.id)
        }

        let jobIdsAppliedTo 
        if (this.props.allUserApps.data) {
            jobIdsAppliedTo = userJobsAppliedTo.map(jobObj => parseInt(jobObj.attributes.job.job.id))
        }

        let alreadyApplied
        if (jobIdsAppliedTo && jobIdsAppliedTo.includes(parseInt(this.props.jobToShow.id))){
            alreadyApplied = true
        }

        let job
        if (this.props.allJobs) {
            job = this.props.allJobs.find(job => parseInt(job.id) === parseInt(this.props.match.params.id))
            this.props.showJob(job)
        }

        return(
                <Container>
                    {job ? 
                    <div>
                        <h5>Employer: {job.attributes.employer.name}</h5> 
                        <h5>Title: {job.attributes.title}</h5>
                        <h5>Location: {job.attributes.location}</h5>
                        <h5>Category: {job.attributes.category}</h5>
                        <h5>Summary: {job.attributes.summary}</h5>
                    </div>
                    : "Job not found"}

                    {alreadyApplied ? 
                    "You applied to this job already" 
                    : 
                    <Button variant="primary" onClick={this.clickApply}>Apply</Button>}
                    
                    {this.state.applyClicked ? 
                    <UserAppForm routerProps={this.props}/> 
                    : 
                    null}

                </Container>
        )
    }
}

const mapStateToProps = (state) => {
    let { jobToShow, allUserApps, loggedInUser, allJobs } = state;
  
    return {
        jobToShow, allUserApps, loggedInUser, allJobs
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getUserApps: (userApps) => dispatch(getUserApps(userApps)),
        getJobs: (jobs) => dispatch(getJobs(jobs)),
        showJob: (job) => dispatch(showJob(job))
      }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(JobShow);