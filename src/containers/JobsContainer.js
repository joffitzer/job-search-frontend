import React from 'react';
import { connect as cnx } from 'react-redux';
import JobCard from '../components/JobCard'
import JobShow from '../components/JobShow'
import { getJobs, showJob } from '../actionCreators';


class JobsContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
    }

    showJob = (job) => {
        this.props.showJob(job)
    }
   
    render() {

        // let jobCards = this.props.allJobs.data.map( jobObj => {
        //     return <JobCard key={jobObj.id} job={jobObj} showJob={this.showJob}/>
        // })

        console.log('this.props: ', this.props)
        console.log('this.props.allJobs.data: ', this.props.allJobs.data)

        return (
            <div>
                <h1>Jobs Container</h1>
                    {/* {this.props.jobClicked ?  
                         <JobShow />
                         :
                         jobCards
                    }  */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    let { allJobs, jobClicked } = state;
  
    return {
      allJobs, jobClicked
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: (jobs) => dispatch(getJobs(jobs)),
      showJob: (job) => dispatch(showJob(job))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(JobsContainer);

