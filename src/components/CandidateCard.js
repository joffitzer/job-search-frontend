import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const CandidateCard = (props) => {
    return (
        <Container>
            <h5>Name: {props.candidate.first_name} {props.candidate.last_name}</h5>
            <h5>Bootcamp: {props.candidate.bootcamp}</h5>

            <Link to={`/candidates/${props.candidate.id}`}>View Candidate Details</Link>
        </Container>
    )
}

export default CandidateCard;