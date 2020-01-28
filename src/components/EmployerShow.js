import React from 'react'
import { connect as cnx } from 'react-redux';

const EmployerShowPage = (props) => {
    return(
        <div>
            <h5>Employer Show Page</h5>
            <h5>Name: {props.employerToShow.name}</h5>
            <h5>Industry: {props.employerToShow.industry}</h5>
            <h5>Description: {props.employerToShow.description}</h5>
        </div>
    )
}

const mapStateToProps = (state) => {
    let { employerToShow } = state;
  
    return {
        employerToShow
    }
  }

export default cnx(mapStateToProps, null)(EmployerShowPage);