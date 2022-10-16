import { baseServices } from "./baseServices";

class UserServices extends baseServices {
    constructor() {
        super()
    }
    signUpServices(user) {
        return this.post("api/Users/signup", user)
    }
    signInServices(user) {
        return this.post("api/Users/signin", user)
    }
    getProfileServices() {
        return this.post("api/Users/getProfile")
    }
    changeProfileServicse(profile) {
        return this.post("api/Users/updateProfile", profile)
    }
    changePasswordServices(newPassword) {
        return this.post('api/Users/changePassword', newPassword)
    }
    orderServices(order) {
        return this.post("api/Users/order", order)
    }
}

export const userServices = new UserServices()