import React from 'react';
import { connect as cnx } from 'react-redux';
import PortfolioCard from '../components/PortfolioCard'
import NewPortfolioItemForm from '../components/NewPortfolioItemForm'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

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
        let user 
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }
        let formattedItem
        formattedItem = {
            id: `${newItem.id}`,
            type: "portfolio_item",
            attributes: {
                title: newItem.title,
                blurb: newItem.blurb,
                git_url: newItem.git_url,
                user: {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    bootcamp: user.bootcamp,
                    category: user.category,
                    grad_month: user.grad_month,
                    grad_year: user.grad_year
                }
            }
        }
        return formattedItem
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }
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
                user_id: user.id
            })
        })
        .then(res => res.json())
        .then(newItem => {
            return this.formatItem(newItem)
        })
        .then(formattedItem => this.setState({
            allPortfolioItems: [...this.state.allPortfolioItems, formattedItem],
            showForm: !this.state.showForm,
            titleValue: "",
            blurbValue: "",
            urlValue: ""
        }))
    }

    loadEditForm = (item) => {
        this.setState({
            editClicked: true,
            idToEdit: item.id,
            editTitleValue: item.attributes.title,
            editBlurbValue: item.attributes.blurb,
            editUrlValue: item.attributes.git_url
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
   
    render() {

        let user
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }

        let allItemsArray
        let myItems
        if (this.props.isLoggedIn && this.state.allPortfolioItems.length){
            allItemsArray = this.state.allPortfolioItems
            myItems = allItemsArray.filter(itemObj => user.id === parseInt(itemObj.attributes.user.id))
        }

        // myItems = allItemsArray.filter(itemObj => this.props.loggedInUser.user.id === parseInt(itemObj.attributes.user.id))


        let portfolioItemsArray
        if (myItems){
            portfolioItemsArray = myItems.map(portItemObj => {
                return <PortfolioCard 
                            key={portItemObj.id} 
                            item={portItemObj} 
                            deleteItem={this.deleteItem}
                            handleEdit={this.handleEdit}
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
                <Container>
                    <h1>My Profile</h1>
                        <hr></hr>
                        {this.props.isLoggedIn ? 
                            <div>
                                <h5>Name: {user.first_name} {user.last_name}</h5>
                                <h5>Email: {user.email}</h5>
                                <h5>Bootcamp: {user.bootcamp}</h5>
                                <h5>Category: {user.category}</h5>
                                <h5>Graduated: {user.grad_month}/{user.grad_year}</h5>
                            </div>
                            : ""}
                        <hr></hr>
                        <h3>My Portfolio</h3>
                        <div className="form-padding">
                            <Button onClick={this.renderNewItemForm}>Add to my portfolio</Button>
                        </div>
                        {this.state.showForm ? 
                            <NewPortfolioItemForm 
                                handleSubmit={this.handleSubmit}
                                titleValue={this.state.titleValue}
                                handleTitleChange={this.handleTitleChange}
                                blurbValue={this.state.blurbValue}
                                handleBlurbChange={this.handleBlurbChange}
                                urlValue={this.state.urlValue}
                                handleUrlChange={this.handleUrlChange}/>
                            :
                            portfolioItemsArray}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser, isLoggedIn } = state;
    return {
      loggedInUser, isLoggedIn
    }
  }

export default cnx(mapStateToProps, null)(ProfileContainer);