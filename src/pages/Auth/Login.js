import React, { useState } from 'react'
import './auth.css'

const Login = () => {

  // const [login, setLogin] = useState("")
  // const [password, setPassword] = useState("")

  const [credentials, setCredentials] = useState({
    login: '',
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
  }

  return (
    <form className='form-login' onSubmit={onSubmit}>
        <div className='group'>
            <label htmlFor='login'>Identifiant</label><br />
            <input type="text" name="login" value={credentials.login} onChange={onChange}/>
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