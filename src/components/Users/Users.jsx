import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({users, totalCount, pageSize, currentPage, onPageChanged,followingInProgress, follow, unfollow, ...props }) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalCount}
        pageSize={pageSize}
      />
      {users.map((user) => (
        <User key={user.id} user ={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>
      ))}
    </div>
  );
};

export default Users;