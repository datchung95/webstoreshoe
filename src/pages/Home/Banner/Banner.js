import React, { memo } from 'react'
import { CarOutlined, CreditCardOutlined, ToolOutlined, RedoOutlined } from '@ant-design/icons';
import './Banner.css'

function Banner() {
    return (
        <div className='banner d-flex justify-content-center' id='banner' style={{ backgroundImage: "url(./assets/bannershoe.webp)", height: "600px", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative", marginBottom: "150px" }}>
            <div className='container bg-light banner__detail' style={{ position: "absolute", top: "94%" }}>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='text-center'>
                            <div className='mb-2' style={{ fontSize: "45px" }}><CarOutlined /></div>
                            <p className='mb-2 font-weight-bold'>Giao hàng toàn quốc</p>
                            <p className='mb-2'>Vận chuyển khắp Việt Nam</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='text-center'>
                            <div className='mb-2' style={{ fontSize: "45px" }}><CreditCardOutlined /></div>
                            <p className='mb-2 font-weight-bold'>Thanh toán khi nhận hàng</p>
                            <p className='mb-2'>Nhận hàng tại nhà rồi thanh toán</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='text-center'>
                            <div className='mb-2' style={{ fontSize: "45px" }}><ToolOutlined /></div>
                            <p className='mb-2 font-weight-bold'>Bảo hành dài hạn</p>
                            <p className='mb-2'>Bảo hành lên đến 60 ngày</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='text-center'>
                            <div className='mb-2' style={{ fontSize: "45px" }}><RedoOutlined /></div>
                            <p className='mb-2 font-weight-bold'>Đổi hàng dễ dàng</p>
                            <p className='mb-2'>Đổi hàng thoải mái trong 30 ngày</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Banner)