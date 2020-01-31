import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
    return(
        <div>
            <h1>Thanks for applying!</h1>
            <Link to={`/myapps`}>
                Click here to see all of your applications
            </Link>
        </div>
    )
}

export default Thanks;