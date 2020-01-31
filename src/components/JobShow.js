import React from 'react'
import { connect as cnx } from 'react-redux';
import UserAppForm from '../components/UserAppForm'

class JobShow extends React.Component {

    state = {
        applyClicked: false,
    }

    clickApply = () => {
        this.setState({
            applyClicked: !this.state.applyClicked
        })
    }

    render() {

        console.log('job show props', this.props)

        return(
            <div>
                <h5>Job Show Page</h5>
                <h5>Employer: {this.props.jobToShow.attributes.employer.name}</h5> 
                <h5>Title: {this.props.jobToShow.attributes.title}</h5>
                <h5>Location: {this.props.jobToShow.attributes.location}</h5>
                <h5>Category: {this.props.jobToShow.attributes.category}</h5>
                <h5>Summary: {this.props.jobToShow.attributes.summary}</h5>
                <button onClick={this.clickApply}>APPLY TO THIS JOB</button>
                {this.state.applyClicked ? 
                <UserAppForm routerProps={this.props}/> : 
                null}
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    let { jobToShow } = state;
  
    return {
        jobToShow
    }
  }

export default cnx(mapStateToProps, null)(JobShow);