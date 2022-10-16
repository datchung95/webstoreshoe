import React, { memo } from 'react'
import { MailOutlined, PhoneOutlined, UserAddOutlined, BarsOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { USER_LOGIN_LOCAL } from '../../../../utils/settings/config';
import Logout from '../../../../components/Logout/Logout';
import { useSelector } from 'react-redux';

function Header() {

    const { totalProduct } = useSelector(state => state.shopReducer)

    return (
        <div id='header'>
            <div className='container'>
                <div className='row my-2'>
                    <NavLink className='col-6 col-lg-3 col font-weight-bold text-dark' to="/trangchu" style={{ fontSize: "30px" }}>Shop shoes</NavLink>
                    <div className='col-6 header__column d-flex align-items-center justify-content-center'>
                        <div className='d-flex align-items-center justify-content-center header__contact'>
                            <p className='mr-3 mb-0 d-flex align-items-center'><MailOutlined className='mr-1' />Email: chungthanhdat95@gmail.com</p>
                            <p className='d-flex mb-0 align-items-center'><PhoneOutlined className='mr-1' />SĐT: 0382807864</p>
                        </div>
                    </div>
                    <div className='col-6 col-lg-3 d-flex align-items-center justify-content-end ml-auto'>
                        {localStorage.getItem(USER_LOGIN_LOCAL) ? <Logout classTextLogout={"text-dark"} /> : <NavLink className='d-flex align-items-center justify-content-end text-dark' to="/signin"><UserAddOutlined className='mr-1' />Đăng nhập</NavLink>}
                    </div>
                </div>
            </div>
            <div className='navbar-dark bg-dark header__bottom'>
                <div className='container'>
                    <nav className="navbar navbar-expand-md">
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"><BarsOutlined /></button>
                        <div className="collapse navbar-collapse header-nav justify-content-center" id="collapsibleNavId">
                            <ul className="navbar-nav mt-2 mt-lg-0">
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" style={({ isActive }) => isActive ? { borderBottom: "1px solid white" } : { color: "white" }} to='/trangchu'>TRANG CHỦ</NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" style={({ isActive }) => isActive ? { borderBottom: "1px solid white" } : { color: "white" }} to='/adidas'>ADIDAS</NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" style={({ isActive }) => isActive ? { borderBottom: "1px solid white" } : { color: "white" }} to='/nike'>NIKE</NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" style={({ isActive }) => isActive ? { borderBottom: "1px solid white" } : { color: "white" }} to='/vansconverse'>VANS CONVERSE</NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link position-relative" style={({ isActive }) => isActive ? { borderBottom: "1px solid white" } : { color: "white" }} to='/cart'>
                                        <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                                        <p className='text-danger px-2 header__cart' style={{ position: "absolute", top: "0", left: "80%", backgroundColor: "white", borderRadius: "50%" }}>{totalProduct}</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default memo(Header)