import React, { memo } from 'react'
import { FacebookOutlined, TwitterOutlined, AmazonOutlined, LinkedinOutlined, YahooOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className='py-5' style={{ backgroundColor: "black" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4 mb-3'>
                            <NavLink className='text-white' style={{ fontSize: "30px" }} to="/trangchu">Shop shoes</NavLink>
                            <p className='text-white mt-3'>Liên hệ</p>
                            <p className='text-white mt-3'>Email: chungthanhdat95@gmail.com</p>
                            <p className='text-white mt-3'>Số điện thoại: 0382807864</p>
                        </div>
                        <div className='col-6 col-md-4'>
                            <p className='font-weight-bold mb-4' style={{ fontSize: "16px", color: "white" }}>Chính sách mua hàng</p>
                            <p style={{ color: "white" }}>Chính sách đổi trả</p>
                            <p style={{ color: "white" }}>Bảo mật khách hàng</p>
                            <p style={{ color: "white" }}>Thẻ thành viên</p>
                        </div>
                        <div className='col-6 col-md-4'>
                            <p className='font-weight-bold mb-4' style={{ fontSize: "16px", color: "white" }}>Hỗ trợ khách hàng</p>
                            <p style={{ color: "white" }}>Cách bảo quản giày</p>
                            <p style={{ color: "white" }}>Hướng dẫn đặt hàng</p>
                            <p style={{ color: "white" }}>Hỗ trợ giao hàng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark py-4'>
                <div className='container'>
                    <div className='text-center' style={{ fontSize: "30px", color: "#898989" }}>
                        <FacebookOutlined className='mr-3' />
                        <TwitterOutlined className='mr-3' />
                        <AmazonOutlined className='mr-3' />
                        <LinkedinOutlined className='mr-3' />
                        <YahooOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)