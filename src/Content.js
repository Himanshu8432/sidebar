import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Forms from './Forms'
import "./form.css"



function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div className='link'><Forms /></div>}></Route>
                <Route path="/dashboard" element={<div><h1>portifolio design</h1>Dashboard</div>}></Route>
                <Route path="/ActiveUserList" element={<div className='mine'><Activ /></div>}></Route>
                <Route path="/DisableUserList" element={<div className='mine'><Dis /></div>}></Route>

                <Route path="/profile" element={<div>Profile</div>}></Route>
                <Route path="/Signout" element={<div>home</div>}></Route>

            </Routes>
        </div>
    )
}

export default Content