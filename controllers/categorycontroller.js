const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// update category
 
exports.updatecategories = async(req,res) =>{
    var id = req.params.id;
    var data = await student.findByIdAndUpdate(id,req.body);   
    res.status(200).json({
        status:"categories Updated..!",
        data: data
    })
} 

// delete 

exports.deletecategories = async(req,res) =>{
    var id = req.params.id;
    var data = await student.findByIdAndDelete(id,req.body);   
    res.status(200).json({
        status:"categories delete..!",
        data: data
    })
} 