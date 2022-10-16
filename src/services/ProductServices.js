import { baseServices } from "./baseServices";

class ProductServices extends baseServices {
    constructor() {
        super()
    }
    getAllStoreServices() {
        return this.get("api/Product/getAllStore");
    }
    getAllProductServices(keyword) {
        if (keyword === "") {
            return this.get("api/Product")
        } else {
            return this.get(`api/Product?keyword=${keyword}`)
        }
    }
    getProductByCategoryServices(category) {
        return this.get(`api/Product/getProductByCategory?categoryId=${category}`)
    }
    getProductByIdServices(id) {
        return this.get(`api/Product/getbyid?id=${id}`)
    }
}

export const productServices = new ProductServices();