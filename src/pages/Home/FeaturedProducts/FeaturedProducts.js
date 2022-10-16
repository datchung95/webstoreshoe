import React, { useEffect } from 'react'
import CardShoe from '../../../components/CardShoe/CardShoe'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductAction } from '../../../redux/Action/ProductActions'

export default function FeaturedProducts() {

    const { allProduct } = useSelector(state => state.shopReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductAction(""))
    }, [])

    const renderFeatureProduct = () => {
        return allProduct.filter(shoe => shoe.feature === true).map((item, index) => {
            return <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3' key={index}>
                <CardShoe item={item} />
            </div>
        })
    }

    return (
        <div className='container py-5'>
            <h1 className='text-center'>Top Sản Phẩm Bán Chạy</h1>
            <div className='row'>
                {renderFeatureProduct()}
            </div>
        </div>
    )
}
