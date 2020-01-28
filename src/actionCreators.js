const GET_EMPLOYERS = "GET_EMPLOYERS"
const SHOW_EMPLOYER = "SHOW_EMPLOYER"

const getEmployers = (employers) =>({type: GET_EMPLOYERS, payload: { employers }})
const showEmployer = (employer) => ({type: SHOW_EMPLOYER, payload: { employer }})

const GET_JOBS = "GET_JOBS"
const SHOW_JOB = "SHOW_JOB"

const getJobs = (jobs) =>({type: GET_JOBS, payload: { jobs }})
const showJob = (job) => ({type: SHOW_JOB, payload: { job }})


export { getEmployers, showEmployer, getJobs, showJob }