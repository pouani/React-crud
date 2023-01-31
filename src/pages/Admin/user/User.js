import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {

  let navigate = useNavigate()
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