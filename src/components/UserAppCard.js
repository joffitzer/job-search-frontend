import React from 'react'
// import {Link} from 'react-router-dom'
// import { connect as cnx } from 'react-redux';
// import { showJob } from '../actionCreators'

const UserAppCard = (props) => {

    return(
        <div>
            <h5>User App Card</h5>
                <h5>You submitted this application on: {props.userApp.attributes.created_at}</h5>
                <h5>Job Title: {props.userApp.attributes.job.job.title}</h5>
                <h5>Employer: {props.userApp.attributes.job.employer.name}</h5>
                <h5>Your Mini Cover Letter: {props.userApp.attributes.mini_cl}</h5>
                    {/* <Link to={`/jobs/${props.job.id}`}>
                        <button onClick={() => props.showJob(props.job)}>View Job Show Page</button>
                    </Link> */}
                <hr></hr>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       showJob: (job) => dispatch(showJob(job))
//     }
//   }

// export default cnx(null, mapDispatchToProps)(UserAppCard);

export default UserAppCard;