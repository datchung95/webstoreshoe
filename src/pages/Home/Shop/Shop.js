import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStoreAction } from '../../../redux/Action/ProductActions';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
};

export default function Shop() {

    const { allStore } = useSelector(state => state.shopReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStoreAction())
    }, [])

    const renderAllStore = () => {
        return allStore.map((item, index) => {
            return <div key={index}>
                <div className='d-flex justify-content-center'>
                    <img style={{ width: "450px", height: "300px" }} src={item.image} alt={item.name} />
                </div>
                <div className='text-center mt-3'>
                    <h4>Chi nhánh {index + 1}</h4>
                    <p className='font-weight-bold' style={{ fontSize: "16px" }}>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Gửi xe miễn phí, dễ dàng</p>
                    <p>Cửa hàng khang trang, rộng rãi, đa dạng mẫu mã</p>
                    <p>Thanh toán dễ dàng tiền mặt, quẹt thẻ và chuyển khoản</p>
                </div>
            </div>
        })
    }

    return (
        <div className='container pb-5'>
            <h1 className='text-center'>Hệ Thống Cửa Hàng</h1>
            <Slider {...settings}>
                {renderAllStore()}
            </Slider>
        </div>
    )
}
