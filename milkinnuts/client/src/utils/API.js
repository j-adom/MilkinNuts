import axios from "axios";

export default {
  // Gets products from the products API
  getProducts: function(q) {
    return axios.get("/api/products")
  },
  // Saves a product to the database
  saveProducts: function(productData) {
    return axios.post("/api/products", productData);
  }
};
