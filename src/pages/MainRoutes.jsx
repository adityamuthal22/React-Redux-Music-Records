import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../Components/ReqAuth'
import EditMusicRecord from './EditMusicRecord'
import Homepage from './Homepage'
import Login from './Login'
import SingleMusicRecord from './SingleMusicRecord'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/music/:id" 
        element={
        <ReqAuth>
          <SingleMusicRecord />
          </ReqAuth>
        } />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    </div>
  )
}

export default MainRoutes