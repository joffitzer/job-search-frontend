import React from 'react'
import { connect as cnx } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
          .catch(error => console.error('Failed to send message. Error: ', error))
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
                <Form className="wide-padding" onSubmit={(e) => this.handleSubmitApplication(e, user)}> 
                    <Form.Group>
                    <Form.Label>Mini Cover Letter (max 500 characters):</Form.Label>
                    <Form.Control as="textarea" rows="3" type="text" name="miniCl" placeholder="Mini Cover Letter" id={this.state.miniCl} onChange={this.handleMiniClChange}/>
                    </Form.Group>
                    
                    <Button className="button-spacing" variant="outline-light" type="submit">
                    Submit Application
                    </Button>
                </Form>
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
