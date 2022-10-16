import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import { signInAction } from '../../redux/Action/UsersAction'
import { CART, TOTAL } from '../../utils/settings/config'

export default function SignIn() {

    const dispatch = useDispatch()

    useEffect(() => {
        if (!localStorage.getItem(CART)) {
            localStorage.setItem(CART, JSON.stringify([]));
        }
        if (!localStorage.getItem(TOTAL)) {
            localStorage.setItem(TOTAL, 0);
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().trim().required("Xin vui lòng nhập email").email("Email không đúng định dạng"),
            password: Yup.string().trim().required("Xin vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiểu 6 ký tự").max(12, "Mật khẩu tối đa 12 ký tự")
        }),
        onSubmit: value => {
            dispatch(signInAction(value))
        }
    })

    return (
        <form className="form-signin" onSubmit={formik.handleSubmit}>
            <input name="email" onChange={formik.handleChange} type="text" className="form-control mb-2" placeholder="Email" />
            {formik.touched.email && <p className='text-danger'>{formik.errors.email}</p>}
            <input name="password" onChange={formik.handleChange} type="password" className="form-control mb-2" placeholder="Mật khẩu" />
            {formik.touched.password && <p className='text-danger'>{formik.errors.password}</p>}
            <button className="btn btn-lg btn-primary btn-block mb-3" type="submit">
                Đăng nhập
            </button>
            <p className='text-center'>Bạn chưa có tài khoản ? <NavLink className="text-primary" to="/signup">Đăng ký</NavLink></p>
            <div className="text-center">
                <NavLink to="/trangchu">Quay về trang chủ</NavLink>
            </div>
        </form>
    )
}
