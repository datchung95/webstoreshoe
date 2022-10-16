import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './HomeLayout/Footer/Footer'
import Header from './HomeLayout/Header/Header'

export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
