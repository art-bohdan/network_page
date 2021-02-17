import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router";

class ProfileContainer extends React.Component {
// classes Component makes a request to the server
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 0;
    }
    this.props.getUsersProfile(userId);
  }

  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'}/>;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
})

// WithRouter adds data from Url
let withUrlDataContainerComponent = withRouter(ProfileContainer);

// Connect do passes props to the component
export default connect (mapStateToProps,{getUsersProfile}) (withUrlDataContainerComponent);
