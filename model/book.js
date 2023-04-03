const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  brand: {
    type: String
  }
}, {
  collection: 'products'
})
module.exports = mongoose.model('product', Book)