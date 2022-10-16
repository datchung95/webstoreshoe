import openNotificationWithIcon from "../../notification/Notification"
import { userServices } from "../../services/UsersServices"
import history from "../../utils/libs/history"
import { TOKEN, USER_LOGIN_LOCAL } from "../../utils/settings/config"
import { getProfileReducer, signInReducer } from "../Reducers/userReducer"

export const signUpAction = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.signUpServices(user)
            history.push('/signin')
            openNotificationWithIcon("success", "Đăng ký thành công")
        } catch (err) {
            openNotificationWithIcon("error", err.response.data.message)
        }
    }
}

export const signInAction = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.signInServices(user)
            history.push("/profile")
            openNotificationWithIcon("success", "Đăng nhập thành công")
            dispatch(signInReducer(data.content))
        } catch (err) {
            console.log(err)
            openNotificationWithIcon("error", err.response.data.message)
        }
    }
}

export const getProfileAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.getProfileServices()
            dispatch(getProfileReducer(data.content))
        } catch (err) {

        }
    }
}

export const changeProfileAction = (profile) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.changeProfileServicse(profile)
            dispatch(getProfileReducer(data.content))
            openNotificationWithIcon("success", "Cập nhật thành công")
            window.location.reload()
        } catch (err) {

        }
    }
}

export const changePasswordAction = (newPassword) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.changePasswordServices(newPassword)
            history.push('/signin')
            openNotificationWithIcon("success", "Thay đổi mật khẩu thành công")
            localStorage.removeItem(USER_LOGIN_LOCAL)
            localStorage.removeItem(TOKEN)
        } catch (err) {
            console.log(err)
        }
    }
}

export const orderAction = (order) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.orderServices(order)
            history.push("/profile")
            openNotificationWithIcon("success", "Thanh toán thành công")
        } catch (err) {
            console.log(err)
            openNotificationWithIcon("error", "Thanh toán thất bại")
        }
    }
}