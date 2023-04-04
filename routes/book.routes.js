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
bookRoute.route('/read-book/:id').get(async(req,resp)=>{
  let result=await Book.findById({"_id":req.params.id});
  resp.send(result);
});

// Update Book
bookRoute.route('/update-book/:id').put(async(req,resp)=>{
  let result=await Book.findByIdAndUpdate({"_id":req.params.id},
{  $set: req.body}
  );
  resp.send(result);
});

// Delete Book
bookRoute.route('/delete-book/:id').delete(async(req,resp)=>{
  let result=await Book.deleteOne({ "_id" : (req.params.id) });
  console.log(result);
  resp.send(result);
    })
module.exports = bookRoute;