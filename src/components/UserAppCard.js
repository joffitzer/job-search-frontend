import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { getJobs, showJob } from '../actionCreators'
import Button from 'react-bootstrap/Button'

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
        if (this.props.allJobs) {
            jobObj = this.props.allJobs.find(jobObj => parseInt(jobObj.id) === this.props.userApp.attributes.job.job.id)
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
                    <h5>You submitted this application on: {applyDate}</h5>
                    <img className="cardLogo" src={this.props.userApp.attributes.job.employer.logo} alt="logo"/>
                    <h5>Job Title: {this.props.userApp.attributes.job.job.title}</h5>
                    <h5>Employer: {this.props.userApp.attributes.job.employer.name}</h5>
                    <h5>Your Mini Cover Letter: {this.props.userApp.attributes.mini_cl}</h5>
                        <Link to={`/jobs/${this.props.userApp.attributes.job.job.id}`}>
                            <Button onClick={() => this.props.showJob(jobObj)}>View Job</Button>
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