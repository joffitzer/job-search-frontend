import React from 'react'
import { connect as cnx } from 'react-redux';
import UserAppForm from '../components/UserAppForm'
import { getUserApps, getJobs, showJob } from '../actionCreators' 
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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

        let job
        if (this.props.allJobs.length > 0) {
            job = this.props.allJobs.find(job => parseInt(job.id) === parseInt(this.props.match.params.id))
            this.props.showJob(job)
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
        if (!!jobIdsAppliedTo && !!job){
            if (jobIdsAppliedTo.includes(parseInt(job.id))){
                alreadyApplied = true
            }
        } 

        return(
                <Container className="center">
                    <h3>Job Details</h3>
                    <Card bg="primary" text="white" style={{ width: '40' }}>
                        {job ? 
                            <div>
                                <h5>Employer: {job.attributes.employer.name}</h5> 
                                <h5>Title: {job.attributes.title}</h5>
                                <h5>Location: {job.attributes.location}</h5>
                                <h5>Category: {job.attributes.category}</h5>
                                <h5>Summary: {job.attributes.summary}</h5>
                                <h5>Description: {job.attributes.description}</h5>
                            </div>
                        : "Job not found"}

                        {alreadyApplied ? 
                        <font size="5" className="form-padding"><b><i>*You've already applied to this job'*</i></b></font> 
                        : 
                        <Button className="button-spacing" variant="outline-light" onClick={this.clickApply}>Click here to Apply</Button>}
                        
                        {this.state.applyClicked ? 
                        <UserAppForm routerProps={this.props}/> 
                        : 
                        null}



                    </Card>

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