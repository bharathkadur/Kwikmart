// src/Components/product/productActions.js

import axios from "axios";
import { setProducts } from "../../Reducers/productSlice"; // Corrected import path

const API_URL = 'https://fakestoreapi.com/products/';

export const fetchProducts = async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch(setProducts(response.data));
    } catch (error) {
      // Handle error
      console.error('Error fetching products:', error);
    }
};
