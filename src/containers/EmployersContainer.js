import React from 'react'
import EmployerCard from '../components/EmployerCard'
import EmployerShow from '../components/EmployerShow'


class EmployersContainer extends React.Component {

    state = {
        allEmployers: [],
        employerClicked: false,
        employerToShow: []
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/employers')
            .then(res => res.json())
            .then(employers => this.setState({
                allEmployers: employers
            }))
    }

    showEmployer = (employer) => {
        this.setState({
            employerClicked: true,
            employerToShow: employer
        })
    }
   
    render() {

        let employerCards = this.state.allEmployers.map( employerObj => {
            return <EmployerCard key={employerObj.id} employer={employerObj} showEmployer={this.showEmployer}/>
        })

        return (
            <div>
                <h1>Employer Container</h1>
                    {this.state.employerClicked ? 
                        <EmployerShow key={this.state.employerToShow.id} employer={this.state.employerToShow}/>
                        :
                        employerCards
                    }
            </div>
        )
    }

}

export default EmployersContainer;