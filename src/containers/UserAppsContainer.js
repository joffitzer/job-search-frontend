import React from 'react'
import { connect as cnx } from 'react-redux';
import UserAppCard from '../components/UserAppCard'
import { getUserApps} from '../actionCreators';


class UserAppsContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/user_apps')
            .then(res => res.json())
            .then(userApps => {
                this.props.getUserApps(userApps)
            })
    }
   
    render() {

        let userAppCards

        if (this.props.allUserApps.data){
            userAppCards = this.props.allUserApps.data.map( userAppObj => {
            return <UserAppCard key={userAppObj.id} userApp={userAppObj}/>
        })} 

        return (
            <div>
                <h1>My applications:</h1>  
                    {userAppCards ? userAppCards : "No apps yet"}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allUserApps } = state;
    return {
      allUserApps
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getUserApps: (userApps) => dispatch(getUserApps(userApps)),
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(UserAppsContainer);
