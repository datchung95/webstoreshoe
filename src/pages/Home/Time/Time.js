import React, { memo } from 'react'
import { ClockCircleOutlined } from '@ant-design/icons';

function Time() {
    return (
        <div className='mb-5 mt-2' style={{ backgroundImage: "url(./assets/time.jpg)", backgroundPosition: "center", height: "450px" }}>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "450px" }} className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className='text-white text-center'>Thời gian làm việc</h1>
                    <div className='text-center mb-3'><ClockCircleOutlined className='text-white' style={{ fontSize: "35px" }} /></div>
                    <p className='text-white text-center' style={{ fontSize: "16px" }}>9:00 AM - 22.00 PM</p>
                    <p className='text-white text-center' style={{ fontSize: "16px" }}>Thứ 2 - Chủ Nhật</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Time)