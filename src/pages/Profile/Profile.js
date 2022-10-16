import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../../redux/Action/UsersAction'
import { Tabs } from 'antd';
import OderHistory from './OderHistory/OderHistory';
import ChangeProfile from './ChangeProfile/ChangeProfile';
import { NavLink } from 'react-router-dom'
import ChangePassword from './ChangePassword/ChangePassword';
import history from '../../utils/libs/history';
import { TOKEN, USER_LOGIN_LOCAL } from '../../utils/settings/config';

export default function Profile() {

    const dispatch = useDispatch()

    const { profile } = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getProfileAction())
    }, [])

    return (
        <div style={{ minHeight: "100vh" }}>
            <div style={{ backgroundImage: `url(https://picsum.photos/${window.innerWidth}/500)`, backgroundPosition: "center", backgroundSize: "cover", height: "500px", position: "relative" }} className="d-flex justify-content-center">
                <div style={{ position: "absolute", top: "80%", left: "15%" }}>
                    <img src={profile.avatar} alt="avatar" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                    <h4 className='text-center mt-3'>{profile.name}</h4>
                    <p className='text-center'>{profile.email}</p>
                    <div className='text-center'>
                        <button className='btn btn-outline-danger' onClick={() => {
                            history.push("/trangchu")
                            localStorage.removeItem(USER_LOGIN_LOCAL)
                            localStorage.removeItem(TOKEN)
                        }}>Đăng xuất</button>
                    </div>
                </div>
            </div>
            <div className='container pb-5' style={{ marginTop: "250px" }}>
                <Tabs defaultActiveKey="1" tabPosition='top'>
                    <Tabs.TabPane tab="Lịch sử mua hàng" key="1">
                        <OderHistory itemOder={profile.ordersHistory} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Thay đổi thông tin cá nhân" key="2">
                        <ChangeProfile profile={profile} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Thay đổi mật khẩu" key="3">
                        <ChangePassword profile={profile} />
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <div className='container pb-5'>
                <NavLink to="/" className="text-dark">Quay về trang chủ</NavLink>
            </div>
        </div>
    )
}
