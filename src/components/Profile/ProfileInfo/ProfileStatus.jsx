import React from 'react';


class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode = () => {
    debugger;
    this.setState({
      editMode:true
    })
}
  deactivateEditMode = () => {
    this.setState({
      editMode:false
    })
}
  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
          <span onClick={this.activateEditMode}>{this.props.status}</span>
        </div>}
        {this.state.editMode &&
          <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
        </div>}
      </div>);
  }
}

export default ProfileStatus;
