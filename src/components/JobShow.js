import React from 'react'
import { connect as cnx } from 'react-redux';
import UserAppForm from '../components/UserAppForm'
import { getUserApps } from '../actionCreators' 

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
    }

    render() {

        let jobIdsAppliedTo = this.props.allUserApps.data.map(jobObj => parseInt(jobObj.attributes.job.job.id))

        let alreadyApplied
        if (jobIdsAppliedTo.includes(parseInt(this.props.jobToShow.id))){
            alreadyApplied = true
        }

        return(
            <div>
                <h5>Job Show Page</h5>
                <h5>Employer: {this.props.jobToShow.attributes.employer.name}</h5> 
                <h5>Title: {this.props.jobToShow.attributes.title}</h5>
                <h5>Location: {this.props.jobToShow.attributes.location}</h5>
                <h5>Category: {this.props.jobToShow.attributes.category}</h5>
                <h5>Summary: {this.props.jobToShow.attributes.summary}</h5>

                {alreadyApplied ? 
                "You applied to this job already" 
                : 
                <button onClick={this.clickApply}>APPLY TO THIS JOB</button>}
                
                {this.state.applyClicked ? 
                <UserAppForm routerProps={this.props}/> 
                : 
                null}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { jobToShow, allUserApps } = state;
  
    return {
        jobToShow, allUserApps
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getUserApps: (userApps) => dispatch(getUserApps(userApps)),
      }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(JobShow);