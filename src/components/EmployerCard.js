import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showEmployer } from '../actionCreators';

const EmployerCard = (props) => {

    return(
        <div>
            <h5>Employer Card</h5>
            <h5>Name: {props.employer.attributes.name}</h5>
            <h5>Industry: {props.employer.attributes.industry}</h5>
            <h5>Description: {props.employer.attributes.description}</h5>                
                <Link to={`/employers/${props.employer.id}`}>
                    <button onClick={() => props.showEmployer(props.employer)}>View Employer Profile</button>
                </Link>
            <hr></hr>
        </div>
    )
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      showEmployer: (employer) => dispatch(showEmployer(employer))
    }
  }

export default cnx(null, mapDispatchToProps)(EmployerCard);
