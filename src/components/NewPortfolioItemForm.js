import React from 'react'
import { connect as cnx } from 'react-redux';

class NewPortfolioItemForm extends React.Component {

    render() {

        return(
            <form onSubmit={this.props.handleSubmit}>
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