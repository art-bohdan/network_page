import * as axios from "axios";

// const instance = axios.create({
//   withCredentials:true,
//   baseURL:'https://social-network.samuraijs.com/api/1.0/',
//   headers: {
//     'API-KEY': '84804767-1d42-4b35-9245-ffcbfa8062c5'
//   },
// })

export const getUsers = (currentPage = 1,pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${currentPage}&count=${pageSize}`),
      {withCredentials: true}}

// export const usersAPI = {
//   getUsers : (currentPage = 1,pageSize = 10) => {
//     return instance.get(`users?page${currentPage}&count=${pageSize}`)
//       .then(response => response.data)},
//   getFollowers: (userId) => {
//     return instance.post(`follow/${userId}`,{})
//       .then(response => response.data)},
//   getUnFollows: (userId) => {
//     return instance.delete(`follow/${userId}`,{})
//       .then(response => response.data)},
// }

