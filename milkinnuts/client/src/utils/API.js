import axios from "axios";

export default {
  // Gets books from the Google API
  getProducts: function(q) {
    return axios.get("/api/products")
  },
  // Saves an book to the database
  saveProducts: function(productData) {
    return axios.post("/api/products", productData);
  }
};
