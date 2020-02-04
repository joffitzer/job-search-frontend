let defaultState = {
    loggedInUser: {},
    isLoggedIn: false,
    allEmployers: [],
    employerClicked: false,
    employerToShow: [],
    allJobs: [],
    jobClicked: false,
    jobToShow: [],
    allUserApps: [],
    userAppClicked: false,
    userAppToShow: [],
    editClicked: false
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
        case 'GET_USER_APPS': 
          return {...prevState, 
            allUserApps: action.payload.userApps,
            userAppClicked: false
        }
        case 'SHOW_USER_APP': 
          return {...prevState, 
            userAppClicked: !prevState.userAppClicked,
            userAppToShow: action.payload.userApp
      }
        case 'EDIT_CLICKED': 
          return {...prevState, 
            editClicked: !prevState.editClicked
  }
        case 'LOG_IN': 
          return {...prevState,
            loggedInUser: action.payload.user,
            isLoggedIn: true
      }
        default: 
          return {...prevState}
    }
}

export default reducer;