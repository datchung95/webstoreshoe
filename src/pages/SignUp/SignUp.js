import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Radio } from 'antd'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { signUpAction } from '../../redux/Action/UsersAction'
import { CART, TOTAL } from '../../utils/settings/config'

export default function SignUp() {

    const [valueGender, setValueGender] = useState(0);

    const dispatch = useDispatch()

    useEffect(() => {
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
        if (!localStorage.getItem(TOTAL)) {
            localStorage.setItem(TOTAL, 0);
        }
    }, [])

    const onChangeGender = (e) => {
        setValueGender(e.target.value);
        formik.setFieldValue('gender', e.target.value)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            phone: "",
            gender: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().trim().required("Xin vui lòng nhập email").email("Email không đúng định dạng"),
            password: Yup.string().trim().required("Xin vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiểu 6 ký tự").max(12, "Mật khẩu tối đa 12 ký tự"),
            name: Yup.string().trim().required("Xin vui lòng nhập tên"),
            phone: Yup.string().trim().required("Xin vui lòng nhập số điện thoại").min(10, "Số điện thoại tối thiểu 10 số").max(11, "Số điện thoại tối đa 11 ký tự"),
            gender: Yup.string().trim().required("Xin vui lòng chọn giới tính")
        }),
        onSubmit: value => {
            dispatch(signUpAction(value))
        }
    })

    return (
        <form className="form-signin" onSubmit={formik.handleSubmit}>
            <input name="email" type="text" className="form-control mb-2" placeholder="Email" onChange={formik.handleChange} />
            {formik.touched.email && <p className='text-danger'>{formik.errors.email}</p>}
            <input name="password" type="password" className="form-control mb-2" placeholder="Mật khẩu" onChange={formik.handleChange} />
            {formik.touched.password && <p className='text-danger'>{formik.errors.password}</p>}
            <input name="name" type="text" className="form-control mb-2" placeholder="Name" onChange={formik.handleChange} />
            {formik.touched.name && <p className='text-danger'>{formik.errors.name}</p>}
            <input name="phone" type="number" className="form-control mb-2" placeholder="Số điện thoại" onChange={formik.handleChange} />
            {formik.touched.phone && <p className='text-danger'>{formik.errors.phone}</p>}
            <Radio.Group name='gender' onChange={onChangeGender} value={valueGender}>
                <Radio value={true}>Nam</Radio>
                <Radio value={false}>Nữ</Radio>
            </Radio.Group>
            {formik.touched.gender && <p className='text-danger'>{formik.errors.gender}</p>}
            <button className="btn btn-lg btn-primary btn-block my-3" type="submit">
                Đăng ký
            </button>
            <p className='text-center'>Bạn đã có tài khoản ? <NavLink className="text-primary" to="/signin">Quay về đăng nhập</NavLink></p>
            <div className="text-center">
                <NavLink to="/trangchu">Quay về trang chủ</NavLink>
            </div>
        </form>
    )
}
