import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByIdAction } from '../../redux/Action/ProductActions'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import CardShoe from '../../components/CardShoe/CardShoe';
import { addToCartReducer } from '../../redux/Reducers/shopReducer';
import { CART, TOTAL } from '../../utils/settings/config';

export default function ShoesDetail() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };

    const { productById } = useSelector(state => state.shopReducer)

    const dispatch = useDispatch()

    const idParam = useParams()

    useEffect(() => {
        dispatch(getProductByIdAction(idParam.id))
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
        if (!localStorage.getItem(TOTAL)) {
            localStorage.setItem(TOTAL, 0);
        }
    }, [])

    const renderRelatedProduct = () => {
        return productById.relatedProducts?.map((item, index) => {
            return <div key={index}>
                <CardShoe item={item} />
            </div>
        })
    }

    return (
        <div style={{ minHeight: "100vh" }} className="container py-5">
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <img className='img-fluid' src={productById.image} alt={productById.name} />
                </div>
                <div className='col-12 col-md-6'>
                    <h3 className='text-center'>{productById.name}</h3>
                    <p className='text-center' style={{ fontSize: "20px", color: "red" }}>{productById.price} $</p>
                    <hr />
                    <p className='text-center' style={{ fontSize: "20px" }}>{productById.description}</p>
                    <p className='text-center'>- Chất lượng chuẩn 98% real với logo chuẩn kích thước chỉ có ở Shop shoes</p>
                    <p className='text-center'>- Vận chuyển toàn quốc [ Kiểm Tra Hàng Trước Khi Thanh Toán ]</p>
                    <p className='text-center'>- 100% Ảnh chụp tại cửa hàng</p>
                    <p className='text-center'>- Đi đúng size</p>
                    <p className='text-center'>- Bảo hành đổi trả trong vòng 60 ngày</p>
                    <p className='text-center font-weight-bold'>Kích thước</p>
                    <p className='text-center'>{productById.size?.map((item, index) => {
                        return <span key={index} className='mr-2 btn mb-2'>{item}</span>
                    })}</p>
                    <div className='text-center'><button className='btn btn-success' onClick={() => {
                        const itemCart = {...productById, quantityShoe: 1}
                        dispatch(addToCartReducer(itemCart))
                    }}>Thêm vào giỏ hàng</button></div>
                </div>
            </div>
            <div className='py-5'>
                <h3 className='text-center mb-3'>Sản phẩm tương tự</h3>
                <Slider {...settings}>
                    {renderRelatedProduct()}
                </Slider>
            </div>
        </div>
    )
}
