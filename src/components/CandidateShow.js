import React from 'react'
import PortfolioShowCard from '../components/PortfolioShowCard'
import Container from 'react-bootstrap/Container'

class CandidateShow extends React.Component {

    state = {
        allUsers: [],
        allPortfolioItems: []
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(users => {this.setState({
            allUsers: users.data
        })})
        .then(
                fetch ('http://localhost:3000/api/v1/portfolio_items')
                    .then(res => res.json())
                    .then(items => this.setState({
                        allPortfolioItems: items.data
                    }))
        )
    }


    render(){

        console.log('all portfolio items: ', this.state.allPortfolioItems)

        let candidate
        if (this.state.allUsers.length) {
            candidate = this.state.allUsers.find(user => parseInt(user.id) === parseInt(this.props.match.params.id))
        }

        let candidateItems
        if (this.state.allPortfolioItems) {
            candidateItems = this.state.allPortfolioItems.filter(item => item.attributes.user.id === parseInt(this.props.match.params.id))
        }

        let portfolioShowCards
        if (candidateItems) {
            portfolioShowCards = candidateItems.map(item => {
                return <PortfolioShowCard key={item.id} item={item}/>
            })
        }
    
            return(
                <Container>
                    {candidate ? 
                    
                    <div>
                        <h5>Name: {candidate.attributes.first_name} {candidate.attributes.last_name}</h5>
                        <h5>Email: {candidate.attributes.email}</h5>
                        <h5>Bootcamp: {candidate.attributes.bootcamp}</h5>
                        <h5>Category: {candidate.attributes.category}</h5>
                        <h5>Graduated: {candidate.attributes.grad_month} / {candidate.attributes.grad_year}</h5>
                    </div> 

                    : ""}

                    <hr></hr>

                    {candidate ? 
                    <div>
                        <h3>{candidate.attributes.first_name}'s Portfolio</h3>
                    </div>
                    : ""}

                    {portfolioShowCards ? portfolioShowCards : ""}
    
                </Container>
            )
        }

    }
    

export default CandidateShow;
