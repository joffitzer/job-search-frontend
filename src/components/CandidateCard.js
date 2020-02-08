import React from 'react'
import {Link} from 'react-router-dom'

const CandidateCard = (props) => {
    return (
        <div>
            <h1>Candidate Card</h1>
                <h5>Name: {props.candidate.first_name} {props.candidate.last_name}</h5>
                <h5>Bootcamp: {props.candidate.bootcamp}</h5>

                <Link to={`/candidates/${props.candidate.id}`}>View Candidate Details</Link>

        </div>
    )
}

export default CandidateCard;