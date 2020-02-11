import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showEmployer } from '../actionCreators';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const EmployerCard = (props) => {

    return(
            <Container>
                <h5>Company: {props.employer.attributes.name}</h5>
                <img className="cardLogo" src={props.employer.attributes.logo} alt="logo"/>
                <h5>Industry: {props.employer.attributes.industry}</h5>
                <h5>Description: {props.employer.attributes.description}</h5>                
                    <Link to={`/employers/${props.employer.id}`}>
                        <Button onClick={() => props.showEmployer(props.employer)}>View Employer Profile</Button>
                    </Link>
                <hr></hr>
            </Container>
    )
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      showEmployer: (employer) => dispatch(showEmployer(employer))
    }
  }

export default cnx(null, mapDispatchToProps)(EmployerCard);
