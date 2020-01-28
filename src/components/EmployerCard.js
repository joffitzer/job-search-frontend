import React from 'react'
import {Link} from 'react-router-dom'

const EmployerCard = (props) => {

    return(
        <div>
            <h5>Employer Card</h5>
            <h5>Name: {props.employer.name}</h5>
            <h5>Industry: {props.employer.industry}</h5>
            <h5>Description: {props.employer.description}</h5>                
                <Link to={`/employers/${props.employer.id}`}>
                    <button onClick={() => props.showEmployer(props.employer)}>View Employer Profile</button>
                </Link>
        </div>
    )
}

export default EmployerCard;