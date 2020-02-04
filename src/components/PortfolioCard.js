import React from 'react'
import PortfolioItemInfo from './PortfolioItemInfo'
import EditPortfolioItemForm from './EditPortfolioItemForm'

class PortfolioCard extends React.Component {

    // state = {
    //     editClicked: false
    // }

    // loadEditForm = () => {
    //     this.setState({
    //         editClicked: true
    //     })
    // }

    render() {    
    
        return(
            <div>

                {this.props.editClicked && (this.props.idToEdit === this.props.item.id) ? 
                
                <EditPortfolioItemForm 
                    existingItem={this.props.item}
                    handleEdit={this.props.handleEdit}
                    editTitleValue={this.props.editTitleValue}
                    editBlurbValue={this.props.editBlurbValue}
                    editUrlValue={this.props.editUrlValue}
                    editTitleChange={this.props.editTitleChange}
                    editBlurbChange={this.props.editBlurbChange}
                    editUrlChange={this.props.editUrlChange}
                    /> 
                    : 

                <PortfolioItemInfo 
                    item={this.props.item}
                    renderItemInEditForm={this.props.renderItemInEditForm}
                    loadEditForm={this.props.loadEditForm}
                    deleteItem={this.props.deleteItem}
                    />    
                }   

                {/* <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete this portfolio item</button> */}

                <hr></hr>
            </div>
        )
    }
}

export default PortfolioCard