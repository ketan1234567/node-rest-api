const express = require('express');
const app = express();
const bookRoute = express.Router();
let Book = require('../model/Book');
// Add Book
bookRoute.route('/add-book').post(async(req,resp)=>{
  let data=new Book(req.body);
  let result=await data.save();
  })
// Get all Book
bookRoute.route('/').get(async(req,resp)=>{
  let result=await Book.find({});
  resp.send(result);
})
// Get Book
bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Book
bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Book updated successfully!')
    }
  })
})
// Delete Book
bookRoute.route('/delete-book/:id').delete(async(req,resp)=>{
  let result=await Book.deleteOne({ "_id" : (req.params.id) });
  console.log(result);
  resp.send(result);
    })
module.exports = bookRoute;