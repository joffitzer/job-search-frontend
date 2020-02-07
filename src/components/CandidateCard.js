import React from 'react'

const CandidateCard = (props) => {
    return (
        <div>
            <h1>Candidate Card</h1>
                <h5>Name: {props.candidate.first_name}</h5>

        </div>
    )
}

export default CandidateCard;