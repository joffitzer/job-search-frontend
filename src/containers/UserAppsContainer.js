import React from 'react'
import { connect as cnx } from 'react-redux';
import UserAppCard from '../components/UserAppCard'
import { getUserApps} from '../actionCreators';
import Container from 'react-bootstrap/Container'


class UserAppsContainer extends React.Component {

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/user_apps')
            .then(res => res.json())
            .then(userApps => {
                this.props.getUserApps(userApps)
            })
    }
   
    render() {

        let user
        if (this.props.loggedInUser.user) {
            user = this.props.loggedInUser.user
        } else {
            user = this.props.loggedInUser
        }

        let myApps
        let userAppCards
        if (this.props.isLoggedIn && this.props.allUserApps.data){
            myApps = this.props.allUserApps.data.filter(appObj => user.id === parseInt(appObj.attributes.user.id))
            userAppCards = myApps.map(userAppObj => {
              return <UserAppCard key={userAppObj.id} userApp={userAppObj}/>
            })
        }

        return (
            <div>
              <Container>

                <h2 className="form-padding">My applications</h2>  
                    {userAppCards ? userAppCards : "No apps yet"}

              </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allUserApps, isLoggedIn, loggedInUser } = state;
    return {
      allUserApps, isLoggedIn, loggedInUser
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      getUserApps: (userApps) => dispatch(getUserApps(userApps)),
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(UserAppsContainer);
