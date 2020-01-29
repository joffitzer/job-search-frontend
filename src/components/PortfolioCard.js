import React from 'react'

const PortfolioCard = (props) => {

    console.log('portfolio card props: ', props)

    return(
        <div>
            <h5>Portfolio Card</h5>
            <h5>Title: {props.item.attributes.title}</h5> 
            <h5>Blurb: {props.item.attributes.blurb}</h5>              
            <h5>GitHub Url: {props.item.attributes.git_url}</h5>                           
            <hr></hr>
        </div>
    )
}

export default PortfolioCard