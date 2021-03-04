import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
      setEditMode(false);
      props.updateUsersStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onClick={activateEditMode}>
            {status || 'no status'}
          </span>
        </div>
      }
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true}  onBlur={deactivateEditMode} value={status}/>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
