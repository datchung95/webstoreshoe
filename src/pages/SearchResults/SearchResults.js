import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardShoe from '../../components/CardShoe/CardShoe'
import { getAllProductAction } from '../../redux/Action/ProductActions'
import { CART, TOTAL } from '../../utils/settings/config'

export default function SearchResults() {

    const { allProduct } = useSelector(state => state.shopReducer)

    const dispatch = useDispatch()

    const keywordSearch = useParams()

    useEffect(() => {
        dispatch(getAllProductAction(keywordSearch.keyword))
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
        if (!localStorage.getItem(TOTAL)) {
            localStorage.setItem(TOTAL, 0);
        }
    }, [])

    const renderSearch = () => {
        return allProduct.map((item, index) => {
            return <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3' key={index}>
                <CardShoe item={item} />
            </div>
        })
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <div style={{ backgroundColor: "#f1f2f4" }}>
                <h1 className='text-center py-5'>Tìm kiếm</h1>
            </div>
            <div className='container'>
                <p style={{ fontSize: "16px" }}><span className='font-weight-bold'>Kết quả tìm kiếm cho</span>: {keywordSearch.keyword?.length > 0 ? <span>{keywordSearch.keyword}</span> : <span>Vui lòng nhập từ khóa để tìm kiếm</span>}</p>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    {renderSearch()}
                </div>
            </div>
        </div>
    )
}
