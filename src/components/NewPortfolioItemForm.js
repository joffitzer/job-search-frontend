import React from 'react'
import { connect as cnx } from 'react-redux';

class NewPortfolioItemForm extends React.Component {

    // state = {
    //     titleValue: "",
    //     blurbValue: "",
    //     urlValue: ""
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch ('http://localhost:3000/api/v1/portfolio_items', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json', 
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             title: this.state.titleValue,
    //             blurb: this.state.blurbValue,
    //             git_url: this.state.urlValue,
    //             user_id: this.props.loggedInUser.id
    //         })
    //     }).then(this.setState({
    //         titleValue: "",
    //         blurbValue: "",
    //         urlValue: ""
    //     }))
    // }

    // handleTitleChange = (e) => {
    //     this.setState({
    //         titleValue: e.target.value
    //     })
    // }

    // handleBlurbChange = (e) => {
    //     this.setState({
    //         blurbValue: e.target.value
    //     })
    // }

    // handleUrlChange = (e) => {
    //     this.setState({
    //         urlValue: e.target.value
    //     })
    // }


    render() {

        return(
            <form onSubmit={this.props.handleSubmitNew}>
                <label>
                Title:
                <input type="text" value={this.props.titleValue} onChange={this.props.handleTitleChange} />
                </label>
                <label>
                Blurb:
                <input type="text" value={this.props.blurbValue} onChange={this.props.handleBlurbChange} />
                </label>
                <label>
                Github Url:
                <input type="text" value={this.props.urlValue} onChange={this.props.handleUrlChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser } = state;
    return {
        loggedInUser
    }
  }

export default cnx(mapStateToProps, null)(NewPortfolioItemForm);