import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardShoe from '../../components/CardShoe/CardShoe'
import { getProductByCategoryAction } from '../../redux/Action/ProductActions'
import { ADIDAS } from '../../redux/Type/Type'
import { Select } from 'antd';
import { getProductByCategoryReducer } from '../../redux/Reducers/shopReducer'
import { CART, TOTAL } from '../../utils/settings/config'

const { Option } = Select;

export default function Adidas() {

    const { productByCategory } = useSelector(state => state.shopReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductByCategoryAction(ADIDAS))
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
        if (!localStorage.getItem(TOTAL)) {
            localStorage.setItem(TOTAL, 0);
        }
    }, [])

    const onChange = (value) => {
        let productSort = [...productByCategory]
        if (value === "1") {
            productSort.sort((a, b) => a.price - b.price)
            dispatch(getProductByCategoryReducer(productSort))
        } else {
            productSort.sort((a, b) => b.price - a.price)
            dispatch(getProductByCategoryReducer(productSort))
        }
    }

    const renderAdidasShoe = () => {
        return productByCategory.map((item, index) => {
            return <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3' key={index}>
                <CardShoe item={item} />
            </div>
        })
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <div style={{ backgroundColor: "#f1f2f4" }}>
                <h1 className='text-center py-5'>ADIDAS</h1>
            </div>
            <div className='container'>
                <Select
                    placeholder="Thứ tự theo giá"
                    onChange={onChange}
                >
                    <Option value="1">Thấp đến cao</Option>
                    <Option value="2">Cao đến thấp</Option>
                </Select>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    {renderAdidasShoe()}
                </div>
            </div>
        </div>
    )
}
