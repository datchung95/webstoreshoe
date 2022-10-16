import React from 'react'
import openNotificationWithIcon from '../../notification/Notification'
import { Navigate, Outlet } from 'react-router-dom'
import { USER_LOGIN_LOCAL } from '../../utils/settings/config'

export default function ProfileTemplate() {

    if (!localStorage.getItem(USER_LOGIN_LOCAL)) {
        openNotificationWithIcon("error", "Bạn chưa đăng nhập")
        return <Navigate to="/signin" replace={true} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
