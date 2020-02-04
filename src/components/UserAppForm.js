import React from 'react'
import { connect as cnx } from 'react-redux';

class UserAppForm extends React.Component {

    state = {
        miniCl: ""
    }

    handleSubmitApplication = (e) => {
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
                user_id: this.props.loggedInUser.id
            })
        }).then(this.setState({
            miniCl: ""
        })).then(() => 
            this.props.routerProps.history.push('/thanks')
        )
    }

    handleMiniClChange = (e) => {
        this.setState({
            miniCl: e.target.value
        })
    }

    render() {

        return(
            <form onSubmit={this.handleSubmitApplication}>
                <label>
                Mini Cover Letter, max ### characters:
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
