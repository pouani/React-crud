import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '@/_services/user.service'

const User = () => {
  let navigate = useNavigate()

  useEffect(() => {
    userService.getAllUsers()
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const marcel = (user_id) => {
    console.log("marcel")
    navigate("../edit/"+user_id)
  }
  return (
    <div className='user'>
        User Liste
        <button onClick={() => marcel(4)}>Click!</button>
    </div>
  )
}

export default User