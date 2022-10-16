import { productServices } from "../../services/ProductServices"
import { getAllProductReducer, getAllStoreReducer, getProductByCategoryReducer, getProductByIdReducer } from "../Reducers/shopReducer"

export const getAllStoreAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await productServices.getAllStoreServices()
            dispatch(getAllStoreReducer(data.content))
        } catch (err) {
        }
    }
}

export const getAllProductAction = (keyword) => {
    return async (dispatch) => {
        try {
            const { data } = await productServices.getAllProductServices(keyword)
            dispatch(getAllProductReducer(data.content))
        } catch (err) {
        }
    }
}

export const getProductByCategoryAction = (category) => {
    return  async (dispatch) => {
        try {
            const { data } = await productServices.getProductByCategoryServices(category)
            dispatch(getProductByCategoryReducer(data.content))
        } catch(err) {
        }
    }
}

export const getProductByIdAction = (id) => {
    return  async (dispatch) => {
        try {
            const { data } = await productServices.getProductByIdServices(id)
            dispatch(getProductByIdReducer(data.content))
        } catch(err) {
        }
    }
}