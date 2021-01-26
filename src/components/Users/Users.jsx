import React from 'react'
import styles from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        photoUrl: 'https://lh3.googleusercontent.com/proxy/WLgJs09Iv1AY7QOFSVftUbOg5k2b8XKMYfhCFbA7nbmQ6ryn7WXoxtX-xtPjnUcuDrbJF3sufHSsFdPWT8UPfm4tx-KSVVo',
        fullName: 'Bobby',
        status: 'I am a Boss',
        location: {city: 'Warsaw', country: 'Poland'}
      },
      {
        id: 2,
        followed: false,
        photoUrl: 'https://lh3.googleusercontent.com/proxy/WLgJs09Iv1AY7QOFSVftUbOg5k2b8XKMYfhCFbA7nbmQ6ryn7WXoxtX-xtPjnUcuDrbJF3sufHSsFdPWT8UPfm4tx-KSVVo',
        fullName: 'Jonny',
        status: 'I am a Boss',
        location: {city: 'New York', country: 'USA'}
      },
      {
        id: 3,
        followed: true,
        photoUrl: 'https://lh3.googleusercontent.com/proxy/WLgJs09Iv1AY7QOFSVftUbOg5k2b8XKMYfhCFbA7nbmQ6ryn7WXoxtX-xtPjnUcuDrbJF3sufHSsFdPWT8UPfm4tx-KSVVo',
        fullName: 'Nikola',
        status: 'I am a Boss',
        location: {city: 'Krakow', country: 'Poland'}
      },
      {
        id: 4,
        followed: false,
        photoUrl: 'https://lh3.googleusercontent.com/proxy/WLgJs09Iv1AY7QOFSVftUbOg5k2b8XKMYfhCFbA7nbmQ6ryn7WXoxtX-xtPjnUcuDrbJF3sufHSsFdPWT8UPfm4tx-KSVVo',
        fullName: 'Tom',
        status: 'I am a Boss',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
    ])
  }

  return (
    <div>
      {props.users.map(user => <div key={user.id}>
        <span>
          <div>
  <img src={user.photoUrl} alt='avatar' className={styles.userPhoto}/>
          </div>
          <div>
            {user.followed
              ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(user.id)
              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </span>

      </div>)}
    </div>
  )
}

export default Users;