import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render() {

        return(
            <div>
                            <Link to="/employersignup"><div>Employer Sign Up</div></Link>
                            <Link to="/employerlogin"><div>Employer Log In</div></Link>
                            <Link to="/signup"><div>Job Seeker Sign Up</div></Link>
                            <Link to="/login"><div>Job Seeker Log In</div></Link>
            </div>
        )

    }

}

export default LandingPage;