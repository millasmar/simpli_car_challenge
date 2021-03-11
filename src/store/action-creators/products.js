import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT } from "../constants";

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});
const getProduct = (product) => ({
  type: GET_PRODUCT,
  product,
});

export const fetchProducts = () => (dispatch) =>
  axios
    .get("https://4my1q6hsyo.api.quickmocker.com/product/", {
      headers: {
        Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
      },
    })
    .then((res) => res.data)
    .then((products) => dispatch(getProducts(products)));

export const fetchProduct = (productID) => (dispatch) => {
  return axios
    .get(`https://4my1q6hsyo.api.quickmocker.com/product/${productID}`)
    .then((res) => res.data)
    .then((product) => dispatch(getProduct(product)));
};
