import React from 'react'
import { Outlet } from 'react-router-dom'

import './admin.css'

import Header from '@/components/admin/Header'
import Sidebar from '@/components/admin/Sidebar'

const ALayout = () => {
  return (
    <div className='layout admin'>
        <div className='admin_sidebar'>
          <Sidebar />
        </div>
        <div className='admin_content'>
          <Header />
          <div className='admin_body'>
            {/* le Outlet permet d'afficher les routes enfants */}
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default ALayout