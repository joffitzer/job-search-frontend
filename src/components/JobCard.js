import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showJob } from '../actionCreators'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const JobCard = (props) => {

    return(
            <Container>
                    <p><b>{props.job.attributes.employer.name}</b></p>
                    <img className="cardLogo" src={props.job.attributes.employer.logo} alt="logo"/>
                    <b>{props.job.attributes.title}</b>
                    <p><i>{props.job.attributes.location}</i></p>
                    <i>{props.job.attributes.category}</i>
                    <p><sub>{props.job.attributes.summary}</sub></p>
                    <p><sub>${props.job.attributes.sal_range_low} - ${props.job.attributes.sal_range_high}</sub></p>
                
                    <Link to={`/jobs/${props.job.id}`}>
                        <Button variant="primary" onClick={() => props.showJob(props.job)}>View Job Details and Apply</Button>
                    </Link>
                    <hr></hr>
            </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      showJob: (job) => dispatch(showJob(job))
    }
  }

export default cnx(null, mapDispatchToProps)(JobCard);