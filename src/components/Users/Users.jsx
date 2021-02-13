import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
debugger;
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span className={props.currentPage === page && styles.selectedPage}
              onClick={() => {props.onPageChanged(page)}}>{page}</span>);
        })}
      </div>
      {props.users.map((user) => (
        <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" className={styles.userPhoto}/>
              </NavLink>
            </div>
            <div>
              {user.followed ?
                <button disabled={props.followingInProgress.some(id => id ===user.id)} onClick={() => {
                  debugger;
                  props.toggleFollowingProgress(true, user.id);
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials:true,
                    headers: {
                      'API-KEY': 'a272ea9e-e903-4cf9-ae5a-411f16b336ca'
                    },
                  }).then(response => {
                      if(response.data.resultCode == 0){
                      props.unfollow(user.id);
                      }
                    props.toggleFollowingProgress(false, user.id);
                    })}}>Unfollow</button>
                :<button disabled={props.followingInProgress.some(id => id ===user.id)} onClick={() => {
                  props.toggleFollowingProgress(true, user.id);
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                    withCredentials:true,
                    headers: {
                      'API-KEY': 'a272ea9e-e903-4cf9-ae5a-411f16b336ca'
                    },
                  }).then(response => {
                      if (response.data.resultCode == 0) {
                      props.follow(user.id);
                      }
                    props.toggleFollowingProgress(false,user.id);
                    })}}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;