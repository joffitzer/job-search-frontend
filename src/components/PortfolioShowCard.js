import React from 'react'

class PortfolioShowCard extends React.Component {

    render() {

        return(
            <div>
                <h5>Portfolio Card</h5>
                <h5>Title: {this.props.item.attributes.title}</h5> 
                <h5>Blurb: {this.props.item.attributes.blurb}</h5>              
                <h5>GitHub Url: {this.props.item.attributes.git_url}</h5> 
                <hr></hr>
            </div>
        )
    }
}

export default PortfolioShowCard;