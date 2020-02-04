import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { getJobs, showJob } from '../actionCreators'

class UserAppCard extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
    }

    render() {

        let jobObj 
        if (this.props.allJobs.data) {
            jobObj = this.props.allJobs.data.find(jobObj => parseInt(jobObj.id) === this.props.userApp.attributes.job.job.id)
        }

        let date = new Date(this.props.userApp.attributes.created_at);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        let applyDate = month + '/' + dt + '/' + year
        

        return(
            <div>
                <h5>User App Card</h5>
                    <h5>You submitted this application on: {applyDate}</h5>
                    <h5>Job Title: {this.props.userApp.attributes.job.job.title}</h5>
                    <h5>Employer: {this.props.userApp.attributes.job.employer.name}</h5>
                    <h5>Your Mini Cover Letter: {this.props.userApp.attributes.mini_cl}</h5>
                        <Link to={`/jobs/${this.props.userApp.attributes.job.job.id}`}>
                            <button onClick={() => this.props.showJob(jobObj)}>View Job Show Page</button>
                        </Link>
                    <hr></hr>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allJobs } = state;
    return {
        allJobs
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      showJob: (job) => dispatch(showJob(job)),
      getJobs: (jobs) => dispatch(getJobs(jobs))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(UserAppCard);