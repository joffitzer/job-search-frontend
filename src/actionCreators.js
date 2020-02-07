const GET_EMPLOYERS = "GET_EMPLOYERS"
const SHOW_EMPLOYER = "SHOW_EMPLOYER"

const getEmployers = (employers) =>({type: GET_EMPLOYERS, payload: { employers }})
const showEmployer = (employer) => ({type: SHOW_EMPLOYER, payload: { employer }})


const GET_JOBS = "GET_JOBS"
const SHOW_JOB = "SHOW_JOB"
const DELETE_JOB = "DELETE_JOB"

const getJobs = (jobs) =>({type: GET_JOBS, payload: { jobs }})
const showJob = (job) => ({type: SHOW_JOB, payload: { job }})
const deleteJob = (job) => ({type: DELETE_JOB, payload: { job }})


const GET_USER_APPS = "GET_USER_APPS"
const SHOW_USER_APP = "SHOW_USER_APP"

const getUserApps = (userApps) =>({type: GET_USER_APPS, payload: { userApps }})
const showUserApp = (userApp) => ({type: SHOW_USER_APP, payload: { userApp }})


const SET_FILTER_VALUE = "SET_FILTER_VALUE"

const setFilterValue = (filterValue) => ({type: SET_FILTER_VALUE, payload: { filterValue }})


const LOG_IN = "LOG_IN"

const logInUser = (user) => ({type: LOG_IN, payload: { user }})

const LOG_OUT = "LOG_OUT"

const logOutUser = () => ({type: LOG_OUT})


export { getEmployers, showEmployer, getJobs, showJob, getUserApps, showUserApp, setFilterValue, deleteJob, logInUser, logOutUser}