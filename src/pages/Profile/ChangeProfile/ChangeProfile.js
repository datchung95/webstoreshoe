import React, { useState } from 'react'
import { Radio } from 'antd'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { changeProfileAction } from '../../../redux/Action/UsersAction'

export default function ChangeProfile(props) {

    const { profile } = props
    
    const dispatch = useDispatch()

    const [valueGender, setValueGender] = useState(profile.gender);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: profile.email,
            name: profile.name,
            phone: profile.phone,
            password: "",
            gender: profile.gender
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().trim().required("Vui lòng nhập tên"),
            phone: Yup.string().trim().required("Xin vui lòng nhập số điện thoại").min(10, "Số điện thoại tối thiểu 10 số").max(11, "Số điện thoại tối đa 11 ký tự")
        }),
        onSubmit: (value) => {
            dispatch(changeProfileAction(value))
        }
    })

    const onChangeGender = (e) => {
        setValueGender(e.target.value);
        formik.setFieldValue('gender', e.target.value)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <p className='mt-2'>Email</p>
                    <input name="email" className='form-control' disabled={true} value={formik.values.email} />
                    <p className='mt-2'>Họ tên</p>
                    <input type="text" className='form-control' name="name" value={formik.values.name} onChange={formik.handleChange} />
                    {formik.touched.name && <p className='text-danger'>{formik.errors.name}</p>}
                </div>
                <div className='col-12 col-md-6'>
                    <p className='mt-2'>Số điện thoại</p>
                    <input type="number" name="phone" className='form-control' value={formik.values.phone} onChange={formik.handleChange} />
                    {formik.touched.name && <p className='text-danger'>{formik.errors.name}</p>}
                    <p className='mt-2'>Giới tính</p>
                    <Radio.Group name='gender' className='d-block mt-2' onChange={onChangeGender} value={valueGender}>
                        <Radio value={true}>Nam</Radio>
                        <Radio value={false}>Nữ</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div className='text-right mt-3'>
                <button type='submit' className='btn btn-outline-primary'>Cập nhật</button>
            </div>
        </form>
    )
}
