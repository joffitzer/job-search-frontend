import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1>Nav Bar</h1>
            <Link to="/home"><div>Home</div></Link>
            <Link to="/employers"><div>All Employers</div></Link>
            <Link to="/jobs"><div>All Jobs</div></Link>
        </div>
    )
}

export default Nav;