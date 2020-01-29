import React from 'react'
import { connect as cnx } from 'react-redux';

const JobShow = (props) => {

    return(
        <div>
            <h5>Job Show Page</h5>
            <h5>Employer: {props.jobToShow.attributes.employer.name}</h5> 
            <h5>Title: {props.jobToShow.attributes.title}</h5>
            <h5>Location: {props.jobToShow.attributes.location}</h5>
            <h5>Category: {props.jobToShow.attributes.category}</h5>
            <h5>Summary: {props.jobToShow.attributes.summary}</h5>
        </div>
    )
}

const mapStateToProps = (state) => {
    let { jobToShow } = state;
  
    return {
        jobToShow
    }
  }

export default cnx(mapStateToProps, null)(JobShow);