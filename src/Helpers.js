// import React from 'react'
// import { connect as cnx } from 'react-redux';


// export function formatItem(newItem) {
    let formattedItem
    formattedItem = {
        id: `${newItem.id}`,
        type: "portfolio_item",
        attributes: {
            title: newItem.title,
            blurb: newItem.blurb,
            git_url: newItem.git_url,
        }
    }
    return formattedItem
    // formattedItem.id = newItem.id
    // formattedItem.type = "portfolio_item"
    // formattedItem.attributes.title = newItem.title
    // formattedItem.attributes.blurb = newItem.blurb 
    // formattedItem.attributes.git_url = newItem.git_url
    // formattedItem.user = props.loggedInUser
    // return formattedItem
// }

// const mapStateToProps = (state) => {
//     let { loggedInUser } = state;
//     return {
//         loggedInUser
//     }
// //   }

// export default cnx(mapStateToProps, null)(formatItem);