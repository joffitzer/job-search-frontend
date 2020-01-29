import React from 'react';
import { connect as cnx } from 'react-redux';
// import { getJobs, showJob } from '../actionCreators';


class ProfileContainer extends React.Component {
   
    render() {

        return (
            <div>
                <h1>Profile Container</h1>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {

//     let { allJobs, jobClicked } = state;
  
//     return {
//       allJobs, jobClicked
//     }
//   }
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//       getJobs: (jobs) => dispatch(getJobs(jobs)),
//       showJob: (job) => dispatch(showJob(job))
//     }
//   }

// export default cnx(mapStateToProps, mapDispatchToProps)(ProfileContainer);

export default ProfileContainer