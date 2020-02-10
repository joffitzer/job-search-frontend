import React from 'react'

class PortfolioItemInfo extends React.Component {

    render() {

        return(
            <div>
                <h5>Title: {this.props.item.attributes.title}</h5> 
                <h5>Blurb: {this.props.item.attributes.blurb}</h5>              
                <h5>GitHub Url: {this.props.item.attributes.git_url}</h5> 
        
                <button onClick={() => this.props.loadEditForm(this.props.item)}>Edit this portfolio item</button>  

                <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete this portfolio item</button>
            </div>
        )
    }
}

export default PortfolioItemInfo;