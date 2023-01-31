import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './auth.css'

const Login = () => {
  let navigate = useNavigate();
  // const [login, setLogin] = useState("")
  // const [password, setPassword] = useState("")

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials)
    axios.post('http://127.0.0.1:8002/api/login', credentials)
        .then(res => {
          console.log(res)
          navigate('/admin')
        })
        .catch(err => console.log(err))
  }

  return (
    <form className='form-login' onSubmit={onSubmit}>
        <div className='group'>
            <label htmlFor='email'>Identifiant</label><br />
            <input type="text" name="email" value={credentials.email} onChange={onChange}/>
        </div>
        <div className='group'>
            <label htmlFor='password'>Mot de passe</label><br />
            <input type="password" name="password" value={credentials.password} onChange={onChange}/>
        </div><br />
        <div className='group'>
            <button>Connexion</button>
        </div>
    </form>
  )
}
export default Login;