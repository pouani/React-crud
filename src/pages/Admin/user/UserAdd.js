import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '../../../_services'

const AddUser = () => {

  const [user, setUser] = useState([])
  const navigate = useNavigate()

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    userService.addUser(user)
            .then((res) => {
              console.log(res)
              navigate('../index')
            })
            .catch((err) => console.log(err))
  }

  return (
    <div className='user_add'>
      <form className='form-login' onSubmit={onSubmit}>
          <div className='group'>
              <label htmlFor='name'>Nom</label><br />
              <input type="text" name="name" value={user.name} onChange={onChange}/>
          </div><br />
          <div className='group'>
              <label htmlFor='telephone'>Telephone</label><br />
              <input type="text" name="telephone" value={user.telephone} onChange={onChange}/>
          </div><br />
          <div className='group'>
              <label htmlFor='email'>Email</label><br />
              <input type="email" name="email" value={user.email} onChange={onChange}/>
          </div>
          <div className='group'>
              <label htmlFor='password'>Mot de passe</label><br />
              <input type="password" name="password" value={user.password} onChange={onChange}/>
          </div>
          <div className='group'>
              <label htmlFor='c_password'>Mot de passe</label><br />
              <input type="password" name="c_password" value={user.c_password} onChange={onChange}/>
          </div>
          <div className='group'>
              <button>Ajouter</button>
          </div>
      </form>
    </div>
  )
}

export default AddUser