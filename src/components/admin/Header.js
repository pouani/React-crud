import React from 'react'
import { useNavigate } from 'react-router-dom'
import { accountService } from '../../_services/accountService'
const Header = () => {
  let navigate = useNavigate();
  const logout = () => {
    accountService.logout();
    navigate('/');
  }
  return (
    <div className='header-admin d-flex'>
        <h2>Header component</h2>
        <button onClick={logout} className='btn bg-red-200'>Logout</button>
    </div>
  )
}

export default Header