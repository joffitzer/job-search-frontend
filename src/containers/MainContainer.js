import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage' 
import Thanks from '../components/Thanks'
import EmployerSignup from '../components/EmployerSignup'
import EmployerLogin from '../components/EmployerLogin'
import EmployerHome from '../components/EmployerHome'
import EmployerJobsContainer from '../containers/EmployerJobsContainer'
import PostJob from '../components/PostJob'
import JobPosted from '../components/JobPosted'
import JobCandidates from '../components/JobCandidates'
import CandidateShow from '../components/CandidateShow'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import EmployersContainer from '../containers/EmployersContainer'
import EmployerShow from '../components/EmployerShow'
import JobsContainer from '../containers/JobsContainer'
import JobShow from '../components/JobShow'
import ProfileContainer from '../containers/ProfileContainer'
import UserAppsContainer from '../containers/UserAppsContainer'
import { connect as cnx } from 'react-redux';
import { getJobs, getEmployers, getUserApps } from '../actionCreators'

class MainContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/jobs')
            .then(res => res.json())
            .then(jobs => {
                this.props.getJobs(jobs)
            })
            .then (fetch ('http://localhost:3000/api/v1/employers')
              .then(res => res.json())
              .then(employers => {
                  this.props.getEmployers(employers)
            })
            .then(fetch ('http://localhost:3000/api/v1/user_apps')
              .then(res => res.json())
              .then(userApps => {
                  this.props.getUserApps(userApps)
            })
        ))
    }

    render() {
        return (
            <div>
                {/* <h1>Main Container</h1> */}
                <Route exact path="/" render={(routerProps) => <LandingPage {...routerProps}/>} />
                <Route exact path="/employersignup" render={(routerProps) => <EmployerSignup {...routerProps}/>} />
                <Route exact path="/employerlogin" render={(routerProps) => <EmployerLogin {...routerProps}/>} />
                <Route exact path="/employerhome" render={(routerProps) => <EmployerHome {...routerProps}/>} />
                <Route exact path="/postjob" render={(routerProps) => <PostJob {...routerProps}/>} />
                <Route exact path="/jobposted" render={(routerProps) => <JobPosted {...routerProps}/>} />
                <Route exact path="/myjobs" render={(routerProps) => <EmployerJobsContainer {...routerProps}/>} />
                <Route exact path="/candidates/job/:id" render={(routerProps) => <JobCandidates {...routerProps}/>} />
                <Route exact path="/candidates/:id" render={(routerProps) => <CandidateShow {...routerProps}/>} />
                <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps}/>} />
                <Route exact path="/login" render={(routerProps) => <Login {...routerProps}/>} />
                {/* <Route exact path="/logout" component={Logout} /> */}
                <Route exact path="/thanks" component={Thanks} />
                <Route exact path="/profile" component={ProfileContainer} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/employers" component={EmployersContainer} />
                <Route exact path="/employers/:id" component={EmployerShow} />
                <Route exact path="/jobs" component={JobsContainer} />
                <Route exact path="/jobs/:id" render={(routerProps) => <JobShow {...routerProps} />}/>
                <Route exact path="/myapps" component={UserAppsContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: (jobs) => dispatch(getJobs(jobs)),
      getEmployers: (employers) => dispatch(getEmployers(employers)),
      getUserApps: (userApps) => dispatch (getUserApps(userApps))
    }
  }
  
  export default cnx(null, mapDispatchToProps)(MainContainer);