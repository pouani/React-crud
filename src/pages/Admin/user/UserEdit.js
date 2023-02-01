import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userService } from '../../../_services'

const UserEdit = () => {

  const [user, setUser] = useState([])
  const flag = useRef(false)

  const {uid} = useParams()
  console.log(uid)

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }

  useEffect(() => {
    if(flag.current === false){
      userService.getUser(uid)
      .then((res) => {
        console.log(res.data.User)
        setUser(res.data.User)
      })
      .catch((err) => console.log(err))
    }

    return () => flag.current = true
  }, [])


  return (
    <div>
      <form className='form-login' onSubmit={onSubmit}>
          <div className='group'>
              <label htmlFor='name'>Nom</label><br />
              <input type="text" name="name" value={user.name} onChange={onChange}/>
          </div><br />
          <div className='group'>
              <label htmlFor='phone'>Telephone</label><br />
              <input type="text" name="phone" value={user.phone} onChange={onChange}/>
          </div><br />
          <div className='group'>
              <label htmlFor='email'>Email</label><br />
              <input type="email" name="email" value={user.email} onChange={onChange}/>
          </div>
          <div className='group'>
              <button>Connexion</button>
          </div>
      </form>
    </div>
  )
}

export default UserEdit