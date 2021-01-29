import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/avatar.png'

class Users extends React.Component{
  componentDidMount() {
    //all side effect put here
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }

    return (
      <div>
        <div>{pages.map((page) => {
          return <span className={this.props.currentPage === page && styles.selectedPage}>{page}</span>
        })}
        </div>
        {this.props.users.map(user => <div key={user.id}>}
        <span>
          <div>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar'
                 className={styles.userPhoto}/>
          </div>
          <div>
            {user.followed
              ? <button onClick={() => {
                this.props.unfollow(user.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                this.props.follow(user.id)
              }}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
          </span>
        </span>

        </div>)}
      </div>
    )
  }
}

export default Users;