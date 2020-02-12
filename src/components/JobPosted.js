import React from 'react'
import { Link } from 'react-router-dom'

const JobPosted = () => {
    return(
        <div>
            <h1>Thanks for posting a job!</h1>
            <Link to={`/myjobs`}>
                Click here to see all of your jobs
            </Link>
        </div>
    )
}

export default JobPosted;