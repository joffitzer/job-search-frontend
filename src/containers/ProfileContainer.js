import React from 'react';
import { connect as cnx } from 'react-redux';
// import { getJobs, showJob } from '../actionCreators';
import PortfolioCard from '../components/PortfolioCard'

class ProfileContainer extends React.Component {

    state = {
        allPortfolioItems: []
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/portfolio_items')
            .then(res => res.json())
            .then(items => this.setState({
                allPortfolioItems: items
            }))
    }
   
    render() {

        let user 

        if (this.props.loggedInUser){
            user = this.props.loggedInUser.attributes
        }

        let portfolioItemsArray

        if (this.state.allPortfolioItems.data){
            portfolioItemsArray = this.state.allPortfolioItems.data.map(portItemObj => {
                return <PortfolioCard key={portItemObj.id} item={portItemObj}/>
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
                    <button>Add to my portfolio</button>
                    {/* fetch to the portfolio table, get all rows that belong to this user, map over them
                    and render portfolio cards here */}
                    {portfolioItemsArray}

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
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//       getJobs: (jobs) => dispatch(getJobs(jobs)),
//       showJob: (job) => dispatch(showJob(job))
//     }
//   }

export default cnx(mapStateToProps, null)(ProfileContainer);

// export default ProfileContainer