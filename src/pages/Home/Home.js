import React, { useEffect } from 'react'
import { CART } from '../../utils/settings/config';
import Banner from './Banner/Banner'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import QuickView from './QuickView/QuickView';
import SearchProduct from './Search/SearchProduct';
import Shop from './Shop/Shop';
import Time from './Time/Time';

export default function Home() {

    useEffect(() => {
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
    }, [])

    return (
        <div style={{ minHeight: "100vh" }}>
            <Banner />
            <SearchProduct />
            <FeaturedProducts />
            <QuickView />
            <Time />
            <Shop />
        </div>
    )
}
