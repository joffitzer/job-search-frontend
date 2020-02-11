import React from 'react'
import Button from 'react-bootstrap/Button'

class PortfolioItemInfo extends React.Component {

    render() {

        return(
            <div>
                <h5>Title: {this.props.item.attributes.title}</h5> 
                <h5>Blurb: {this.props.item.attributes.blurb}</h5>              
                <h5>GitHub Url: {this.props.item.attributes.git_url}</h5> 
                <div className="profile-buttons">
                    <Button onClick={() => this.props.loadEditForm(this.props.item)}>Edit this portfolio item</Button>  
                </div>

                <Button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete this portfolio item</Button>
            </div>
        )
    }
}

export default PortfolioItemInfo;