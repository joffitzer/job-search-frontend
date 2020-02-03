import React from 'react'
import { connect as cnx } from 'react-redux';

class EditPortfolioItemForm extends React.Component {

    // state = {
    //     titleValue: this.props.existingItem.attributes.title,
    //     blurbValue: this.props.existingItem.attributes.blurb,
    //     urlValue: this.props.existingItem.attributes.git_url
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
            <form onSubmit={(e) => this.props.handleEdit(e, this.props.existingItem.id)}>
                <label>
                Title:
                <input type="text" value={this.props.editTitleValue} onChange={this.props.editTitleChange} />
                </label>
                <label>
                Blurb:
                <input type="text" value={this.props.editBlurbValue} onChange={this.props.editBlurbChange} />
                </label>
                <label>
                Github Url:
                <input type="text" value={this.props.editUrlValue} onChange={this.props.editUrlChange} />
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

export default cnx(mapStateToProps, null)(EditPortfolioItemForm);