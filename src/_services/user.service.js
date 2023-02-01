import Axios from "./caller.service";

let getAllUsers = () => {
    return Axios.get('/users')
}

// let getAllUsers = async () => {
//     const {data} = await Axios.get('/users')
//     return data
// }

let getUser = (user_id) => {
    return Axios.get('/users/'+user_id)
}

let updateUser = (user) => {
    return Axios.put('/users/'+user.id, user)
}

export const userService = {
    getAllUsers,
    getUser,
    updateUser
}