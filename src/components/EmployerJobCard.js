import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showJob } from '../actionCreators'

const EmployerJobCard = (props) => {
    console.log('props on employer job card: ', props)

    return(

        <div>
                <h5>Title: {props.job.attributes.title}</h5>
                <h5>Location: {props.job.attributes.location}</h5>
                <h5>Category: {props.job.attributes.category}</h5>
                <h5>Summary: {props.job.attributes.summary}</h5>
                <h5>Salary Range: ${props.job.attributes.sal_range_low} - ${props.job.attributes.sal_range_high}</h5>

                    <Link to={`/candidates/job/${props.job.id}`}>
                        <button onClick={() => props.showJob(props.job)}>View Candidates for this job</button>
                    </Link>

                    <button onClick={() => props.handleDeleteJob(props.job)}>Delete this job</button>

                <hr></hr>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      showJob: (job) => dispatch(showJob(job)),
    }
  }

export default cnx(null, mapDispatchToProps)(EmployerJobCard);