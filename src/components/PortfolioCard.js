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

    render() {    
    
        return(
            <div>
                <h5>Portfolio Card</h5>
                <h5>Title: {this.props.item.attributes.title}</h5> 
                <h5>Blurb: {this.props.item.attributes.blurb}</h5>              
                <h5>GitHub Url: {this.props.item.attributes.git_url}</h5> 
                    <div onClick={() => this.props.renderItemInEditForm(this.props.item)}>
                        <button onClick={this.loadEditForm}>Edit this portfolio item</button>  
                    </div>
                {this.state.editClicked ? <EditPortfolioItemForm 
                                            existingItem={this.props.item}
                                            handleEdit={this.props.handleEdit}
                                            editTitleValue={this.props.editTitleValue}
                                            editBlurbValue={this.props.editBlurbValue}
                                            editUrlValue={this.props.editUrlValue}
                                            editTitleChange={this.props.editTitleChange}
                                            editBlurbChange={this.props.editBlurbChange}
                                            editUrlChange={this.props.editUrlChange}/> : null}   
                <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete this portfolio item</button>                                               
                <hr></hr>
            </div>
        )
    }
}

export default PortfolioCard