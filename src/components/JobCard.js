import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showJob } from '../actionCreators'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const JobCard = (props) => {

    return(
            <Container>
                    <font size="4">{props.job.attributes.employer.name}</font><br />
                    <img className="cardLogo" src={props.job.attributes.employer.logo} alt="logo"/>
                    <font size="3"><b>{props.job.attributes.title}</b></font><br />
                    <font size="2"><i>{props.job.attributes.location}</i></font><br />
                    <font size="2">{props.job.attributes.category}</font><br />
                    <font size="2">{props.job.attributes.summary}</font><br />
                    <font size="2"><i>${props.job.attributes.sal_range_low} - ${props.job.attributes.sal_range_high}</i></font><br />
                
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