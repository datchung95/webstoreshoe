import React, { useState } from 'react'
import { Pagination } from 'antd'
import moment from 'moment';

const pageSize = 3;

export default function OderHistory(props) {

    const { itemOder } = props

    const [pageState, setPageState] = useState({
        totalPage: itemOder?.length / pageSize,
        current: 1,
        minIndex: 0,
        maxIndex: pageSize
    })

    const handleChangePagination = (page) => {
        setPageState({
            ...pageState,
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize
        })
    }

    const renderOderHistory = () => {
        return itemOder?.map((item, index) => {
            return index >= pageState.minIndex && index < pageState.maxIndex && (
                <div key={index}>
                    <div className='border mb-4 p-2'>
                        {moment(item.date).format("DD/MM/YYYY - hh:mm")}
                        <div>
                            {item.orderDetail?.map((shoe, index) => {
                                return <div className="card mb-3" key={index}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className='mr-2'>
                                                    <img src={shoe.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }} />
                                                </div>
                                                <div className="ms-3">
                                                    <h5>{shoe.name}</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center">
                                                <div className='d-flex align-items-center'>
                                                    <div className='ml-2'>
                                                        <h5 className="mb-0">{shoe.price} $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>)
        })
    }

    return (
        <div>
            {itemOder?.length === 0 ? <p style={{ fontSize: "16px" }}>Bạn chưa mua hàng</p> : renderOderHistory()}
            <div className='mt-5'>
                <Pagination
                    pageSize={pageSize}
                    current={pageState.current}
                    total={itemOder?.length}
                    onChange={handleChangePagination}
                    style={{ bottom: "0px" }}
                />
            </div>
        </div>
    )
}
