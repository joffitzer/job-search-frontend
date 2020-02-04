import React from 'react'
import EmployerCard from '../components/EmployerCard'
import { connect as cnx } from 'react-redux';
import { getEmployers } from '../actionCreators'

class EmployersContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/employers')
            .then(res => res.json())
            .then(employers => {
                this.props.getEmployers(employers)
            })
    }
   
    render() {

        let employerCards

        if (this.props.allEmployers.data){
            employerCards = this.props.allEmployers.data.map( empObj => {
            return <EmployerCard key={empObj.id} employer={empObj}/>
        })} 

        return (
            <div>
                <h1>All Employers:</h1>
                    {employerCards}
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