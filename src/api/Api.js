import * as axios from "axios";

const instance = axios.create({
  withCredentials:true,
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a272ea9e-e903-4cf9-ae5a-411f16b336ca'
  },
})

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`users?page=${currentPage}&count=${pageSize}`,
//     {withCredentials: true}).then(response => response.data)}

export const usersAPI = {
   getUsers (currentPage = 1, pageSize = 10)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
      {withCredentials: true}).then(response => response.data)},
  follow: (userId) => {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)},
  unFollow: (userId) => {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)},
}

