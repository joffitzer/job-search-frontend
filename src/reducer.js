let defaultState = {
    allEmployers: [],
    employerClicked: false,
    employerToShow: [],
    allJobs: [],
    jobClicked: false,
    jobToShow: []
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
        case 'GET_JOBS': 
          return {...prevState, 
            allJobs: action.payload.jobs,
            jobClicked: false
        }
        case 'SHOW_JOB': 
        return {...prevState, 
            jobClicked: !prevState.jobClicked,
            jobToShow: action.payload.job
      }
        default: 
          return {...prevState}
    }
}

export default reducer;