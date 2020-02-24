import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';
import { showJob } from '../actionCreators'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class JobCard extends React.Component{

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {

    let salRangeLow = this.numberWithCommas(this.props.job.attributes.sal_range_low)
    let salRangeHigh = this.numberWithCommas(this.props.job.attributes.sal_range_high)

    return(
            <Container>
                    <font size="4">{this.props.job.attributes.employer.name}</font><br />
                    <img className="cardLogo" src={this.props.job.attributes.employer.logo} alt="logo"/>
                    <font size="3"><b>{this.props.job.attributes.title}</b></font><br />
                    <font size="2"><i>{this.props.job.attributes.location}</i></font><br />
                    <font size="2">{this.props.job.attributes.category}</font><br />
                    <font size="2">{this.props.job.attributes.summary}</font><br />
                    <font size="2"><i>${salRangeLow} - ${salRangeHigh}</i></font><br />
                
                    <Link to={`/jobs/${this.props.job.id}`}>
                        <Button variant="primary" onClick={() => this.props.showJob(this.props.job)}>View Job Details and Apply</Button>
                    </Link>
                    <hr></hr>
            </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      showJob: (job) => dispatch(showJob(job))
    }
  }

export default cnx(null, mapDispatchToProps)(JobCard);