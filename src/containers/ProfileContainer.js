import React from 'react';
import { connect as cnx } from 'react-redux';
import PortfolioCard from '../components/PortfolioCard'
import NewPortfolioItemForm from '../components/NewPortfolioItemForm'

class ProfileContainer extends React.Component {

    state = {
        allPortfolioItems: [], 
        showForm: false,
        titleValue: "",
        blurbValue: "",
        urlValue: "",
        editClicked: false,
        idToEdit: "",
        editTitleValue: "",
        editBlurbValue: "",
        editUrlValue: ""
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/portfolio_items')
            .then(res => res.json())
            .then(items => this.setState({
                allPortfolioItems: items.data
            }))
    }

    formatItem = (newItem) => {
        let formattedItem
        formattedItem = {
            id: `${newItem.id}`,
            type: "portfolio_item",
            attributes: {
                title: newItem.title,
                blurb: newItem.blurb,
                git_url: newItem.git_url,
                user: {
                    id: this.props.loggedInUser.id,
                    first_name: this.props.loggedInUser.attributes.first_name,
                    last_name: this.props.loggedInUser.attributes.last_name,
                    email: this.props.loggedInUser.attributes.email,
                    bootcamp: this.props.loggedInUser.attributes.bootcamp,
                    category: this.props.loggedInUser.attributes.category,
                    grad_month: this.props.loggedInUser.attributes.grad_month,
                    grad_year: this.props.loggedInUser.attributes.grad_year
                }
            }
        }
        return formattedItem
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch ('http://localhost:3000/api/v1/portfolio_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.titleValue,
                blurb: this.state.blurbValue,
                git_url: this.state.urlValue,
                user_id: this.props.loggedInUser.id
            })
        })
        .then(res => res.json())
        .then(newItem => {
            return this.formatItem(newItem)
        })
        .then(formattedItem => this.setState({
            allPortfolioItems: [...this.state.allPortfolioItems, formattedItem],
            showForm: !this.state.showForm
        }))
    }

    loadEditForm = (itemId) => {
        this.setState({
            editClicked: true,
            idToEdit: itemId
        })
    }
    
    handleEdit = (e, itemId) => {
        e.preventDefault();
        fetch (`http://localhost:3000/api/v1/portfolio_items/${itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.editTitleValue,
                blurb: this.state.editBlurbValue,
                git_url: this.state.editUrlValue,
                user_id: this.props.loggedInUser.id
            })
        }) 
        .then(res => res.json())
        .then(newItem => {
            return this.formatItem(newItem)
        })
        .then(formattedItem => {
            let allItemsCopy = [...this.state.allPortfolioItems]
            let itemToEdit = allItemsCopy.find(item => parseInt(item.id) === parseInt(formattedItem.id))
            let index = allItemsCopy.indexOf(itemToEdit)
            if (index !== -1) {
                allItemsCopy[index] = formattedItem;
            }
            this.setState({
                allPortfolioItems: allItemsCopy,
                editClicked: !this.state.editClicked
            })
        })
    }

    deleteItem = (itemId) => {
        fetch(`http://localhost:3000/api/v1/portfolio_items/${itemId}`,  {
            method: 'DELETE'
        })
        .then(this.setState({
            allPortfolioItems: [...this.state.allPortfolioItems].filter(item => parseInt(item.id) !== parseInt(itemId))
        }))
    }

    renderItemInEditForm = (item) => {
        this.setState({
            editTitleValue: item.attributes.title,
            editBlurbValue: item.attributes.blurb,
            editUrlValue: item.attributes.git_url
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            titleValue: e.target.value
        })
    }

    handleBlurbChange = (e) => {
        this.setState({
            blurbValue: e.target.value
        })
    }

    handleUrlChange = (e) => {
        this.setState({
            urlValue: e.target.value
        })
    }

    editTitleChange = (e) => {
        this.setState({
            editTitleValue: e.target.value
        })
    }

    editBlurbChange = (e) => {
        this.setState({
            editBlurbValue: e.target.value
        })
    }

    editUrlChange = (e) => {
        this.setState({
            editUrlValue: e.target.value
        })
    }

    renderNewItemForm = () => {
        this.setState({
            showForm: true
        })
    }

    removeForm = () => {
        this.setState({
            showForm: false
        })
    }
   
    render() {

        console.log(this.state)

        let user 
        if (this.props.loggedInUser){
            user = this.props.loggedInUser.attributes
        }

        let allItemsArray
        let myItems
        if (this.state.allPortfolioItems.length){
            allItemsArray = this.state.allPortfolioItems
            myItems = allItemsArray.filter(itemObj => parseInt(this.props.loggedInUser.id) === parseInt(itemObj.attributes.user.id)) 
        }

        let portfolioItemsArray
        if (myItems){
            portfolioItemsArray = myItems.map(portItemObj => {
                return <PortfolioCard 
                            key={portItemObj.id} 
                            item={portItemObj} 
                            deleteItem={this.deleteItem}
                            handleEdit={this.handleEdit}
                            renderItemInEditForm={this.renderItemInEditForm}
                            editClicked={this.state.editClicked}
                            loadEditForm={this.loadEditForm}
                            idToEdit={this.state.idToEdit}
                            editTitleValue={this.state.editTitleValue}
                            editBlurbValue={this.state.editBlurbValue}
                            editUrlValue={this.state.editUrlValue}
                            editTitleChange={this.editTitleChange}
                            editBlurbChange={this.editBlurbChange}
                            editUrlChange={this.editUrlChange}
                        />
            })
        }

        return (
            <div>
                <h1>Profile Container</h1>
                    <hr></hr>
                    <button>Update Basic Information</button>
                    <h5>Name: {user.first_name} {user.last_name}</h5>
                    <h5>Email: {user.email}</h5>
                    <h5>Bootcamp: {user.bootcamp}</h5>
                    <h5>Category: {user.category}</h5>
                    <h5>Graduated: {user.grad_month}/{user.grad_year}</h5>
                    <hr></hr>
                    <h3>My Portfolio:</h3>
                    <button onClick={this.renderNewItemForm}>Add to my portfolio</button>
                    {this.state.showForm ? 
                        <NewPortfolioItemForm 
                            removeForm={this.removeForm}
                            handleSubmit={this.handleSubmit}
                            titleValue={this.state.titleValue}
                            handleTitleChange={this.handleTitleChange}
                            blurbValue={this.state.blurbValue}
                            handleBlurbChange={this.handleBlurbChange}
                            urlValue={this.state.urlValue}
                            handleUrlChange={this.handleUrlChange}/>
                        :
                        portfolioItemsArray}
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

export default cnx(mapStateToProps, null)(ProfileContainer);