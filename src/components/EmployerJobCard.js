import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showJob } from '../actionCreators';


const EmployerJobCard = (props) => {

    console.log('employer job card, props.job :', props)

    return(
        <div>
            <h5>Job Card</h5>
                <h5>Title: {props.job.title}</h5>
                <h5>Location: {props.job.location}</h5>
                <h5>Category: {props.job.category}</h5>
                <h5>Summary: {props.job.summary}</h5>
                <h5>Salary Range: ${props.job.sal_range_low} - ${props.job.sal_range_high}</h5>
                    <Link to={`/jobs/${props.job.id}`}>
                        <button onClick={() => props.showJob(props.job)}>View Job Show Page</button>
                    </Link>
                <hr></hr>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      showJob: (job) => dispatch(showJob(job))
    }
  }

export default cnx(null, mapDispatchToProps)(EmployerJobCard);