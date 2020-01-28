import React from 'react'
import EmployerCard from '../components/EmployerCard'
import EmployerShow from '../components/EmployerShow'
import { connect as cnx } from 'react-redux';
import { getEmployers, showEmployer } from '../actionCreators'


class EmployersContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/employers')
            .then(res => res.json())
            .then(employers => {
                this.props.getEmployers(employers)
            })
    }

    showEmployer = (employer) => {
        this.props.showEmployer(employer)
    }
   
    render() {

        let employerCards = this.props.allEmployers.map( employerObj => {
            return <EmployerCard key={employerObj.id} employer={employerObj} showEmployer={this.showEmployer}/>
        })

        return (
            <div>
                <h1>Employer Container</h1>
                    {this.props.employerClicked ?  
                         <EmployerShow />
                         :
                         employerCards
                    } 
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    let { allEmployers, employerClicked } = state;
  
    return {
      allEmployers, employerClicked
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getEmployers: (employers) => dispatch(getEmployers(employers)),
      showEmployer: (employer) => dispatch(showEmployer(employer))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(EmployersContainer);