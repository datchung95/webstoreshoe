import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import history from '../../utils/libs/history';
import { CART, TOTAL, USER_LOGIN_LOCAL } from '../../utils/settings/config';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteCartReducer, upDownCartReducer } from '../../redux/Reducers/shopReducer';
import openNotificationWithIcon from '../../notification/Notification';
import { orderAction } from '../../redux/Action/UsersAction';
import './Cart.css'

export default function Cart() {

    let { cart, totalProduct } = useSelector(state => state.shopReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem(CART)) {
            if (cart?.length === 0) {
                cart = JSON.parse(localStorage.getItem(CART));
            }
        }
    }, [cart])

    useEffect(() => {
        if (localStorage.getItem(TOTAL)) {
            if (totalProduct === 0) {
                totalProduct = JSON.parse(localStorage.getItem(TOTAL));
            }
        }
    }, [totalProduct])

    useEffect(() => {
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
        if (!localStorage.getItem(TOTAL)) {
            localStorage.setItem(TOTAL, 0);
        }
    }, [])

    const renderCart = () => {
        return cart.map((item, index) => {
            return <div className="card mb-3" key={index}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center cart__left">
                            <div className='mr-2'>
                                <img src={item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }} />
                            </div>
                            <div className="ms-3">
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center cart__right">
                            <div className='row'>
                                <div className='col-12 col-lg-4'>
                                    <div className='d-flex align-items-center cart__upDown'>
                                        <div className='d-flex align-items-center cart__upDown'>
                                            <div className='mr-1'>
                                                <button className='btn btn-outline-primary' onClick={() => {
                                                    dispatch(upDownCartReducer({ upDown: true, id: item.id }))
                                                }}>+</button>
                                            </div>
                                            <h5 className="fw-normal mb-0">{item.quantityShoe}</h5>
                                            <div className='ml-1'>
                                                <button className='btn btn-outline-primary' onClick={() => {
                                                    dispatch(upDownCartReducer({ upDown: false, id: item.id }))
                                                }}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 d-flex align-items-center cart__price'>
                                    <div className='ml-2'>
                                        <h5 className="mb-0">{item.price} $</h5>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 cart__delete'>
                                    <button className='btn btn-outline-danger' onClick={() => {
                                        dispatch(deleteCartReducer({ quantity: item.quantityShoe, id: item.id }))
                                    }}><DeleteOutlined style={{ fontSize: "16px" }} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    const renderTotalMoney = () => {
        return cart.reduce((tong, item) => {
            return tong += item.price * item.quantityShoe
        }, 0).toLocaleString()
    }

    return (
        <div style={{ minHeight: "100vh" }} id="cart">
            <div style={{ backgroundColor: "#f1f2f4" }}>
                <h1 className='text-center py-5'>SHOPPING CART</h1>
            </div>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-3" style={{ cursor: "pointer" }} onClick={() => {
                                                history.push("/trangchu")
                                            }}>Continue shopping</h5>
                                            <hr />
                                            {renderCart()}
                                        </div>
                                    </div>
                                    <div className='text-right mb-4'>
                                        <h4>Tổng tiền: <span className='text-danger'>{renderTotalMoney()} $</span></h4>
                                    </div>
                                    <div className='text-right'>
                                        <button className='btn btn-danger' onClick={() => {
                                            if (localStorage.getItem(USER_LOGIN_LOCAL)) {
                                                let orderDetail = []
                                                for (let i in cart) {
                                                    orderDetail.push({
                                                        productId: cart[i].id,
                                                        quantity: cart[i].quantityShoe
                                                    })
                                                }
                                                let localUser = JSON.parse(localStorage.getItem(USER_LOGIN_LOCAL))
                                                let order = {
                                                    orderDetail,
                                                    email: localUser.email
                                                }
                                                dispatch(orderAction(order))
                                            } else {
                                                openNotificationWithIcon("error", "Bạn vui lòng đăng nhập để thanh toán")
                                            }
                                        }}>Thanh Toán</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
