var express = require('express');
var router = express.Router();
var blog = require('../controllers/blogController');
var user = require('../controllers/userController');
var comment = require('../controllers/commentController');
var category= require("../controllers/categorycontroller")


const app = express();

// register
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/logout', user.logout);


// Comment
router.post('/add_comment', comment.addComment);
router.get('/view_comment/:id', comment.viewComment);
router.get('/delete_comment/:id', comment.deleteComment);
router.get('/update_comment/:id', comment.updateComment);

// category
router.post("/createCategory/",category.createCategory);
router.get("/getAllCategories/",category.getAllCategories);
router.post("/updatecategories/",category.updatecategories);
router.post("/deletecategories/",category.deletecategories);



// Blog
router.post('/addBlog', blog.addBlog);
router.get('/viewBlog', blog.viewBlog);
router.get('/like/:id', blog.likeBlog);
router.get('/viewBlogByUser/:id', blog.viewBlogByUser);
router.get('/delete_blog/:id', blog.deleteBlog);
router.get('/update_blog/:id', blog.updateBlog);




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
