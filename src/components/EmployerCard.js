import React from 'react'

const EmployerCard = (props) => {

    return(
        <div>
            <h5>Employer Card</h5>
            <h5>Name: {props.employer.name}</h5>
            <h5>Industry: {props.employer.industry}</h5>
            <h5>Description: {props.employer.description}</h5>                
            <button onClick={() => props.showEmployer(props.employer)}>View Employer Profile</button>
        </div>
    )
}

export default EmployerCard;