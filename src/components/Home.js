import React from 'react'
import { connect as cnx } from 'react-redux';
import { setFilterValue } from '../actionCreators'
import { Link } from 'react-router-dom';

class Home extends React.Component {

    state = {
        jobType: "All"
        // location: "Any Location"
    }

    handleJobTypeChange = (e) => {
        this.setState({
            jobType: e.target.value
        })
    }

    // handleLocationChange = (e) => {
    //     this.setState({
    //         location: e.target.value
    //     })
    // }

    render(){

        return(
            <div>
                <h1>Home Page </h1>
                    <span> I'm looking for 
    
                                <select value={this.state.jobType} onChange={this.handleJobTypeChange}>
                                <option value="All">All</option>
                                <option value="Software Engineering">Software Engineering</option>
                                <option value="Data Science">Data Science</option>
                                <option value="UX/UI Design">UX/UI Design</option>
                                </select>
                         
                        {"  "}jobs 
                        {/* in{"  "} 
                        
                                <select value={this.state.location} onChange={this.handleLocationChange}>
                                <option value="Any Location">Any Location</option>
                                <option value="New York City">New York City</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Chicago">Chicago</option>
                                </select> */}

                            <Link to={`/jobs`}>
                                <button onClick={() => this.props.setFilterValue(this.state.jobType)}>Search Jobs</button>
                            </Link>
                    </span>
            </div>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      setFilterValue: (filterValue) => dispatch(setFilterValue(filterValue))
    }
}

export default cnx(null, mapDispatchToProps)(Home);