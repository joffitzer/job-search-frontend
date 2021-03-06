import React from 'react'
import CandidateCard from '../components/CandidateCard'
import { connect as cnx } from 'react-redux';
import { getUserApps, showJob } from '../actionCreators'
import Container from 'react-bootstrap/Container'

class JobCandidates extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/user_apps')
            .then(res => res.json())
            .then(userApps => {
                this.props.getUserApps(userApps)
            })
    }

    render() {

        let jobApps
        if (this.props.allUserApps.data) {
            jobApps = this.props.allUserApps.data.filter(app => app.attributes.job.job.id === parseInt(this.props.match.params.id))
        }

        let candidates 
        let candidateCards
        if (jobApps) {
            candidates = jobApps.map(app => app.attributes.user)
            candidateCards = candidates.map(candidate => {
                return <CandidateCard key={candidate.id} candidate={candidate}/>
            })
        } 

        return(
            <Container>
                <h5 className="form-padding">Job Candidates</h5>
                { candidates ? candidateCards : "No candidates yet!"}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser, jobToShow, allUserApps } = state;
    return {
        loggedInUser, jobToShow, allUserApps
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      showJob: (job) => dispatch(showJob(job)),
      getUserApps: (userApps) => dispatch(getUserApps(userApps))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(JobCandidates);