import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { ALayout, Dashboard } from '@/pages/Admin'
import { User, UAdd, UEdit } from '@/pages/Admin/user'
import { Product, PEdit } from '@/pages/Admin/product'

import Error from '@/_utils/Error';

const AdminRouter = () => {
  return (
    <Routes>
        <Route element={<ALayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user">
                <Route path="index" element={<User />} />
                <Route path="add" element={<UAdd />} />
                <Route path="edit/:uid" element={<UEdit />} />
            </Route>
            <Route path="product">
                <Route path="index" element={<Product />} />
                <Route path="edit" element={<PEdit />} />
            </Route>

            <Route path="*" element={<Error/>} />
        </Route>
    </Routes>
  )
}

export default AdminRouter