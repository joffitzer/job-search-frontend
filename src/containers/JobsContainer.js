import React from 'react';
import { connect as cnx } from 'react-redux';
import JobCard from '../components/JobCard'
import JobShow from '../components/JobShow'
import { getJobs, showJob } from '../actionCreators';


class JobsContainer extends React.Component {

  state = {
    filterValue: ""
  }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
    }

    handleChange = (e) => {
      this.setState({
        filterValue: e.target.value
      })
    }
   
    render() {

        let filteredJobs

        if (this.state.filterValue.length){
          switch (this.state.filterValue) {
            case "All Jobs":
                filteredJobs = this.props.allJobs
              break;
            case "Software Engineering":
                filteredJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.category === "Software Engineering")
              break;
            case "Data Science":
                filteredJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.category === "Data Science")
              break;
            case "UX/UI Design":
                filteredJobs = this.props.allJobs.filter(jobObj => jobObj.attributes.category === "UX/UI Design")
              break;
            default:
              break;
          }
        }

        let jobCards

        if (this.props.allJobs){
          if (this.state.filterValue.length){
            if(filteredJobs.length){
              jobCards = filteredJobs.map( jobObj => {
                return <JobCard key={jobObj.id} job={jobObj} />
              })
            } else {
              jobCards = "No jobs posted in this category yet"
            }
          } else {
            jobCards = this.props.allJobs.map( jobObj => {
            return <JobCard key={jobObj.id} job={jobObj} />
            })
          }
        } 

        return (
            <div>
                <h1>Jobs Container</h1>
                  <form >
                    <label>
                        Filter jobs by category:
                        <select value={this.state.filterValue} onChange={this.handleChange}>
                          <option value="All Jobs">All Jobs</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="Data Science">Data Science</option>
                          <option value="UX/UI Design">UX/UI Design</option>
                        </select>
                    </label>
                  </form>
                    {this.props.jobClicked ?  
                         <JobShow />
                         :
                         jobCards
                    } 
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

