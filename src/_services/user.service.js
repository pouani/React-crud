import Axios from "./caller.service";

let getAllUsers = async () => {
    const {data} = await Axios.get('/users')
    return data
}

let getUser = (user_id) => {
    return Axios.get('/users/'+user_id)
}

export const userService = {
    getAllUsers,
    getUser
}