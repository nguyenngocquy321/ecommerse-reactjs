import axiosClient from './axiosClient';
const addProductsToCart = async data => {
    return await axiosClient.post('/cart', data);
};
const getCart = async userId => {
    return await axiosClient.get(`/cart/${userId}`);
};
const deleteCart = async body => {
    return await axiosClient.delete(`/cart/deleteItem`, {
        data: body,
    });
};
export { addProductsToCart, getCart, deleteCart };
