import React from 'react'
import { connect as cnx } from 'react-redux';

class UserAppForm extends React.Component {

    state = {
        miniCl: ""
    }

    sendEmail = () => {
        let user
        let employer
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }
        if (this.props.jobToShow.attributes){
            employer = this.props.jobToShow.attributes.employer
        }
        window.emailjs
          .send('default_service', 'contact_candidate', {
            from_email: 'launchpad.tech.careers@gmail.com',
            to_email: user.email,
            message_html: employer.name
          })
          .catch(err => console.error('Failed to send message. Error: ', err))
      }

    handleSubmitApplication = (e, user) => {
        e.preventDefault();
        fetch ('http://localhost:3000/api/v1/user_apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                mini_cl: this.state.miniCl,
                job_id: this.props.jobToShow.id,
                user_id: user.id
            })
        }).then(this.setState({
            miniCl: ""
        }))
        .then(this.sendEmail())
        .then(() => 
            this.props.routerProps.history.push('/thanks')
        )
    }

    handleMiniClChange = (e) => {
        this.setState({
            miniCl: e.target.value
        })
    }

    render() {

        let user
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }

        return(
            <form onSubmit={(e) => this.handleSubmitApplication(e, user)}>
                <label>
                Mini Cover Letter (max 500 characters):
                <input type="text" value={this.state.miniCl} onChange={this.handleMiniClChange} />
                </label>
    
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    let { jobToShow, loggedInUser } = state;
    return {
        jobToShow, loggedInUser
    }
  }

export default cnx(mapStateToProps, null)(UserAppForm);
