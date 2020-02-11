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
                    
                    <div className="form-padding">
                        <h3><b>{candidate.attributes.first_name} {candidate.attributes.last_name}</b></h3>
                        <font size="3"><i>{candidate.attributes.email}</i></font><br />
                        <font>Bootcamp: {candidate.attributes.bootcamp}</font><br />
                        <font>Category: {candidate.attributes.category}</font><br />
                        <font>Graduated: {candidate.attributes.grad_month} / {candidate.attributes.grad_year}</font><br />
                    </div> 

                    : ""}

                    <hr></hr>

                    {candidate ? 
                    <div>
                        <h3>{candidate.attributes.first_name}'s Portfolio</h3><br />
                    </div>
                    : ""}

                    {portfolioShowCards ? portfolioShowCards : ""}
    
                </Container>
            )
        }

    }
    

export default CandidateShow;
