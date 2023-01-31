import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <ul className='sidebar-item'>
        <li><Link to='/'>Accueil</Link></li>
        <li>&nbsp;</li>
        <li><Link to='dashboard'>Dashboard</Link></li>
        <li>
          User
          <ul className='item'>
            <li><Link to='user/index'>Liste</Link></li>
            <li><Link to='user/add'>Ajouter</Link></li>
          </ul>
        </li>
        <li>
          Produit
          <ul className='item'>
            <li><Link to='product/index'>Liste</Link></li>
            <li><Link to='product/add'>Ajouter</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar