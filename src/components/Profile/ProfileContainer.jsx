import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
// classes Component makes a request to the server
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 0;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUsersProfile(response.data);
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

// WithRouter adds data from Url
let withUrlDataContainerComponent = withRouter(ProfileContainer);

// Connect do passes props to the component
export default connect (mapStateToProps,{setUsersProfile}) (withUrlDataContainerComponent);
