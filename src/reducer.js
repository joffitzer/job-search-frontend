let defaultState = {
    allEmployers: [],
    employerClicked: false,
    employerToShow: []
}

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        case 'GET_EMPLOYERS': 
          return {...prevState, 
            allEmployers: action.payload.employers,
            employerClicked: false
        }
        case 'SHOW_EMPLOYER': 
          return {...prevState, 
            employerClicked: !prevState.employerClicked,
            employerToShow: action.payload.employer
        }
        default: 
          return {...prevState}
    }
}

export default reducer;