import React from 'react'
import { Outlet } from 'react-router-dom'
import './UserTemplate.css'

export default function UserTemplate() {
    return (
        <div style={{ minHeight: "100vh" }} className="py-5">
            <div className="container">
                <div className='d-flex justify-content-center'>
                    <div style={{ width: "300px" }}>
                        <div className="account-wall">
                            <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="profile" />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
