import React, { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { userService } from '@/_services/user.service'

const User = () => {
  // let navigate = useNavigate()
  const [users, setUsers] = useState([])
  //const flag = useRef(false)

  const {} = useQuery('users', userService.getAllUsers)

  // useEffect(() => {
  //   if(flag.current){
  //     userService.getAllUsers()
  //     .then((res) => {
  //       console.log(res.data.Users)
  //       setUsers(res.data.Users)
  //     })
  //     .catch((err) => console.log(err))

  //   }
  //   return () => flag.current = true
  // }, [])

  // const marcel = (user_id) => {
  //   console.log("marcel")
  //   navigate("../edit/"+user_id)
  // }
  return (
    <div className='user'>
        User Liste
        {/* <button onClick={() => marcel(4)}>Click!</button> */}

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>created at</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.created_at}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default User