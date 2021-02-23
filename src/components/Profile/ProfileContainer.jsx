import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, updateUsersStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
// classes Component makes a request to the server
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14639;
    }
    this.props.getUsersProfile(userId);
    this.props.getUsersStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUsersStatus={this.props.updateUsersStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,

})

export default compose(
  connect (mapStateToProps,{getUsersProfile, getUsersStatus, updateUsersStatus}),
  withRouter,
  /*1*/withAuthRedirect
)(ProfileContainer);

//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// // WithRouter adds data from Url
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// // Connect do passes props to the component
// export default connect (mapStateToProps,{getUsersProfile}) (withUrlDataContainerComponent);
