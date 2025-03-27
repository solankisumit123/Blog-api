const Blog = require('../models/Blog');
const Category = require('../models/Category');
const User = require('../models/user');


exports.addBlog = async (req, res) => {
    var data = await Blog.create(req.body)
        res.status(200).json({ 
            status: "Blog add successfully../ " ,
            data: req.body
        });
}

exports.viewBlog = async (req, res) => {
    var data = await Blog.find();
    res.status(200).json({
        status: "Blog get successfully../ " ,
        data
      
    });
}


exports.likeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.likes += 1;
        await blog.save();
        res.status(200).json(blog);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// view blog user wise

exports.viewBlogByUser = async (req, res) => {
    var data = await Blog.find({ author: req.params.id });
    res.status(200).json({
        status: "viewBlogByUser get successfully../ " ,
        data

    });
}



// view status wise blog

exports.viewBlogByStatus = async (req, res) => {
    try {
        const blogs = await Blog.find({ status: req.params.status }).populate('category author');
        res.status(200).json(blogs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// manage blog 

    exports.updateBlog = async (req, res) => {
        try {
            const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(blog);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };

    exports.deleteBlog = async (req, res) => {
        try {
            const blog = await Blog.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Blog deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };