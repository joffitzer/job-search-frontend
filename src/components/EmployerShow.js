import React from 'react'

const EmployerShowPage = (props) => {
    return(
        <div>
            <h5>Employer Show Page</h5>
            <h5>Name: {props.employer.name}</h5>
            <h5>Industry: {props.employer.industry}</h5>
            <h5>Description: {props.employer.description}</h5>
        </div>
    )
}

export default EmployerShowPage;