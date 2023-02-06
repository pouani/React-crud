import React, { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useQuery } from 'react-query'
import { userService } from '@/_services'
import { Link } from 'react-router-dom'

const User = () => {
  // let navigate = useNavigate()
  const [users, setUsers] = useState([])
  const flag = useRef(false)

  // const {isLoading, data} = useQuery('users', userService.getAllUsers)
  // const users = data ? data.Users : []

  useEffect(() => {
    if(flag.current){
      userService.getAllUsers()
      .then((res) => {
        console.log(res.data.Users)
        setUsers(res.data.Users)
      })
      .catch((err) => console.log(err))

    }
    return () => flag.current = true
  }, [])

  const delUser = (user_id) => {
    console.log(user_id)
    userService.deleteUser(user_id)
    .then((res) => {
      console.log(res)
      setUsers(users.filter(user => user.id !== user_id))
    })
    .catch((err) => console.log(err))
  }

  // const marcel = (user_id) => {
  //   console.log("marcel")
  //   navigate("../edit/"+user_id)
  // }

  // if(isLoading) return <div>Loading...</div>
  return (
    <div className='user'>
        User Liste
        {/* <button onClick={() => marcel(4)}>Click!</button> */}

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>created at</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td><Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.telephone}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td><button onClick={() => delUser(user.id)} className='btn bg-red-300 px-4 py2'>supprimer</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default User