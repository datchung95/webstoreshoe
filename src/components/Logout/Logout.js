import React, { useEffect } from 'react'
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import history from '../../utils/libs/history';
import openNotificationWithIcon from '../../notification/Notification';
import { getProfileAction } from '../../redux/Action/UsersAction';
import { TOKEN, USER_LOGIN_LOCAL } from '../../utils/settings/config';

export default function Logout(props) {

    const { profile } = useSelector(state => state.userReducer);

    const dispatch = useDispatch()

    const { classTextLogout } = props;

    useEffect(() => {
        dispatch(getProfileAction())
    }, [])

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <button className="btn btn-danger" onClick={() => {
                            localStorage.removeItem(USER_LOGIN_LOCAL);
                            localStorage.removeItem(TOKEN);
                            history.push("/trangchu");
                            window.location.reload();
                            openNotificationWithIcon("success", "Đăng xuất thành công");
                        }}>
                            Đăng xuất
                        </button>
                    ),
                }
            ]}
        />
    );

    return (
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => (history.push("/profile"))}>
                <img src={profile.avatar} alt="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                <span className={`ml-2 ${classTextLogout}`}>Chào</span>
                <span className={`ml-2 ${classTextLogout}`}>{profile.name}</span>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
                <NavLink onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className={`ml-2 ${classTextLogout}`}><DownOutlined /></div>
                    </Space>
                </NavLink>
            </Dropdown>
        </div>
    )
}

