import React from 'react'
import { Input } from 'antd';
import history from '../../../utils/libs/history';

const { Search } = Input;

export default function SearchProduct() {
    const onSearch = (value) => {
        history.push(`/ketquatimkiem/${value}`)
    };

    return (
        <div className='container text-center'>
            <Search
                placeholder="Nhập tên sản phẩm cần tìm"
                allowClear
                enterButton="Search"
                size="large"
                className='w-50'
                style={{ paddingTop: "0" }}
                onSearch={onSearch}
            />
        </div>
    )
}
