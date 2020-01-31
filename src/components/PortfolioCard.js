import React from 'react'
import EditPortfolioItemForm from './EditPortfolioItemForm'

class PortfolioCard extends React.Component {

    state = {
        editClicked: false
    }

    loadEditForm = () => {
        this.setState({
            editClicked: true
        })
    }

    deleteItem = () => {
        fetch(`http://localhost:3000/api/v1/portfolio_items/${this.props.item.id}`,  {
            method: 'DELETE'
        })
    }

    render() {
    
        console.log('portfolio card props', this.props)
    
    
        return(
            <div>
                <h5>Portfolio Card</h5>
                <h5>Title: {this.props.item.attributes.title}</h5> 
                <h5>Blurb: {this.props.item.attributes.blurb}</h5>              
                <h5>GitHub Url: {this.props.item.attributes.git_url}</h5> 
                <button onClick={this.loadEditForm}>Edit this portfolio item</button>  
                {this.state.editClicked ? <EditPortfolioItemForm existingItem={this.props.item}/> : null}   
                <button onClick={this.deleteItem}>Delete this portfolio item</button>                                               
                <hr></hr>
            </div>
        )
    }
}

export default PortfolioCard