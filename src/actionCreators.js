const GET_EMPLOYERS = "GET_EMPLOYERS"
const SHOW_EMPLOYER = "SHOW_EMPLOYER"

const getEmployers = (employers) =>({type: GET_EMPLOYERS, payload: { employers }})
const showEmployer = (employer) => ({type: SHOW_EMPLOYER, payload: { employer }})


const GET_JOBS = "GET_JOBS"
const SHOW_JOB = "SHOW_JOB"

const getJobs = (jobs) =>({type: GET_JOBS, payload: { jobs }})
const showJob = (job) => ({type: SHOW_JOB, payload: { job }})


const GET_USER_APPS = "GET_USER_APPS"
const SHOW_USER_APP = "SHOW_USER_APP"

const getUserApps = (userApps) =>({type: GET_USER_APPS, payload: { userApps }})
const showUserApp = (userApp) => ({type: SHOW_USER_APP, payload: { userApp }})


const LOG_IN = "LOG_IN"

const logInUser = (user) => ({type: LOG_IN, payload: { user }})


export { getEmployers, showEmployer, getJobs, showJob, getUserApps, showUserApp, logInUser }