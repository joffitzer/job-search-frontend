import React from 'react'
import EmployerCard from '../components/EmployerCard'
import { connect as cnx } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class EmployersContainer extends React.Component {

    state = {
        sort: false
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
                <Container>
                    <div className="form-padding">
                        <Button onClick={this.handleAlphaSort}>Sort Employers Alphabetically</Button>
                    </div>
                        {this.state.sort ? alphaSortedEmployerCards : employerCards}
                </Container>
        )
    }
}

const mapStateToProps = (state) => {
    let { allEmployers } = state;
    return {
      allEmployers
    }
}

export default cnx(mapStateToProps, null)(EmployersContainer);