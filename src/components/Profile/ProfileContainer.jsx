import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect (mapStateToProps,{getUsersProfile}),
  withRouter,
  /*1*/ withAuthRedirect
)(ProfileContainer);

//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//

//
//
// // WithRouter adds data from Url
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// // Connect do passes props to the component
// export default connect (mapStateToProps,{getUsersProfile}) (withUrlDataContainerComponent);
