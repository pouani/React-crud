import Axios from "./caller.service";

let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (user_id) => {
    return Axios.get('/users/'+user_id)
}

export const userService = {
    getAllUsers,
    getUser
}