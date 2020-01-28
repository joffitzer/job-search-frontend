const GET_EMPLOYERS = "GET_EMPLOYERS"
const SHOW_EMPLOYER = "SHOW_EMPLOYER"

const getEmployers = (employers) =>({type: GET_EMPLOYERS, payload: { employers }})
const showEmployer = (employer) => ({type: SHOW_EMPLOYER, payload: { employer }})


export { getEmployers, showEmployer }