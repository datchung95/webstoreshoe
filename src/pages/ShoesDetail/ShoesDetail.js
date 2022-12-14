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
                    <p className='text-center'>- Ch???t l?????ng chu???n 98% real v???i logo chu???n k??ch th?????c ch??? c?? ??? Shop shoes</p>
                    <p className='text-center'>- V???n chuy???n to??n qu???c [ Ki???m Tra H??ng Tr?????c Khi Thanh To??n ]</p>
                    <p className='text-center'>- 100% ???nh ch???p t???i c???a h??ng</p>
                    <p className='text-center'>- ??i ????ng size</p>
                    <p className='text-center'>- B???o h??nh ?????i tr??? trong v??ng 60 ng??y</p>
                    <p className='text-center font-weight-bold'>K??ch th?????c</p>
                    <p className='text-center'>{productById.size?.map((item, index) => {
                        return <span key={index} className='mr-2 btn mb-2'>{item}</span>
                    })}</p>
                    <div className='text-center'><button className='btn btn-success' onClick={() => {
                        const itemCart = {...productById, quantityShoe: 1}
                        dispatch(addToCartReducer(itemCart))
                    }}>Th??m v??o gi??? h??ng</button></div>
                </div>
            </div>
            <div className='py-5'>
                <h3 className='text-center mb-3'>S???n ph???m t????ng t???</h3>
                <Slider {...settings}>
                    {renderRelatedProduct()}
                </Slider>
            </div>
        </div>
    )
}
