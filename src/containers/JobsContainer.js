import React from 'react';
import { connect as cnx } from 'react-redux';
import JobCard from '../components/JobCard'
import JobShow from '../components/JobShow'
import { getJobs, showJob, setFilterValue } from '../actionCreators';
import Container from 'react-bootstrap/Container'


class JobsContainer extends React.Component {

    handleChange = (e) => {
      this.props.setFilterValue(e.target.value)
    }
   
    render() {

        let filteredJobs

        if (this.props.filterValue.length){
          switch (this.props.filterValue) {
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
              filteredJobs = this.props.allJobs
              break;
          }
        }

        let jobCards

        if (this.props.allJobs){
          if (this.props.filterValue.length){
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
              <Container>
                  <form className="form-padding">
                    <label>
                        Filter jobs by category:
                        <select value={this.props.filterValue} onChange={this.handleChange}>
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
              </Container>
        )
    }
}

const mapStateToProps = (state) => {
    let { allJobs, jobClicked, filterValue } = state;
    return {
      allJobs, jobClicked, filterValue
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: (jobs) => dispatch(getJobs(jobs)),
      showJob: (job) => dispatch(showJob(job)),
      setFilterValue: (filterValue) => dispatch(setFilterValue(filterValue))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(JobsContainer);

