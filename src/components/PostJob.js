import React from 'react'
import { connect as cnx } from 'react-redux';
// import { logInUser } from '../actionCreators'
// import { Link } from 'react-router-dom'

class PostJob extends React.Component {

    state = {
        title: "",
        location: "",
        category: "",
        summary: "",
        description: "",
        sal_range_low: "",
        sal_range_high: "",
        active: true
    }

    handleSubmit = (e) => {
        e.preventDefault();
            console.log('logged in user before post of job: ', this.props.loggedInUser)
        let user 
        if (this.props.loggedInUser.employer) {
            user = this.props.loggedInUser.employer
        } else {
            user = this.props.loggedInUser
        }
        fetch ('http://localhost:3000/api/v1/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                location: this.state.location,
                category: this.state.category,
                summary: this.state.summary,
                description: this.state.description,
                sal_range_low: this.state.sal_range_low,
                sal_range_high: this.state.sal_range_high,
                active: true,
                employer_id: user.id
            })
        })
        .then(res => res.json())
        .then(newJob => {
            console.log(newJob)
            // return this.formatItem(newItem)
        })
        // .then(formattedItem => this.setState({
        //     allPortfolioItems: [...this.state.allPortfolioItems, formattedItem],
        //     showForm: !this.state.showForm,
        //     titleValue: "",
        //     blurbValue: "",
        //     urlValue: ""
        // }))
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        console.log('state of post job: ', this.state)

        return(
            <div>
                <h1>Post a Job</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                    </label>
                    <label>
                    Location:
                    <input type="text" name="location" value={this.state.location} onChange={this.changeHandler} />
                    </label>
                    <label>
                    Category:
                    <input type="text" name="category" value={this.state.category} onChange={this.changeHandler} />
                    </label>
                    <label>
                    Summary:
                    <input type="text" name="summary" value={this.state.summary} onChange={this.changeHandler} />
                    </label>
                    <label>
                    Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.changeHandler} />
                    </label>
                    <label>
                    Salary Range (low):
                    <input type="text" name="sal_range_low" value={this.state.sal_range_low} onChange={this.changeHandler} />
                    </label>
                    <label>
                    Salary Range (high):
                    <input type="text" name="sal_range_high" value={this.state.sal_range_high} onChange={this.changeHandler} />
                    </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser } = state;
    return {
        loggedInUser
    }
  }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       logInUser: (user) => dispatch(logInUser(user)),
//     }
//   }

export default cnx(mapStateToProps, null)(PostJob);