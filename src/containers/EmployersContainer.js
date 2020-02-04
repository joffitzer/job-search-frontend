import React from 'react'
import EmployerCard from '../components/EmployerCard'
import { connect as cnx } from 'react-redux';
import { getEmployers } from '../actionCreators'

class EmployersContainer extends React.Component {

    state = {
        sort: false
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/employers')
            .then(res => res.json())
            .then(employers => {
                this.props.getEmployers(employers)
            })
    }

    handleAlphaSort = () => {
        this.setState({
            sort: !this.state.sort
        })
    }
   
    render() {

        let employerCards

        if (this.props.allEmployers.data){
            employerCards = this.props.allEmployers.data.map( empObj => {
            return <EmployerCard key={empObj.id} employer={empObj}/>
        })} 

        let alphaSortedEmployers
        let alphaSortedEmployerCards

        if (this.state.sort) {
            alphaSortedEmployers = this.props.allEmployers.data.sort(function (a, b) {
                if (a.attributes.name < b.attributes.name) return -1;
                else if (a.attributes.name > b.attributes.name) return 1;
                return 0;
            });
            alphaSortedEmployerCards = alphaSortedEmployers.map( empObj => {
                return <EmployerCard key={empObj.id} employer={empObj}/>
            })
        } 
        
        return (
            <div>
                <h1>All Employers:</h1>
                <button onClick={this.handleAlphaSort}>Sort Employers Alphabetically</button>
                    {this.state.sort ? alphaSortedEmployerCards : employerCards}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allEmployers } = state;
    return {
      allEmployers
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      getEmployers: (employers) => dispatch(getEmployers(employers))
    }
}

export default cnx(mapStateToProps, mapDispatchToProps)(EmployersContainer);