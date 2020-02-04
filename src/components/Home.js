import React from 'react'

class Home extends React.Component {

    state = {
        jobType: "",
        location: ""
    }

    handleJobTypeChange = (e) => {
        this.setState({
            jobType: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    render(){

        console.log(this.state)

        return(
            <div>
                <h1>Home Page </h1>
                    <span> I'm looking for 
    
                                <select value={this.state.jobType} onChange={this.handleJobTypeChange}>
                                <option value="All Jobs">All Jobs</option>
                                <option value="Software Engineering">Software Engineering</option>
                                <option value="Data Science">Data Science</option>
                                <option value="UX/UI Design">UX/UI Design</option>
                                </select>
                         
                        {"  "}in{"  "} 
                        
                                <select value={this.state.location} onChange={this.handleLocationChange}>
                                <option value="Any Location">Any Location</option>
                                <option value="New York City">New York City</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Chicago">Chicago</option>
                                </select>
                       
                                <button>Search Jobs</button>
                    </span>
            </div>
        )
    }
}

export default Home;