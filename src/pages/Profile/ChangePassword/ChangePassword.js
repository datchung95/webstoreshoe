import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { changePasswordAction } from '../../../redux/Action/UsersAction'

export default function ChangePassword(props) {

    const { profile } = props

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: profile.email,
            newPassword: ""
        },
        validationSchema: Yup.object().shape({
            newPassword: Yup.string().trim().required("Xin vui lòng nhập mật khẩu").min(6, "Số điện thoại tối thiểu 6 số").max(12, "Số điện thoại tối đa 12 ký tự")
        }),
        onSubmit: (value) => {
            dispatch(changePasswordAction(value))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: "60%", margin: "0 auto" }}>
            <p className='mt-2'>Email</p>
            <input name="email" className='form-control' disabled={true} value={formik.values.email} />
            <p className='mt-2'>Mật khẩu mới</p>
            <input type="password" className='form-control' name="newPassword" onChange={formik.handleChange} />
            {formik.touched.newPassword && <p className='text-danger'>{formik.errors.newPassword}</p>}
            <div className='text-right mt-3 ml-auto' style={{ width: "60%" }}>
                <button type='submit' className='btn btn-outline-primary'>Cập nhật</button>
            </div>
        </form>
    )
}
